"use server";

import { cookies } from 'next/headers';
import { z } from "zod";


const schemaRegister = z.object({
  first_name: z
    .string({
      required_error: "First name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, {
      message: "Name must be at least 2 characters",
    })
    .regex(/^[A-Za-z]+$/, {
      message: "First name must contain only letters",
    }),
  last_name: z
    .string({
      required_error: "Last name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, {
      message: "Name must be at least 2 characters",
    })
    .regex(/^[A-Za-z]+$/, {
      message: "First name must contain only letters",
    }),
  email: z.string().email({
    message: "Kindly input a valid email address",
  }),
  password: z.string().min(6).max(20, {
    message: "Password must be between 6 and 20 characters",
  }),
});

const schemaLogin = z.object({
  email: z.string().email({
    message: "Kindly input a valid email address",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be between 6 and 20 characters",
    })
    .max(20, {
      message: "Password must be between 6 and 20 characters",
    }),
});

export async function registerUserAction(prevState, formData) {
  console.log("Working");

  const validatedField = schemaRegister.safeParse({
    first_name: formData.get("firstname"),
    last_name: formData.get("lastname"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedField.success) {
    return {
      ...prevState,
      zodErrors: validatedField.error.flatten().fieldErrors,
      message: "Missing Fields failed to register",
      success: false,
    };
  }

  try {
    const signUp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/createAccount`,
      {
        body: JSON.stringify(validatedField.data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!signUp.ok) {
      const errorResponse = await signUp.json();

      return {
        ...prevState,
        zodErrors: null,
        message: errorResponse.msg || "Failed to sign up",
        success: false,
      };
    }

    if (signUp.status === 200) {
      const response = await signUp.json();
      console.log(response.msg);


      return {
        ...prevState,
        data: validatedField.data,
        zodErrors: null,
        message: response.msg || "Registration successful!",
        success: true,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      zodErrors: null,
      message: "An unexpected error occurred. Please try again.",
      success: false,
    };
  }

  // Fallback return (unlikely to be reached)
  return {
    ...prevState,
    zodErrors: null,
    message: "Unknown error",
    success: false,
  };
}

export async function loginUserAction(prevState, formData) {
  console.log("Working");

  const validatedLoginField = schemaLogin.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedLoginField.success) {
    return {
      ...prevState,
      zodErrors: validatedLoginField.error.flatten().fieldErrors,
      message: "Missing Fields failed to Login",
    };
  }

  try {
    const signIn = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`,
      {
        body: JSON.stringify(validatedLoginField.data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!signIn.ok) {
      const errorResponse = await signIn.json();
      return {
        ...prevState,
        zodErrors: null,
        message: errorResponse.msg || "Failed to sign in",
      };
    }

    if (signIn.status === 200) {
      const response = await signIn.json();
      console.log(JSON.stringify(response.d, null, 2), "login response");
      
      cookies().set({
        name: 'token',
        value: response?.d?.token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });




      return {
        ...prevState,
        data: validatedLoginField.data,
        token: response?.d?.token,
        zodErrors: null,
        message: response.msg || "Login successful!",
        response: response?.d
      };
    }
  } catch (error) {
    console.error(error);
    return {
      ...prevState,
      zodErrors: null,
      message: "An unexpected error occurred. Please try again.",
    };
  }

  return {
    ...prevState,
    data: validatedLoginField,
    zodErrors: null,
    message: "Correct inputs!",
  };
}

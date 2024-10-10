"use server";
import { z } from "zod";


const schemaRegister = z.object({
    first_name: z.string({
        required_error: "First name is required",
        invalid_type_error:"Name must be a string",
    }).min(2, {
        message: "First name must be at least 2 characters",
    }).regex(/^[A-Za-z]+$/, {
        message: "First name must contain only letters",
    }),
    last_name: z.string({
        required_error: "Last name is required",
        invalid_type_error:"Name must be a string",
    }).min(2, {
        message: "Last name must be at least 2 characters",
    }).regex(/^[A-Za-z]+$/, {
        message: "First name must contain only letters",
    }),
    email: z.string().email({
        message: "Kindly input a valid email address",
    }),
    password: z.string().min(6).max(20, {
        message: "Password must be between 6 and 20 characters",
    }),
})


const schemaLogin = z.object({
    email: z.string().email({
        message: "Kindly input a valid email address",
    }),
    password: z.string().min(6, {
        message: "Password must be between 6 and 20 characters",
    }).max(20, {
        message: "Password must be between 6 and 20 characters",
    }),
})


export async function registerUserAction(prevState, formData){
    console.log("Working");

    const validatedField = schemaRegister.safeParse({
        first_name: formData.get("firstname"),
        last_name: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password")
    });

    if (!validatedField.success) {
        return {
            ...prevState,
            zodErrors: validatedField.error.flatten().fieldErrors,
            message: "Missing Fields failed to register"
        }
    }

    return {
        ...prevState,
        data: validatedField,
        zodErrors: null,
        message: "Correct inputs!"
    }
}

export async function loginUserAction(prevState, formData){
    console.log("Working");

    const validatedLoginField = schemaLogin.safeParse({
        email: formData.get("email"),
        password: formData.get("password")
    });

    if (!validatedLoginField.success) {
        return {
            ...prevState,
            zodErrors: validatedLoginField.error.flatten().fieldErrors,
            message: "Missing Fields failed to Login"
        }
    }

    return {
        ...prevState,
        data: validatedLoginField,
        zodErrors: null,
        message: "Correct inputs!"
    }
}

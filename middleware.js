import { NextResponse } from 'next/server'

export function middleware(request) {
    // Get the token from cookies set in the login function
    const token = request.cookies.get('token')?.value;

    // If trying to access protected route without token
    if (!token) {
        return NextResponse.redirect(new URL('/signIn', request.url));
    }

    return NextResponse.next();
}

// Matching Paths
export const config = {
    matcher: ['/businessProfile', '/accountSettings', '/userProfile', '/editReview'],
}
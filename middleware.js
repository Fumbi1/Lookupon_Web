import { NextResponse } from 'next/server'

export function middleware(request) {
    // Get that same token from cookies
    const token = request.cookies.get('token')?.value;

    // If trying to access protected route without token
    if (!token) {
        return NextResponse.redirect(new URL('/signIn', request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/businessProfile', '/accountSettings', '/userProfile', '/editReview', '/businessDomain'],
}
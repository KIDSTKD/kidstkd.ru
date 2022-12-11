import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/pages/01') {
        return NextResponse.redirect('/hello-nextjs')
    }
    return NextResponse.next()
}
'use client'
import React from 'react'
import Link from 'next/link'
import { ImageComponent } from './images.component'

export const GoogleUtil = () => {
    return (
        <Link className='init-google' href="/api/sessions/auth/google"> 
            <ImageComponent image='LogoGoogle' desc="Image Logo Google" /> 
            <p>Continue with Google</p>
        </Link>
    )
}
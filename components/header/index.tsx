import Link from 'next/link';
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

function index() {
    return (
        <header>
            <div>
                <Link href='/'>
                    <FaPlayCircle /> MOVIES
                </Link>
                <nav>
                    <Link href='/'>Movies</Link>
                    <Link href='/'>Series</Link>
                    <Link href='/'>Kids</Link>
                </nav>
            </div>
        </header>
    )
}

export default index;
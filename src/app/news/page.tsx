import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='py-12'>
        <h1 className='text-2xl font-bold mb-8'>Latest News</h1>
        <nav className='space-x-4 mb-4'>
            <Link href='/news/sports'>Sports</Link>
            <Link href='/news/health'>Health</Link>
        </nav>
        <div className='flex justify-between'>
            <div className='md:w-4/5 h-96 bg-slate-200 flex items-center justify-center'>
                All News
            </div>
            <div className='bg-purple-300 h-96 md:w-1/5'>
                SideBar
            </div>
        </div>
    </div>
  )
}

export default page
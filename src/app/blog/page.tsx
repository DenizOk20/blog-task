import { Breadcrumbs } from '@/components'
import BlogList from '@/components/BlogList'
import React, { Suspense } from 'react'

export default function BlogListing() {
  return (
    <div className='w-full flex flex-col items-center gap-12'>
        <Suspense fallback={<div>loading...</div>}>
        <Breadcrumbs
            homeElement={'Home'}
            separator={<span className='text-[#E8E8EA]'> | </span>}
            activeClasses='text-text-secondary'
            containerClasses='flex py-5' 
            listClasses='mx-2 text-text-primary'
            capitalizeLinks
        />
        </Suspense>
        <div className='w-full max-w-[1218px]'>
            <BlogList/>
        </div>
    </div>
  )
}

import Link from 'next/link';
import React from 'react'

type LinkItem = {
    name:string;
    href: string;
}

export default function DocsLinks() {

    const legalDocs: LinkItem[] = [
        {name:"Terms of Use",href:"/"},
        {name:"Privacy Policy",href:"/"},
        {name: "Cookie Policy",href:"/"},
      ]

  return (
    <div className='flex flex-col md:flex-row gap-2'>
        {
            legalDocs.map((doc) => (
                <div key={doc.name} className='flex gap-4'>
                    <Link href={doc.href} className='text-text-primary dark:text-text-dark'>{doc.name}</Link>
                    {doc.name !== legalDocs[legalDocs.length -1].name && <span className='mr-4 text-[#E8E8EA]'>|</span>}
                </div>
            ))
        }
    </div>
  )
}

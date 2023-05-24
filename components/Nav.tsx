import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="py-5 flex justify-between item-baseline">
      <Link href="/">
        <Image src="/Colour.png" height={45} width={45} alt="Guitar Logo" />
      </Link>
      <button className=" rounded-xl bg-gray-300 border-4 px-4 text-lg ">Sign In</button>
    </div>
  )
}

export default Nav

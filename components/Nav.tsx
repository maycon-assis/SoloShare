'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Nav = () => {
  const isUser = true

  return (
    <div className="py-5 flex justify-between items-center">
      <Link href="/">
        <Image src="/Colour.png" height={45} width={45} alt="Guitar Logo" />
      </Link>
      {isUser ? (
        <div className="sm:flex hidden gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className=" rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-Inter flex items-center justify-center  "
          >
            Create Post
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className=" rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-Inter flex items-center justify-center "
          >
            Sign Out
          </motion.button>
          <Link href="/profile">
            <Image src="/BW.png" alt="User Image" height={45} width={45}></Image>
          </Link>
        </div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.02 }}
          className=" rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-Inter flex items-center justify-center"
        >
          Sign In
        </motion.button>
      )}
    </div>
  )
}

export default Nav

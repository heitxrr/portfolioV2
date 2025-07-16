"use client";

import React from 'react'
import Image from 'next/image'
import FotoP from '../../public/heitor1.png'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';


export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                    type: "tween",
                    duration: 0.2 }}
            >
                <Image src={FotoP} alt="Foto Principal"
                className="rounded-full h-24 w-24 object-cover border-[0.35rem] border-white shadow-x1" />
            </motion.div>
            <motion.span className="absolute text-4xl bottom-0 right-0"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ 
                    type: "spring",
                    stiffness: 125,
                    duration: 0.7,
                    delay: 0.1 }}
            >
                👨‍💻
            </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-24xl text-center font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Olá, eu sou o Heitor.</span> Eu sou um{" "}
        <span className="font-bold">Desenvolvedor</span> full-stack com{" "}
        <span className="font-bold">2 anos</span> de experiência{" "}
        <span className="italic">desenvolvendo sites e apps</span>. Meu foco é{" "}
        <span className="underline">front-end e banco de dados</span>.
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <Link href ="#contato" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Entre em contato<BsArrowRight /> </Link>
        <a className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer" href="/CV.pdf" download={true}>Download CV <HiDownload /></a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition"><BsLinkedin/></a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition"><BsGithub/></a>

      </motion.div>
    </section>
  )
}

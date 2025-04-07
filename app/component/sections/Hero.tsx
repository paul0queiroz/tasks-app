import React from 'react'
import "@/styles/global.css"

export default function Hero(){
    return(
        <div className='font-poppins flex items-center justify-center h-screen bg-gradient-to-r from-[#2900de] to-[#6e7e96]'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <h1 className='text-4xl font-bold text-white'>Taskx</h1>
                <p className='text-white'>Desenvolvido por TypingCode IT - Soluções</p>
            </div>
        </div>
    )
}
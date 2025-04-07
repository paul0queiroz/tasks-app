import React from 'react'

export default function Hero(){
    return(
        <div className='font-poppins flex items-center justify-center h-screen bg-gradient-to-r from-[#0f172a] to-[#1e293b]'>
            <h1 className="text-3xl">Tasks, seu gerenciador de tarefas.</h1>
            <p className="text-2xl">O gerenciador de tarefas moderno e simples.</p>
            <button className="rounded-full inline-flex border-2 px-2 py-4 bg-blue-700">Quero criar uma conta já!</button>
        </div>
    )
}
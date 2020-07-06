import React from 'react'
import PageTitle from '../components/PageTitle'

const Contato = () => {
    return (
        <div className='container mx-auto'>
            <PageTitle title='Contato' />


            {/* BLOCO COPIADO DE MERTJF */}
            <div className='text-gray-700 body-font relative'>
                <div className='container px-5 py-4 mx-auto'>
                    <div className='flex flex-col text-center w-full mb-12'>
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>Contate-Nos</font>
                            </font>
                        </h1>
                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>Seja qual for a sacola do cardigã, o tumblr hexagon brooklyn assimétrico gentrifica.</font>
                            </font>
                        </p>
                    </div>

                    <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                        <div className='flex flex-wrap -m-2'>
                            <div className='p-2 w-1/2'>
                                <input className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' placeholder='Nome' type='text' />
                            </div>
                            <div className='p-2 w-1/2'>
                                <input className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' placeholder='O email' type='email' />
                            </div>
                            <div className='p-2 w-full'>
                                <textarea className='w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-indigo-500 text-base px-4 py-2 resize-none block' placeholder='mensagem'></textarea>
                            </div>
                            <div className='p-2 w-full'>
                                <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                                    <font style={{  verticalAlign: 'inherit' }}>
                                        <font style={{  verticalAlign: 'inherit' }}>Botão</font>
                                    </font>
                                </button>
                            </div>
                            <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center'>
                                <p>
                                    <a className='text-indigo-500'>
                                        <font style={{  verticalAlign: 'inherit' }}>
                                            <font style={{  verticalAlign: 'inherit' }}>wagnerjps@gmail.com</font>
                                        </font>
                                    </a>
                                </p>
                                <span className='inline-flex'>
                                    <a className='text-gray-500' href='https://www.facebook.com/wagnerjps'>
                                        <svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                                            <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                                        </svg>
                                    </a>
                                    <a className='ml-4 text-gray-500' href='https://twitter.com/wagnerjps'>
                                        <svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                                            <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                                        </svg>
                                    </a>
                                    <a className='ml-4 text-gray-500' href='https://www.instagram.com/wagnerjps/?hl=pt-br'>
                                        <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                                            <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                                            <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                                        </svg>
                                    </a>
                                    <a className='ml-4 text-gray-500' href='11981603426'>
                                        <svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                                            <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BLOCO COPIADO DE MERTJF */}
        
        
        </div>
    )   
}

export default Contato
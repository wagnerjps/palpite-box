import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return(
        <div className='bg-gray-700 p-4 mt-10'>
            <div className='container mx-auto text-center'>
                <div className='font-bold text-white'>
                    Projeto desenvolvido por:{' '}
                        <a className='hover:underline' href='https://www.linkedin.com/in/wagnerjps/'>Wagner Silva</a>{' '}/{' '} 
                        <a className='hover:underline' href='https://www.linkedin.com/in/wagnerjps/'>LinkedIn</a>{' '}/{' '}
                        <a className='hover:underline' href='https://github.com/wagnerjps'>Github</a>
                </div>
                <div className='mt-4'>
                    <img className='mx-auto inline px-32' src='/logo_semana_fsm.png' alt='Semana Fullsctack Master' />
                    <img className='mx-auto inline px-32' src='/logo_devpleno.png' alt='DevPleno' />
                </div>
            </div>
        </div>
        )
    }

export default Footer
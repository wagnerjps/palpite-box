import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Header = () => {
    return(
        <React.Fragment>
            <div className='bg-gray-300 p-4 shadow-md z-50'>
                <div className='container mx-auto'>
                    <Link href='/'>
                        <img className='mx-auto cursor-pointer' src='/logo_palpitebox.png' alt='Palpitebox' />
                    </Link>
                </div>
            </div>
            <div className='bg-gray-100 h-8'>
                <div className='container mx-auto text-center'>
                    <Link href='/sobre'>
                        <a className='p-2 hover:underline font-bold'>Sobre</a>
                    </Link>
                
                    <Link href='/contato'>
                        <a className='p-2 hover:underline font-bold'>Contato</a>
                    </Link>
                
                    <Link href='/pesquisa'>
                        <a className='p-2 hover:underline font-bold'>Pesquisa</a>
                    </Link>
                </div> 
            </div>
        </React.Fragment>
    )
}

export default Header
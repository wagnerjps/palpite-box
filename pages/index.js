import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const { data, error } = useSWR('/api/get-promo', fetcher)

    return (
        <div className='container mx-auto'>
            <PageTitle title='Seja bem-vindo' />
            <div className='text-center font-bold mt-12'>
                <p>O restaurante X sempre busca atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
            </div>
            <div className='text-center my-12'>
                <Link href='/pesquisa'>
                    <a className='bg-blue-400 hover:shadow font-bold py-4 px-12 rounded-lg shadow-lg'>
                        Dar opinião ou sugestão
                    </a>
                </Link>
            </div>
            <div className='text-center font-bold mt-12'>
                { !data && <p>Carregando...</p> }
                { !error && data && data.showCoupon && 
                    <p> { data.message } </p> 
                }
            </div>
        </div>
    )
}

export default Index
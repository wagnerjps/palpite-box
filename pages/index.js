import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const { data, error } = useSWR('/api/get-promo', fetcher)

    return (

        <React.Fragment>
            {/* BLOCO INSPIRADO EM MERTJF */}
            <div className='text-gray-700 body-font relative'>
                <PageTitle title='Teste' />
                <div className='container px-5 py-4 mx-auto'>
                    {/** BLOCO DE SAUDAÇÃO */}
                    <div className='flex flex-col text-center w-full mb-12'>
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>PalpiteBox</font>
                            </font>
                        </h1>
                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>
                                    <p>O restaurante X sempre busca atender melhor seus clientes.</p>
                                    <p>Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
                                </font>
                            </font>
                        </p>
                    </div>
                    {/** BLOCO DE SAUDAÇÃO */}

                    {/** BLOCO DE FORMULÁRIO */}
         
                    <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                        <div className='flex -m-2'>
                            <div className='p-2 w-5/6 xl:w-3/4 lg:w-2/3 md:w-3/5 mx-auto'>
                                
                                
                                <div className='w-5/6 mx-auto text-center'>

                                    <Link href='/pesquisa'>
                                        <a className='w-full bg-blue-400 hover:shadow font-bold mb-4 py-3 px-6 rounded-lg shadow-lg'>
                                            Dar opinião ou sugestão
                                        </a>
                                    </Link>

                                </div>

                            </div>

                        </div>
                    </div>
                    
                    {/** BLOCO DE FORMULÁRIO */}

                    {/** BLOCO DE RETORNO */}
                    <div className='lg:w-1/2 md:w-2/3 mx-auto mt-12'>
                        <div className='flex -m-2'>
                            <div className='p-2 w-5/6 xl:w-3/4 lg:w-2/3 md:w-3/5 mx-auto'>
                                { !data && <p>
                                <div className='mx-auto mb-2 px-4 py-4 text-center text-blue-700 bg-blue-200 border-t border-b border-blue-500'>
                                    <p className='font-bold'>Carregando...</p>
                                </div>
                                </p> }
                                { !error && data && data.showCoupon && 
                                <div className='mx-auto mb-2 px-4 py-4 text-center text-blue-700 bg-blue-200 border-t border-b border-blue-500'>
                                    <p className='font-bold'>Promoção ativa</p>
                                    <p className='italic'>{ data.message }</p>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    {/** BLOCO DE RETORNO */}

                </div>
            </div>
            {/* BLOCO INSPIRADO EM MERTJF */}
        </React.Fragment>
    )
}

export default Index
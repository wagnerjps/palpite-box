import React from 'react'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <React.Fragment>
            {/* BLOCO INSPIRADO EM MERTJF */}
            <div className='text-gray-700 body-font relative'>
                <PageTitle title='Sobre' />
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
                                    <p className='text-left'>PalpiteBox é uma aplicação que tem comofinalidade a pesquisa de satisfação dos cliente.
                                    Nela o cliente deixa suas sugestões ou críticas afim de ajudar o estabelicimento a melhorar seus servições e/ou produtos.</p>
                                    <p className='text-left mt-2'>Esta aplicação foi desenvolvida durante a semana Fullstack Master oferecida pela DevPleno.</p>
                                </font>
                            </font>
                        </p>
                    </div>
                    {/** BLOCO DE SAUDAÇÃO */}

                </div>
            </div>
            {/* BLOCO INSPIRADO EM MERTJF */}
        </React.Fragment>
    )
}

export default Sobre
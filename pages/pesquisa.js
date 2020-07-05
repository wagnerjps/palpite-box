import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {

    const [ form, setForm ] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Sugestao: '',
        Nota: 5
    })

    const notas = [1, 2, 3, 4, 5]
    
    const onChange = event => {
        const value = event.target.value
        const key = event.target.name

        setForm(old => ({
            ...old,
            [key]: value
        }))
    }

    const [ sucess, setSucess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})

    const save = async() => {

        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })

            const data = await response.json()
            setSucess(true)
            setRetorno(data)
        }catch ( err ) {
            console.log( 'METHOD SAVE ERROR: ', err )
        }
    }
    
    return (
        <div className='container mx-auto mb-16'>
            <PageTitle title='Pesquisa' />
            <div className='text-center font-bold mt-12'>
                <h1 className='text-2xl'>Críticas e sugestões</h1>
                <p className='m-6'>O restaurante X sempre busca atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
            </div>

            { !sucess && <div>
                <div className='w-1/4 mx-auto'>
                    <label className='font-bold'>Seu nome:</label>
                    <input type='text' 
                        onChange={onChange}
                        name='Nome'
                        placeholder='Nome'
                        className='p-4 block shadow-lg bg-blue-100 my-2 w-full rounded' />

                    <label className='font-bold'>E-mail:</label>
                    <input type='text' 
                        onChange={onChange}
                        name='Email'
                        placeholder='E-mail'
                        className='p-4 block shadow-lg bg-blue-100 my-2 w-full rounded' />

                    <label className='font-bold'>Whatsapp:</label>
                    <input type='text' 
                        onChange={onChange}
                        name='Whatsapp'
                        placeholder='Whatsapp' 
                        className='p-4 block shadow-lg bg-blue-100 my-2 w-full rounded' />

                    <label className='font-bold'>Sua crítica ou sugestão:</label>
                    <input type='text' 
                        onChange={onChange}
                        name='Sugestao'                
                        placeholder='Sugestão'
                        className='p-4 block shadow-lg bg-blue-100 my-2 w-full rounded' />
                    
                    <div className='mt-4 mx-auto text-center'>
                        <p className='font-bold text-center'>Que nota você daria para o estabelecimento?</p>
                        
                        <div className='flex mx-auto py-6'>
                        {notas.map(nota => {
                            return(
                                <label className='block w-1/5 text-center font-bold'>
                                    {nota}<br />
                                    <input type='radio' name='Nota' value={nota} onChange={onChange} />
                                </label>
                            )    
                        })}
                        </div>
                    </div>

                    <div className='text-center my-12'>
                        <button onClick={ save } 
                            className='bg-blue-400 hover:shadow font-bold py-4 px-12 rounded-lg shadow-lg'> 
                            Enviar crítica ou sugestão 
                        </button>
                    </div>
                </div>
            
            </div>
            }
            { sucess && 
            <div className='text-center mt-6'>
                <div className='mx-auto w-2/5 px-4 py-3'>
                    
                    <p className='mb-2 px-4 py-4 mx-auto text-center font-bold text-blue-700 bg-blue-200 w-3/5 border-t border-b border-blue-500'>
                        <p className='font-bold'>Obrigado por sugestão ou crítica!</p>
                    </p>

                    <p className='mt-4 mb-2 p-2 mx-auto text-center font-bold text-gray-700 bg-gray-200 w-3/5 border-t border-b border-gray-500'>
                        <p>Cupom:</p> 
                        <p className='text-sm text-2xl'>{ retorno.Cupom }</p>
                    </p>

                    <p className='mt-4 mb-2 p-2 mx-auto text-center text-gray-700 bg-gray-200 w-3/5 border-t border-b border-gray-500'>
                        <p className='font-bold'>Promoção: </p>
                        <p className='text-sm'>{ retorno.Promo }</p>
                    </p>
                    
                    <p className='mt-4 mb-2 p-2 mx-auto text-center text-gray-700 bg-gray-200 w-3/5 border-t border-b border-gray-500'>
                        <p className='italic'>Tire um print ou foto desta tela e apresente ao garçom!</p>
                    </p>
                    
                </div>
            </div>
            }
        </div>
    )   
}

export default Pesquisa
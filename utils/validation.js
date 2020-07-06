import React from 'react'
import { isEmail } from './isEmail'

export const Validation = (data) => {
    
    const retorno = {
        status: true,
        menssage: []
    }

    /**
    data.Nome: '',
    data.Email: '',
    data.Whatsapp: '',
    data.Sugestao: '',
    data.Nota: 5
    */

    if(!data.Nome){ 
       retorno.status = false
       retorno.menssage[0] = 'Nome em branco' 
    }
    
    console.log()
    
    if(!data.Email){ 
        retorno.status = false
        retorno.menssage[1] = 'E-mail em branco' 
     }else if (!isEmail(data.Email)){
        retorno.status = false
        retorno.menssage[1] = 'E-mail inválido'
     }

     if(!data.Whatsapp){ 
        retorno.status = false
        retorno.menssage[2] = 'Whatsapp em branco'
        
     }else if(isNaN(`${data.Whatsapp}`)){
        retorno.status = false
        retorno.menssage[2] = 'Whatsapp não numérico'    
    }

     if(!data.Sugestao){ 
        retorno.status = false
        retorno.menssage[3] = 'Sugestão em branco' 
     }
     
     if(parseInt(data.Nota) <= 0){ 
        retorno.status = false
        retorno.menssage[4] = 'Nota em branco' 
     }

    return retorno
}
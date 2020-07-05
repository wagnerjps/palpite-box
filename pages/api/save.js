import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import fromBase64 from './utils'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async(req, res) => {
    console.log(fromBase64(process.env.SHEET_PRIVATE_KEY))
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        
        const sheetPesq = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)

        const sheetConf = doc.sheetsByIndex[2]
        await sheetConf.loadCells('A2:B2')

        const mostraPromocaoCell = sheetConf.getCell(1, 0)    
        const textoPromocaoCell = sheetConf.getCell(1, 1)

        let Cupom = ''
        let Promo = ''

        if(mostraPromocaoCell.value === 'VERDADEIRO'){
            // TODO: gerar um cupom
            Cupom = genCupom()
            Promo = textoPromocaoCell.value
        }

        await sheetPesq.addRow({
            Nome: data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Sugestao: data.Sugestao,
            Nota: parseInt(data.Nota),
            Cupom,
            Promo,
            'Data Preenchimento': new moment().format('DD/MM/YYYY HH:mm:ss')
        })

        res.end(JSON.stringify({
            showCupom: Cupom !== '',
            Cupom,
            Promo
        }))

    }catch (err) {
        console.log('ERRO SAVE PLAN: ', err)
        res.end('Error')
    }
}
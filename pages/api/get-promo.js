import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
    
        const sheetConf = doc.sheetsByIndex[2]
        await sheetConf.loadCells('A2:B2')
    
        const mostraPromocaoCell = sheetConf.getCell(1, 0)
    
        const textoPromocaoCell = sheetConf.getCell(1, 1)

        res.end(JSON.stringify({
            showCoupon: mostraPromocaoCell.value === 'VERDADEIRO',
            message: textoPromocaoCell.value
        }))

    }catch (err) {
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
}
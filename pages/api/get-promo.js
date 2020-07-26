import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/fromBase64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        
        // Aqui defini a segunda planilha como ativa
        const sheetConf = doc.sheetsByIndex[2]
        // Aqui o loadCells carrega o range de A0 até B3
        await sheetConf.loadCells('A3:B3')
        
        // Aqui getCell pega linha, coluna
        // Para célula Ativar Promoção use a linha 2 coluna 0 
        const mostraPromocaoCell = sheetConf.getCell(2, 0)
        // Para célula Mensagem da Promoção use a linha 2 coluna 1
        const textoPromocaoCell = sheetConf.getCell(2, 1)

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
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { fromBase64 } from '../../utils/base64'
import moment from 'moment-timezone';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDHHmmssSSS'))
    .toString(16)
    .toUpperCase()
    .replace(/(\w{4})(\w)/, '$1-$2')
    .replace(/(\w{4})(\w)/, '$1-$2');

  //code = code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4);
  return code;
}

export default async (req, res) => {

  try {

    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);

    const sheetConfig = doc.sheetsByIndex[2];
    await sheetConfig.loadCells('A2:B2');

    const showCellPromotion = sheetConfig.getCell(1, 0);
    const showTextPromotion = sheetConfig.getCell(1, 1);

    let Cupom = '';
    let Promo = '';

    if (showCellPromotion.value === 'VERDADEIRO') {
      Cupom = genCupom();
      Promo = showTextPromotion.value;
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Nota: parseInt(data.Nota),
      Cupom,
      Promo,
      Mensagem: data.Mensagem,
      Data: moment().tz('America/Bahia').format('DD/MM/YYYY HH:mm:ss')
    })

    res.end(JSON.stringify({
      showCoupom: Cupom !== '',
      Cupom,
      Promo
    }));

  } catch (err) {
    console.log(err);
    res.end('error');
  }

}
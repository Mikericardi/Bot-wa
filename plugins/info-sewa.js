import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let pay = 'https://telegra.ph/file/336fa2ab6cbddea256e0a.jpg'
let info = `
╭━━━━「 *SEWA* 」
┊• *1 Minggu:* 5k
┊• *1 Bulan:* 10k
┊• *Permanen:* 15k
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊• *1 Permanen:* 20k
╰═┅═━––––––๑

*PAYMENT:*

• *Ovo:* [${povo}]
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: pay }, m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main','info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler

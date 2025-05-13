const express = require('express')
const qrcode = require('qrcode-terminal')
const axios = require('axios')
const { LocalAuth, Client } = require('whatsapp-web.js')

const app = express()
const port = process.env.PORT || 3000

const client = new Client({
    authStrategy: new LocalAuth({ clientId: 'RukaChan'})
})

client.on('qr', qr => qrcode.generate(qr, { small: true }))
client.on('authenticated', () => console.log('di scan......'))
client,on('ready', () => console,log('service ready to go...'))

client.on('message', async message => {
    const messageBody = message.body.trim().toLocaleLowerCase()
     if (messageBody.startsWith("ai:")) {
        console.log('ai yang bales')
        console.log('pesan dari dia adalah: ' + messageBody)
        const userQuestion = message.body.substring(3)
        console.log({ userQuestion })
        message.reply(userQuestion)
     }
})


client.initialize()

app.listen(port, () => console.log('server bot running di port: ' + port))
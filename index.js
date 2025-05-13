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

client.initialize()

app.listen(port, () => console.log('server bot running di port: ' + port))
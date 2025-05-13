const express = require('express')
const qrcode = require('qrcode-terminal')
const axios = require('axios')
const { LocalAuth, Client } = require('whatsapp-web.js')
const { stream } = require('undici-types')

const app = express()
const port = process.env.PORT || 3000

const client = new Client({
    authStrategy: new LocalAuth({ clientId: 'RukaChan'})
})

const getOllamaChatCompletion = async messageFromUser => {
    try {
        const response = await axios.post('url_ip_public_server', {
            model: 'deepseek-r1:1.5b',
            messages: [
                {
                    role: "user",
                    content: messageFromUser
                },
            ],
            stream: false
        })
        const content = response.data.message.content;
        console.log(content)
        return content;
    } catch (error) {
        console.log('vps server api error...', error)
        return ('mohon maaf, server kami sedang sibuk, silahkan coba lagi nanti')
    }
}

client.on('qr', qr => qrcode.generate(qr, { small: true }))
client.on('authenticated', () => console.log('di scan......'))
client,on('ready', () => console,log('service ready to go...'))

client.on('message', async message => {
    const messageBody = message.body.trim().toLocaleLowerCase()
     if (messageBody.startsWith("ai:")) {
        const userQuestion = message.body.substring(3)
        const answer = await getOllamaChatCompletion(userQuestion)
        message.reply(answer)
     }
})


client.initialize()

app.listen(port, () => console.log('server bot running di port: ' + port))
const telegramBot = require ('node-telegram-bot-api')
const token = '1890648512:AAGH55t14aSYphi1chA8RtG9wWpnemwX2Fk'

const bot = new telegramBot(token, {polling:true})

bot.on('message', (msg)=>{
    const chatId = msg.chat.id
    if(msg.text == 'Hello' || 'hello'){
        bot.sendMessage(chatId, `Hello,   ${ msg.from.first_name} I wish you successful work in the future `)
    }
    else if (msg.text == ' Привет' || 'привет'){
        bot.sendMessage(chatId, `Привет, ${ msg.from.first_name} желаю вам в дальнейшен успешной работы)  `)
    } else{
        bot.sendMessage(chatId, `Я тебя не понял w${ msg.from.first_name}, пока-что я могу отвечать на приветсвие: "Hello" или "Привет"`)
    }
    
})
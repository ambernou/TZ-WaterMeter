import axios from 'axios';
import { config } from 'dotenv';
import express from 'express';

config();
const app = express();

const TG_API = `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

const userData = {
    id: 12345,
    coldWater: {
        number: 24680,
        value: 447
    },
    hotWater: {
        number: 35791,
        value: 382
    }
}

app.post('/new-message', async (req, res) => {
    const { message } = req.body;
    const messageText = message.text;
    const chatId = message.chat.id;
    if (!messageText || !chatId) {
        return res.sendStatus(400)
    }

    let responseText = '';
    if (/\w+|[а-яА_Я]+/.test(messageText)) {
        responseText = 'Ведите номер своего счета, состоящий из пяти цифр:';
    }

    if (Number(messageText) === userData.id) {
        responseText = `Номер вашего счета: ${userData.id},
        
        счетчик холодной воды №${userData.coldWater.number},
        предыдущие показания: ${userData.coldWater.value},
        
        счетчик горячей воды №${userData.hotWater.number},
        предыдущие показания: ${userData.hotWater.value}.
        
        Введите новые показания в таком же порядке через пробел, например "123 456"`;
    }

    if (/\d+\s\d+/.test(messageText)) {
        let values = messageText.match(/\d+\b/g);
        console.log('new data: ', values);
        responseText = 'Новые показания приняты, спасибо';
    }

    try {
        await axios.post(TG_API, {
            chat_id: chatId,
            text: responseText
        })
        res.send('Done');
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
})
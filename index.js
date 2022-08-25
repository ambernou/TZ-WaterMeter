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

// app.get('/test', async (req, res) => {
//     res.json('ok!')
// })

app.post('/new-message', async (req, res) => {
    const { message } = req.body;
    const messageText = message.text;
    const chatId = message.chat.id;
    if (!messageText || !chatId) {
        return res.sendStatus(400)
    }

    let responseText = 'ok';
    // if (/+\d/.test(messageText)) {
    //     responseText = 'ok';
    // }

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
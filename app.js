import express from 'express'

const servidor = express();

servidor.get('helloword', (req, resp) => {
    //codigo endpoint
    resp.send('hello word!!!')
})


servidor.listen(5001,
    () => console.log('API subiu com sucesso'))
import { inserirPet } from '../Repository/petRepository.js';

import { Router  } from 'express';

const server = Router();

server.post('/filme', async (req, resp) => {
    try {

        const animalzinho = req.body;

        if (!animalzinho.nome) throw new Error('O nome do Pet é obrigatório');

        const petInserido = await inserirPet (animalzinho);
        resp.send(petInserido);

    }catch (err) {
        resp.status(400).send({
            
        })

    }
})







export default server;
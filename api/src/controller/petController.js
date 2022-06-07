import { inserirPet, listarPets } from '../Repository/petRepository.js';

import { Router  } from 'express';

const server = Router();

server.post('/pet', async (req, resp) => {
    try {
        const animalzinho = req.body;
        
        if (!animalzinho.nome) throw new Error('Nome do pet é obrigatório');
       
      
        const petInserido = await inserirPet(animalzinho);
        resp.send(petInserido);
    } catch (err) {
        resp.status(400).send({
            Error: err.message
        });
    }
});

server.get('/pet', async (req, resp) => {
    try {
        const petzinho = await listarPets();
        resp.send(petzinho);
    } catch(err) {
        resp.status(404).send({
            Erro: err.message
        });
    }
});


export default server;
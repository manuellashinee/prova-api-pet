import { con } from './connection.js';


export async function inserirPet(pet) {
    const comando = 
    ` INSET INTO tb_pet(nm_pet)
        VALUES (?) `

    const [resposta] = await con.query (comando[pet.nome]);
    pet.id = resposta.insertId;

    return pet;
}
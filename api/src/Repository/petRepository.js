import { con } from './connection.js';


export async function inserirPet(pet) {
    const command = 

        ` INSERT INTO tb_pet (nm_pet)
                  values (?) `
    const [resposta] = await con.query(command, [ pet.nome]);

    pet.id = resposta.insertId;

    return pet;
}


export async function listarPets() {
    const comando = `
    SELECT  id_pet     id,
            nm_pet    nome
        FROM tb_pet`
    const [listinha] = await con.query(comando);
    return listinha;
}
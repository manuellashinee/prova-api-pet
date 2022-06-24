import axios from 'axios';

const api = axios.create({
    baseURL : `http://localhost:5000`
})

export async function inserirPet (nome) {
    const resposta = await api.post(`/pet`, {
        nome : nome })

        return resposta.data;
   
}

export async function listarPets (pet) {
    const r = await api.get(`/pet`);
   
    return r.data;

}
    




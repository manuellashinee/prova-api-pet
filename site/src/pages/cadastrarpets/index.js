import { Link } from 'react-router-dom'
import { inserirPet } from '../../api/petApi'
import { useState } from 'react';

export default function Index() {
    const [nome, setNome] = useState('');

    async function salvarClick() {
        
        try {
            const novoPet = await inserirPet(nome);
            alert('Pet Cadastrado com sucesso.');



    } catch(err) {
            alert.error(err.message);
    }
    }
    return (
        <div>
            <h1>Cadastrar Petzz</h1>
            <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
            
            <button onClick={salvarClick}>Cadastrar</button>
            <Link to ='/'> Voltar </Link>
        </div>
    )


}
import { Link } from 'react-router-dom'
import { listarPets } from '../../api/petApi'
import { useState, useEffect } from 'react';


export default function Index() {
    const [pet, setPet] = useState('');

    async function verPets() {
        
        try {
            const r  = await listarPets(pet);
            setPet (r);
}catch(err) {
    alert.error(err.message);
}
    }
 useEffect(() =>
{
    listarPets();
},[] )
    
    return (
        <div>
            <h1>Petzz Cadastardos</h1>
            <table>
            <thead>
                    <tr>
                    <th>ID</th>
                    <th>nome</th>
                    </tr>
                </thead>
        
            <tbody>
            {pet.map(item =>
                 <tr>
                 <td>{item.id}</td>
                 <td>{item.nome}</td>
             </tr>
            )}
    </tbody>
           
           
    </table>
    
    <Link to ='/'> Voltar </Link>
        </div>
    )


}
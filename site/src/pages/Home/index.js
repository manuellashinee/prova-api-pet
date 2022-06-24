import { Link } from 'react-router-dom'

export default function Index() {

    return(
        <div>
            <h1>Home</h1>

            <Link to='/cadastrarpets'>Cadastrar Pets</Link>
            <Link to='/consultarpets'>Consultar Pets</Link>

        </div>
    )
}
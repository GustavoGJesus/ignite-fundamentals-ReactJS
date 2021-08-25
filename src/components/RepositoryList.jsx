import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
//import { response } from 'express';


const repository = {
    name: 'unform', 
    description: 'Forms in React',
    link: '"https://github.com/GustavoGJesus"'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]); //Estado que vai armazenar a lista de repositorios, setRepositories altera o valor de repositories 
    
    useEffect(() => {
        fetch('https://api.github.com/users/GustavoGJesus/repos').then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                
            </ul>
        </section>
    )
}
import { useState, useEffect } from 'react';

import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository{
    name: string; 
    description: string;
    html_url: string;
};

export function RepositoryList() {                                              
    const [repositories, setRepositories] = useState<Repository[]>([]); //Estado que vai armazenar a lista de repositorios, setRepositories altera o valor de repositories, <Repository[]>(Generic)
    
    useEffect(() => {
        fetch('https://api.github.com/users/GustavoGJesus/repos').then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name}repository={repository}/>
                })}
            </ul>
        </section>
    );
}
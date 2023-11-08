import React, { useEffect } from "react";
import {Title, Container, Form, Repositories,Error} from './style';
import {FiChevronRight} from 'react-icons/fi'

import api from "./../../services/api"
import logo from './../../assets/Logo.svg'

import { AxiosResponse } from "axios";


interface Repository{
    full_name:string;
    description:string;
    owner:{
        login:string;
        avatar_url:string
    }
}

const Dashborad : React.FC = function DashboardComponent(){

    const [searched,setSearched] = React.useState('');

    const [errorInput,setErrorInput] = React.useState('');

    const [repositories,setRepositories] = React.useState<Repository[]> (initializingRepositories);

    function initializingRepositories (): Repository[]{
        const storage = localStorage.getItem('@GithubExplore:repositories');
        if(storage) return JSON.parse(storage);
        return [];
    }

    function effectRepositories (){
        localStorage.setItem('@GithubExplore:repositories',JSON.stringify(repositories));
    }

    useEffect(effectRepositories,[repositories])

    
    function handleInput(event:React.ChangeEvent<HTMLInputElement>):void{
        setSearched(event.target.value)
    }

    function handleErrorInput(error:Error):void{
        console.error(error);
        setErrorInput("Erro busca pelo repositório");
    }

    function handleResponse(response:AxiosResponse<Repository>):void {
        const {data} = response;
        const resp = Array.from(repositories).concat(data);
        setErrorInput("");
        setRepositories(resp);
    }
    
    function handleAddRepositories(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        if(!searched){
            setErrorInput("Digite o autor/nome do repositorio");
            return;
        } 

        api.get<Repository>(`repos/${searched}`)
        .then(handleResponse)
        .catch(handleErrorInput)
    }

    function mapRepositories(repository:Repository,index:number): React.ReactElement<HTMLAnchorElement> {
            return (
            <a href="test" key={index} >
                <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
                <section className="text">
                    <p className="name">
                        {repository.full_name}
                    </p>
                    <p className="repository">
                        {repository.description}
                    </p>
                </section>
                <FiChevronRight className="arrow"/>
            </a>
        )
    }

    return ( 
    <Container>
        <img className="logo" src={logo} alt="GitHub logo"/>
         <Title>
            Explore repositórios no Github.
        </Title>
        <Form hasError={Boolean(errorInput)} onSubmit={handleAddRepositories}>
            <input value={searched} type="text" placeholder="Digite aqui" onChange={handleInput} />
            <button type="submit"> Pesquisar </button>
        </Form>
        { errorInput && <Error>{errorInput}</Error>}
        <Repositories>{repositories.map(mapRepositories)}</Repositories>
    </Container>);
}

export default Dashborad;
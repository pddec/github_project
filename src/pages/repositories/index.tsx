import React, { useEffect,useState } from "react";
import {Container,RepositoryContainer,Cards} from './style';

import api from "./../../services/api"
import logo from './../../assets/Logo.svg'

import { useParams } from "react-router-dom";

import { AxiosResponse } from "axios";

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
    login: string;
    avatar_url: string;
    }
}

interface Issue {
    id: number;
    title: string;
    user: {
        login: string;
    }
}

const Repositories : React.FC = function RepositoriesComponent(){
    
    const repo = useParams();

    useEffect(fetchRepository,[repo])

    const [repositories,setRepositories] = useState<Repository | null>(null);

    const [issues,setIssues] = useState<Issue[]>([]);

    function fetchRepository (){
       Promise.all([api.get<Repository>(`repos/${repo['*']}`),
            api.get<Issue[]>(`repos/${repo['*']}/issues`)])
            .then(handleRepositoryIssues)
            .catch(console.error);
    }

    function handleRepositoryIssues([repository,reqIssues]:AxiosResponse[]):void{
        setIssues(Array.from(issues).concat(reqIssues.data));
        setRepositories(repository.data);
    }

    function mapIssues(issue:Issue,index:number): React.ReactElement<HTMLAnchorElement> {
        return (
            <section key={index} className="cards_container">
                <strong className="card_issue">{issue.user.login}</strong>
                <p className="card_desc">{issue.title}</p>
            </section>
    )
}
    
    return ( <Container>
        <img className="logo" src={logo} alt="GitHub logo"/>
        <RepositoryContainer>
            <div className="user_repository">
                <img alt="avatar" src={repositories?.owner.avatar_url}/>
                <section className="repo_desc_user">
                    <strong className="repo_user">{repositories?.owner.login}</strong>
                    <p className="repo_desc">Issues abertas</p>
                </section>
            </div>
            <div className="data_repository">
                <section className="repo_infos">
                    <strong className="repo_numbers" >{repositories?.stargazers_count}</strong>
                    <p className="repo_indicators">Stars</p>
                </section>
                <section className="repo_infos">
                    <strong className="repo_numbers" >{repositories?.forks_count}</strong>
                    <p className="repo_indicators">Forks</p>
                </section>
                <section className="repo_infos">
                    <strong className="repo_numbers">{repositories?.open_issues_count}</strong>
                    <p className="repo_indicators">Issues abertas</p>
                </section>
            </div>
        </RepositoryContainer>
        <Cards>
            {issues.map(mapIssues)}
        </Cards>
    </Container>
        
    );
}

export default Repositories;
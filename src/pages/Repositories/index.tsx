/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiArrowLeft, FiChevronRight, FiSearch } from 'react-icons/fi';
import { GoMarkGithub } from 'react-icons/go'
import api from '../../services/api';

import { Header, Repositories, UserInfo, Title, Input, Error } from './styles';
import LogoImage from '../../assets/logo.svg';

interface RepositoryParams {
  user: string;
}

interface User {
  avatar_url: string;
  name: string;
  public_repos: number;
  html_url: string;
}

interface Repository {
  full_name: string;
  id: number;
  name: string;
  description: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoriesSearch, setRepositoriesSearch] = useState<Repository[]>([]);
  const [user, setUser] = useState<User>({} as User);
  const [inputError, setInputError] = useState('');
  const [searchRepository, setSearchRepository] = useState('');

  useEffect(() => {
    api.get(`/users/${params.user}/repos`).then((response) => {
      setRepositories(response.data);
      setRepositoriesSearch(response.data);
    });
    api.get(`/users/${params.user}`).then((response) => {
      setUser(response.data);
    });
  }, [params.user]);

  useEffect(() => {
    if(!searchRepository){
      setRepositoriesSearch(repositories);
    } else {
      const repositoriesFounded = repositories.filter(item => item.name.toLowerCase().includes(searchRepository));
      console.log(repositoriesFounded);
      if(repositoriesFounded.length){
        setRepositoriesSearch(repositoriesFounded);
        setInputError('');
      } else {
        setRepositoriesSearch([]);
        setInputError('Esse repositório não foi encontrado!');
      }
    }
  }, [searchRepository, repositories])

  return (
    <>
      <Header>
        <img src={LogoImage} alt="GithubFinder" />
        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar
        </Link>
      </Header>
      <Title>GitFinder</Title>
      <UserInfo>
        <img src={user.avatar_url} alt={user.name}/>
        <div>
          <strong>{user.name}</strong>
          <p>{user.public_repos} Repositórios públicos</p>
          <a target="_blank" rel="noopener noreferrer" href={user.html_url}>
            <GoMarkGithub size={20} />
            Visitar no Github
          </a>
        </div>
      </UserInfo>
      <Repositories>
        <strong>Repositórios</strong>
        <Input hasError={!!inputError}>
          <FiSearch size={20} />
          <input
            value={searchRepository}
            onChange={(e) => setSearchRepository(e.target.value)}
            placeholder="Busque por um repositório"
            type="text"
          />
        </Input>
        {inputError && <Error>{inputError}</Error>}
        {repositoriesSearch.map(repository => (
          <Link key={repository.id} to={`/repository/${repository.full_name}`}>
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Repository;

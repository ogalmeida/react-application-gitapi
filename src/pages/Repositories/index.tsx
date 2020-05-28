/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';
import { GoMarkGithub } from 'react-icons/go'
import api from '../../services/api';

import { Header, Repositories, UserInfo, Title } from './styles';
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
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    api.get(`/users/${params.user}/repos`).then((response) => {
      // console.log(response.data);
      setRepositories(response.data);
    });
    api.get(`/users/${params.user}`).then((response) => {
      // console.log(response.data);
      setUser(response.data);
    });
  }, [params.user]);

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
        {repositories.map(repository => (
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

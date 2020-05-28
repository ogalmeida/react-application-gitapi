/* eslint-disable camelcase */
import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Error, User } from './styles';
import LogoImage from '../../assets/logo.svg';

interface User {
  login: string;
  id: number;
  name: string;
  bio: string;
  avatar_url: string;
  repos_url: string;
}

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [users, setUsers] = useState<User[]>(() => {
    const storageUsers = localStorage.getItem(
      '@GithubFinder:users',
    );
    if (storageUsers) {
      return JSON.parse(storageUsers);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubFinder:users',
      JSON.stringify(users),
    );
  }, [users]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const found = users.find(user => user.login === newUser);

    if (found) {
      setInputError('O usuário já está na lista!');
      setNewUser('');
      return;
    }

    if (!newUser) {
      setInputError('Digite o usuário!');
      return;
    }

    try {
      const response = await api.get<User>(`users/${newUser}`);

      const user = response.data;
      setUsers([...users, user]);
      setNewUser('');
      setInputError('');
    } catch (err) {
      setInputError('Falha ao buscar pelo usuário digitado!');
    }
  }

  return (
    <>
      <img src={LogoImage} alt="Logo Github" />
      <Title>GitFinder</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Digite o usuário"
          type="text"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <User>
        {users.map((user) => (
          <Link key={user.id} to={`/${user.login}`}>
            <img
              src={user.avatar_url}
              alt={user.name}
            />
            <div>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </User>
    </>
  );
};

export default Dashboard;

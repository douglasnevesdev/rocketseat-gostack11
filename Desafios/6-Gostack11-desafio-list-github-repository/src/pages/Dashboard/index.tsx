import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, Error } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// Mesma coisa que function Dashboard() {}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@GuthubExplorer:repositories',
    );
    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GuthubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositorio');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repositoy = response.data;
      setRepositories([...repositories, repositoy]);
      setNewRepo('');
      setInputError('');
    } catch (erro) {
      setInputError('Erro na busca por esse repositorio');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositorios no guthub.</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;

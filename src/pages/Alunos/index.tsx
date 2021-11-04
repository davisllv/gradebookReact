import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/appContext';
import '../../styles.css';

export interface IAluno {
  id: number;
  nomeAluno: string;
}

const Alunos: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { listaAlunos, setListaAlunos } = useContext(AppContext);

  function handleChangeValue(ev: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(ev.target.value);
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault(); // Serve para que cada alteração da página, ela não recarregue

    if (!inputValue) {
      alert('Nenhum aluno foi informado');
      return;
    }

    setListaAlunos((prevState) => {
      const novoAluno: IAluno = {
        id: Math.random() * 100,
        nomeAluno: inputValue,
      };
      const novaLista = [...prevState, novoAluno];
      return novaLista;
    });
    setInputValue('');
  }

  function handExcluir(id: number): void {
    setListaAlunos((prevState) => {
      return prevState.filter((it) => it.id !== id);
    });
  }

  return (
    <div className="container">
      <div className="content">
        <h2>Alunos</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Alunos"
            value={inputValue}
            onChange={handleChangeValue}
          />
          <button type="submit">Adicionar #{listaAlunos.length + 1}</button>
        </form>

        <div className="list-box">
          <h4>Alunos</h4>
          {listaAlunos.length === 0 ? (
            <p>Sem Alunos Adicionados</p>
          ) : (
            <div className="lista-alunos">
              <ul>
                {listaAlunos.map((item) => {
                  return (
                    <li>
                      <span>{item.nomeAluno}</span>
                      <button
                        className="excluir"
                        type="button"
                        onClick={() => {
                          handExcluir(item.id);
                        }}
                      >
                        X
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alunos;

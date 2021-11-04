import React, { useState, useContext } from 'react';
import '../../styles.css';
import { AppContext } from '../../context/appContext';

export interface ITarefa {
  id: number;
  tarefa: string;
}
const Tarefas: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { listaTarefas, setListaTarefas } = useContext(AppContext);
  function handleChangeValue(ev: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(ev.target.value);
  }

  function handleChangeSubmit(ev: React.FormEvent<HTMLFormElement>): void {
    ev.preventDefault();

    if (!inputValue) {
      alert('Tarefas não foram adicionadas');
      return;
    }
    setListaTarefas((prevState) => {
      const novaTarefa: ITarefa = {
        id: Math.random() * 100,
        tarefa: inputValue,
      };
      const novaLista = [...prevState, novaTarefa];
      return novaLista;
    });
    setInputValue(''); // Serve para que após eu finalizar a digitação de alguma tarefa o input seja "esvaziado."
  }

  function handleDelete(id: number): void {
    setListaTarefas((prevState) => {
      return prevState.filter((it) => it.id !== id);
    });
  }
  return (
    <div className="container">
      <div className="content">
        <h2>Tarefas</h2>
        <form onSubmit={handleChangeSubmit}>
          <input
            type="text"
            placeholder="Adicionar Tarefa"
            value={inputValue}
            onChange={handleChangeValue}
          />
          <button type="submit">Adicionar #{listaTarefas.length + 1}</button>
        </form>

        <div className="list-box">
          <h4>Tarefas</h4>
          {listaTarefas.length === 0 ? (
            <p>Sem Tarefas Adicionados</p>
          ) : (
            <div className="lista-alunos">
              <ul>
                {listaTarefas.map((item) => {
                  return (
                    <li>
                      <span>{item.tarefa}</span>
                      <button
                        type="button"
                        onClick={() => {
                          handleDelete(item.id);
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

export default Tarefas;

import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import '../../styles.css';

export interface INotas {
  notas: string;
  idTarefa: number;
  idAluno: number;
}

const Notas: React.FC = () => {
  const { listaTarefas, listaAlunos, listaNotas, setListaNotas } = useContext(
    AppContext
  );

  function handleChangeNote(
    notas: string,
    idTarefa: number,
    idAluno: number
  ): void {
    setListaNotas((prevState) => {
      const todaNota = listaNotas.find(
        (it) => it.idTarefa === idTarefa && it.idAluno === idAluno
      );
      if (todaNota !== undefined) {
        todaNota.notas = notas;
        return [...prevState];
      }
      const novaNota: INotas = { notas, idTarefa, idAluno };
      return [...prevState, novaNota];
    });
  }

  return (
    <div className="container">
      <div className="content">
        <h2>Notas</h2>
        <div className="list-box">
          <div className="lista-notas">
            <ul>
              {listaTarefas.map((item) => {
                return (
                  <li>
                    <span>{item.tarefa}</span>
                    <ul>
                      {listaAlunos.map((alunos) => {
                        return (
                          <li>
                            <span>{alunos.nomeAluno}</span>

                            <input
                              type="text"
                              placeholder="Adicionar Notas"
                              maxLength={2}
                              value={
                                listaNotas.find(
                                  (it) =>
                                    it.idTarefa === item.id &&
                                    it.idAluno === alunos.id
                                )?.notas
                              }
                              onChange={(ev) => {
                                handleChangeNote(
                                  ev.target.value,
                                  item.id,
                                  alunos.id
                                );
                              }}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notas;

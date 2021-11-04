import React, { createContext, useState } from 'react';
import { IAluno } from '../pages/Alunos';
import { INotas } from '../pages/Notas';
import { ITarefa } from '../pages/Tarefas';

export interface IAppContext {
  listaAlunos: IAluno[];
  setListaAlunos: React.Dispatch<React.SetStateAction<IAluno[]>>;
  listaTarefas: ITarefa[];
  setListaTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
  listaNotas: INotas[];
  setListaNotas: React.Dispatch<React.SetStateAction<INotas[]>>;
}

export const AppContext = createContext({} as IAppContext);

const AppProvider: React.FC = ({ children }) => {
  const [listaAlunos, setListaAlunos] = useState<IAluno[]>([]);
  const [listaTarefas, setListaTarefas] = useState<ITarefa[]>([]);
  const [listaNotas, setListaNotas] = useState<INotas[]>([]);

  return (
    <AppContext.Provider
      value={{
        listaAlunos,
        setListaAlunos,
        listaTarefas,
        setListaTarefas,
        listaNotas,
        setListaNotas,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider; // Todo contexto/componente ser exportado com letra maiscula

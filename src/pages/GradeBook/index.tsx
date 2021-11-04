import React, { useState } from 'react';
import Menu from '../../components/Menu';
import '../../styles.css';
import Alunos from '../Alunos';
import Notas from '../Notas';
import Tarefas from '../Tarefas';
import AppProvider from '../../context/appContext';

const GradeBook: React.FC = () => {
  const [page, setPage] = useState('Tarefas');
  return (
    <div className="container">
      <div>
        <AppProvider>
          <Menu setPage={setPage} />
          {page === 'Tarefas' && <Tarefas />}
          {page === 'Alunos' && <Alunos />}
          {page === 'Notas' && <Notas />}
        </AppProvider>
      </div>
    </div>
  );
};

export default GradeBook;

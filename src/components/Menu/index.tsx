import React from 'react';
import '../../styles.css';

interface IMenu {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}
const Menu: React.FC<IMenu> = ({ setPage }) => {
  return (
    <div className="header">
      <h1>Livro de Notas</h1>
      <nav className="btns-box">
        <button
          type="button"
          onClick={() => {
            setPage('Tarefas');
          }}
        >
          Tarefas
        </button>
        <button
          type="button"
          onClick={() => {
            setPage('Alunos');
          }}
        >
          Alunos
        </button>
        <button
          type="button"
          onClick={() => {
            setPage('Notas');
          }}
        >
          Notas
        </button>
      </nav>
    </div>
  );
};

export default Menu;

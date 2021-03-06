import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';

function CadastroCategoria() {

    const valoresIniciais = {
      nome: '',
      descricao: '',
      cod: '#000',
    }    

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
      //chave: nome, descrição, bla, bli
      setValues({
        ...values,
        [chave]: valor, //nome: 'valor'
      })
    }

    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome} </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias, //Os ... está pedindo para pegar tudo que já escreveu, não joga for, nãosubscreve e cria este novo
            values
          ]);

          setValues(valoresIniciais)
        }}>

        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome}
              name="nome"
              onChange={handleChange}
            />
           </label>
          </div>
          
          <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
           </label>
          </div>
          
          <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
           </label>
        </div>

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;
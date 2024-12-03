
import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import FormularioUsuario from './FormularioUsuario';
import TabelaUsuario from './TabelaUsuario';

function App() { 

  // --- Configurações de produtos ---
  const produto = { codigo: 0, nome: '', marca: '' };
  const [btnCadastrarProduto, setBtnCadastrarProduto] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);

  // Carrega os produtos da API
  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setProdutos(retorno_convertido));
  }, []);

  // Atualiza o estado com os dados do formulário
  const aoDigitarProduto = (e) => setObjProduto({ ...objProduto, [e.target.name]: e.target.value });

  // Limpa o formulário de produto
  const limparFormularioProduto = () => { 
    setObjProduto(produto); 
    setBtnCadastrarProduto(true); 
  };

  // Cadastrar um produto
  const cadastrarProduto = () => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'POST',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        setProdutos([...produtos, retorno_convertido]);
        alert('Produto cadastrado com sucesso!');
        limparFormularioProduto();
      }
    });
  };

  // Alterar um produto
  const alterarProduto = () => {
    fetch('http://localhost:8080/alterar', {
      method: 'PUT',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        let vetorTemp = [...produtos];
        let indice = vetorTemp.findIndex(p => p.codigo === objProduto.codigo);
        vetorTemp[indice] = objProduto;
        setProdutos(vetorTemp);
        alert('Produto alterado com sucesso!');
        limparFormularioProduto();
      }
    });
  };

  // Remover um produto
  const removerProduto = () => {
    fetch('http://localhost:8080/remover/' + objProduto.codigo, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      alert(retorno_convertido.mensagem);
      let vetorTemp = [...produtos];
      let indice = vetorTemp.findIndex(p => p.codigo === objProduto.codigo);
      vetorTemp.splice(indice, 1);
      setProdutos(vetorTemp);
      limparFormularioProduto();
    });
  };

  // Selecionar um produto para alterar ou remover
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrarProduto(false);
  };

  // --- Configurações de usuários ---
  const usuario = { id: 0, nome: '', email: '', idade: '' };  // Adicionado 'idade'
  const [btnCadastrarUsuario, setBtnCadastrarUsuario] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [objUsuario, setObjUsuario] = useState(usuario); // Inicializado com 'idade'

  // Carrega os usuários da API
  useEffect(() => {
    fetch("http://localhost:8080/listarUsuarios ")
      .then(retorno => retorno.json())
      .then(retorno_convertido => setUsuarios(retorno_convertido));
  }, []);

  // Atualiza o estado com os dados do formulário de usuário
  const aoDigitarUsuario = (e) => setObjUsuario({ ...objUsuario, [e.target.name]: e.target.value });

  // Limpa o formulário de usuário
  const limparFormularioUsuario = () => { 
    setObjUsuario(usuario); 
    setBtnCadastrarUsuario(true); 
  };

  // Cadastrar um usuário
  const cadastrarUsuario = () => {
    fetch('http://localhost:8080/cadastrarUsuario', {
      method: 'POST',
      body: JSON.stringify(objUsuario),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        setUsuarios([...usuarios, retorno_convertido]);
        alert('Usuário cadastrado com sucesso!');
        limparFormularioUsuario();
      }
    });
  };

  // Alterar um usuário
  const alterarUsuario = () => {
    fetch('http://localhost:8080/alterarUsuario', {
      method: 'PUT',
      body: JSON.stringify(objUsuario),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if(retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        let vetorTemp = [...usuarios];
        let indice = vetorTemp.findIndex(u => u.id === objUsuario.id);
        vetorTemp[indice] = objUsuario;
        setUsuarios(vetorTemp);
        alert('Usuário alterado com sucesso!');
        limparFormularioUsuario();
      }
    });
  };

  // Remover um usuário
  const removerUsuario = () => {
    fetch('http://localhost:8080/removerUsuario/' + objUsuario.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      alert(retorno_convertido.mensagem);
      let vetorTemp = [...usuarios];
      let indice = vetorTemp.findIndex(u => u.id === objUsuario.id);
      vetorTemp.splice(indice, 1);
      setUsuarios(vetorTemp);
      limparFormularioUsuario();
    });
  };

  // Selecionar um usuário para alterar ou remover
  const selecionarUsuario = (indice) => {
    setObjUsuario(usuarios[indice]);
    setBtnCadastrarUsuario(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Produtos */}
      <div style={{ width: '48%' }}>
        <Formulario 
          botao={btnCadastrarProduto} 
          eventoTeclado={aoDigitarProduto} 
          cadastrar={cadastrarProduto} 
          obj={objProduto} 
          cancelar={limparFormularioProduto} 
          remover={removerProduto} 
          alterar={alterarProduto} 
        />
        <Tabela vetor={produtos} selecionar={selecionarProduto} />
      </div>

      {/* Usuários */}
      <div style={{ width: '48%' }}>
        <FormularioUsuario 
          botao={btnCadastrarUsuario} 
          eventoTeclado={aoDigitarUsuario} 
          cadastrar={cadastrarUsuario} 
          obj={objUsuario} 
          cancelar={limparFormularioUsuario} 
          remover={removerUsuario} 
          alterar={alterarUsuario} 
        />
        <TabelaUsuario vetor={usuarios} selecionar={selecionarUsuario} />
      </div>
    </div>
  );
}

export default App;

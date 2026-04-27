import { useState, useEffect } from 'react';
import { getContract } from './contract';

function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [itens, setItens] = useState([]);
  const [carregando, setCarregando] = useState(false);

  // Busca os dados gravados no Smart Contract
  const carregarDados = async () => {
    try {
      const contract = await getContract();
      if (!contract) return;
      
      const lista = await contract.listarRegistros();
      setItens(lista);
    } catch (err) {
      console.error("Erro ao carregar dados da blockchain:", err);
    }
  };

  // Envia os dados para a Blockchain
  const salvarNoBlockchain = async () => {
    if (!titulo || !descricao) return alert("Preencha todos os campos!");
    
    try {
      setCarregando(true);
      const contract = await getContract();
      
      // Chama a função 'criarRegistro' do seu arquivo Registro.sol
      const tx = await contract.criarRegistro(titulo, descricao);
      
      console.log("Transação enviada! Aguardando mineração...");
      await tx.wait(); // Espera a transação ser confirmada na rede
      
      alert("Sucesso! Registro imortalizado na Blockchain.");
      setTitulo("");
      setDescricao("");
      carregarDados(); // Atualiza a lista automaticamente
    } catch (err) {
      console.error("Erro na transação:", err);
      alert("Erro ao salvar. Verifique o console e sua MetaMask.");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1>Blockchain Registry ⛓️</h1>
      <p>Registre informações de forma imutável.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
        <input 
          placeholder="Título do Registro" 
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)} 
          style={{ padding: '10px' }}
        />
        <textarea 
          placeholder="Descrição detalhada" 
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)} 
          style={{ padding: '10px', minHeight: '80px' }}
        />
        <button 
          onClick={salvarNoBlockchain} 
          disabled={carregando}
          style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          {carregando ? "Gravando..." : "Salvar na Blockchain"}
        </button>
      </div>

      <hr />

      <h2>Registros na Rede:</h2>
      {itens.length === 0 && <p>Nenhum registro encontrado.</p>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {itens.map((item, index) => (
          <div key={index} style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ margin: '0 0 5px 0' }}>{item.titulo}</h3>
            <p style={{ margin: '0 0 10px 0', color: '#444' }}>{item.descricao}</p>
            <small style={{ color: '#888', wordBreak: 'break-all' }}>
              <strong>Autor:</strong> {item.autor}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
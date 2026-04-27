⛓️ DApp de Registro Imutável — Fullstack Blockchain

Este projeto é um ecossistema completo de registro descentralizado. Ele permite que usuários gravem mensagens de forma imutável em uma blockchain privada, integrando um Smart Contract em Solidity com uma interface moderna em React.

📸 Demonstração do Sistema
🖥️ Interface

Interação do usuário através de uma interface limpa, conectada via MetaMask ao nó local do Hardhat.

🔐 Registro e Confirmação

Fluxo completo de:

Assinatura de transação
Confirmação de gravação imutável na blockchain
💾 Persistência de Dados

Visualização dos registros recuperados diretamente do contrato inteligente.

📊 Monitoramento

Logs em tempo real mostrando:

Chamadas eth_call
Transações sendo mineradas
🏗️ Arquitetura do Sistema

O projeto segue o modelo Monorepo, garantindo integração total entre backend e frontend.

🖥️ Backend (Smart Contracts)

Local: /backend
Tecnologia: Hardhat + Solidity

Lógica Imutável
Contrato Registro.sol responsável pela persistência dos dados
Rede Local
RPC: http://localhost:8545
Chain ID: 31337
Contas de Teste
10.000 ETH fictícios por conta
Testes e Deploy
Scripts automatizados com Hardhat
🌐 Frontend (DApp)

Local: /frontend
Tecnologia: React + Vite + ethers.js

Integração Web3
BrowserProvider
Signer
Comunicação com contrato
Uso do ABI gerado pelo Hardhat
UX/UI
Estado de loading ("Gravando...")
Feedback de sucesso ao usuário
🛠️ Desafios Técnicos
🔐 Segurança em ambiente local (MetaMask / Blockaid)
🔄 Sincronização de estado após mineração de blocos
⚙️ Organização do ambiente (Git + dependências)
🚀 Como Executar o Projeto
1. Clonar o repositório
git clone https://github.com/masfgroove/blockchain-registry-dapp.git
2. Backend
cd backend
npm install
npx hardhat node

Em outro terminal:

npx hardhat run scripts/deploy.cjs --network localhost
3. Frontend
cd ../frontend
npm install
npm run dev
4. Configurar MetaMask
RPC: http://127.0.0.1:8545
Chain ID: 31337
Importar uma chave privada gerada pelo Hardhat
🧠 Backend — Detalhes Técnicos
📜 Smart Contract (Registro.sol)
Imutabilidade
Registros não podem ser alterados ou apagados
Identidade
Uso de msg.sender para identificar o autor
Estrutura de Dados
struct Item {
    string titulo;
    string descricao;
    address autor;
}
⚙️ Ambiente com Hardhat
Blockchain local na porta 8545
Contas com ETH fictício
Geração de ABI (JSON) para integração com frontend
🚀 Deploy (deploy.cjs)
Publicação do contrato na rede local
Geração de endereço do contrato (ex: 0x5FbDB...)
Integração com frontend via variável contractAddress
📊 Monitoramento
Logs no terminal:
eth_call
Transações mineradas
Feedback visual no navegador
🎨 Frontend — Detalhes Técnicos
⚛️ Stack
React + Vite
ethers.js
MetaMask
🔗 Integração Web3
BrowserProvider → conexão com MetaMask
getSigner() → assinatura de transações
📦 Integração com Smart Contract
Importação do ABI (Registro.json)
Uso do endereço do contrato no frontend
🎯 UX e Estados
Botão com estado: "Gravando..."
Alertas de sucesso
useEffect para carregar registros automaticamente
🎨 Estilo
Layout limpo e organizado
Cards para exibição dos registros
Interface responsiva
📌 Estrutura do Projeto
/backend
  ├── contracts/
  ├── scripts/
  ├── artifacts/

/frontend
  ├── src/
  │   ├── App.jsx
  │   ├── contract.js
  │   ├── App.css
💾 Versionamento
git add .
git commit -m "Docs: README profissional do projeto blockchain"
git push origin main
🧾 Resumo

Este projeto demonstra:

✔️ Desenvolvimento de Smart Contracts
✔️ Integração Web3 com React
✔️ Uso de blockchain local (Hardhat)
✔️ Comunicação frontend ↔ contrato
✔️ Boas práticas de UX em DApps

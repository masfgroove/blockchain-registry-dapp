# ⛓️ Fullstack Blockchain Registry DApp

Este projeto é um ecossistema completo de registro descentralizado. Ele permite que usuários gravem mensagens de forma imutável em uma rede blockchain privada, integrando um contrato inteligente em Solidity com uma interface React moderna.

## 📸 Demonstração do Projeto
![Interface Principal](./screenshots/dashboard.png)
*Interface do usuário conectada à rede Hardhat local.*

![Sucesso na Transação](./screenshots/sucesso.png)
*Confirmação de registro imortalizado na blockchain.*

## 🏗️ Arquitetura do Sistema
O projeto utiliza um modelo de **Monorepo** para manter a sincronia entre a lógica de negócio e a interface:

### 🖥️ Backend (Blockchain Local)
Localizado na pasta `/backend`, utiliza o framework **Hardhat**:
* **Smart Contract:** Desenvolvido em Solidity para garantir a persistência imutável dos dados.
* **Nó Local:** Simulação de rede Ethereum com contas de teste (contendo 10.000 ETH cada para desenvolvimento).
* **Scripts:** Automação de deploy para ambiente de desenvolvimento.

### 🌐 Frontend (DApp Interface)
Localizado na pasta `/frontend`, desenvolvido com **React + Vite**:
* **Ethers.js:** Biblioteca utilizada para a comunicação entre o navegador e a blockchain.
* **Integração MetaMask:** Gestão de carteira, assinaturas de transações e troca de redes (RPC Localhost 8545).
* **Feedback em Tempo Real:** Notificações de progresso ("Gravando...") e alertas de sucesso.

## 🛠️ Desafios Técnicos Solucionados
* **Gestão de Redes:** Configuração de Chain ID customizado e resolução de avisos de segurança ("Deceptive Request") comuns em ambientes de teste locais.
* **Sincronização de Estado:** Atualização dinâmica da lista de registros após a mineração do bloco.
* **Infraestrutura:** Configuração de diretórios seguros e controle de versões via Git para fluxos de trabalho colaborativos.

## 🚀 Como Rodar o Projeto
1. **Backend:** No diretório `backend`, rode `npx hardhat node` e depois `npx hardhat run scripts/deploy.cjs --network localhost`.
2. **Frontend:** No diretório `frontend`, rode `npm run dev`.
3. **MetaMask:** Conecte à rede Localhost 8545 e importe uma das chaves privadas geradas pelo nó do Hardhat.

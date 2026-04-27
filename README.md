⛓️ Aplicativo descentralizado (DApp) de registro de blockchain fullstack
Este projeto é um ecossistema completo de registro descentralizado. Ele permite que os usuários gravem mensagens de forma imutável em uma rede blockchain privada, integrando um contrato inteligente em Solidity com uma interface React moderna.

📸 Demonstração do Sistema
Interface e-
A interação do usuário com uma interface limpa, conectada via MetaMask ao nó local do Hardhat.

Registro e Confirmação
Fluxo completo de assinatura de transação e confirmação de gravação imutável.

Persistência de Dados
Visualização dos registros recuperados diretamente do contrato inteligente.

Monitoramento do Backend
Logs em tempo real mostrando chamadas eth_calle interações com o contrato.

🏗️ Arquitetura do Sistema
O projeto utiliza um modelo de Monorepo para garantir a integridade entre o contrato e a interface:

🖥️ Backend (Contratos Inteligentes)
Localizado na pasta /backend, utilizando capacete de segurança :

Lógica Imutável : Contrato Registro.soldesenvolvido em Solidity para persistência de dados.

Infraestrutura Local : Nenhum RPC configurado no localhost:8545com Chain ID 31337.

Gestão de Testes : Utilização de contas pré-fundadas com 10.000 ETH para simulação de transações reais.

🌐 Frontend (DApp)
Localizado na pasta /frontend, desenvolvido com React + Vite :

Comunicação Web3 : Integração via ethers.jsutilização BrowserProvidere Signer.

Consumo de ABI : Integração direta com os artistas elaborados do Hardhat para execução de métodos do contrato.

UX/UI : Tratamento de estados de transação ("Gravando...") e notificações de sucesso via interface.

🛠️ Desafios Técnicos Solucionados
Segurança em Ambiente de Teste : Tratamento de alertas de segurança do MetaMask/Blockaid para redes locais.

Sincronização de Estado : Atualização da interface em tempo real após a mineração de novos blocos.

Gestão de Ambiente : Configuração de safe.directoryno Git e organização de subdiretórios para evitar conflitos de dependências.

🚀 Como Executar o Projeto
Clonar ova:

Bash
git clone https://github.com/masfgroove/blockchain-registry-dapp.git
o Backend:

Bash
cd backend
npm install
npx hardhat node
# Em outro terminal, faça o deploy:
npx hardhat run scripts/deploy.cjs --network localhost
Sistema o Frontend:

Bash
cd frontend
npm install
npm run dev
MetaMask:

Adicione uma rede RPC customizada: http://127.0.0.1:8545com ID 31337.

Importe uma das chaves privadas geradas pelo comando npx hardhat node.

Próximos Passos (Dica para o Git)
Agora que o texto está pronto:

Abra o arquivo README.mdna raiz do seu VS Code.

Apague tudo e cole esse texto acima.

Salve e rode:

Bash
git add .
git commit -m "Docs: Finalizando README com imagens e detalhes técnicos"
git push origin main

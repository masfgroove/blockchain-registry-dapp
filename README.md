⛓️ DApp de Registro Imutável: Fullstack Blockchain

Este projeto é um ecossistema completo de registro descentralizado. Ele permite que os usuários gravem mensagens de forma imutável em uma rede blockchain privada, integrando um contrato inteligente em Solidity com uma interface React moderna.

📸 Demonstração do Sistema

Interface e-
Interação do usuário através de uma interface limpa, conectada via MetaMask ao nó local do Hardhat.

Registro e Confirmação

Fluxo completo de assinatura de transação e confirmação de gravação imutável.

Persistência de Dados

Visualização dos registros recuperados diretamente do contrato inteligente.

Monitoramento do Backend

Logs em tempo real mostrando chamadas eth_calle interações com o contrato.

🏗️ Arquitetura do Sistema

O projeto utiliza um modelo de Monorepo para garantir a integridade entre o contrato e a interface:

🖥️ Backend (Contratos Inteligentes)

Localizado na pasta /backend, utilizando o framework Hardhat :

Lógica Imutável : Contrato Registro.soldesenvolvido em Solidity para persistência de dados.

Infraestrutura Local : Nenhum RPC configurado no localhost:8545com Chain ID 31337.

Gestão de Testes : Utilização de contas pré-fundadas com 10.000 ETH para simulação de transações reais.

🌐 Frontend (DApp)

Localizado na pasta /frontend, desenvolvido com React + Vite :

Comunicação Web3 : Integração via ethers.jsutilização BrowserProvidere Signer.

Consumo de ABI : Integração direta com os artistas gerados pelo Hardhat para execução de métodos do contrato.

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
Em outro terminal, faça o deploy:

Bash
npx hardhat run scripts/deploy.cjs --network localhost
Sistema o Frontend:

Bash
cd ../frontend
npm install
npm run dev
MetaMask:

Adicione uma rede RPC customizada: http://127.0.0.1:8545com ID 31337 .

Importe uma das chaves privadas geradas pelo comando npx hardhat node.

💾 Finalizando no Git

Para salvar essas melhorias, rode no seu terminal:

git add .
git commit -m "Docs: Melhorando título e termos técnicos do README"
git push origin main

$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
OBSERVAÇÃO 
Backend
1. O que eu desenvolvi no Smart Contract ( Registro.sol)
   
Eu utilizo a linguagem Solidity para criar a lógica de negócio que roda dentro do blockchain.

Imutabilidade : Eu projetei o contrato para que, uma vez que um registro seja gravado, ele se torne permanente e impossível de apagar.

Identidade Digital : Eu configurei o código para capturar automaticamente o endereço da carteira ( msg.sender) de quem envia a mensagem, garantindo a autoria do registro.

Organização de Dados : Eu criei uma struct(estrutura) chamada Itempara agrupar o título, a descrição e o autor em um único conjunto de dados organizado.

2. Como eu gerenciei o ambiente com capacete de segurança
   
Eu uso o Hardhat como minha principal ferramenta de desenvolvimento para simular o ecossistema Ethereum.

Não Local : Eu levantei uma rede blockchain privada rodando na porta 8545do meu computador para realizar os testes sem custos.

Contas de Teste : Eu utilizei as contas fornecidas pelo Hardhat, que já vêm com 10.000 ETH fictícios para negociar as transações no MetaMask.

Geração de Artefatos : Ao compilar o código, eu gerei o ABI (Application Binary Interface) em JSON, que funciona como o "mapa" para que meu frontend consiga entender as funções do contrato.

3. Como eu realizei o Deploy ( deploy.cjs)
   
Eu escrevi um script em JavaScript para tirar o contrato do papel e colocar-lo "ao vivo" na rede.

Publicação : Eu executei o script que invejo o contrato para um endereço específico na rede (como o 0x5FbDB...80aa3).

Integração : Após a implantação bem-sucedida, eu peguei esse endereço gerado e o nível para o código do meu frontend para estabelecer a conexão.

4. Como eu monitorei os resultados
   
Eu acompanho cada ação do sistema através dos logs do meu terminal.

Chamadas Técnicas : Eu observei as funções eth_callsendo executadas quando o sistema lia os dados da rede e as transações sendo mineradas quando eu gravei novos registros.

Validação : Eu validei o sucesso das operações através dos alertas no navegador e das mensagens de "Registro imortalizado" que eu mesmo configurei.


FrontEnd

1. Base Tecnológica: React + Vite

Eu escolhi o Vite para criar o projeto devido à sua velocidade superior de carregamento e compilação em comparação com o antigo create-react-app.

Interface Reativa : O React permitiu que a interface se atualizasse automaticamente assim que uma nova mensagem fosse lida da blockchain.

Estrutura de Pastas : Organize os arquivos dentro da pasta /frontend, separando a lógica de conexão ( contract.js) dos componentes visuais ( App.jsx).

2. A Ponte Web3: Ethers.js

Esta foi a biblioteca principal que eu utilizei para fazer o seu navegador "conversar" com a rede Hardhat.

Provedor (Provedor) : Eu configurei o BrowserProviderpara detectar e se conectar à extensão MetaMask injetada no seu navegador.

Signatário (Assinador) : Através do comando provider.getSigner(), eu habilitei a capacidade do usuário de transferir transações e pagar as taxas de gás fictícias da rede local.

3. Integração com o Contrato Inteligente

Para que o JavaScript saiba quais funções estão previstas no seu contrato Solidity, eu realizo dois passos críticos:

Importação do ABI : Eu copiei o arquivo Registro.json(o ABI) do backend para dentro do frontend para servir como o "manual de instruções" do contrato.

Endereço do Contrato : Eu defini a constante contractAddresscom o ID exato gerado durante a implantação ( 0x5FbDB...80aa3) para que o frontend forneça informações detalhadas sobre onde enviar os dados.

4. Experiência do Usuário (UX) e Estados

Eu desenvolvi uma lógica para que o usuário sempre soubesse o que estava acontecendo durante uma interação com o blockchain.

Estado de Carregamento : Criei uma lógica para o botão exibir "Gravando..." enquanto a transação estava sendo minerada no nó do Capacete.

Feedback de Sucesso : Implementei alertas nativos para confirmar quando um registro foi "imortalizado na Blockchain" .

Leitura Automática : Configurei um efeito ( useEffect) para que, assim que a página carregue, o frontend busque todos os registros já salvos e a listasse na tela.

5. Estilo e Design (CSS)

Para garantir que o projeto tenha uma aparência profissional em seu portfólio:

Design Limpo : Utilize o arquivo App.csspara criar cartões individuais para cada registro, destacando o autor e o conteúdo da forma organizada.

Responsividade : A interface foi ajustada para exibir corretamente tanto o formulário de envio quanto a lista de registros na rede.

Resumo Técnico do Frontend:

Vite	: Servidor de desenvolvimento rápido rodando na porta 5174.
MetaMask	: Carteira digital usada para autorizar transações na rede local.
contrato.js	 : Arquivo central onde centralizei toda a lógica de conexão com a blockchain.
App.jsx	: Componente principal que gerencia o formulário e a exibição dos dados.
Com isso, finalizei a construção de uma aplicação Fullstack , onde o frontend não exibe apenas dados, mas interage ativamente com um ecossistema descentralizado!
git commit -m "Docs: Melhorando título e termos técnicos do README"
git push origin main

import { ethers } from "ethers";
import abi from "./abi.json";

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

export const getContract = async () => {
  if (!window.ethereum) {
    alert("MetaMask não encontrada! Instale a extensão no navegador.");
    return;
  }
  
  // Conecta ao provedor da MetaMask
  const provider = new ethers.BrowserProvider(window.ethereum);
  // Pega o Signer (quem assina a transação/paga o gás)
  const signer = await provider.getSigner();
  
  // Cria a instância do contrato para o JS usar
  return new ethers.Contract(contractAddress, abi, signer);
};
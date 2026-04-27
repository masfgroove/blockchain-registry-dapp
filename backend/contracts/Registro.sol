// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Registro {
    struct Item {
        string titulo;
        string descricao;
        address autor;
    }

    Item[] public itens;

    function criarRegistro(string memory _titulo, string memory _descricao) public {
        itens.push(Item(_titulo, _descricao, msg.sender));
    }

    function listarRegistros() public view returns (Item[] memory) {
        return itens;
    }
}
import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import { useTabelaOuForm } from "./useTabelaOuForm"

export default function useClientes() { 
    const repositorio: ClienteRepositorio = new ColecaoCliente()
    const { exibirTabela, exibirForm, tabelaVisivel } = useTabelaOuForm()
  
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    

    useEffect(listarClientes, [])

    function listarClientes() {
        repositorio.listar().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }
    
    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirForm()
    }
    
    async function excluirCliente(cliente: Cliente) {
        await repositorio.deletar(cliente)
        listarClientes()
    }
    
    async function salvarCliente(cliente: Cliente) {
        await repositorio.salvar(cliente)
        listarClientes()
    }

    function novoCliente() {
        setCliente(Cliente.vazio()) 
        exibirForm()
    }

    return {
        tabelaVisivel,
        exibirTabela,
        clientes,
        cliente,
        listarClientes,
        selecionarCliente,
        excluirCliente,
        salvarCliente,
        novoCliente
    }
}
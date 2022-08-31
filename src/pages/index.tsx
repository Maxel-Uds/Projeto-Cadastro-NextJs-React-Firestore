import React, { useEffect } from "react"
import { useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"

export default function Home() {

  const repositorio: ClienteRepositorio = new ColecaoCliente()
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(listar, [])

  function listar() {
    repositorio.listar().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }
  
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  
  async function excluirCliente(cliente: Cliente) {
    await repositorio.deletar(cliente)
    listar()
  }
  
  async function salvarCliente(cliente: Cliente) {
    await repositorio.salvar(cliente)
    listar()
  }

  function novoCliente() {
    setCliente(Cliente.vazio()) 
    setVisivel('form')
  }

  return (
    <div className={`
      flex h-screen 
      justify-center 
      items-center bg-gradient-to-r 
      from-blue-500 to-purple-500 
      text-white`}>
      <Layout titulo="Cadastro Simples">
        {
          visivel === 'tabela'? 
          (
            <React.Fragment>
              <div className="flex justify-end">
                <Botao className="mb-4" cor="green" onClick={novoCliente}>Novo Cliente</Botao>
              </div>
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={excluirCliente}></Tabela>
            </React.Fragment>
          )
          : 
          (
            <Formulario cliente={cliente} cancelar={() => setVisivel('tabela')} salvar={salvarCliente}/>
          )
        }      
      </Layout>
    </div>    
  )
}
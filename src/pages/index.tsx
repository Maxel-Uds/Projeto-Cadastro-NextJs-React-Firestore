import React from "react"
import { useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

  const clientes = [
    new Cliente('Max', 22, '1'),
    new Cliente('João', 32, '2')
  ]
  
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente)
  }
  
  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
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
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
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
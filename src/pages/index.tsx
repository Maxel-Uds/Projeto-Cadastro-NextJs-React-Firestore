import React from "react"
import { useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

const clientes = [
  new Cliente('Max', 22, '1'),
  new Cliente('João', 32, '2')
]

function clienteSelecionado(cliente: Cliente) {
  console.log(cliente)
}

function clienteExcluido(cliente: Cliente) {
  console.log(cliente)
}

function salvarCliente(cliente: Cliente) {
  console.log(cliente)
}

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela');

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
                <Botao className="mb-4" cor="green" onClick={() => setVisivel('form')}>Novo Cliente</Botao>
              </div>
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
            </React.Fragment>
          )
          : 
          (
            <Formulario cliente={clientes[0]} cancelar={() => setVisivel('tabela')} salvar={salvarCliente}/>
          )
        }      
      </Layout>
    </div>    
  )
}
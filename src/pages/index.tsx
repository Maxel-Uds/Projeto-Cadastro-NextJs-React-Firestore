import React from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import useClientes from "../hooks/useCliente"

export default function Home() {
  const { 
          tabelaVisivel,
          exibirTabela,
          selecionarCliente, 
          excluirCliente, 
          salvarCliente, 
          novoCliente, 
          cliente, 
          clientes, 
        } = useClientes()

  return (
    <div className={`
      flex h-screen 
      justify-center 
      items-center bg-gradient-to-r 
      from-blue-500 to-purple-500 
      text-white`}>
      <Layout titulo="Cadastro Simples">
        {
          tabelaVisivel ? 
          (
            <React.Fragment>
              <div className="flex justify-end">
                <Botao className="mb-4" cor="green" onClick={novoCliente}>Novo Cliente</Botao>
              </div>
              <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
            </React.Fragment>
          )
          : 
          (
            <Formulario cliente={cliente} cancelar={exibirTabela} salvar={salvarCliente}/>
          )
        }      
      </Layout>
    </div>    
  )
}
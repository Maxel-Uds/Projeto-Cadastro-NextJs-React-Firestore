import Cliente from "../core/Cliente"
import { IconeEdicao, IconeTrash } from "./Icones";

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    var exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className={'p-4'}>{cliente.id}</td>
                    <td className={'p-4'}>{cliente.nome}</td>
                    <td className={'p-4'}>{cliente.idade}</td>
                    { exibirAcoes ? renderizarBotoes(cliente) : false }
                </tr>
            )
        });
    }

    function renderizarBotoes(cliente: Cliente) {
        return (
            <td className={'flex justify-center'}>
                {props.clienteSelecionado ? (criarBotao(IconeEdicao, cliente)) : false }
                {props.clienteExcluido ? (criarBotao(IconeTrash, cliente)) : false }
            </td>
        )
    }

    function criarBotao(icone: any, cliente: Cliente) {
        return <button 
        onClick={() => icone === IconeEdicao ? props.clienteSelecionado?.(cliente) : props.clienteExcluido?.(cliente) } 
        className={`
            ${icone === IconeEdicao? 'text-green-500' : 'text-red-500'}
            rounded-full
            p-2
            m-1
            hover:bg-purple-50
        `}>{icone}</button>
    }

    return (
        <table className={'w-full rounded-xl overflow-hidden'}>
            <thead className={'bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100'}>
                <tr>
                    <th className={'p-4'}>Código</th>
                    <th className={'p-4'}>Nome</th>
                    <th className={'p-4'}>Idade</th>
                    { exibirAcoes ? <th className={'p-4'}>Ações</th> : false}
                </tr>
            </thead>
            <tbody className={'text-center'}>
                {renderizarDados()}
            </tbody>
        </table>
    )
}
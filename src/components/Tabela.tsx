import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className={'p-4'}>{cliente.id}</td>
                    <td className={'p-4'}>{cliente.nome}</td>
                    <td className={'p-4'}>{cliente.idade}</td>
                </tr>
            )
        });
    }

    return (
        <table className={'w-full rounded-xl overflow-hidden'}>
            <thead className={'bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100'}>
                <tr>
                    <th className={'p-4'}>Código</th>
                    <th className={'p-4'}>Nome</th>
                    <th className={'p-4'}>Idade</th>
                </tr>
            </thead>
            <tbody className={'text-center'}>
                {renderizarDados()}
            </tbody>
        </table>
    )
}
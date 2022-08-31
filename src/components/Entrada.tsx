interface EntradaProps {
    tipo: 'text' | 'number'
    texto: string
    valor: any
    apenasLeitura?: boolean
    alterarValor?: (valor: any) => void
    rangeMinimo?: number
    className?: string
    legenda?: string
}

export default function Entrada(props: EntradaProps) {
    function aplicaRange() { 
        return props.tipo === 'number' ? props.rangeMinimo : null
    }

    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.texto}
            </label>
            <input type={props.tipo} value={props.valor} readOnly={props.apenasLeitura} placeholder={props.legenda} className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-50
                px-4 py-2
               ${ props.apenasLeitura? '' : 'focus:bg-white' }
            `} 
            onChange={e => props.alterarValor?.(e.target.value)} 
            min={aplicaRange()}/>
        </div>
    )
}
interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
    ativo?: boolean
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={e => props.onClick?.()} disabled={props.ativo} className={`
            bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700 
            text-white
            px-4 py-2
            rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}
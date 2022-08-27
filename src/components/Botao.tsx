interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={`
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
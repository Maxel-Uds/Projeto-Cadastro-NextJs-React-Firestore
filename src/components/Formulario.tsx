import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')

    return (
        <div>
            {id? <Entrada texto="Id" valor={id} tipo="text" apenasLeitura={true} className="mb-4"/> : false}
            <Entrada texto="Nome" valor={nome} tipo="text" alterarValor={setNome} className="mb-4"/>
            <Entrada texto="Idade" valor={idade} tipo="number" alterarValor={setIdade} rangeMinimo={0}/>

            <div className="mt-7 flex justify-end">
                <Botao cor="blue" className="mr-2">{id? "Altera" : "Cadastrar"}</Botao>
                <Botao cor="gray">Cancelar</Botao>
            </div>
        </div>
    )
}
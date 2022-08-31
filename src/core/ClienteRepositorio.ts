import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    deletar(cliente: Cliente): Promise<void>
    listar(cliente: Cliente): Promise<Cliente[]>
}
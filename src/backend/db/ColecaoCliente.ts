import Cliente from "../../core/Cliente";
import firebase from "../Config";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    private conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot?.data(options)
            return new Cliente(dados?.nome, dados?.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id) {
            await this.tabelaClientes().doc(cliente.id).set(cliente);
            return cliente
        }
            
        const docRef = await this.tabelaClientes().add(cliente)
        const doc = await docRef.get()
        return doc.data()
    }

    async deletar(cliente: Cliente): Promise<void> {
        return await this.tabelaClientes().doc(cliente.id).delete()
    }

    async listar(): Promise<Cliente[]> {
        return (await this.tabelaClientes().get()).docs.map(doc => doc.data()) ?? [];
    }

    private tabelaClientes() {
        return firebase.firestore().collection('clientes').withConverter(this.conversor)
    }
}
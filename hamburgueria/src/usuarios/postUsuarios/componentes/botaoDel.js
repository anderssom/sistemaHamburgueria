//cria o botao deleta
const BotaoDel = () => {
    const botaoDel = document.createElement('button');

    //texto do botao
    botaoDel.classList.add('check-button');
    botaoDel.innerText = 'Deletar';

    // evento de click
    botaoDel.addEventListener('click',deletarTarefa);

    return botaoDel;
}
const deletarTarefa = (evento) => {

    const botaoDel = evento.target

    const tarefaCompleta = botaoDel.parentElement

    tarefaCompleta.remove(del);

}
async function del() {

    try {

        const response = await fetch ('http://localhost:3338/login/:id');
        console.log(response)

    } catch (error) {
        console.log(error);
        
    }

}
del()

export default BotaoDel
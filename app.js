import carros2024 from './tabelacarros.js';
import express from 'express';

const app = express ();

app.use(express.json());

app.get('/',(resisicao,resposta) => {
    resposta.status(200).send(carros2024);
});

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase(); // Obtém a sigla do parâmetro da URL.
    const carro = carros2024.find((infoCarro) => infoCarro.sigla === siglaInformada); // Busca o carro pela sigla.
    if (!carro) {
        // ! Vazio - Not
        // Se o carro não for encontrado, retorna erro 404.
        resposta
        .status(404)
        .send(
            'Não existe um carro com a sigla informada!' // Mensagem de erro explicativa.
        );
     return; // Para a função
    }
    resposta.status(200).send(carro); // Se encontrado, retorna o carro com status 200 (OK).
});
app.post('/', (req, res) => {
    const novoCarro = req.body; // Obtém o corpo enviado para incluir um carro
    carros2024.push(novoCarro); // Adiciona o novo carro à lista de carros.
    res.status(200).send(novoCarro); // Retorna o carro adicionado com status 200 (Ok).
});
app.listen(3000,() => console.log ("Servidor Rodando com Sucesso"));

//node app.js
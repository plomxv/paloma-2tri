const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Marina está planejando uma festa surpresa para seu melhor amigo, João. Depois de decidir organizar uma festa temática dos anos 80, ela pede ajuda a seus amigos para os preparativos. Eles poderiam:",
        alternativas: [
            {
                texto: " Decorar a festa com elementos clássicos dos anos 80, como neon e fitas cassete.",
                afirmacao: " "
            },
            {
                texto: "Transformar a festa em um mistério interativo, onde os convidados teriam que resolver enigmas para encontrar o local da festa.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: " Enquanto preparavam os detalhes da festa, Marina e seus amigos, João, Ana e Pedro, encontram um mapa do tesouro na praia. Eles decidem seguir o mapa antes da festa para adicionar um toque emocionante ao evento. Eles poderiam:",
        alternativas: [
            {
                texto: "Seguir o mapa tradicionalmente, cavando na areia onde o X estava marcado.",
                afirmacao: ""
            },
            {
                texto: "Usar um detector de metal para tentar encontrar o tesouro mais rapidamente, mesmo que isso quebrasse um pouco a tradição.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: " Durante a busca pelo tesouro, o grupo se depara com um desafio: encontrar a chave de um baú trancado que supostamente guarda o tesouro. Para se preparar para o concurso de fantasias na escola, eles decidem incorporar elementos do mapa do tesouro em suas fantasias. Eles poderiam:",
        alternativas: [
            {
                texto: "Criar fantasias com elementos piratas, como chapéus de capitão e mapas do tesouro.",
                afirmacao: ""
            },
            {
                texto: "Escolher fantasias baseadas nos enigmas do mapa, como exploradores em busca de tesouros perdidos.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Após desvendarem os enigmas do mapa, o grupo finalmente encontra o tesouro - uma passagem secreta para a Terra dos Doces! Eles decidem fazer uma pausa nas festividades da festa surpresa e explorar este novo mundo incrível juntos. Eles poderiam:",
        alternativas: [
            {
                texto: "Construir uma casa feita de chocolate e marshmallow para se esconder dos guardiões da terra dos doces.",
                afirmacao: ""
            },
            {
                texto: "Partir em uma missão para encontrar o lendário rio de chocolate, onde dizem que todos os desejos se tornam realidade.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Depois de voltarem da Terra dos Doces com bolsos cheios de doces e memórias incríveis, Marina e seus amigos decidem encerrar as festividades da festa surpresa com uma viagem ao parque de diversões local, onde relembram suas aventuras e planejam as próximas. Eles poderiam:",
        alternativas: [
            {
                texto: "Começar com as montanhas-russas mais radicais para sentir a adrenalina desde o início.",
                afirmacao: ""
            },
            {
                texto: "Iniciar com os jogos de habilidade e tentar ganhar prêmios divertidos para levar para casa como lembrança.",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "Após embarcarem em uma jornada cheia de surpresas e aventuras, Marina e seus amigos descobriram que a verdadeira magia está na amizade e na união. Desde o planejamento da festa surpresa até a busca pelo tesouro na praia e a aventura na Terra dos Doces, cada momento foi marcado pela colaboração e pela criatividade do grupo. Ao incorporar elementos dos enigmas do mapa do tesouro em suas fantasias para o concurso de fantasias e explorar juntos a Terra dos Doces, eles fortaleceram seus laços de amizade e compartilharam momentos inesquecíveis. Ao encerrar as festividades com uma viagem ao parque de diversões, eles celebraram suas conquistas e planejaram novas aventuras, cientes de que, com amizade e imaginação, cada dia pode se tornar uma jornada emocionante e repleta de diversão.";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim..";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

// MENSAGEM DE BOAS-VINDAS
let usuario = prompt("Digite seu nome:");

if (usuario !== null) {

    usuario = usuario.trim();

    if (usuario.length > 0) {

        let nomeFormatado =
            usuario.charAt(0).toUpperCase() +
            usuario.slice(1).toLowerCase();

        alert(`Bem-vindo(a), ${nomeFormatado}!`);

        console.log(`Usuário conectado: ${nomeFormatado}`);

    } else {

        alert("Você não digitou nenhum nome.");

    }
}

// SLIDESHOW / GALERIA
const imagens = [
    "imagens/galeria1.jpg",
    "imagens/galeria2.jpg",
    "imagens/galeria3.jpg"
];

let imagemAtual = 0;

const imagemSlider =
    document.getElementById("sliderImage");

const botaoProximo =
    document.getElementById("nextBtn");

const botaoAnterior =
    document.getElementById("prevBtn");


// FUNÇÃO TROCAR IMAGEM
function trocarImagem() {

    imagemSlider.src =
        imagens[imagemAtual];

    console.log(
        `Imagem exibida:
        ${imagens[imagemAtual]}`
    );

}


// BOTÃO PRÓXIMO
botaoProximo.addEventListener(
    "click",
    function () {

        imagemAtual++;

        if (imagemAtual >= imagens.length) {

            imagemAtual = 0;

        }

        trocarImagem();

    }
);


// BOTÃO ANTERIOR
botaoAnterior.addEventListener(
    "click",
    function () {

        imagemAtual--;

        if (imagemAtual < 0) {

            imagemAtual =
                imagens.length - 1;

        }

        trocarImagem();

    }
);


// SLIDESHOW AUTOMÁTICO
setInterval(function () {

    imagemAtual++;

    if (imagemAtual >= imagens.length) {

        imagemAtual = 0;

    }

    trocarImagem();

}, 5000);

// MODAL LOGIN
const abrirLogin =
    document.getElementById("openLogin");

const modal =
    document.getElementById("loginModal");

const fecharModal =
    document.getElementById("closeModal");


// ABRIR MODAL
abrirLogin.addEventListener(
    "click",
    function () {

        modal.style.display = "flex";

    }
);


// FECHAR MODAL
fecharModal.addEventListener(
    "click",
    function () {

        modal.style.display = "none";

    }
);


// FECHAR AO CLICAR FORA
window.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            modal.style.display = "none";

        }

    }
);

// LOGIN
const loginForm =
    document.getElementById("loginForm");

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        let usuarioLogin =
            document.getElementById("loginUser")
            .value.trim();

        let senhaLogin =
            document.getElementById("loginPassword")
            .value.trim();


        // VALIDAÇÃO
        if (
            usuarioLogin === "" ||
            senhaLogin === ""
        ) {

            alert(
                "Preencha todos os campos do login!"
            );

            return;

        }


        // LOGIN FIXO
        if (
            usuarioLogin === "admin" &&
            senhaLogin === "1234"
        ) {

            alert(
                `Login realizado com sucesso!
                Bem-vindo(a), ${usuarioLogin}!`
            );

            modal.style.display = "none";

            loginForm.reset();

        } else {

            alert(
                "Usuário ou senha incorretos!"
            );

        }

    }
);
// FORMULÁRIO DE CONTATO
const formulario =
    document.getElementById("contactForm");

formulario.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        let nome =
            document.getElementById("name")
            .value.trim();

        let email =
            document.getElementById("email")
            .value.trim();

        let senha =
            document.getElementById("password")
            .value.trim();


        // VALIDAÇÃO NOME
        if (nome === "") {

            alert("Digite seu nome!");
            return;

        }


        // VALIDAÇÃO EMAIL
        if (email === "") {

            alert("Digite seu email!");
            return;

        }

        if (
            email.includes("@") === false ||
            email.includes(".") === false
        ) {

            alert("Digite um email válido!");
            return;

        }


        // VALIDAÇÃO SENHA
        if (senha === "") {

            alert("Digite sua senha!");
            return;

        }

        if (senha.length < 4) {

            alert(
                "A senha deve possuir no mínimo 4 caracteres!"
            );

            return;

        }


        // FORMATAR NOME
        let nomeFormatado =
            nome.charAt(0).toUpperCase() +
            nome.slice(1).toLowerCase();


        // SUCESSO
        alert(
            `Formulário enviado com sucesso,
            ${nomeFormatado}!`
        );

        console.log("FORMULÁRIO:");
        console.log(`Nome: ${nomeFormatado}`);
        console.log(`Email: ${email}`);


        // LIMPAR FORMULÁRIO
        formulario.reset();

    }
);

// EFEITO NOS CARDS
const cards =
    document.querySelectorAll(".card");

cards.forEach(function (card) {

    // MOUSE ENTRA
    card.addEventListener(
        "mouseover",
        function () {

            card.style.backgroundColor =
                "#eaf1ff";

            card.style.transform =
                "translateY(-10px)";

        }
    );


    // MOUSE SAI
    card.addEventListener(
        "mouseout",
        function () {

            card.style.backgroundColor =
                "#f7f9fd";

            card.style.transform =
                "translateY(0px)";

        }
    );

});

// CONTADOR DE CARACTERES
const campoNome =
    document.getElementById("name");

campoNome.addEventListener(
    "keyup",
    function () {

        let quantidade =
            campoNome.value.length;

        console.log(
            `Caracteres digitados:
            ${quantidade}`
        );

    }
);

// VERIFICAR IMAGENS
function isImagem(nomeArquivo) {

    let lower =
        nomeArquivo.toLowerCase();

    return (

        lower.endsWith(".png") ||
        lower.endsWith(".jpg") ||
        lower.endsWith(".jpeg") ||
        lower.endsWith(".webp")

    );

}


// TESTE DAS IMAGENS
for (let i = 0; i < imagens.length; i++) {

    console.log(

        `${imagens[i]}
        -> ${isImagem(imagens[i])}`

    );

}

// DATA E HORA
const dataAtual = new Date();

console.log(

    `Projeto iniciado em:
    ${dataAtual.toLocaleDateString()}
    ${dataAtual.toLocaleTimeString()}`

);
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

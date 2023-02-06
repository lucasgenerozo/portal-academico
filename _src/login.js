const btnVisib = document.getElementById("icon-olho");
const campoSenha = document.getElementById("user-password");
const btnEntrar = document.getElementById("main");

btnEntrar.addEventListener('click', (e) => {
    e.preventDefault();
    // essa função é provisória enqnt nao é feita a de logar
})

function visibSenha() {

    //dei uma pesquisada e nn consegui outro jeito de mostrar a senha sem ser na gambiarra
    if (campoSenha.classList.contains('fechado')) {
        //aqui muda pra aberto
        btnVisib.src = "_assets/login/icon-eye-open.png";
        campoSenha.classList.remove('fechado');
        campoSenha.type = "text"
        // campoSenha.type = "text"
    } else {
        //e aqui muda pra fechado
        btnVisib.src = "_assets/login/icon-eye-close.png";
        campoSenha.classList.add('fechado');
        campoSenha.type = "password"
        // campoSenha.type = "password"
    }

    //acho que da pra otimizar esse if
    // ? : ; e retorna dentro de uma array a loc do olho, o estado e o tipo do input
    //no caso do class e so nn passar nenhum no remov
    //enfim nn da mais tempo hj
}
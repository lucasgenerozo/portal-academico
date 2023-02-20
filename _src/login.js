const btnVisib = document.getElementById("icon-olho");
const campoSenha = document.getElementById("user-password");
const btnEntrar = document.getElementById("main");

const alerta = document.getElementById('alert-help');

btnEntrar.addEventListener('click', (e) => {
    e.preventDefault();
    // essa função é provisória enqnt nao é feita a de logar
})

function visibSenha() {

    //dei uma pesquisada e nn consegui outro jeito de mostrar a senha sem ser na gambiarra
    let infos = (campoSenha.classList.contains('fechado')) ? ['close', '', 'text'] : ['open', 'fechado', 'password'];

    btnVisib.src = `_assets/login/icon-eye-${infos[0]}.png`;
    campoSenha.classList = infos[1];
    campoSenha.type = infos[2];
}

function help(quo){
    alerta.style.display = quo 
}

help('none')
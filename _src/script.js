const div_options = document.getElementById("options")

const itemsImagesNames = [
    'eventos-acad',
    'microsoft',
    'atestados',
    'atividades-comp',
    'autorizar',
    'avaliacao-docente',
    'biblioteca',
    'bibliotecas-dig',
    'boleto',
    'campanhas-soli',
    'certificados',
    'impressao'
]

const itemsText = [
    'Eventos Acadêmicos',
    'Aplicativos Misocroft',
    'Atestados',
    'Atividades Complementares',
    'Autorizar Pessoas',
    'Avaliação Docente',
    'Biblioteca',
    'Bibliotecas digitais',
    'Boleto 2ª via',
    'Campanhas Solidárias',
    'Certificados',
    'Consulta de Impressão e Xerox'
]

function generateItems () {
    for (let i = 0; i < itemsImagesNames.length; i++) {
        div_options.innerHTML +=
        `
        <div class="item" id="opt-${itemsImagesNames[i]}">
                <img src="_assets/icon-${itemsImagesNames[i]}.png" alt="Icone de ${itemsText[i]}">
                <h3>${itemsText[i]}</h3>
        </div>
        `
    }
}

generateItems();
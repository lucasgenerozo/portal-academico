const div_options = document.getElementById("options")

const itemsImagesNames = [
    'icon-lampada',
    'icon-windows',
    'icon-atestado',
    'icon-teste'
]

const itemsText = [
    'Eventos Acadêmicos',
    'Aplicativos Misocroft',
    'Atestados',
    'Atividades Complementares'
]

function generateItems () {
    for (let i = 0; i < itemsImagesNames.length; i++) {
        div_options.innerHTML +=
        `
        <div class="item" id="${itemsImagesNames[i]}">
                <img src="_assets/${itemsImagesNames[i]}.png" alt="Icone de ${itemsText[i]}">
                <h3>${itemsText[i]}</h3>
        </div>
        `
    }
}

generateItems();
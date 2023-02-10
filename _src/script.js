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
    'impressao',
    'consultas',
    'contratos',
    'declaracao-calend',
    'declaracao-imp',
    'disciplinas-dep',
    'ecom',
    'horario-aulas',
    'localizacao-prof',
    'materiais-xerox',
    'matricula-vet',
    'monografia',
    'nap',
    'notas',
    'pesquisas',
    'registrar-pre',
    'requisicoes',
    'revisao',
    'troca-de-prof'
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
    'Consulta de Impressão e Xerox',
    'Consultar Resevas',
    'Contratos',
    'Declaração Calendário de Provas',
    'Declaração Imposto de Renda',
    'Disciplinas Dependência',
    'E-com(De/Para)',
    'Horário das Aulas',
    'Localização de Professor',
    'Materiais Xerox',
    'Matrícula Veterano',
    'Monografia',
    'N.A.P. Núcleo de Apoio Psicopedagógico',
    'Notas e Faltas',
    'Pesquisas PIC/PIBIC/PIBIT',
    'Registrar Presença em Eventos',
    'Requisições',
    'Revisão de Provas/Exames',
    'Troca de Professores'
]

function generateItems () {
    for (let i = 0; i < itemsImagesNames.length; i++) {
        div_options.innerHTML +=
        `
        <div class="item" id="opt-${itemsImagesNames[i]}">
                <img src="_assets/home/icon-${itemsImagesNames[i]}.png" alt="Icone de ${itemsText[i]}">
                <h3>${itemsText[i]}</h3>
        </div>
        `
    }
}

generateItems();
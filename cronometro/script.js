

const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const minutos = document.querySelector('.minutos')

let miliNum = 0
let segNum = 0
let minNum  = 0 
let intervalo

//definicão da funçao milissegundos, segundos e minutos//
function  milissegundos() {
    miliNum++
    if (miliNum < 10) {
        miliseg.innerHTML = '0' + miliNum
    } else {
        miliseg.innerHTML = miliNum
    }
    if (miliNum == 99){
        miliNum = 0
    }   segundos()
}
function segundos() {
    segNum++
    seg.innerHTML = segNum
}

function minutos() {
    minNum++
    min.innerHTML = minNum
}

//Funcao quando aperta INICIAR
//APOS LIMPARMOS O INTERVALO ANTERIOR, DEFINIDO NOVO INTERVALO DE DE 0,010 SEGUNDOS E CHAMAREMOS A FUNÇÃO milissegundos a cada 1 milissegundos = 0,010 segundos//
function iniciar (){
    clearInterval (intervalo)
    intervalo = setInterval(() => {
        milissegundos()
    }, 10 )
}

function parar
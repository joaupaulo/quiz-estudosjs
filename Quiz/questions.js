const askData = [
    
    
    {
        question : 'Quantos titulos o F.C CLUBE BAHIA TEM ? ' ,
        a : '78' ,
        b : ' 90 ' ,
        c : '54' ,
        d : '89',
        correta : 'D'
} ,

{
    question : 'Qual a maior cidade da america látina ? ' ,
    a : 'São Paulo' ,
    b : ' Rio De Janeiro ' ,
    c : 'Belo Horizonte' ,
    d : 'Salvador',
    correta : 'A'
} ,

{
    question : 'Qual a moeda mas cara dentre essas ? ' ,
    a : 'Dolar' ,
    b : ' Dolar Canadense' ,
    c : 'Euro' ,
    d : 'Real',
    correta : 'C'
} ,



{
    question : 'Qual a moeda mas cara dentre essas ? ' ,
    a : 'Dolar' ,
    b : ' Dolar Canadense' ,
    c : 'Euro' ,
    d : 'Real',
    correta : 'C'
}  ,


{
    question : 'Qual o maior cantode arrocha do momento ? ' ,
    a : 'Thierry' ,
    b : 'Luan Santana ' ,
    c : 'Pablo' ,
    d : 'Filipe Ret',
    correta : 'A'
} 
 


]

let text_h = document.getElementById('ask');
let a_text = document.getElementById('a_texto');
let b_text =  document.getElementById('b_texto');
let c_text = document.getElementById('c_texto');
let d_text = document.getElementById('d_texto');
let submit = document.getElementById('submit');

let currentAsk = 0


infos()


function infos() {

let questionsData = askData[currentAsk];


text_h.innerText = questionsData.question;
a_text.innerText = questionsData.a;
b_text.innerText = questionsData.b;
c_text.innerText = questionsData.c;
d_text.innerText = questionsData.d;

currentAsk++;

}


submit.addEventListener('click', () => {
    currentAsk++;

    if(cuurentAsk < askData.length) {

        infos()

} else {
    alert('Parabéns vocÊ concluiu')
}
     
})
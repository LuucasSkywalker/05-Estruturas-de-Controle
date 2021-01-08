
const test = function (value){
if (value <= 6) {

    console.log(value)
}

}
test(5);
test(8);

/****************************************** */

const test2 = ((value)=>{

    if (value >= 6){
        //return `voce foi aprovado, sua nota ${value}`
        //ou então usar console.log(value) para gerar o valor
        console.log('sua nota foi ' + value)
    } else {
        return `REPROVADO, sua nota ${value}`
    };
});
const res2 = test2(9)
//console.log(res2)

  /******************************************** */


const age = 70
console.log(`Voce tem ${age} anos.`);
if (age < 16 ){
    console.log('nao vota')}

 else if (age < 18 || age > 65 ){          //usando OU "||" PRECISA APENAS UMA PARA SER VERDADEIRO
    console.log('voto opcional')}

  else  { 
    console.log('voto obrigatorio')} ; 
  
    /****************************************** */


const timetoday = new Date();
const time = timetoday.getHours();

console.log(`Agora sao exatamente ${time}`);
if (time < 08 || time < 12){
    console.log('bom dia');
} else if(time <= 18){
    console.log('boa tarde');
} else if (time > 18){
    console.log('boa noite');
};
 

//---------------------------------------------------------------------**

const timenow = new Date();
const time1 = timenow.getHours();
const datenow = new Date();
const date = datenow.getDay();

console.log(`Agora sao exatamente ${time} hrs!!`);
if (time < 12){
    console.log('bom dia');
} else if(time <= 18){
    console.log('boa tarde');
} else if (time >= 18) {
    console.log('boa noite');
} 


switch (date) {
      case 0:
         console.log('domingo');
         break;
        
      case 1:
         console.log('segunda-feira');
          break;
         
      case 2:
          console.log('terca-feira');
          break;
         
      case 3:
          console.log('quarta-feira');
          break;
          
      case 4:
          console.log('quinta-feira');
          break; 

      case 5: 
          console.log('sexta-feira') ;   
          break; 

      case 6:
          console.log('sabado');
          break;     
    default:
          console.log('ERRO, dia ivalido');
          break;
}

//---------------------------------------------------------------------**

const age2  = 18
if (age2 < 18){
    console.log('voce e de menor infelizmente');
} else {
console.log(` Bem Vindo(a). Sua idade e ${age2} anos`);

};

//---------------------------------------------------------------------**
// SWITCH DENTRO DE UMA CONDIÇÃO IF ..
age3 = 15

  
  if ( age3 >= 18){
 const sinal = 'verde'  // comando execultando 'verde' .

switch (sinal){
    case ('verde'):
        console.log('siga');
    break;
    case ('amarelo'):
        console.log('atencao');
    break;  
    case ('vermelho'):
        console.log('pare');
    break;   
    
    default:
        console.log('nao existe');
}
} else {
    console.log('Desculpe sua idade nao e permitida');
};

//---------------------------------------------------------------------**
//PERCORENDO UM ARRAY USANDO FOR

const names = ['name:Lucas','name:Larissa','name:Annabelle'];

for (let n = 0; n < names.length; n++){
    console.log(`${n} = ${names[n]}`)
};

//PERCORENDO UM ARRAY E ARMAZENANDO NELE UTILIZANDO O FOR
const notas = [7.7, 8.5, 4.6, 6.1, 5.8, 5.5, 8.1, 4.9]

const notasAprovadas = []
for (let i = 0; i <= notas.length; i++){
    if (notas[i] >= 6) {
    notasAprovadas.push(notas[i])
}}

console.log(notasAprovadas)


//---------------------------------------------------------------------**
//usando o for IN no array

const note = [7.2 ,2.5, 8.4, 6.2] 

for (let c in note){
    console.log(`${c} = ${note[c]}`)
};

//---------------------------------------------------------------------**
//percorendo Objetos usando FOR IN

const person = {
    name1:'Lucas',
    name2:'Larissa',
    name3:'Annabelle',
    name4:'Torresmo',
    name5:'peppa',

};

for (let p in person){
    console.log( `${p} = ${person[p]}`)
};

//Armazenando valores num ARRAY usando FOR IN
const notas = [7.7, 8.5, 4.6, 6.1, 5.8, 5.5, 8,1, 4.9] //array com notas diferentes

const notasAprovadas = []          //array vazío para armazenar elementos dentro
for (let i in notas)               //usando um for in para percorrer o array notas
if (notas[i] >= 6) {               //usando um if para usar a condição do valor que é aprovado 
    notasAprovadas.push(notas[i])  //usando o push para armazenar os valores aprovados no array
}
console.log(notasAprovadas)        //valor retornado 7.7, 8.5, 6.1, 8.1



//---------------------------------------------------------------------**


function test (value){
if (value <= 6) {

    console.log(value)
}

}
test(5);
test(8);

/****************************************** */

const test2 = ((value)=>{

    if (value >= 6){
        return `voce foi aprovado, sua nota ${value}`
    } else {
        return `REPROVADO, sua nota ${value}`
    };
});
const res2 = test2(9)
console.log(res2)

/* arrow function
 não precisar colocar FUNCTION pois é 
 substituido pelos parentes (**)
*/

let calc = (n1,n2) => {
    return n1 + n2;
}
let res = calc(5, 5);
console.log(res);

// Arrow sem return

let calc = (n1,n2) => {n1 * n2}
let res = calc(3,3)
console.log(res)

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
 

/************************************************* */

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

/************************************************** */


const age2  = 18
if (age2 < 18){
    console.log('voce e de menor infelizmente');
} else {
console.log(` Bem Vindo(a). Sua idade e ${age2} anos`);

};

/*************************************************** */
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
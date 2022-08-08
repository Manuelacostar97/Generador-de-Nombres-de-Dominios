console.log('Hello World')

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var exten =['.com','.es',];
var dominio =[];
var seleccion =[];


pronoun.forEach(p =>{
    adj.forEach(s => {
        noun.forEach(n =>{
            exten.forEach(e =>{
                dominio.push(`${p}${s}${n}${e}`);
            });    
        });    
    });
  });

for (let i = 0; i < 16; i++) {
        let i = parseInt(Math.random() * dominio.length);
        seleccion.push(dominio[i]);
        dominio.splice(i, 1);
}

console.log(dominio)
console.log(seleccion)

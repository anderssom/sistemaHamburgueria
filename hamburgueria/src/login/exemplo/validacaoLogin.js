/*function entrar(){

    const email = document.getElementById('text')
const senha = document.getElementById('senha')
//const res = document.getElementById('res')
const n1 = Number(email.value)
const n2 = Number(senha.value)
const s = n1 + n2
//alert (`A soma ${n1} e ${n2} e igual a ${s}`)
location.replace('../home/home.html')
    
}*/
function entrar(){

    const ema = document.getElementById('email')
    const pass = document.getElementById('senha')
    const and = Number(ema.value)
    const sen = Number(pass.value)
    const s = and + sen

    alert (`ola ${and} e ${sen} foi ${s} kkkk`)

    //if(email ==  and && pass == sen){
       // location.replace('../home/home.html')
        
    //}
}
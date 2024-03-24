//DECLARANDO AS VARIAVEIS
let p1=prompt("Digite seu nome");
let p2=prompt("O que você gostaria de ter com você?");
let p3=prompt("Em uma escala de 1 a 3, o quanto você irá se dedicar para conquistar tal desejo?");
let msg=document.getElementById("msg");

if (p3 == 1)
{
    msg.innerHTML=`<p>Olá, ${p1}. Gostamos do seu desejo de ter conquistar ${p2}, 
    mas aparentemente você não faz muita questão de conseguir...`
}else if (p3 == 2)
{
    msg.innerHTML=`<p>Olá, ${p1}. Achamos interessante seu desejo de consquistar ${p2}, e por mais que você
     não queira muito conseguir, acreditamos que você consiga com muito esforço</p>`
}else if (p3 == 3){
    msg.innerHTML=`<p>Olá, ${p1}. Muito legal seu desejo de conquistar ${p2}, e acreditamos que se você se
     animar mais com seu desejo você irá conseguir!!</p>`
}else if (p3 == 4){
    msg.innerHTML=`<p>Olá, ${p1}. Incrivel seu desejo de consquistar ${p2}, corra atrás dele para se orgulhar no futuro!</p>`
}
else if (p3 == 5){
    msg.innerHTML=`<p>Olá, ${p1}. Seu desejo de conquistar ${p2} é surreal, 
    com muito esforço e dedicação você irá realizá-lo em breve, até porque força de vontade você tem bastante!!!</p>`
}

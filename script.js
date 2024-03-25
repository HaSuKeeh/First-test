//DECLARANDO AS VARIAVEIS
let p1=prompt("Digite seu nome");
let p2=prompt("O que você gostaria de conquistar?");
let p3=prompt("Em uma escala de 1 a 5, o quanto você irá se dedicar para conquistar tal desejo?");
let msg=document.getElementById("msg");

while (p3 < 1 || p3 > 5) {
    p3 = parseInt(prompt("Por favor, insira um valor entre 1 e 5 para sua dedicação:"));
}
 

let RES = ""


if (p3 == 1)
{
    RES = "mas aparentemente você não faz muita questão de conseguir..."
}
else if (p3 == 2)
{
    RES = "e por mais que você não queira muito conseguir, acreditamos que você consiga com muito esforço"
}
else if (p3 == 3)
{
    RES = "e acreditamos que se você se animar mais com seu desejo você irá conseguir!!"
}
else if (p3 == 4)
{
    RES = "corra atrás dele para se orgulhar no futuro!"
}
else if (p3 == 5)
{
    RES = "com muito esforço e dedicação você irá realizá-lo em breve, até porque força de vontade você tem bastante!!!" 
}


msg.innerHTML=`<p>Olá, ${p1}. Gostamos do seu desejo de conquistar ${p2}, ${RES}</p>`



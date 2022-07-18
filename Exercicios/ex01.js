/* primeiro de teste */
const nome = "Lucas";
const peso = 84;
const altura = 1.90;
let imc = peso / (altura * altura);
if (imc < 18) {
    console.log("Desnutrido");
} else {
    console.log("Ta bacana o shape");
}
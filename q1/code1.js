//Sintetizador
function fala(letra) {
    var sintetizador = new SpeechSynthesisUtterance(letra);
    sintetizador.lang = "pt-BR"; // idioma português
    sintetizador.rate = 1; // velocidade da fala (1 = normal)
    sintetizador.pitch = 100; // tom da voz

    speechSynthesis.cancel(); // interrompe fala anterior, se houver
    speechSynthesis.speak(sintetizador);
}


const vogais = ["a", "e", "i", "o", "u"]
const img = ["img/abacaxi.png", "img/elefante.png", "img/igreja.png", "img/ovo.png", "img/uva.png"]


$(document).keydown(function(event) {
    if (!/^[a-zA-Z]$/.test(event.key)) {
        return;
    }
    for (let i = 0; i < vogais.length; i++) {
        if (event.key === vogais[i]) {
            $(".letras").html(event.key);
            $(".imagem").html(`<img src= "${img[i]}" > </img`);
            fala(event.key);
            return;
        }
    }
    $(".letras").html(event.key);
    $(".imagem").html("");
    fala(event.key);
})
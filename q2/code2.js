let campoAtual = "decimal";

$("input").focus(function() {
    campoAtual = $(this).parent().attr("id");
});

$("input").on("input", function() {
    const valor = $(this).val();
    const base = $(this).parent().attr("id");

    if (valor === "") {
        return;
    }

    let decimal;

    if (base === "binario") {
        decimal = parseInt(valor, 2);
    }
    if (base === "decimal") {
        decimal = parseInt(valor, 10);
    }
    if (base === "octal") {
        decimal = parseInt(valor, 8);
    }
    if (base === "hexadecimal") {
        decimal = parseInt(valor, 16);
    }

    $("#binario input").val(decimal.toString(2));
    $("#decimal input").val(decimal.toString(10));
    $("#octal input").val(decimal.toString(8));
    $("#hexadecimal input").val(decimal.toString(16).toUpperCase());

});

$(".botao").click(function() {

    const valor = $(this).text();

    const input = $(`#${campoAtual} input`);

    input.val(input.val() + valor);

    input.trigger("input");
});

$("#del").click(function() {
    $("input").val("");
    campoAtual = "decimal";
});
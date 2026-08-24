function addList() {
    const title = $(".taskName").val().trim();

    if (title === "") {
        return;
    }

    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth()+1).padStart(2, "0");

    const hora = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");

    const horario = `${hora}:${minutos} - ${dia}/${mes}`;

    $(".list").append(`<div class="item">
                <input type="checkbox">
                <h3> ${title} </h3>
                <p class="date">${horario}</p>
                <div class="del">X</div>
            </div>`)

    localStorage.setItem("lista", $(".list").html());
    $(".taskName").val("");
}

function delList() {
    $(this).parent(".item").remove();
    localStorage.setItem("lista", $(".list").html());
}


$(".create").on("click", addList);
$(".list").on("click", ".del", delList);

$(".list").on("change", "input[type='checkbox']", function() {
        $(this).attr("checked", this.checked);
        localStorage.setItem("lista", $(".list").html());
    });


$(".list").html(localStorage.getItem("lista"));

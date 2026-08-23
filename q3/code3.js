function addList() {
    const title = $(".taskName").val().trim();

    if (title === "") {
        return;
    }


    $(".list").append(`<div class="item">
                <input type="checkbox">
                <h3> ${title} </h3>
                <div class="del">X</div>
            </div>`)
    localStorage.setItem("lista", $(".list").html());
    $(".taskName").val("");
}

function delList() {
    $(this).parent(".item").remove();
    localStorage.setItem("lista", $(".list").html());

    $(".list").on("change", "input[type='checkbox']", function() {
        $(this).attr("checked", this.checked);
        localStorage.setItem("lista", $(".list").html());
    });
}


$(".create").on("click", addList);
$(".list").on("click", ".del", delList);


$(".list").html(localStorage.getItem("lista"));
document.getElementById("button").addEventListener("click", function () {
    const imagem = document.getElementById("selectimg").value

    document.getElementById("1").style.display = "none"
    document.getElementById("2").style.display = "none"
    document.getElementById("3").style.display = "none"
    document.getElementById("4").style.display = "none"
    document.getElementById("5").style.display = "none"

    switch (imagem) {
        case "1":
            document.getElementById("1").style.display = "flex";
            break;

        case "2":
            document.getElementById("2").style.display = "flex";
            break;

        case "3":
            document.getElementById("3").style.display = "flex";
            break;

        case "4":
            document.getElementById("4").style.display = "flex";
            break;

        case "5":
            document.getElementById("5").style.display = "flex";
            break;
    }
})
document.getElementById("toggleParagrafo").addEventListener("click", function() {
    var paragrafo = document.getElementById("meuParagrafo");
    if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
    } else {
        paragrafo.style.display = "none";
    }
});

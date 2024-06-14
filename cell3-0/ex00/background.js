document.getElementById("change-color").addEventListener("click", function() {
    // Função para gerar cores aleatórias
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // Altera o background da página para uma cor aleatória
    document.body.style.backgroundColor = getRandomColor();
});
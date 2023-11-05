const reservarBtn = document.getElementById("reservarBtn");
const modal = document.getElementById("modal");
const mensagemReserva = document.getElementById("mensagemReserva");

reservarBtn.addEventListener("click", () => {
    mensagemReserva.textContent = "Sua mesa foi reservada!";
    modal.style.display = "block";

    // Fechar o modal após 3 segundos
    setTimeout(() => {
        modal.style.display = "none";
        mensagemReserva.textContent = "";
    }, 3000); // 3000 milissegundos = 3 segundos
});

function botaoMenu() {
    console.log("Clique no menu detectado"); // para verificar no console
    var menuLinks = document.querySelector(".menu-links");
    menuLinks.classList.toggle("active");
    console.log("Classes do menu:", menuLinks.classList); // para ver se a classe 'active' foi adicionada
}

// Fecha o menu ao clicar em um item
document.querySelectorAll(".menu-links a").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".menu-links").classList.remove("active");
    });
});
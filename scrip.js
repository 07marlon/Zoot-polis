document.addEventListener("DOMContentLoaded", function () {

    const redes = {
        instagram: "https://www.instagram.com/zootopolis_032026/",
        tiktok: "https://www.tiktok.com/@zotoopolis_03?_r=1&_t=ZS-9AS0UtBTQ9M",
        facebook: "https://www.facebook.com/share/1Fiqk4GdvT/"
    };

    // Asigna el enlace correcto a cualquier elemento con data-red="instagram|tiktok|facebook"
    document.querySelectorAll("[data-red]").forEach(function (boton) {

        const enlace = redes[boton.getAttribute("data-red")];

        if (enlace) {
            boton.href = enlace;
            boton.target = "_blank";
            boton.rel = "noopener noreferrer";
        } else {
            boton.addEventListener("click", function (e) {
                e.preventDefault();
            });
        }

    });

});

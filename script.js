// Función de zoom para todas las secciones
function applyZoomEffect(containerId, imageId) {
    const imageContainer = document.getElementById(containerId);
    const mainImage = document.getElementById(imageId);

    imageContainer.addEventListener("mousemove", (e) => {
        const bounds = imageContainer.getBoundingClientRect();
        const x = ((e.clientX - bounds.left) / bounds.width) * 100;
        const y = ((e.clientY - bounds.top) / bounds.height) * 100;

        mainImage.style.transformOrigin = `${x}% ${y}%`;
        mainImage.style.transform = "scale(2)";
    });

    imageContainer.addEventListener("mouseleave", () => {
        mainImage.style.transform = "scale(1)";
    });
}

// Función para cambiar imágenes en una sección específica
function changeImage(imageSrc, thumbnail, imageId, thumbnailsClass) {
    // Cambia la imagen principal
    document.getElementById(imageId).src = imageSrc;

    // Elimina la clase 'selected' de todas las miniaturas de la sección
    const thumbnails = document.querySelectorAll(thumbnailsClass);
    thumbnails.forEach((thumb) => thumb.classList.remove("selected"));

    // Agrega la clase 'selected' a la miniatura clickeada
    thumbnail.classList.add("selected");
}

// Aplicar el efecto de zoom en la sección de autorretratos
applyZoomEffect("imageZoom", "mainImage");

// Aplicar el efecto de zoom en la sección Traducción
applyZoomEffect("translationZoom", "mainImageTranslation");

// Aplicar el efecto de zoom en la sección de Retratos
applyZoomEffect("portraitZoom", "mainImagePortrait");

// Cambiar imagen en las miniaturas del catálogo principal
function changeImageMain(imageSrc, thumbnail) {
    changeImage(imageSrc, thumbnail, "mainImage", ".catalog-container .thumbnail");
}

// Cambiar imagen en las miniaturas de Traducción
function changeImageTranslation(imageSrc, thumbnail) {
    changeImage(
        imageSrc,
        thumbnail,
        "mainImageTranslation",
        ".translation-section .thumbnail"
    );
}

// Cambiar imagen en las miniaturas de Retratos
function changeImagePortrait(imageSrc, thumbnail) {
    changeImage(
        imageSrc,
        thumbnail,
        "mainImagePortrait",
        ".portrait-section .thumbnail"
    );
}
// Resaltar el enlace activo en el menú
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.catalog-container');
    const links = document.querySelectorAll('.menu ul li a');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            links.forEach(link => {
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.style.backgroundColor = '#575757'; // Resaltar el enlace activo
                } else {
                    link.style.backgroundColor = ''; // Restaurar el color original
                }
            });
        }
    });
});

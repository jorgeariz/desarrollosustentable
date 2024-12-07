// Función unificada para abrir y cerrar el menú
function openNav() {
    const menu = document.getElementById("myNav");
    const button = document.querySelector(".custom_menu-btn");

    // Alternar la clase 'menu_width' y el estilo del botón
    menu.classList.toggle("menu_width");
    button.classList.toggle("menu_btn-style");
}

// Mostrar el año actual
function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("#displayDate").innerHTML = currentYear;
}
displayYear();

// Inicialización del mapa de Google
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Funciones para abrir y cerrar el menú (alternativa con altura)
function openNavHeight() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// Cálculo de huella de carbono
document.getElementById("carbonForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var energia = parseFloat(document.getElementById("energia").value) || 0;
    var transporte = parseFloat(document.getElementById("km_transporte").value) || 0;
    var materiales = parseFloat(document.getElementById("materiales").value) || 0;
    var residuos = parseFloat(document.getElementById("residuos").value) || 0;
    var agua = parseFloat(document.getElementById("agua").value) || 0;

    // Calcular la huella de carbono
    var huellaTotal = energia * 0.5 + transporte * 0.2 + materiales * 0.3 + residuos * 0.1 + agua * 0.05;

    // Mostrar el resultado
    showResponseMessage(huellaTotal);
});

function showResponseMessage(huellaTotal) {
    var messageElement = document.getElementById("responseMessage");
    messageElement.style.display = "block";

    document.getElementById("huellaResult").textContent = huellaTotal.toFixed(2);
}

// Generar PDF
document.getElementById("generatePdfBtn").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Obtener los valores del formulario
    const nombreProyecto = document.querySelector('[name="nombreProyecto"]').value;
    const industria = document.querySelector('[name="industria"]').value;
    const objetivo = document.querySelector('[name="objetivo"]').value;
    const duracion = document.querySelector('[name="duracion"]').value;
    const ubicacion = document.querySelector('[name="ubicacion"]').value;
    const presupuestoIni = document.querySelector('[name="presupuestoIni"]').value;

    // Nuevos campos adicionales
    const impactoAmbiente = document.querySelector('[name="impactoAmbiente"]').value || "No especificado";
    const relacionObjetivo = document.querySelector('[name="relacionObjetivo"]').value || "No especificado";
    const cumplimientoNormas = document.querySelector('[name="cumplimientoNormas"]').value || "No especificado";
    const impactoSocial = document.querySelector('[name="impactoSocial"]').value || "No especificado";
    const impactoEconomico = document.querySelector('[name="impactoEconomico"]').value || "No especificado";

    // Validación de campos vacíos
    if (!nombreProyecto || !industria || !objetivo || !duracion || !ubicacion || !presupuestoIni) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    let yPosition = 20; // Posición inicial
    const lineHeight = 10; // Altura entre líneas

    // Parte 1 del formulario (más importante)
    doc.text("Evaluación de Proyecto Sustentable", 20, yPosition);
    yPosition += lineHeight;

    doc.text("Nombre del Proyecto: " + nombreProyecto, 20, yPosition);
    yPosition += lineHeight;
    doc.text("Sector o Industria: " + industria, 20, yPosition);
    yPosition += lineHeight;
    doc.text("Objetivo del Proyecto: " + objetivo, 20, yPosition);
    yPosition += lineHeight;
    doc.text("Duración Estimada: " + duracion, 20, yPosition);
    yPosition += lineHeight;
    doc.text("Ubicación Geográfica: " + ubicacion, 20, yPosition);
    yPosition += lineHeight;
    doc.text("Presupuesto Inicial: " + presupuestoIni, 20, yPosition);
    yPosition += lineHeight;

    // Verificar si se excede la página y agregar una nueva si es necesario
    if (yPosition > 250) {
        doc.addPage();
        yPosition = 20; // Reiniciar la posición al principio
    }

    // Parte 2: Impacto Ambiental
    doc.text("Impacto Ambiental: " + impactoAmbiente, 20, yPosition);
    yPosition += lineHeight;
    doc.text("Relación con los Objetivos de Sostenibilidad: " + relacionObjetivo, 20, yPosition);
    yPosition += lineHeight;
    doc.text("Cumplimiento de Normas: " + cumplimientoNormas, 20, yPosition);
    yPosition += lineHeight;

    // Parte 3: Impacto Social y Económico
    doc.text("Impacto Social: " + impactoSocial, 20, yPosition);
    yPosition += lineHeight;
    doc.text("Impacto Económico: " + impactoEconomico, 20, yPosition);
    yPosition += lineHeight;

    // Verificar si se excede la página y agregar una nueva si es necesario
    if (yPosition > 250) {
        doc.addPage();
        yPosition = 20; // Reiniciar la posición al principio
    }

    doc.save("proyecto_sustentable.pdf");
});



// Función para manejar el acordeón
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active');
    });
});






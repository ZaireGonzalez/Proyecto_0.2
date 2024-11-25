document.getElementById("registro-form").addEventListener("submit", function(event){
    event.preventDefault();
    
    // Captura el nombre ingresado en el formulario
    const nombre = document.getElementById("nombre").value;
    document.getElementById("usuario-nombre").textContent = nombre;

    // Muestra el menú principal
    document.getElementById("registro-container").style.display = "none";
    document.getElementById("menu-container").style.display = "block";
});

// Lógica para mostrar los módulos correspondientes
document.getElementById("ventas-btn").addEventListener("click", function() {
    toggleModule("ventas-container");
});
document.getElementById("anulaciones-btn").addEventListener("click", function() {
    toggleModule("anulaciones-container");
});
document.getElementById("cierres-btn").addEventListener("click", function() {
    toggleModule("cierres-container");
});
document.getElementById("consulta-btn").addEventListener("click", function() {
    toggleModule("consulta-container");
});
document.getElementById("pqrs-btn").addEventListener("click", function() {
    toggleModule("pqrs-container");
});
document.getElementById("inventario-btn").addEventListener("click", function() {
    toggleModule("inventario-container");
});
document.getElementById("proveedores-btn").addEventListener("click", function() {
    toggleModule("proveedores-container");
});

// Lógica para cambiar de módulo
function toggleModule(moduleId) {
    const modules = document.querySelectorAll("div[id$='-container']");
    modules.forEach(module => module.style.display = "none");
    document.getElementById(moduleId).style.display = "block";
}

// Lógica para el botón de retroceso
const retrocesoBtns = document.querySelectorAll('.retroceso-btn');
retrocesoBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        document.getElementById("menu-container").style.display = "block";
        const modules = document.querySelectorAll("div[id$='-container']");
        modules.forEach(module => module.style.display = "none");
    });
});

//dark
document.getElementById('input').addEventListener('change', () => {
    if (document.body.className.indexOf('dark') === -1) {
      document.body.classList.add('dark');
    }
    else {
      document.body.classList.remove('dark');
    }
});

//funcion contacto
function click(){
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
  });
}

// JavaScript para actualizar automáticamente el año en el copyright
 const currentYear = new Date().getFullYear();
 document.getElementById('copyright').innerHTML = `&copy; ${currentYear} richard castiblanco. Todos los derechos reservados.`;
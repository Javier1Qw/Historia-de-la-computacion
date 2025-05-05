// Destacar inventos al hacer clic
document.querySelectorAll('.invento').forEach(seccion => {
    seccion.addEventListener('click', () => {
      // Quitar la clase de otros
      document.querySelectorAll('.invento').forEach(item => {
        item.classList.remove('destacado');
      });
      // Agregar clase al seleccionado
      seccion.classList.add('destacado');
    });
  });
  
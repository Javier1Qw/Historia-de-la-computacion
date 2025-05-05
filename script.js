// Agrega y quita clase activa al hacer clic en los módulos
document.querySelectorAll('.modulo').forEach(modulo => {
    modulo.addEventListener('click', () => {
      modulo.classList.toggle('activo');
    });
  });
  
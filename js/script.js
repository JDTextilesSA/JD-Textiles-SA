const rollInput = document.getElementById('rollInput');
const jobInput = document.getElementById('job');
const materialInput = document.getElementById('material');
const dimensionsInput = document.getElementById('dimensions');
const weightInput = document.getElementById('weight');
const poundsInput = document.getElementById('pounds');

rollInput.addEventListener('input', () => {
  if (rollInput.value.length > 4) {
    Swal.fire({
      icon: 'warning',
      title: 'Límite excedido',
      text: 'Solo puedes ingresar hasta 4 números',
      timer: 2000,
      showConfirmButton: false
    });
    rollInput.value = rollInput.value.slice(0, 4);
  }
});

function validarYImprimir() {
  const valorRoll = rollInput.value;

  if (!/^\d*$/.test(valorRoll)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Solo se permiten números en ROLL',
    });
    return;
  }

  const isEmptyForm =
    !rollInput.value.trim() &&
    !jobInput.value.trim() &&
    !materialInput.value.trim() &&
    !dimensionsInput.value.trim() &&
    !weightInput.value.trim() &&
    !poundsInput.value.trim();

  if (isEmptyForm) {
    Swal.fire({
      title: 'Formulario vacío',
      text: "El formulario está completamente vacío. ¿Deseas continuar e imprimir?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, imprimir',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        imprimirEtiqueta();
      }
    });
  } else {
    imprimirEtiqueta();
  }
}

function imprimirEtiqueta() {
  if (
    !rollInput.value.trim() &&
    !jobInput.value.trim() &&
    !materialInput.value.trim() &&
    !dimensionsInput.value.trim() &&
    !weightInput.value.trim() &&
    !poundsInput.value.trim()
  ) {
    const etiqueta = document.querySelector('.etiqueta');
    const aviso = document.createElement('p');
    aviso.textContent = 'Formulario vacío';
    aviso.className = 'form-vacio-aviso';
    etiqueta.appendChild(aviso);

    document.body.classList.add('imprimiendo');
    window.print();
    document.body.classList.remove('imprimiendo');

    etiqueta.removeChild(aviso);
  } else {
    document.body.classList.add('imprimiendo');
    window.print();
    document.body.classList.remove('imprimiendo');
  }
}

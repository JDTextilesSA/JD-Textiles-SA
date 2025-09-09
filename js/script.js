function imprimirEtiqueta() {
  document.body.classList.add('imprimiendo');
  window.print();
  document.body.classList.remove('imprimiendo');
}

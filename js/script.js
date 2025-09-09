function imprimirEtiqueta() {
  const etiqueta = document.querySelector('.etiqueta');
  const originalBody = document.body.innerHTML;

  // Solo mostrar la etiqueta
  document.body.innerHTML = etiqueta.outerHTML;

  // Imprimir
  window.print();

  // Restaurar el contenido original
  document.body.innerHTML = originalBody;
}
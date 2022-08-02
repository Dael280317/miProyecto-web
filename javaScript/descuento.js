function descuento(precio, descuento) {
  const porcentajePrecioDescuento = 100 - descuento;
  const precioDescuento = (precio * porcentajePrecioDescuento) / 100;
  return precioDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrecio = document.getElementById("InputPrecio");
  const precioValue = inputPrecio.value;
  const inputDescuento = document.getElementById("InputDescuento").value;
  //var x = document.getElementById("myselect").selectedIndex;
  //const descuentoValue = inputDescuento.value;

  console.log({
    precioValue,
    inputDescuento,
  });
  const precioConDescuento = descuento(precioValue, inputDescuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: S/." + precioConDescuento;
}

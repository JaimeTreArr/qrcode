function generateQR() {
  const url = document.getElementById("urlInput").value;
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = ""; // Limpiar QR anterior

  if (url.trim() === "") {
    alert("Por favor, introduce una URL válida.");
    return;
  }

  new QRCode(qrContainer, {
    text: url,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

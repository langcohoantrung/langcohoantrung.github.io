$(document).ready(function () {
  setTimeout(() => {
    new QRCode(document.querySelector(".qrcode"), {
      text: window.location.href,
      width: 130,
      height: 130,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }, 100);
});

$(document).ready(function () {
  setTimeout(() => {
    const el = document.querySelector(".qrcode");
    el && new QRCode(el, {
      text: window.location.href,
      width: 130,
      height: 130,
      colorDark: "#000",
      colorLight: "#fff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }, 500);
});

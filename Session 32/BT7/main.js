function showImage(src) {
    const overlay = document.getElementById("overlay");
    const fullImg = document.getElementById("fullImage");
    fullImg.src = src;
    overlay.style.display = "flex";
  }

  function hideImage() {
    document.getElementById("overlay").style.display = "none";
  }
// Replace these with your images
  const images = [
    {
      src: "assets/img/doro wardress(6).png",
      original: "assets/img/doro wardress(6).png"
    },
    {
      src: "assets/img/doro wardress(6).png",
      original: "assets/img/doro wardress(6).png"
    },
     {
      src: "assets/img/doro wardress(6).png",
      original: "assets/img/doro wardress(6).png"
    },
     {
      src: "assets/img/doro wardress(6).png",
      original: "assets/img/doro wardress(6).png"
    },
    {
      src: "assets/img/doro wardress(6).png",
      original: "assets/img/doro wardress(6).png"
    }
  ];

  let index = 0;

  const mainImg = document.getElementById("mainImg");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  function update() {
    mainImg.src = images[index].src;
  }

  document.getElementById("prevBtn").onclick = () => {
    index = (index - 1 + images.length) % images.length;
    update();
  };

  document.getElementById("nextBtn").onclick = () => {
    index = (index + 1) % images.length;
    update();
  };

  // clicking main image → lightbox
  mainImg.onclick = () => {
    lightboxImg.src = images[index].original;
    lightbox.style.display = "flex";
  };

  // clicking overlay → close
  lightbox.onclick = () => {
    lightbox.style.display = "none";
  };

  update();
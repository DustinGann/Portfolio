// Replace these with your images
  const images = [
    {
      src: "assets/img/thumbnail/dw(2).jpg",
      original: "assets/img/doro wardress(2).png"
    },
    {
      src: "assets/img/thumbnail/ttp.png",
      original: "assets/img/trash-taste-poster.jpg"
    },
    {
      src: "assets/img/thumbnail/gsit.png",
      original: "assets/img/GSITimeline.png"
    },
     {
      src: "assets/img/thumbnail/dv.jpg",
      original: "assets/img/man.png"
    },
     {
      src: "assets/img/thumbnail/md.jpg",
      original: "assets/img/Mad dum.png"
    },
      {
      src: "assets/img/thumbnail/d2.jpg",
      original: "assets/img/Doro2.png"
    },
      {
      src: "assets/img/thumbnail/mg.jpg",
      original: "assets/img/MiiGunner2.png"
    },
     {
       src: "assets/img/thumbnail/nfl.jpg",
      original: "assets/img/nifl.gif"
      
    },
    {
     src: "assets/img/thumbnail/eye.jpg",
      original: "assets/img/eye.gif"
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
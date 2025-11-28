const modal = document.getElementById("modal");
const modalMedia = document.getElementById("modal-media");
const closeBtn = document.querySelector(".close");

// Open modal on thumbnail click (not the button)
document.querySelectorAll(".thumb").forEach(item => {
  item.addEventListener("click", e => {
    if(e.target.classList.contains("caption-btn")) return;

    const src = item.dataset.preview;
    const isVideo = item.dataset.type === "video";

    modalMedia.innerHTML = isVideo
      ? `<video src="${src}" controls autoplay></video>`
      : `<img src="${src}">`;

    modal.classList.remove("hidden");
  });
});

// Download button functionality
document.querySelectorAll(".caption-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const url = btn.dataset.download;
    if(url){
      const link = document.createElement("a");
      link.href = url;
      link.download = '';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalMedia.innerHTML = "";
});

// Click outside modal to close
modal.addEventListener("click", e => {
  if(e.target === modal){
    modal.classList.add("hidden");
    modalMedia.innerHTML = "";
  }
});

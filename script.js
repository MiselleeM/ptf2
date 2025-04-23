 const data = [
  { title: "Art 1", image: "ai hoshino.jpg", description: "it took me ages to draw this" },
  { title: "Art 2", image: "tomasalpaedisong.jpg", description: "still tryna improve on realism" },
  { title: "Art 3", image: "harassment is not a compliment.jpg", description: "used to make this for schoolwork novel cover" },
  { title: "Art 4", image: "micia1.jpg", description: "i drew this for my bestfriend hehe" },
  { title: "Art 5", image: "yoimiya.jpg", description: "old drawing" },
  { title: "Art 6", image: "harris hbd2.jpg", description: "i drew this for my friend too" },
  { title: "Art 7", image: "COMMS 3 amore bonus.jpg", description: "my first ever commision" },
  { title: "Art 8", image: "spotifycover.jpg", description: "my playlist cover" },
];

function openModal(index) {
  document.getElementById("modalImage").src = data[index].image;
  document.getElementById("modalTitle").innerText = data[index].title;
  document.getElementById("modalDesc").innerText = data[index].description;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Tutup modal jika klik di luar modal-content
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
}

// Tambahan: tekan ESC untuk tutup modal
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Dark mode toggle
const toggle = document.createElement("button");
toggle.textContent = "🌙 ";
toggle.style.position = "fixed";
toggle.style.top = "10px";
toggle.style.right = "10px";
toggle.style.zIndex = "1000";
toggle.style.padding = "10px";
toggle.style.backgroundColor = "#444";
toggle.style.color = "#fff";
toggle.style.border = "none";
toggle.style.borderRadius = "5px";
toggle.style.cursor = "pointer";
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ " : "🌙 ";
});

 const data = [
  { title: "Karya 1", image: "ai hoshino.jpg", description: "Perlu waktu lama untuk menggambar ini" },
  { title: "Karya 2", image: "tomasalpaedisong.jpg", description: "Masih belajar realisme" },
  { title: "Karya 3", image: "harassment is not a compliment.jpg", description: "Untuk sampul novel tugas sekolah" },
  { title: "Karya 4", image: "micia1.jpg", description: "Dibuat untuk sahabatku" },
  { title: "Karya 5", image: "yoimiya.jpg", description: "Karya lama" },
  { title: "Karya 6", image: "harris hbd2.jpg", description: "Dibuat untuk teman" },
  { title: "Karya 7", image: "COMMS 3 amore bonus.jpg", description: "Komisi pertama saya" },
  { title: "Karya 8", image: "spotifycover.jpg", description: "Cover playlist pribadi" },
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
toggle.textContent = "🌙 Mode Gelap";
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
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Mode Terang" : "🌙 Mode Gelap";
});

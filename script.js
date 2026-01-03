function openInvitation() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  const music = document.getElementById("bgm");
  music.play().catch(() => {});
}

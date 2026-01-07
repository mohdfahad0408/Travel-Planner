document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".word-reveal-js").forEach(el => {
    const words = el.textContent.trim().split(/\s+/);

    el.innerHTML = words
      .map((word, i) =>
        `<span style="animation-delay:${i * 0.15}s">${word}&nbsp;</span>`
      )
      .join("");
  });
});
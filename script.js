const buttons = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tabId = btn.dataset.tab;
        contents.forEach(c => c.classList.remove("active"));
        document.getElementById(tabId).classList.add("active");
    });
});

// 網站載入完成
document.addEventListener("DOMContentLoaded", function () {
    console.log("個人網站載入成功！");
});

// 顯示目前年份
const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent = `© ${year} My Personal Website`;
}

// 自動更新目前時間 2026.11.13 21:07
function updateClock() {
    const now = new Date();

    const time = now.toLocaleString("zh-TW", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    document.getElementById("clock").textContent = time;
}

// 每秒更新一次
updateClock();
setInterval(updateClock, 1000);

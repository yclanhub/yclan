
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
document.addEventListener("DOMContentLoaded", function () {
    // 找到網頁上顯示時間的位置
    const clock = document.getElementById("clock");

    // 更新時間
    function updateClock() {
        const now = new Date();

        clock.textContent = now.toLocaleTimeString("zh-TW", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
    }

    // 立即更新一次
    updateClock();

    // 每秒更新一次
    setInterval(updateClock, 100);
});

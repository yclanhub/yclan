
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

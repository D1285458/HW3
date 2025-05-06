document.addEventListener('DOMContentLoaded', function () {
  // 選取 logo 的連結
  const logoLink = document.querySelector('.logo a');

  // 添加點擊事件監聽器
  logoLink.addEventListener('click', function () {
    alert('原本會導向博客來官網，但這邊為了避免引用目標網站的網址所以只彈窗。');
  });

  // 選取社交登入按鈕
  const openpointButton = document.querySelector('.openpoint');
  const facebookButton = document.querySelector('.facebook');
  const lineButton = document.querySelector('.line');

  // 為 OPENPOINT 按鈕添加事件
  openpointButton.addEventListener('click', function () {
    alert('原本會導向OPENPOINT登入頁面，但這邊為了避免引用目標網站的網址所以只彈窗');
  });

  // 為 Facebook 按鈕添加事件
  facebookButton.addEventListener('click', function () {
    alert('原本會導向Facebook登入頁面，但這邊為了避免引用目標網站的網址所以只彈窗。');
  });

  // 為 LINE 按鈕添加事件
  lineButton.addEventListener('click', function () {
    alert('原本會導向LINE登入頁面，但這邊為了避免引用目標網站的網址所以只彈窗。');
  });
});
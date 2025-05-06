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
  const accountInput = document.getElementById('account-input');
  const toggleAccountVisibilityButton = document.getElementById('toggle-account-visibility');
  const accountVisibilityIcon = document.getElementById('account-visibility-icon');

  const passwordInput = document.getElementById('password-input');
  const togglePasswordVisibilityButton = document.getElementById('toggle-password-visibility');
  const passwordVisibilityIcon = document.getElementById('password-visibility-icon');

  // 初始狀態為隱藏密碼
  accountInput.type = 'password';
  accountVisibilityIcon.src = 'close.png'; // 閉眼睛圖標

  passwordInput.type = 'password';
  passwordVisibilityIcon.src = 'close.png'; // 閉眼睛圖標

  // 帳號輸入框的顯示/隱藏功能
  toggleAccountVisibilityButton.addEventListener('click', function () {
    if (accountInput.type === 'password') {
      accountInput.type = 'text'; // 切換為顯示文字
      accountVisibilityIcon.src = 'open.png'; // 開眼睛圖標
    } else {
      accountInput.type = 'password'; // 切換為隱藏密碼
      accountVisibilityIcon.src = 'close.png'; // 閉眼睛圖標
    }
  });

  // 密碼輸入框的顯示/隱藏功能
  togglePasswordVisibilityButton.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'; // 切換為顯示文字
      passwordVisibilityIcon.src = 'open.png'; // 開眼睛圖標
    } else {
      passwordInput.type = 'password'; // 切換為隱藏密碼
      passwordVisibilityIcon.src = 'close.png'; // 閉眼睛圖標
    }
  });
});
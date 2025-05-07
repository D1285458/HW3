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

  // 選取忘記帳號密碼和加入會員的按鈕
  const forgotPasswordLink = document.querySelector('.links a[href="#"]:first-child');
  const joinMemberLink = document.querySelector('.links a[href="#"]:last-child');

  // 為忘記帳號密碼按鈕添加事件
  forgotPasswordLink.addEventListener('click', function (event) {
    event.preventDefault(); // 阻止默認行為
    alert('這裡應該導向查詢帳號密碼的頁面，但因為只有復刻登入頁面沒有復刻這邊的頁面所以彈窗替代。');
  });

  // 為加入會員按鈕添加事件
  joinMemberLink.addEventListener('click', function (event) {
    event.preventDefault(); // 阻止默認行為
    alert('這裡應該導向加入會員的頁面，但因為只有復刻登入頁面沒有復刻這邊的頁面所以彈窗替代。');
  });

 // 選取登入按鈕
 const loginButton = document.querySelector('button[type="submit"]');

 // 為登入按鈕添加事件
 loginButton.addEventListener('click', function (event) {
   event.preventDefault(); // 阻止表單的默認提交行為

   // 選取帳號和密碼輸入框
   const accountInput = document.getElementById('account-input');
   const passwordInput = document.getElementById('password-input');

   // 驗證帳號和密碼是否輸入
   if (!accountInput.value.trim() && !passwordInput.value.trim()) {
    alert('請輸入帳號和密碼！');
    return; // 終止後續執行
  }

   // 驗證帳號和密碼是否輸入
   if (!accountInput.value.trim()) {
     alert('請先輸入帳號！');
     return; // 終止後續執行
   }

   if (!passwordInput.value.trim()) {
     alert('請先輸入密碼！');
     return; // 終止後續執行
   }

   // 如果帳號和密碼都已輸入，顯示登入成功提示
   alert('您已按下登入按鈕，原本會進行安全性驗證和提交，但因為只有復刻登入頁面沒有復刻這邊的頁面所以彈窗替代。');
 });

  // 選取搜尋按鈕和關鍵字輸入框
  const searchButton = document.querySelector('.search-bar button');
  const keywordInput = document.querySelector('.search-bar input');

  // 為搜尋按鈕添加事件
  searchButton.addEventListener('click', function (event) {
    event.preventDefault(); // 阻止按鈕的默認行為

    // 檢查關鍵字輸入框是否為空
    if (!keywordInput.value.trim()) {
      alert('請輸入關鍵字！');
      return; // 終止後續執行
    }

    // 如果有輸入關鍵字，顯示替代彈窗
    alert('原本會導向博客來官網搜索圖書頁面，為了避免引用目標網站所以彈窗替代。');
  });
});

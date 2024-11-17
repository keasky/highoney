// 固定のユーザー名とパスワード
const validUsername = "testuser";
const validPassword = "1234";

// フォームの要素を取得
const loginForm = document.getElementById("loginForm");
const messageElement = document.getElementById("message");

// フォーム送信時の処理
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // ページリロードを防止

  // 入力されたユーザー名とパスワードを取得
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 簡単なログイン判定
  if (username === validUsername && password === validPassword) {
    messageElement.style.color = "green";
    messageElement.textContent = "ログイン成功！";
  } else {
    messageElement.style.color = "red";
    messageElement.textContent = "ユーザー名またはパスワードが間違っています。";
  }
});

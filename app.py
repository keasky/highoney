from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# 仮のユーザーデータ
USER_DATA = {
    "testuser": "1234"
}

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        
        # ユーザー認証
        if username in USER_DATA and USER_DATA[username] == password:
            return "ログイン成功！"
        else:
            return "ユーザー名またはパスワードが間違っています。"

    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)

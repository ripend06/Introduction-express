const express = require("express"); //express読み込み
const router = express.Router(); //Router関数でルーティングを管理できる

//★★ミドルウェアの宣言 / 出てくる　userに適用される
//router.use(mylogger); //作成したミドルウェアを使用する宣言

router.get("/", mylogger, (req, res) => {
    res.send("ユーザーです。")
});

router.get("/info", (req, res) => {
    res.send("ユーザー情報です。")
});

router.get("/:id", (req, res) => { //idはランダムな数字をブラウザで入力する
    res.send(`${req.params.id}のユーザー情報を取得しました`)
});
// router.post("/:id", (req, res) => {
//     res.send(`${req.params.id}のユーザー情報を取得しました`)
// });
// router.delete("/:id", (req, res) => {
//     res.send(`${req.params.id}のユーザー情報を取得しました`)
// });


//★★ミドルウェア　userに適用される
function mylogger(req, res, next) { //nextの引数を指定
    console.log(req.originalUrl);
    next(); //nextは、実装を止めない処理
};

module.exports = router; //他ファイルでも使えるように、exportする
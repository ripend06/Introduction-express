const express = require("express"); //expressの呼び出し
const app = express(); //expressを使えるように　appの変数の中へ
const PORT = 3000; //PORTを3000に指定
const userRouter = require("./routes/user"); //user.jsを読み込み

//★ミドルウェアの宣言 / 出てくる　ルートとuserすべてに適用される
//app.use(mylogger); //作成したミドルウェアを使用する宣言


//静的ファイルの読み込み
//app.use(express.static("public")); //静的なファイルを扱うようにする。publicファルダに。

//動的ファイルの読み込み
app.set("view engine", "ejs"); //set関数で、ejsのテンプレートエンジンを読み込み


//getメソッド
app.get("/", (req, res) => { //getメソッド　URLを/に指定。reqとresをコールバック関数で指定
    //console.log("hello express");
    //res.send("<h1>こんにちは</h1>"); //resメソッドsend関数で、文字をブラウザに送れる
    //res.sendStats(500); //サーバーステータスを設定
    //res.sendStats(400); //クライアント側の文字出力ミスなど
    //res.status(500).send("エラーです。");
    // res.status(500).json({ meg: "エラーです。"}); //jsonでも返せる
    res.render("index", { text: "NodejsとExpress" }); //render関数で、index.ejsのindex。今回はハードコーディング。 本来は、{}の中はDBからのJSONを入れて、ejsで使うってやり方も可能

});

//ミドルウェアの宣言 / が出てこない
//app.use(mylogger); //作成したミドルウェアを使用する宣言

//ルーティング
app.use("/user", userRouter); //use関数で、エンドポイント"/user"は、共通として使って。後のエンドポイントについては、userRouterに任せる
//app.use("/auth", authRouter);
//app.use("/customer", customerRouter);
//app.use("/product", productRouter);


// //★ミドルウェア　ルートとuserすべてに適用される
// function mylogger(req, res, next) { //nextの引数を指定
//     console.log(req.originalUrl);
//     next(); //nextは、実装を止めない処理
// };

app.listen(PORT, () => console.log("サーバーが起動しました")); //expressを使用して、サーバーを起動
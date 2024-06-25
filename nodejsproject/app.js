var mysql = require('mysql2');
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7a8zKAF.",
});



app.get(
    "/", 
    (req,res)=>{
        let sql =
        "SELECT * FROM DBAysegulErgun.deyimler";
        con.query(
            sql,
            (err,data)=>{
                if(err) throw err;
                res.render("anasayfa",{deyimData : data });
            }
        );
    }
);

app.get(
    "/filtrele",
    (req,res)=>{
        let filter = req.query.deyimID;
        let sql =
        "SELECT * FROM DBaysegulergun.deyimler WHERE deyim_id=" + filter + ";";
        con.query(
            sql,
            (err,data)=>{
                if (err) throw err;
                res.render("anasayfa",{deyimData : data});
            }
        );
    }
);

app.get('/iletisim', 
    (req,res)=>
        {
            res.render('iletisim');
        }
);
/*app.get("/deyimler", function(req, res) { // Burada fazla bir parantez kapatma işareti vardı, onu kaldırdım.
    let qry = "SELECT deyim_id, deyim_adi, deyim_aciklama FROM deyimler"; // Tam tablo adını kullanıyoruz
    con.query(qry, function(err, data) {
        if (err) {
            console.log("Hata var:", err);
            res.status(500).send("Veritabanı hatası");
        } else {
            res.render("deyimler", { deyimler: data }); // Verileri "deyimler" isimli EJS dosyasına gönderiyoruz
        }
    });
});*/

app.listen(7046, function() {
    console.log("Sunucu 7046 portunda çalışıyor...");
});

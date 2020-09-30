const express = require("express");
var exphbs = require("express-handlebars");
const app = express();

// view engine
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

//mongoose
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://Tham:hongtham170599@cluster0.hrs1w.gcp.mongodb.net/webkhoga?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    function(err) {
        if (err) {
            console.log("Khong ket noi duoc mongodb");
        } else {
            console.log("ket noi thanh cong mongodb");
        }
    }
);

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});

//demo
const khoga = require("./routers/khoga");
app.use("/khoga", khoga);

app.listen(3000);
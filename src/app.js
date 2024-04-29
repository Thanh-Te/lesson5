import express from 'express';
import {create as createHandlebars} from 'express-handlebars';
const app = express();

app.use(express.static("public"));
// Cau hinh handlebars
const hdb = createHandlebars({
    layoutsDir:"views/layouts",
    partialsDir:"views/partials",
    defaultLayout:"main"

});



app.engine("handlebars", hdb.engine);
app.set("view engine","handlebars");
// Cau hinh folder view
app.set("views","views/pages");

// Trang chu
app.get("/", (req,res)=>{
    res.render("homepage");
});


app.listen(3000,()=>{
    console.log("App running port 3000");
});
var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", {useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "A dog post",
    image: "https://www.petmd.com/sites/default/files/bone-infection-dogs.jpg",
    body: "Dog post blah blah blah blah!!!"
});

// RESTFUL ROUTES
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function (req, res) {
    Blog.find({}, function(err, blogs){
        if(err){
           console.log("ERROR!");
        } else {
          res.render("index", {blogs: blogs}); 
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("BLOG APP SERVER IS RUNNING!");
})

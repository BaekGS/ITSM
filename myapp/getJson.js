var express = require("express");
var app = express();
app.get("/getJson/:id/:pw",function(req, res){
    var id = "it1043";
    var pw = "gstim";

    res.json({id:id},{pw:pw});
});
app.listen(3000, function(){
    console.log("APP started on port 3000");
});

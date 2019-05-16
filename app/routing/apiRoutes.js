let friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
    return res.json(friends);
        });
  
//   All possible Friends JSON input
  app.post("/api/friends", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
      let userData = req.body;
      console.log(userData);
   
        res.json(userData);  
      });
      
}


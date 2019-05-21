let friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
    return res.json(friends);
        });
  
//   All possible Friends JSON input
  app.post("/api/friends", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
      let match = {
        name: "",
        photo: "",
        friendDifference: 100
      };
      
      
      let userData = req.body;
      let userScores = userData.scores;
      let totalDifference;
  
      for (var i = 0; i < friends.length; i++) {
        let currentFriend = friends[i];
        totalDifference = 0;
  
       for (var j = 0; j < currentFriend.scores.length; j++) {
          let currentFriendScore = currentFriend.scores[j];
          let currentUserScore = userScores[j];
  
          totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
        }
  
        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = currentFriend.name;
          bestMatch.photo = currentFriend.photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
  
        friends.push(userData);
   
        res.json(userData);  
      });
      
}


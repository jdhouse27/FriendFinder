app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  
  
  // All possible Friends JSON input
  app.post("/api/friends", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
      let newReservation = req.body;
    
      console.log(newReservation);
  
          if (reservations.length < 5){
              reservations.push(newReservation);
          } else {           
              waitList.push(newReservation); 
          }      
          res.json(newReservation);
      
      });
      
 
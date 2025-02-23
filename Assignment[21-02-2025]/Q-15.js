function registerUser(username, callback) {
    setTimeout(() => {
        if(!username) {
            callback("Username not found, Try again!")
        } else {
            console.log("User is registered now")
            callback(null, username)
        }
    }, 1000)
}

function sendVerification(username, callback) {
    setTimeout(() => {
      if (username !== "validUser") {
        callback("User is not Valid!");
      } else {
        console.log("The email was sent");
        callback(null, username);
      }
    }, 1000);
  }
  
  function loginUser(username, callback) {
    setTimeout(() => {
      if (username !== "validUser") {
        callback("Username is Incorrect");
      } else {
        console.log("User logged in successfully");
        callback(null, username);
      }
    }, 1000);
  }
  
  function displayWelcomeMessage(username, callback) {
    setTimeout(() => {
      console.log(`Hola, ${username}!`);
      callback();
    }, 1000);
  }
  
  registerUser("validUser", (err, username) => {
    if (err) return console.error(err);
  
    sendVerification(username, (err, username) => {
      if (err) return console.error(err);
  
      loginUser(username, (err, username) => {
        if (err) return console.error(err);
  
        displayWelcomeMessage(username, () => {
          console.log("Workflow was completed successfully");
        });
      });
    });
  });
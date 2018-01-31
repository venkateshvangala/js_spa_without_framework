require.config({
  baseUrl: "/",
  "paths": {
    "jquery": 'vendor/js/jquery-3.3.1.min'
  }
});

// Load the main app module to start the app
require(['jquery', 'js/models/user', 'js/router'], function($, User, Router){
  var users = [new User('Barney'),
               new User('Cartman'),
               new User('Sheldon')];
  
  localStorage.users = JSON.stringify(users);

  Router.startRouting();  
});
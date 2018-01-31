define(['js/views/add-view', 'js/models/user'], function(AddView, User){
  
      function start(){
          AddView.render();
          bindEvents();       
      }
      
      function bindEvents(){
          document.getElementById('add').addEventListener('click', function(){
              var users = JSON.parse(localStorage.users);
              var userName = document.getElementById('user-name').value;
              users.push(new User(userName));
              localStorage.users = JSON.stringify(users);
              require(['js/controller/list-controller'], function(ListController){
                  ListController.start();
              });
          }, false);
      }
  
      return {
          start:start
      };
  });
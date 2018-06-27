import Ember from 'ember';

export default Ember.Service.extend({


    
    accessToken: null,
    utils: Ember.inject.service("utils"),
    authenticate(login, password) {
      return Ember.$.ajax({
        method: "GET",
        url: "/token",
        data: {},
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Basic ' + btoa(login + ":" + password));}
      }).then((result) => {
        Ember.run(() => {  // begin loop
            this.set('accessToken', result.token);
            this.get("utils").setCookie("auth-token", result.token);
            console.log("Got access token : " + result.token)
        });
      });
    },
  
    invalidate() {
      this.set('accessToken', null);
    },
  
    isAuthenticated() {
        return this.get("utils").getCookie("auth-token") && this.get("utils").getCookie("auth-token").length > 0;
    }
  
  });

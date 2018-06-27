import Controller from '@ember/controller';


export default Controller.extend({
    utils: Ember.inject.service("utils"),
    actions: {
        logout() {
            this.get("utils").deleteCookie("auth-token");
            this.transitionToRoute("login");
        }
    }

});

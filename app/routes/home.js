import Route from '@ember/routing/route';

export default Route.extend({
    authManager: Ember.inject.service("auth-manager"),
    utils: Ember.inject.service("utils"),
    beforeModel: function (transition) {
        var isAuth = this.get('authManager').isAuthenticated();
        console.log("isAuthenticated " + isAuth);
        if (isAuth) {
            return true;
        } else {
            this.transitionTo('login');
        }
    },
    model() {
        return this.store.queryRecord('user', { auth_token: this.get("utils").getCookie("auth-token") });
    }
});

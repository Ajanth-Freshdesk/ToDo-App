import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    authManager: Ember.inject.service("auth-manager"),
    router: Ember.inject.service("-routing"),
    actions: {
        authenticate() {
        var self = this;
        const { login, password } = this.getProperties('login', 'password');
        this.get('authManager').authenticate(login, password).then(() => {
            console.log('Success! Click the top link! ');
            self.sendAction("redirect");
        }, (err) => {
            alert('Error obtaining token: ' + err.responseText);
        });
        }
    }
});

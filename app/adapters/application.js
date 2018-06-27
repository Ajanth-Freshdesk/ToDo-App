import Ember from 'ember';
import ActiveModelAdapter from 'active-model-adapter';

import { computed } from '@ember/object';

let { String: { underscore, pluralize } } = Ember;
export default ActiveModelAdapter.extend({
    utils: Ember.inject.service("utils"),
    headers: computed('authManager.accessToken', function () {
        return {
            "Authorization": 'Token token=' + this.get("utils").getCookie("auth-token")
        };
    }),
    pathForType(type) {
        return pluralize(underscore(type));
    }
});

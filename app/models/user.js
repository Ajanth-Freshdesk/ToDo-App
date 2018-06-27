import DS from 'ember-data';

export default DS.Model.extend({
    auth_token: DS.attr("string"),
    email: DS.attr('string'),
    tasks: DS.hasMany('task', { inverse: 'user' })
});

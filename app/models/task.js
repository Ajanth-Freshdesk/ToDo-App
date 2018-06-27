import DS from 'ember-data';

export default DS.Model.extend({
    user: DS.belongsTo("user", { inverse: 'tasks' }),
    desc: DS.attr('string'),
    deadline: DS.attr('string'),
    priority: DS.attr('string'),
    status: DS.attr('string'),
    archived: DS.attr('string'),
    reminders: DS.hasMany('reminder'),
    reminderenabled: DS.attr(),
    reminderdate: DS.attr(),
    enablemail: DS.attr()
});

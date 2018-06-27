import Route from '@ember/routing/route';


export default Route.extend({

    model() {
        var newTask = this.store.createRecord('task');
        var user = this.modelFor("home");
        user.get("tasks").addObject(newTask);
        newTask.set("status", "Open");
        newTask.set("priority", "High");
        newTask.set("user", user);
        newTask.set("reminderenabled", true);
        newTask.set("reminderdate", new Date());
        newTask.set("enablemail", true);
        return newTask;
    }

});

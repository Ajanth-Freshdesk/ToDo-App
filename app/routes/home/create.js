import Route from '@ember/routing/route';


export default Route.extend({

    model() {
        var newTask = this.store.createRecord('task');
        var user = this.modelFor("home");
        user.get("tasks").addObject(newTask);
        newTask.set("status", "Open");
        newTask.set("priority", "High");
        newTask.set("user", user);
        return newTask;
    }

});

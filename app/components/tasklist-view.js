import Component from '@ember/component';

export default Component.extend({
    actions: {

        onEditTask(task) {
            this.set("activeTask", task);
            Ember.$('#editTask').toggle();
        },
        deleteTask(task, event) {
            console.log("delete Task : " + task.id);
            event.stopPropagation();
            task.destroyRecord();
            this.sendAction("redirect");
        },
        redirect() {
            this.sendAction("redirect");
        }

    }
});

import Component from '@ember/component';

export default Component.extend({
    actions: {

        onEditTask(task) {
            this.set("activeTask", task);
            if (!task.currentReminder || task.currentReminder.length == 0) {
                var d = new Date(task.deadline);
                var datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
                    d.getHours() + ":" + d.getMinutes();
                task.currentReminder = datestring;
            }
            Ember.$('#editTask').toggle();
        },
        deleteTask(task) {
            console.log("delete Task : " + task.id);
            task.destroyRecord();
            this.sendAction("redirect");
        },
        redirect() {
            this.sendAction("redirect");
        }

    }
});

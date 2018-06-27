import Component from '@ember/component';
import metadata from '../helpers/constants/metadata';
export default Component.extend({
    statuses: metadata.statuses,
    priorities: metadata.priorities,
    actions: {
        saveTask(task) {
            console.log("Save Task : reminderenabled : " + task.reminderenabled);
            task.save();
            this.actions.closeModal();
            this.sendAction("redirect", {});

        },

        setStatus(value) {
            this.get("activeTask").set("status", value);

        },
        setPriority(value) {
            this.get("activeTask").set("priority", value);
        },
        closeModal() {
            Ember.$('#editTask').toggle();
        }

    }

});

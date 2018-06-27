import Controller from '@ember/controller';
import metadata from '../../helpers/constants/metadata';

export default Controller.extend({
    statuses: metadata.statuses,
    priorities: metadata.priorities,
    actions: {
        saveTask(newTask) {
            newTask.set("user_id", newTask.get("user").get("id"));
            newTask.save().then(() => this.transitionToRoute('home.open'));
        },
        cancelSave() {
            this.get('model').rollbackAttributes();
        },
        setStatus(value) {
            this.get("model").set("status", value);
        },
        setPriority(value) {
            this.get("model").set("priority", value);
        }
    }
});

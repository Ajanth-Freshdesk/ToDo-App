import Route from '@ember/routing/route';
import metadata from '../../helpers/constants/metadata';

export default Route.extend({
    model() {
        var userInfo = this.modelFor("home");
        var tasks = userInfo.get("tasks");
        return tasks.filter(function (task) {
            task.set("isEditing", false);
            task.set("priorityClass", "badge badge-pill " + (metadata.priorityClassMap[task.priority] || "badge-danger"));
            return task.status == "Completed";
        });
    },
    actions: {
        sessionChanged: function () {
            //window.location.reload(true);
            this.refresh();
        }
    }
});

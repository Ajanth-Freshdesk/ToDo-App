import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        redirect() {
            this.send("sessionChanged");
        },
        closeReminder() {
            this.set("activeReminderTask", null);
            Ember.$(".alarm-activated").fadeOut();
        }
    },
    monitorReminders: function () {
        setInterval(() => {
            var tasks = this.get("model");
            var self = this;
            tasks.forEach(function (task) {
                if (task.reminderenabled) {
                    var rdate = task.get("reminderdate");
                    if (rdate && rdate.length > 0) {
                        var exDate = new Date(rdate);
                        var isPastSoon = moment().isAfter(moment(exDate).subtract(20, 'seconds'));
                        var isFutureNow = moment(exDate).isAfter(moment());

                        var exTask = self.get("activeReminderTask");
                        if (isPastSoon && isFutureNow && !exTask) {
                            Ember.$(".alarm-activated").fadeIn();
                            self.set("activeReminderTask", task);
                            self.showBrowserNotification();
                        }
                    }
                }
            });
        }, 10000);
    },
    showBrowserNotification: function () {
        if (Notification.permission !== "granted")
            Notification.requestPermission();
        else {
            var self = this;
            var notification = new Notification('Notification title', {
                icon: 'http://icons.iconarchive.com/icons/mkho/christmas/256/Bell-icon.png',
                body: "Hey! you need to get " + self.get("activeReminderTask").desc + ", Done!",
            });

            notification.onclick = function () {
                window.focus();
                this.cancel();
            };

        }
    }
});

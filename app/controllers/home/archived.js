import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        redirect() {
            this.send("sessionChanged");
        }
    }
});

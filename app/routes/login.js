import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        redirectToHome: function(){
            console.log("received redirectTo from child component");
            this.transitionTo("home.open");
        }
    }
});

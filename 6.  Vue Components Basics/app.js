let data = { status: 'Error 404'};

Vue.component('my-comp', {
    data: function() {
        return {
            status: 'Error 404'
        }
        //return data;
    },

    template: '<p> Server Status: {{ status }} <button @click="changeStatus">Change</button> </p>',
    methods: {
        changeStatus: function() {
            this.status = 'OK 200';
        }
    },
});

new Vue({
    el: '#app'
})
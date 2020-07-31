let data = { status: 'Error 404'};

//Vue.component((), {})

let comp = {
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
};

new Vue({
    el: '#app1',
    components: {
        'my-comp': comp
    } 
})

new Vue({
    el: '#app2',
    components: {
        'my-comp': comp
    } 

})
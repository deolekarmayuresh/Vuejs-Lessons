Vue.component('my-comp', {
    data: function() {
        return {
            status: 'Error 404'
        }
    },

    template: '<p> Server Status: {{ status }} </p>'
});

new Vue({
    el: '#app'
})
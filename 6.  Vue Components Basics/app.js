Vue.component('my-comp', {
    data: function() {
        return {
            status: 'Error 404'
        }
    },

    template: '<p> Server Status: {{ ststus }} </p>'
});

new Vue({
    el: '#app'
})
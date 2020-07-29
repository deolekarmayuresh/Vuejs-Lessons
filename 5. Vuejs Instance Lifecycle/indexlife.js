new Vue({
    el: '#app',
    data: {
        title: 'The Vuejs Lifecycle'
    },
    beforeCreate: function() {
        console.log('beforeCreate()');
    },
    created: function() {
        console.log('created()');
    },
    beforeMount: function() {
        console.log('beforeMount()');
    },
    mounted: function() {
        console.log('mounted()');
    },
    beforeUpdate: function() {
        console.log('beforeUpdate()');
    },
    updated: function() {
        console.log('updated()');
    },
    beforeDestroyed: function() {
        console.log('beforeDestroyed()');
    },
    destroyed: function() {
        console.log('destroyed()');
    } 
});
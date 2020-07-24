var app = new Vue({
    el: '#app',
    data: {
        greetings: "Hello World!",
        description: "Hey, My name is Mayuresh",
    }

    methods: {
        job: function() {
            return "I'm a Software Developer";
        }
    }
})
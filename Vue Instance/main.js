var app = new Vue({
    el: '#app',
    data: {
        greetings: "Hello World!",
        description: "Hey, My name is Mayuresh",
    },
    methods: {
        job: () => {
            return "I'm a software Developer";
        }
    }
})
let data = {
    title: 'The VueJS Instance',
    showParagraph: false
}

Vue.component('hello', {
  template: '<h1>Hello</h1>'
});

let v1 = new Vue({
    //el: '#app1',
    data: data,
    methods: {
      show: function() {
        this.showParagraph = true;
        this.updateTitle('The VueJS First Instance (Updated)');
        this.$refs.myButton.innerText = "Test Button";
      },
      updateTitle: function(title) {
        this.title = title;
      }
    },
    computed: {
      lowercaseTitle: function() {
        return this.title.toLowerCase();
      }
    },
    watch: {
      title: function(value) {
        alert('Title changed, new value: ' + value);
      }
    }
  });

  v1.$mount('#app1');

    //v1.newProp = "New Properties!";
    console.log(v1.$data === data);
    v1.$refs.heading.innerText = "Something is changing";
  
  setTimeout(function () {
      v1.title = "Change by Timer!",
      v1.show();
  }, 3000);
  
  let v2 = new Vue ({
      el: '#app2',
      data: {
          title: 'The Vuejs Second Instance'
      }, 
      methods: {
          onChanged: function () {
            v2.title = "Changed!"
          }
      }
  });

  let v3 = new Vue ({
    template: '<h2>Hey! This is element 3 </h2>'
  });

  //v3.$mount('#app3');
  v3.$mount();
  document.getElementById('app3').appendChild(v3.$el);

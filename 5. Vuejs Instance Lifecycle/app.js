let v1 = new Vue({
    el: '#app1',
    data: {
      title: 'The VueJS Instance',
      showParagraph: false
    },
    methods: {
      show: function() {
        this.showParagraph = true;
        this.updateTitle('The VueJS First Instance (Updated)');
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

  setTimeout(function () {
      v1.title = "Change by Timer!"
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
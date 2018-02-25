new Vue({
  el:"#vue-app",
  data: {
    name: 'Ninja',
    age: '29',
    website: 'https://9gag.com/',
    x: 0,
    y: 0,
    job: '',
    period: ''

  },
  methods: {
    greet: function(time){
      return "Good " + time + " " + this.name;
    },
    add: function(inc){
      this.age += inc;
    },
    subtract: function(dec){
      this.age -= dec;
    },
    updateXY: function(event){
      this.x= event.offsetX;
      this.y= event.offsetY;
    }

  }
})

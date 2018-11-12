Vue.component('square', { 
	props:['square-num'],
	data: function(){
  	return { value: ''}
  },
  template: '<button class="square" v-on:click="value=5">{{value}}</button>'
})

new Vue({
  el: '.game',
  data: {
    player: 'X',
    
  }
})


const draggable = window['vuedraggable'];

Vue.component('my-component', {
  template: '<div>A global component!</div>'
})

let vm = new Vue({
  el: '#app',
  data: {
    items: [],
    items2:[],
    newitemtitle: '',
    id:0
  },
  methods: {
    addbutton: function () {
      if (this.newitemtitle === '')
        return;
      this.items.push({
      
        title: this.newitemtitle, ischecked: false,
        id:this.id++
        
      });
      this.newitemtitle = ''
    },
    deletebutton:function(index){
      if(confirm('本当に削除しますか？')){
      this.items.splice(index,1)
      }
    }
  }
})
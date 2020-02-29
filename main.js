let vm = new Vue({
  el: '#app',
  data: {
    items: [],
    newitemtitle: ''
  },
  methods: {
    addbutton: function () {
      if (this.newitemtitle === '')
        return;
      this.items.push({
      
        title: this.newitemtitle, ischecked: false
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
var app = new Vue({
    el: '.container',
    data: {
        peopleList: []
    },
    mounted: function() {
        this.$nextTick(function() {
            this.View();
        })
    },
    methods: {
        View: function() {
              // GET /someUrl
              this.$http.get('data.json').then(res => {
                // success callback
                this.peopleList = res.body;
                alert('suc')
                console.log(peopleList);
              }, res => {
                alert('error');
              });
        },
        createPerson: function() {
            this.people.push(this.productList.newPerson);
            // 添加完newPerson对象后，重置newPerson对象
            this.newPerson = {name: '', age: '', sex: 'Male'}
        },
        deletePerson: function(index) {
            this.people.splice(index,1);
        }
    }
})


const todolist = {
    data(){
        return{
            todos: [],
            Newtodo:{
                active:false,
            }
        }
    },
    methods:{
        addtodo: function (){
            if(this.Newtodo.tache){
                this.todos.push(this.Newtodo);
                this.Newtodo={
                    active:false,
                };
                localStorage.setItem("todos",JSON.stringify(this.todos))
            }else{
                alert('champ manquant !')
            }
        }
    },
    created(){
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
    },
    updated(){
        localStorage.setItem("todos",JSON.stringify(this.todos))
    }
}

Vue.createApp(todolist).mount('#app');


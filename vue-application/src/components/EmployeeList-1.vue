<template>
    <div>
       <h1>ToDo</h1>
       <ul>
        <li v-for="todo of todos" :key="todo.id">{{ todo.title }}</li>
       </ul>
    </div>
</template>

<script>

import axios from 'axios'


export default {
    name: "EmployeeList",
   data(){
    return{
        todos: [],
    };
   },

   async created(){
    try{
        const res = await axios.get('http://127.0.0.1:8000/api/list');
        this.todos = res.data;
    }catch(e){
        console.error(e);
    }
   }

}

</script>
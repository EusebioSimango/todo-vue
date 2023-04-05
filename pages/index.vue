<template class="max-h-[100vh] overflow-hidden">
  <div >
    <h1 class="flex justify-center items-center gap-2 text-center font-black text-2xl p-2 ">
      <PhCalendarCheck :size="32" class="text-black"/> To-Do List</h1>
    <ul v-if="tasks.length > 0" class="flex flex-col gap-2 p-2 overflow-y-scroll h-[calc(100vh-120px)] scroll-smooth scrollbar-thumb-green-200 scrollbar scrollbar-w-1 scrollbar-h-41scrollbar-rounded">
      <li v-for="task in tasks" :key="task.id">
        <Task :task=task @click="hanleClick"/>
      </li>
    </ul>
    <div v-else="" class="text-2xl opacity-25 font-medium justify-center h-[calc(100vh-120px)] items-center flex">
      Nothing to-do
    </div>
  </div>
  <div class="flex fixed bottom-1 w-[100vw] p-2 gap-2 items-center">
    <input 
      type="text"
      v-model="task"
      @keyup.enter="addTask"
      class="border-2  rounded-md text-md p-2 w-full outline-none outline-green-400 bg-gray-100" 
      placeholder="New Task" 
    />
    <button
      class="rounded-md bg-green-500 p-3 w-[150px]"
      @click="addTask"
    >Add Task</button>
  </div>
</template>
<script setup>
  import { PhCalendarCheck } from '@phosphor-icons/vue'
  
</script>
<script>
  useHead({
    title: 'ToDo List | Eusébio Simango',
  })
  export default {
    data() {
      return {
        task: '',
        tasks: [],
        newTask: ''
      }
    },
    computed: {
      setTasks() {
        return (newTask) => {
          this.tasks = newTask
        }
      }
    },
    methods: {
      addTask() {
        if (this.task.length < 1)
          return
        console.log(">_ adding task")
        const newTask = {
          title: this.task,
          id: Date.now()
        }
        this.setTasks([...this.tasks, newTask])
        this.task = ''
        console.log(this.tasks)
      },
      hanleClick(e) {
        const { tagName } = e.target
        let id;
        if ((tagName === 'svg' || tagName === 'path')){
          console.log('>_ removing task')
          if (tagName === 'svg') {
            id = e.target.getAttribute('data-id')
          } else {
            id = (tagName === 'path') 
            ? e.target.parentElement.parentElement.getAttribute('data-id') 
            : e.parent.getAttribute('data-id')
          }
          console.log(id)
          const updatedTasks = this.tasks.filter((task) => {
            console.log(task.id, id)
            return (task.id == id) ? false : task
          })
          console.log(updatedTasks, '-', this.tasks)
          this.setTasks(updatedTasks)
        }
        
      }

    }
  }

  
</script>

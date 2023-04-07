<template class="max-h-[100vh] overflow-hidden">
  <div >
    <h1 class="flex justify-center items-center gap-2 text-center font-black text-2xl p-2 ">
      <PhCalendarCheck :size="32" class="text-black"/> To-Do List</h1>
    <ul v-if="tasks.length > 0" class="flex flex-col gap-2 p-2 overflow-y-scroll h-[calc(100vh-120px)] scroll-smooth scrollbar-thumb-green-200 scrollbar scrollbar-w-1 scrollbar-h-41scrollbar-rounded overflow-x-hidden">
      <li v-for="task in tasks" :key="task.id">
        <Task :task=task @delete="removeTask"/>
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
      class="rounded-md bg-green-500 p-3 w-[150px] outline-offset-2 outline-green-400"
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
        if (this.task.length < 1 || this.task.trim() == '')
          return
        const newTask = {
          title: this.task,
          id: Date.now()
        }
        console.log(">_ adding task with id:", newTask.id)
        this.setTasks([...this.tasks, newTask])
        this.task = ''
      },
      removeTask(id) {
        console.log('>_ removing task with id:', id)
        const updatedTasks = this.tasks.filter((task) => task.id === id ? false : task)
        this.setTasks(updatedTasks)
      },
    }
  }

  
</script>

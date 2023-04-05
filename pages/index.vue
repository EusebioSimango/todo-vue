<template class="max-h-[100vh] overflow-hidden">
  <div class="overflow-y-scroll h-full">
    <h1 class="text-center font-black text-2xl p-2 ">To-Do List</h1>
    <ul class="flex flex-col gap-2 p-2">
      <li
        class="bg-red-400 rounded-md p-2 text-white"
        v-for="task in tasks" 
        :key="task.id"><NuxtLink to='/{{task.id}}'>{{task.title}}</NuxtLink></li>
    </ul>
  </div>
  <div class="flex fixed bottom-1 w-[100vw] p-2 gap-2 items-center">
    <input 
      type="text"
      v-model="task"
      class="border-2  rounded-md text-md p-2 w-full outline-none outline-green-400 bg-gray-100" 
      placeholder="New Task" 
    />
    <button
      class="rounded-md bg-green-500 p-3 w-[150px]"
      @click="addTask"
    >Add Task</button>
  </div>
</template>

<script>
  useHead({
    title: 'ToDo List | Eusébio Simango',
  })
  export default {
    data() {
      return {
        task: '',
        tasks: [{title: "Call mom", id: 21212}],
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
        console.log("adding task")
        const newTask = {
          title: this.task,
          id: Date.now()
        }
        this.setTasks([...this.tasks, newTask])
        this.task = ''
        console.log(this.tasks)
      }

    }
  }

  
</script>

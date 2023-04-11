<template class="max-h-[100vh] overflow-hidden">
  <div >
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
      @keyup.enter="() => { addTask(task); task = ''}"
      class="border-2  rounded-md text-md p-2 w-full outline-none outline-green-400 bg-gray-100" 
      placeholder="New Task" 
    />
    <button
      class="rounded-md bg-green-500 p-3 w-[150px] outline-offset-2 outline-green-400"
      @click="() => { addTask(task); task = ''}"
    >Add Task</button>
  </div>
</template>
<script>
  useHead({
    title: 'ToDo List | Eusébio Simango',
    description: 'A simplle todo app made by Eusébio Simango'
  })
  export default {
    data() {
      return {
        task: ''
      }
    },
    computed: {
      ...mapState(useMainStore, ['tasks'])
    },
    methods: {
      ...mapActions(useMainStore, ['addTask', 'removeTask'])
    }
  }

  
</script>

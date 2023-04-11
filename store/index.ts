export const useMainStore = defineStore('main', {
	state: () => ({
		/** @type {{ id: number, title: string, desc: string }[]} */
		tasks: [],
	}),
	actions: {
		addTask(title) {
			if (title.length < 1 || title.trim() == '')
          return
      console.log(">_ adding task with title:", title)
      const desc = "Lorem ipsum in magna elit in amet ad dolor consectetur esse minim proident nisi dolore aute dolor dolor tempor aliquip eiusmod sed aute nulla commodo aute."
			this.tasks.push({ id: Date.now(), title, desc })
		},
		removeTask(id) {
			console.log('>_ removing task with id:', id)
      this.tasks = this.tasks.filter((task) => task.id === id ? false : task)
		}
	}
})
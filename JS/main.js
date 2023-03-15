const { createApp } = Vue

  createApp({
    data() {
      return {
        todolist: [
            {
                text: 'fare colazione',
                done: true,
            },
            {
                text: 'Meditare per 10min',
                done: true,
            },
            {
                text: 'Leggere almeno 10 pagine di un libro',
                done: false,
            },
            {
                text: 'Accendere PC',
                done: true,
            },
            {
                text: 'Controllare Email',
                done: false,
            },
            {
                text: 'Andare in palestra',
                done: true,
            }
        ],
      }
    }
  }).mount('#app')
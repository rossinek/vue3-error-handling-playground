
export const getRandomActivity = () => fetch('http://www.boredapi.com/api/activity').then(d => d.json())

export const getRandomError = () => new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Couldn\'t retrieve the data because it\'s not a real API')), 2000)
})

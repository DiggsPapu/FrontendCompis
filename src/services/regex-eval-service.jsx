import axios from 'axios'

export async function operateRegex(input) {
  const response = await axios.post('https://backendcompis.onrender.com/operateRegex', { input })
  return response.data
}
export async function simulateRegex(input) {
  const response = await axios.post('https://backendcompis.onrender.com/simulateRegex', { input })
  return response.data
}

import axios from 'axios'

export async function operateRegex(input) {
  const response = await axios.post('http://localhost:5960/operateRegex', { input })
  return response.data
}
export async function simulateRegex(input) {
  const response = await axios.post('http://localhost:5960/simulateRegex', { input })
  return response.data
}

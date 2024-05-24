import axios from 'axios'

export async function yalexAnalyzer(content) {
  const response = await axios.post('https://backendcompis.onrender.com/analyzeYalex/Ast', { content })
  return response.data
}
// Function to get the dfa generated because of the yalex
export async function yalexDFA() {
  const response = await axios.get('https://backendcompis.onrender.com/analyzeYalex/DFA')
  return response.data
}
// Function to get the scanner file generated
export async function getScanner() {
  const response = await axios.get('https://backendcompis.onrender.com/analyzeYalex/Scanner')
  return response.data
}

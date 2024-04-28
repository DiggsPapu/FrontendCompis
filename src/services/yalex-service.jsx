import axios from 'axios'

export async function yalexAnalyzer(content) {
  const response = await axios.post('http://localhost:5960/analyzeYalex/Ast', { content })
  return response.data
}
// Function to get the dfa generated because of the yalex
export async function yalexDFA() {
  const response = await axios.get('http://localhost:5960/analyzeYalex/DFA')
  return response.data
}
// Function to get the scanner file generated
export async function getScanner() {
  const response = await axios.get('http://localhost:5960/analyzeYalex/Scanner')
  return response.data
}

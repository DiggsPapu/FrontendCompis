import axios from 'axios'

export async function postFiles(yalexContent, yaparContent) {
  const response = await axios.post('https://backendcompis.onrender.com/analyzeYapar/postFiles', { yalex: yalexContent, yapar: yaparContent })
  return response.data
}

export async function getParsingTable(input) {
  const response = await axios.get('https://backendcompis.onrender.com/analyzeYapar/getParsingTableLL', { input })
  return response.data
}

export async function evaluateChain(input) {
  const response = await axios.post('https://backendcompis.onrender.com/analyzeYapar/evaluateChain', { input })
  return response.data
}

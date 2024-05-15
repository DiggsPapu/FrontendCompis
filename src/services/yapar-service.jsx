import axios from 'axios'

export async function postFiles(yalexContent, yaparContent) {
  const response = await axios.post('http://localhost:5960/analyzeYapar/postFiles', { yalex: yalexContent, yapar: yaparContent })
  return response.data
}

export async function getParsingTable(input) {
  const response = await axios.get('http://localhost:5960/analyzeYapar/getParsingTable', { input })
  return response.data
}

export async function evaluateChain() {
  const response = await axios.get('http://localhost:5960/analyzeYapar/evaluateChain')
  return response.data
}

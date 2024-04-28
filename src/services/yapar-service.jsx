import axios from 'axios'

export async function postFiles(yalexContent, yaparContent) {
  const response = await axios.post('http://localhost:5960/analyzeYapar/postFiles', { yalex: yalexContent, yapar: yaparContent })
  return response.data
}

export async function getAutomathon() {
  const response = await axios.get('http://localhost:5960/analyzeYapar/getAutomathon')
  return response.data
}

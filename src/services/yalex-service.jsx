import axios from "axios"
export async function yalexAnalyzer(content) {
    try {
        const response = await axios.post('http://localhost:4000/analyzeYalex/Ast', {"content": content})
        return response.data
    } catch (error) {
        throw error;
    }
}
// Function to get the dfa generated because of the yalex
export async function yalexDFA() {
    try {
        const response = await axios.get('http://localhost:4000/analyzeYalex/DFA')
        return response.data
    } catch (error) {
        throw error;
    }
}
// Function to get the scanner file generated
export async function getScanner() {
    try {
        const response = await axios.get('http://localhost:4000/analyzeYalex/Scanner')
        return response
    } catch (error) {
        throw error;
    }
}

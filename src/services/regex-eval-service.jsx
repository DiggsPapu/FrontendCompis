import axios from "axios"
export async function operateRegex(input) {
    try {
        const response = await axios.post('http://localhost:4000/operateRegex', {"input": input})
        return response.data
    } catch (error) {
        throw error;
    }
}
export async function simulateRegex(input) {
    try {
        const response = await axios.post('http://localhost:4000/simulateRegex'+input, {input: input})
        return response.data
    } catch (error) {
        throw error;
    }
}
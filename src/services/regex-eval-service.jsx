import axios from "axios"
export async function operateRegex(input) {
    try {
        const response = await axios.post('http://localhost:4000/operateRegex'+input, {input: input})
        return response.data
    } catch (error) {
        throw error;
    }
}
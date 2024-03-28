import axios from "axios"
const API = 'localhost:4000'
export const operateRegex = async (input) => {
    console.log(input)
    const data = await axios.post('http://localhost:4000/operateRegex'+input, {input: input})
    console.log(data)
  }
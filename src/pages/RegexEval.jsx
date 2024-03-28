
import { useState } from 'react'
import './regex-eval.css'
import { operateRegex } from '../services/regex-eval-service';
export default function RegexEval (){
    const [input, setInput] = useState("");
    const handleClick = () => {
        operateRegex(input)
    }
    return (
    <>
        <div className="grid-container">
        <div className="graph-container">
          <h2>Enter a regex:</h2>
          <input
          type="text"
          placeholder="enter a regex"
          id="regex-input"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleClick}>Accept</button>
        </div>
        <div className="graph-container">
          <h2>Postfix:</h2>
          <h3 id="postfix" name="postfix">
          </h3>
        </div>
        <div className="graph-container">
          <h2>Enter a simulate chain:</h2>
          <input
          type="text"
          placeholder="enter a chain"
          id="validar"/>
        </div>
        <div className="graph-container">
          <h2>NFA:</h2>
        </div>
        <div className="graph-container">
          <h2>DFA:</h2>
        </div>
        <div className="graph-container">
          <h2>Min DFA:</h2>
        </div>
        <div className="graph-container">
          <h2>Syntax Tree:</h2>
          </div>
        <div className="graph-container">
          <h2>DIRECT DFA:</h2>
        </div>
        <div className="graph-container">
          <h2>Min DIRECT DFA:</h2>
        </div>
      </div>
    </>
    )
}
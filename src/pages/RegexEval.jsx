import { React, useState } from 'react'
import './regex-eval.css'
import { Graphviz } from 'graphviz-react'
import { operateRegex, simulateRegex } from '../services/regex-eval-service'

export default function RegexEval() {
  const [input, setInput] = useState('')
  const [checkInput, setCheckInput] = useState('')
  const [postfix, setPostfix] = useState('')
  const [NFA, setNFA] = useState('digraph fsm {rankdir=LR;node [shape = point]; INITIAL_STATE;node [shape = doublecircle]; q1;node [shape = circle];INITIAL_STATE -> q0;q0 -> q1 [label=ε];}')
  const [NFA_DFA, setNfaDfa] = useState('digraph fsm {rankdir=LR;node [shape = point]; INITIAL_STATE;node [shape = doublecircle]; q1;node [shape = circle];INITIAL_STATE -> q0;q0 -> q1 [label=ε];}')
  const [nfaDfaMin, setNfaDfaMin] = useState('digraph fsm {rankdir=LR;node [shape = point]; INITIAL_STATE;node [shape = doublecircle]; q1;node [shape = circle];INITIAL_STATE -> q0;q0 -> q1 [label=ε];}')
  const [AST, setAST] = useState('digraph fsm {rankdir=LR;node [shape = point]; INITIAL_STATE;node [shape = doublecircle]; q1;node [shape = circle];INITIAL_STATE -> q0;q0 -> q1 [label=ε];}')
  const [DirectDFA, setDirectDFA] = useState('digraph fsm {rankdir=LR;node [shape = point]; INITIAL_STATE;node [shape = doublecircle]; q1;node [shape = circle];INITIAL_STATE -> q0;q0 -> q1 [label=ε];}')
  const [directDfaMin, setDirectDfaMin] = useState('digraph fsm {rankdir=LR;node [shape = point]; INITIAL_STATE;node [shape = doublecircle]; q1;node [shape = circle];INITIAL_STATE -> q0;q0 -> q1 [label=ε];}')
  const [outputNfaS, setOutputNFAS] = useState('')
  const [outputDfaS, setOutputDFAS] = useState('')
  const [outputDfamin, setOutputDFAmin] = useState('')
  const [outputDfaD, setOutputDFAD] = useState('')
  const [outputDfaDmin, setOutputDFADmin] = useState('')
  const handleClick = async () => {
    try {
      const response = await operateRegex(input)
      setPostfix(response.Postfix)
      setNFA(response.NFA)
      setNfaDfa(response.NFA_DFA)
      setNfaDfaMin(response.NFA_DFA_Min)
      setAST(response.AST)
      setDirectDFA(response.DirectDFA)
      setDirectDfaMin(response.DirectDFA_Min)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  const clickSimulate = async () => {
    try {
      const response = await simulateRegex(checkInput)
      if (response.NFA[0][0]) {
        setOutputNFAS(`Yes, time: ${response.NFA[1].toString()} seconds`)
      } else {
        setOutputNFAS(`No, time: ${response.NFA[1].toString()} seconds`)
      }

      if (response.NFA_DFA[0][0]) {
        setOutputDFAS(`Yes, time: ${response.NFA_DFA[1].toString()} seconds`)
      } else {
        setOutputDFAS(`No, time: ${response.NFA_DFA[1].toString()} seconds`)
      }

      if (response.NFA_DFA_Min[0][0]) {
        setOutputDFAmin(`Yes, time: ${response.NFA_DFA_Min[1].toString()} seconds`)
      } else {
        setOutputDFAmin(`No, time: ${response.NFA_DFA_Min[1].toString()} seconds`)
      }

      if (response.DirectDFA[0][0]) {
        setOutputDFAD(`Yes, time: ${response.DirectDFA[1].toString()} seconds`)
      } else {
        setOutputDFAD(`No, time: ${response.DirectDFA[1].toString()} seconds`)
      }

      if (response.DirectDFA_Min[0][0]) {
        setOutputDFADmin(`Yes, time: ${response.DirectDFA_Min[1].toString()} seconds`)
      } else {
        setOutputDFADmin(`No, time: ${response.DirectDFA_Min[1].toString()} seconds`)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }
  return (
    <div className="grid-container">
      <div className="graph-container">
        <h2>Enter a regex:</h2>
        <input
          type="text"
          placeholder="enter a regex"
          id="regex-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>Accept</button>
      </div>
      <div className="graph-container">
        <h2>Postfix:</h2>
        <h3 id="postfix" name="postfix">
          {postfix}
        </h3>
      </div>
      <div className="graph-container">
        <h2>Enter a simulate chain:</h2>
        <input
          type="text"
          placeholder="ingrese una cadena para la simulacion"
          id="validar"
          value={checkInput}
          onChange={(e) => setCheckInput(e.target.value)}
        />
        <button id="enter2" type="submit" onClick={clickSimulate}>aceptar</button>
      </div>
      <div className="graph-container">
        <h2>NFA:</h2>
        <Graphviz dot={NFA} />
        <p>
          Simulation:
          {outputNfaS}
        </p>
      </div>
      <div className="graph-container">
        <h2>DFA:</h2>
        <Graphviz dot={NFA_DFA} />
        <p>
          Simulation:
          {outputDfaS}
        </p>
      </div>
      <div className="graph-container">
        <h2>Min DFA:</h2>
        <Graphviz dot={nfaDfaMin} />
        <p>
          Simulation:
          {outputDfamin}
        </p>
      </div>
      <div className="graph-container">
        <h2>Syntax Tree:</h2>
        <Graphviz dot={AST} />
      </div>
      <div className="graph-container">
        <h2>DIRECT DFA:</h2>
        <Graphviz dot={DirectDFA} />
        <p>
          Simulation:
          {outputDfaD}
        </p>
      </div>
      <div className="graph-container">
        <h2>Min DIRECT DFA:</h2>
        <Graphviz dot={directDfaMin} />
        <p>
          Simulation:
          {outputDfaDmin}
        </p>
      </div>
    </div>
  )
}

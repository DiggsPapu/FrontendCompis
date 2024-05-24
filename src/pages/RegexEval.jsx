import { React, useState } from 'react'
import './regex-eval.css'
import { Graphviz } from 'graphviz-react'
import { Button, TextField } from '@mui/material'
import style from '../fonts/robot.module.css'
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
    <>
      <h1 className={style.robotoBold}>Regex Evaluation</h1>
      <h2 className={style.robotoBold}>What is this about?</h2>
      <p className={style.robotoMedium}>
        This part is about generating an automathons that can represent a regex given,
        all those automathons are developed with a library called Graphviz. The first
        row of automathons are produced with the Thompson Algorithm, first producing an
        Non Deterministic Automathon, then converting it to a Deterministic Automathon
        and finally minimizing that DFA to the minimum quantity of states. Also, applied
        the chance to simulating that automathon so enter a simulation chain and getting
        if the chain belongs to the language represented by that automathon. If it
        achieves an accepting state it does belong to that language, if not, then it
        never gets into an accepting state.
      </p>
      <h2 className={style.robotoBold}>Rules</h2>
      <p className={style.robotoMedium}>
        <ul>
          <li>
            &quot;*&quot; means expected 0 or more times, for example if i write
            <em>(a)*</em>
            {' '}
            it means that I am expecting an a showing up zero or more times,
            so this &quot;
            <em>aaaaaaaaaaaaaaa</em>
            &quot; chain would be correct
            and this chain &quot;&quot; also would be correct.
          </li>
          <li>
            &quot;+&quot; means expected 1 or more times, for example if i write
            <em>(a)+</em>
            {' '}
            it means that I am expecting an a showing up once or more times,
            so this &quot;
            <em>aaaaaaaaaaaaaaa</em>
            &quot; chain would be correct
            and this chain &quot;a&quot; also would be correct.
          </li>
          <li>
            &quot;?&quot; means expected zero or once, for example if i write
            <em>(a)?</em>
            so this &quot;
            <em>a</em>
            &quot; chain would be correct
            and this chain &quot;&quot; also would be correct.
          </li>
        </ul>
      </p>
      <div className="grid-container">
        <div className="graph-container">
          <h2 className={style.robotoMedium}>Enter a regex:</h2>
          <TextField id="standard-basic" label="Regex Chain" variant="standard" placeholder="Enter a regex" value={input} onChange={(e) => setInput(e.target.value)} />
          <Button variant="outlined" color="secondary" size="large" style={{ width: '50%', fontSize: '100%' }} onClick={handleClick}>Accept</Button>
        </div>
        <div className="graph-container">
          <h2 className={style.robotoMedium}>Postfix:</h2>
          <h3 className={style.robotoRegular} id="postfix" name="postfix">
            {postfix}
          </h3>
        </div>
        <div className="graph-container">
          <h2 className={style.robotoMedium}>Enter a simulation chain:</h2>
          <TextField id="standard-basic" label="Simulation Chain" variant="standard" placeholder="Enter a chain" value={checkInput} onChange={(e) => setCheckInput(e.target.value)} />
          <Button variant="outlined" size="large" style={{ width: '50%', fontSize: '100%' }} onClick={clickSimulate}>Accept</Button>
        </div>
        <div className="graph-container">
          <h2 className={style.robotoMedium}>NFA:</h2>
          <Graphviz dot={NFA} />
          <p className={style.robotoThin}>Simulation:</p>
          <p className={style.robotoThinItalic}>{outputNfaS}</p>
        </div>
        <div className="graph-container">
          <h2 className={style.robotoMedium}>DFA:</h2>
          <Graphviz dot={NFA_DFA} />
          <p className={style.robotoThin}>Simulation:</p>
          <p className={style.robotoThinItalic}>{outputDfaS}</p>
        </div>
        <div className="graph-container">
          <h2 className={style.robotoMedium}>Min DFA:</h2>
          <Graphviz dot={nfaDfaMin} />
          <p className={style.robotoThin}>Simulation:</p>
          <p className={style.robotoThinItalic}>{outputDfamin}</p>
        </div>
        <div className="graph-container">
          <h2 className={style.robotoMedium}>Syntax Tree:</h2>
          <Graphviz dot={AST} />
        </div>
        <div className="graph-container">
          <h2 className={style.robotoMedium}>DIRECT DFA:</h2>
          <Graphviz dot={DirectDFA} />
          <p className={style.robotoThin}>Simulation:</p>
          <p className={style.robotoThinItalic}>{outputDfaD}</p>
        </div>
        <div className="graph-container">
          <h2 className={style.robotoMedium}>Min DIRECT DFA:</h2>
          <Graphviz dot={directDfaMin} />
          <p className={style.robotoThin}>Simulation:</p>
          <p className={style.robotoThinItalic}>{outputDfaDmin}</p>
        </div>
      </div>
    </>
  )
}

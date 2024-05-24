import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@mui/material'
import './regex-eval.css'
import FileDrop from '../components/FileDrop'
import font from '../fonts/robot.module.css'
import { evaluateChain, postFiles, getParsingTable } from '../services/yapar-service'
import styles from './yalex-processing.module.css'

export default function YaparProcessing() {
  const [yalexContent, setYalContent] = useState('')
  const [yaparContent, setYapContent] = useState('')
  const [input, setInput] = useState('')
  const [automathon, setAutomathon] = useState(null)
  const [parsingTable, setParsingTable] = useState(null)
  const [parsing, setParsing] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      if (yalexContent && yaparContent) {
        setAutomathon(await postFiles(yalexContent, yaparContent))
        setParsingTable(await getParsingTable())
      }
    }
    fetchData()
  }, [yalexContent, yaparContent])
  const clickSimulate = async () => {
    if (input && yalexContent && yaparContent) {
      setParsing(await evaluateChain(input))
    }
  }
  return (
    <>
      <h1 className={font.robotoBold}>Yapar Processing</h1>
      <div className="grid-container">
        <div className="graph-container">
          <h2 className={font.robotoMedium}>Enter yalex:</h2>
          <FileDrop content={yalexContent} setContent={setYalContent} />
        </div>
        <div className="graph-container">
          <h2 className={font.robotoMedium}>Enter yapar:</h2>
          <FileDrop content={yaparContent} setContent={setYapContent} />
        </div>
      </div>
      <h2 className={font.robotoMedium}>Automathon</h2>
      <p className={font.robotoMedium}>
        {automathon ? (
          <div
            className={styles.svgImages}
            dangerouslySetInnerHTML={{ __html: automathon }}
          />
        ) : (
          <p className={font.robotoContent}>Loading Automathon...</p>
        )}
      </p>
      <h2 className={font.robotoMedium}>Parsing Table SLR</h2>
      <p>
        {parsingTable ? (
          <div className={styles.svgImages} dangerouslySetInnerHTML={{ __html: parsingTable }} />
        ) : (
          <p className={font.robotoContent}>Loading parsing table...</p>
        )}
      </p>
      <h2 className={font.robotoMedium}>Enter a chain:</h2>
      <TextField id="standard-basic" label="Chain" variant="standard" placeholder="Enter a chain" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button variant="outlined" color="secondary" size="large" style={{ width: '50%', fontSize: '100%' }} onClick={clickSimulate}>Accept</Button>
      <p>
        {parsing ? (
          <div style={{ width: '100%' }}>
            <div
              className={font.robotoMedium}
              dangerouslySetInnerHTML={{ __html: parsing.response }}
            />
            {parsing.accept ? `Successfully compiled ${input}` : 'Unsuccessfull'}
          </div>
        ) : (
          <p className={font.robotoContent}>Loading parsing...</p>
        )}
      </p>
    </>
  )
}

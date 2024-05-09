import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material'
import FileDrop from '../components/FileDrop'
import font from '../fonts/robot.module.css'
import { evaluateChain, postFiles } from '../services/yapar-service'
import styles from './yalex-processing.module.css'

export default function YaparProcessing() {
  const [yalexContent, setYalContent] = useState('')
  const [yaparContent, setYapContent] = useState('')
  const [input, setInput] = useState('')
  const [automathon, setAutomathon] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      if (yalexContent && yaparContent) {
        setAutomathon(await postFiles(yalexContent, yaparContent))
      }
    }
    fetchData()
  }, [yalexContent, yaparContent])
  useEffect(() => {
    const fetchRespose = async () => {
      if (input) {
        await evaluateChain(input)
      }
    }
    fetchRespose()
  }, [input])
  return (
    <>
      <h1 className={font.robotoBold}>Yapar Processing</h1>
      <h2 className={font.robotoMedium}>Enter yalex:</h2>
      <FileDrop content={yalexContent} setContent={setYalContent} />
      <h2 className={font.robotoMedium}>Enter yapar:</h2>
      <FileDrop content={yaparContent} setContent={setYapContent} />
      <h2 className={font.robotoMedium}>Enter a chain:</h2>
      <TextField id="standard-basic" label="Chain" variant="standard" placeholder="Enter a chain" value={input} onChange={(e) => setInput(e.target.value)} />
      <h2 className={font.robotoMedium}>Automathon</h2>
      <p>
        {automathon ? (
          <div className={styles.svgImages} dangerouslySetInnerHTML={{ __html: automathon }} />
        ) : (
          <p className={font.robotoContent}>Loading Automathon...</p>
        )}
      </p>
    </>
  )
}

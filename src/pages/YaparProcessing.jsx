import React, { useEffect, useState } from 'react'
import FileDrop from '../components/FileDrop'
import font from '../fonts/robot.module.css'
import { getAutomathon, postFiles } from '../services/yapar-service'
import styles from './yalex-processing.module.css'

export default function YaparProcessing() {
  const [yalexContent, setYalContent] = useState('')
  const [yaparContent, setYapContent] = useState('')
  const [automathon, setAutomathon] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      if (yalexContent && yaparContent) {
        setAutomathon(await postFiles(yalexContent, yaparContent))
      }
    }
    fetchData()
  }, [yalexContent, yaparContent])
  return (
    <>
      <h1 className={font.robotoBold}>Yapar Processing</h1>
      <h2 className={font.robotoMedium}>Enter yalex:</h2>
      <FileDrop content={yalexContent} setContent={setYalContent} />
      <h2 className={font.robotoMedium}>Enter yapar:</h2>
      <FileDrop content={yaparContent} setContent={setYapContent} />
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

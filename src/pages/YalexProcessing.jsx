import React, { useState, useEffect } from 'react'
import FileDrop2 from '../components/FileDrop2'
import { getScanner, yalexAnalyzer, yalexDFA } from '../services/yalex-service'
import styles from './yalex-processing.module.css'

function YalexProcessing() {
  const [content, setContent] = useState('')
  const [ast, setAst] = useState(null)
  const [dfa, setDfa] = useState(null)
  const uploadedFile = async () => {
    let response = await yalexAnalyzer(content)
    setAst(response)
    response = await yalexDFA()
    setDfa(response)
    response = await getScanner()
    const url = window.URL.createObjectURL(new Blob([response]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'Scanner.js')
    document.body.appendChild(link)
    link.click()
  }
  useEffect(() => {
    if (content) {
      uploadedFile()
    }
  }, [content])
  return (
    <>
      <FileDrop2 content={content} setContent={setContent} />
      <div>
        <h2>AST</h2>
        <p>
          {ast ? (
            <div className={styles.svgImages} dangerouslySetInnerHTML={{ __html: ast }} />
          ) : (
            <p>Loading AST...</p>
          )}
        </p>
      </div>
      <div>
        <h2>DFA</h2>
        {dfa ? (
          <div className={styles.svgImages} dangerouslySetInnerHTML={{ __html: dfa }} />
        ) : (
          <p>Loading DFA...</p>
        )}
      </div>
    </>
  )
}
export default YalexProcessing

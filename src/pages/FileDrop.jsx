import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Paper, Typography } from '@mui/material'
import { getScanner, yalexAnalyzer, yalexDFA } from '../services/yalex-service'
import styles from './file-drop.module.css'; 

function FileDrop() {
  const [acceptedFiles, setAcceptedFiles] = useState([])
  const [combinedContent, setCombinedContent] = useState('')
  const [ast, setAst] = useState(null);
  const [dfa, setDfa] = useState(null);
  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(file);
    });
  };

  const handleDrop = async (files) => {
    const filesWithContent = []
    let content = ''
    for (const file of files) {
      const fileContent = await readFileContent(file)
      filesWithContent.push({ ...file, content: fileContent })
      content += fileContent + '\n'
    }
    let response = await yalexAnalyzer(content)
    setAst(response)
    response = await yalexDFA()
    setDfa(response)
    response = await getScanner()
    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Scanner.js');
    document.body.appendChild(link);
    link.click();
  }
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.yal',
    onDrop: handleDrop,
  })
  return (
    <div>
      <Paper elevation={3} {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <Typography variant="h6" gutterBottom>
          Drop yal files here
        </Typography>
      </Paper>
      <div>
        <Typography variant="subtitle1">Uploaded Files:</Typography>
        {acceptedFiles.length === 0 ? (
          <p>Ninguno</p>
        ) : (
          <ul>
            {acceptedFiles.map((file) => (
              <li key={file.path}>{file.path}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <Typography variant="subtitle1">Combined Content:</Typography>
        {combinedContent ? (
          <pre>{combinedContent}</pre>
        ) : (
          <p>No content yet</p>
        )}
      </div>
      <div>
        <h2>AST</h2>
        {ast ? (
          <div className={styles.svgImages} dangerouslySetInnerHTML={{ __html: ast }} /> // Render the SVG using dangerouslySetInnerHTML
        ) : (
          <p>Loading AST...</p>
        )}
      </div>
      <div>
        <h2>DFA</h2>
        {dfa ? (
          <div className={styles.svgImages} dangerouslySetInnerHTML={{ __html: dfa }} /> // Render the SVG using dangerouslySetInnerHTML
        ) : (
          <p>Loading DFA...</p>
        )}
      </div>
    </div>
  )
}
export default FileDrop

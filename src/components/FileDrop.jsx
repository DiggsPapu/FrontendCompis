import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Paper, Typography } from '@mui/material'
import PropTypes from 'prop-types'

export default function FileDrop(props) {
  const { content, setContent } = props
  const readFileContent = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      resolve(event.target.result)
    }

    reader.onerror = (error) => {
      reject(error)
    }

    reader.readAsText(file)
  })
  const handleDrop = async (files) => {
    const filesWithContent = []
    files.map(async (file) => {
      const fileContent = await readFileContent(file)
      filesWithContent.push({ ...file, content: fileContent })
      setContent(`${fileContent}\n`)
    })
  }
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
  })
  return (
    <>
      <Paper elevation={3} {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <Typography variant="h6" gutterBottom>
          Drop files here
        </Typography>
      </Paper>
      <Typography>
        {content}
      </Typography>
    </>
  )
}
FileDrop.propTypes = {
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
}

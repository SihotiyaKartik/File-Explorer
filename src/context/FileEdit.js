import React, { createContext, useContext, useState } from "react"

const FileEditContext = createContext()

const FileEditProvider = ({ children }) => {
  const [fileNameEditOpen, setFileNameEditOpen] = useState(false)

  const handleFileNameEdit = () => {
    setFileNameEditOpen(!fileNameEditOpen)
  }

  return (
    <FileEditContext.Provider value={{ fileNameEditOpen, handleFileNameEdit }}>
      {children}
    </FileEditContext.Provider>
  )
}

const useFileEditContext = () => {
  return useContext(FileEditContext)
}

export { FileEditProvider, useFileEditContext }

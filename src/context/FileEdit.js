import React, { createContext, useContext, useState } from "react"
import { FileData } from "../data/FileData"
import { useCurrentFileContext } from "./CurrentFile"

const FileEditContext = createContext()

const FileEditProvider = ({ children }) => {
  const { currentFileId } = useCurrentFileContext()
  const [fileData, setFileData] = useState(FileData)
  const [fileNameEditOpen, setFileNameEditOpen] = useState(false)

  const handleFileNameEdit = () => {
    setFileNameEditOpen(!fileNameEditOpen)
  }

  const updateFileName = (fileData, id, value) => {
    if (fileData?.id === id) {
      return { ...fileData, name: value }
    } else if (fileData?.children && fileData?.children.length > 0) {
      const updateChildData = fileData?.children?.map((item) =>
        updateFileName(item, id, value)
      )
      return { ...fileData, children: updateChildData }
    }
    return fileData
  }

  const handleFileNameChange = (event) => {
    if (event.key === "Enter") {
      const updatedFileData = updateFileName(
        fileData,
        currentFileId,
        event.target.value
      )
      setFileData(updatedFileData)
      setFileNameEditOpen(!fileNameEditOpen)
    }
  }

  return (
    <FileEditContext.Provider
      value={{
        fileData,
        fileNameEditOpen,
        handleFileNameEdit,
        handleFileNameChange
      }}
    >
      {children}
    </FileEditContext.Provider>
  )
}

const useFileEditContext = () => {
  return useContext(FileEditContext)
}

export { FileEditProvider, useFileEditContext }

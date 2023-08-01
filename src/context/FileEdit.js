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
      const updatedChildData = fileData?.children?.map((item) =>
        updateFileName(item, id, value)
      )
      return { ...fileData, children: updatedChildData }
    }
    return fileData
  }

  const updateFileState = (fileData, id) => {
    if (fileData?.id === id) {
      return { ...fileData, isOpen: !fileData?.isOpen }
    } else if (fileData?.children && fileData?.children.length > 0) {
      const updatedChildData = fileData?.children?.map((item) =>
        updateFileState(item, id)
      )
      return { ...fileData, children: updatedChildData }
    }
    return fileData
  }

  const deleteData = (fileData, id) => {
    if (fileData?.id === id) {
      return null
    } else if (fileData?.children && fileData?.children.length > 0) {
      const updatedChildData = fileData?.children
        .map((item) => deleteData(item, id))
        .filter((item) => item !== null)
      return { ...fileData, children: updatedChildData }
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

  const handleFileStateChange = () => {
    const updatedFileData = updateFileState(fileData, currentFileId)
    setFileData(updatedFileData)
  }

  const handleDelete = () => {
    const updatedFileData = deleteData(fileData, currentFileId)
    setFileData(updatedFileData)
  }

  return (
    <FileEditContext.Provider
      value={{
        fileData,
        fileNameEditOpen,
        handleDelete,
        handleFileNameEdit,
        handleFileNameChange,
        handleFileStateChange
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

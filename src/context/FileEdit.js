import React, { createContext, useContext, useState } from "react"
import { FileData } from "../data/FileData"
import { useCurrentFileContext } from "./CurrentFile"
import generateUniqueId from "../utils/GenerateUniqueId"
const FileEditContext = createContext()

const FileEditProvider = ({ children }) => {
  const { currentFileId, setCurrentFileId } = useCurrentFileContext()
  const [fileData, setFileData] = useState(FileData)
  const [fileNameEditOpen, setFileNameEditOpen] = useState(false)
  const [isAddFileOpen, setAddFileOpen] = useState(false)
  const [isAddFolderOpen, setAddFolderOpen] = useState(false)
  const [isAddMainFileOpen, setAddMainFileOpen] = useState(false)
  const [isAddMainFolderOpen, setAddMainFolderOpen] = useState(false)

  const handleFileNameEdit = () => {
    setAddFolderOpen(false)
    setAddFileOpen(false)
    setFileNameEditOpen(!fileNameEditOpen)
  }

  const handleAddFileOpen = () => {
    setAddFolderOpen(false)
    setFileNameEditOpen(false)
    setAddFileOpen(!isAddFileOpen)
  }

  const handleAddFolderOpen = () => {
    setAddFileOpen(false)
    setFileNameEditOpen(false)
    setAddFolderOpen(!isAddFolderOpen)
  }

  const handleMainFileOpen = () => {
    setAddMainFolderOpen(false)
    setCurrentFileId(fileData?.id)
    setAddMainFileOpen(!isAddMainFileOpen)
  }

  const handleMainFolderOpen = () => {
    setAddMainFileOpen(false)
    setCurrentFileId(fileData?.id)
    setAddMainFolderOpen(!isAddMainFolderOpen)
  }

  const addFile = (fileData, id, level, name, fileType) => {
    const filePayload = {
      id: generateUniqueId(),
      name: name,
      type: fileType,
      children: [],
      level: level + 1,
      isOpen: fileType === "folder"
    }
    if (fileData?.id === id) {
      fileData?.children.push(filePayload)
      return fileData
    } else if (fileData?.children && fileData?.children.length > 0) {
      const updatedChildData = fileData?.children?.map((item) =>
        addFile(item, id, item?.level, name, fileType)
      )
      return { ...fileData, children: updatedChildData }
    }
    return fileData
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

  const handleAddFile = (level, name, fileType) => {
    fileType === "file" ? setAddFileOpen(false) : setAddFolderOpen(false)

    if (name.length > 0) {
      const updatedFileData = addFile(
        fileData,
        currentFileId,
        level,
        name,
        fileType
      )
      setFileData(updatedFileData)
    }
  }

  const handleAddMainFile = (name, fileType) => {
    fileType === "file"
      ? setAddMainFileOpen(false)
      : setAddMainFolderOpen(false)
    if (name.length > 0) {
      const updatedFileData = addFile(fileData, fileData?.id, 0, name, fileType)
      setFileData(updatedFileData)
    }
  }

  const handleFileNameChange = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        alert("Name can't be empty")
        return
      }
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
        isAddFileOpen,
        isAddFolderOpen,
        isAddMainFileOpen,
        isAddMainFolderOpen,
        handleDelete,
        handleAddFile,
        handleAddMainFile,
        handleAddFileOpen,
        handleMainFileOpen,
        handleMainFolderOpen,
        handleAddFolderOpen,
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

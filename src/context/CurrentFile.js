import React, { createContext, useContext, useState } from "react"

const CurrentFileContext = createContext()

const CurrentFileProvider = ({ children }) => {
  const [currentFileId, setCurrentId] = useState(-1)

  const setCurrentFileId = (id) => {
    setCurrentId(id)
  }

  return (
    <CurrentFileContext.Provider value={{ currentFileId, setCurrentFileId }}>
      {children}
    </CurrentFileContext.Provider>
  )
}

const useCurrentFileContext = () => {
  return useContext(CurrentFileContext)
}

export { CurrentFileProvider, useCurrentFileContext }

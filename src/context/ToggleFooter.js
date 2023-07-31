import React, { createContext, useContext, useState } from "react"

const ToggleFooterContext = createContext()

const ToggleFooterProvider = ({ children }) => {
  const [displayAllFiles, setDisplayAllFiles] = useState(true)

  const toggleDisplayFiles = () => {
    setDisplayAllFiles(!displayAllFiles)
  }

  return (
    <ToggleFooterContext.Provider
      value={{ displayAllFiles, toggleDisplayFiles }}
    >
      {children}
    </ToggleFooterContext.Provider>
  )
}

const useToggleFooterContext = () => {
  return useContext(ToggleFooterContext)
}

export { ToggleFooterProvider, useToggleFooterContext }

import "./App.css"
import FileExplorer from "./components/file-explorer"
import Header from "./components/header"
import { ToggleFooterProvider } from "./context/ToggleFooter"
import { FileEditProvider } from "./context/FileEdit"
import { CurrentFileProvider } from "./context/CurrentFile"

function App() {
  return (
    <div className="App">
      <ToggleFooterProvider>
        <CurrentFileProvider>
          <FileEditProvider>
            <Header />
            <FileExplorer />
          </FileEditProvider>
        </CurrentFileProvider>
      </ToggleFooterProvider>
    </div>
  )
}

export default App

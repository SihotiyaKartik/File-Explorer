import "./App.css"
import FileExplorer from "./components/file-explorer"
import Header from "./components/header"
import { FileData } from "./data/FileData"

function App() {
  return (
    <div className="App">
      <Header />
      <FileExplorer className="FileExplorerWindow" data={FileData} />
    </div>
  )
}

export default App

import FileExplorerHeader from "./FileExplorerHeader"
import FileExplorerFooter from "./FileExplorerFooter"
import { useFileEditContext } from "../../context/FileEdit"

const FileExplorer = () => {
  const { fileData } = useFileEditContext()

  return (
    <div className="FileExplorerWindow">
      <div className="FileExplorerBox">
        <FileExplorerHeader />
        <FileExplorerFooter data={fileData} />
      </div>
    </div>
  )
}

export default FileExplorer

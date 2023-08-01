import FileExplorerHeader from "./FileExplorerHeader"
import FileExplorerFooter from "./FileExplorerFooter"
import { ToggleFooterProvider } from "../../context/ToggleFooter"

const FileExplorer = ({ data }) => {
  return (
    <ToggleFooterProvider>
      <div className="FileExplorerWindow">
        <div className="FileExplorerBox">
          <FileExplorerHeader />
          <FileExplorerFooter data={data} />
        </div>
      </div>
    </ToggleFooterProvider>
  )
}

export default FileExplorer

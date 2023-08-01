import FileExplorerHeader from "./FileExplorerHeader"
import FileExplorerFooter from "./FileExplorerFooter"
import { ToggleFooterProvider } from "../../context/ToggleFooter"
import { CurrentFileProvider } from "../../context/CurrentFile"
import { FileEditProvider } from "../../context/FileEdit"

const FileExplorer = ({ data }) => {
  return (
    <ToggleFooterProvider>
      <CurrentFileProvider>
        <FileEditProvider>
          <div className="FileExplorerWindow">
            <div className="FileExplorerBox">
              <FileExplorerHeader />
              <FileExplorerFooter data={data} />
            </div>
          </div>
        </FileEditProvider>
      </CurrentFileProvider>
    </ToggleFooterProvider>
  )
}

export default FileExplorer

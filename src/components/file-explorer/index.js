import FileExplorerHeader from "./FileExplorerHeader"
import FileExplorerFooter from "./FileExplorerFooter"
import { ToggleFooterProvider } from "../../context/ToggleFooter"

const FileExplorer = (props) => {
  return (
    <ToggleFooterProvider>
      <div className={props.className}>
        <div className="FileExplorerBox">
          <FileExplorerHeader />
          <FileExplorerFooter data={props.data} />
        </div>
      </div>
    </ToggleFooterProvider>
  )
}

export default FileExplorer

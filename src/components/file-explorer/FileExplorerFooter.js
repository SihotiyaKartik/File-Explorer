import { useToggleFooterContext } from "../../context/ToggleFooter"
import RenderFiles from "./RenderFile"

const FileExplorerFooter = ({ data }) => {
  const { displayAllFiles } = useToggleFooterContext()

  return (
    <div className="FileExplorerBoxFooter">
      {displayAllFiles ? <RenderFiles data={data?.children} /> : <></>}
    </div>
  )
}

export default FileExplorerFooter

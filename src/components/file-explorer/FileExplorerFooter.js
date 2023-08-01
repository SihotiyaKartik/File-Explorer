import NewMainFileCard from "../../cards/NewMainFileCard"
import { useFileEditContext } from "../../context/FileEdit"
import { useToggleFooterContext } from "../../context/ToggleFooter"
import RenderFiles from "./RenderFile"

const FileExplorerFooter = ({ data }) => {
  const { displayAllFiles } = useToggleFooterContext()
  const { isAddMainFileOpen, isAddMainFolderOpen } = useFileEditContext()
  return (
    <div className="FileExplorerBoxFooter">
      {displayAllFiles ? (
        <>
          <RenderFiles data={data?.children} />
          {isAddMainFileOpen && <NewMainFileCard fileType="file" />}
          {isAddMainFolderOpen && <NewMainFileCard fileType="folder" />}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FileExplorerFooter

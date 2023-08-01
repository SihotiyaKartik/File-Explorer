import {
  AiOutlineDown,
  AiOutlineUp,
  AiFillFile,
  AiFillFolder
} from "react-icons/ai"
import { useToggleFooterContext } from "../../context/ToggleFooter"
import { useFileEditContext } from "../../context/FileEdit"
import constants from "../../constants/constants"

const FileExplorerHeader = () => {
  const { displayAllFiles, toggleDisplayFiles } = useToggleFooterContext()
  const {
    isAddMainFileOpen,
    isAddMainFolderOpen,
    handleMainFileOpen,
    handleMainFolderOpen
  } = useFileEditContext()

  return (
    <div className="FileExplorerBoxHeader">
      <div className="FileName">
        {displayAllFiles ? (
          <AiOutlineDown
            size={20}
            className="icon"
            onClick={toggleDisplayFiles}
          />
        ) : (
          <AiOutlineUp
            size={20}
            className="icon"
            onClick={toggleDisplayFiles}
          />
        )}
        <div className="text">Files</div>
      </div>
      <div>
        <AiFillFile
          color={
            isAddMainFileOpen
              ? constants.SECONDARY_COLOR
              : constants.PRIMARY_COLOR
          }
          onClick={handleMainFileOpen}
          className="icon"
          size={20}
        />
        <AiFillFolder
          color={
            isAddMainFolderOpen
              ? constants.SECONDARY_COLOR
              : constants.PRIMARY_COLOR
          }
          onClick={handleMainFolderOpen}
          className="icon"
          size={20}
        />
      </div>
    </div>
  )
}

export default FileExplorerHeader

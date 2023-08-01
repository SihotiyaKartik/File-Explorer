import {
  AiOutlineDown,
  AiOutlineUp,
  AiFillFile,
  AiFillFolder
} from "react-icons/ai"
import { useToggleFooterContext } from "../../context/ToggleFooter"

const FileExplorerHeader = () => {
  const { displayAllFiles, toggleDisplayFiles } = useToggleFooterContext()

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
        <div className="">Files</div>
      </div>
      <div className="FileType">
        <AiFillFile size={20} />
        <AiFillFolder size={20} />
      </div>
    </div>
  )
}

export default FileExplorerHeader
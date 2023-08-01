import {
  AiFillFile,
  AiFillFolder,
  AiFillDelete,
  AiOutlineFolderOpen
} from "react-icons/ai"
import EditIcon from "./EditIcon"
import { useCurrentFileContext } from "../context/CurrentFile"
import { useFileEditContext } from "../context/FileEdit"
import { useState } from "react"

const FileCard = ({ data }) => {
  const [currentFileName, setCurrentFileName] = useState(data?.name)
  const { currentFileId, setCurrentFileId } = useCurrentFileContext()
  const { fileNameEditOpen, handleFileNameChange } = useFileEditContext()
  const marginLeft = `${(data?.level - 1) * 10}px`

  const handleFileName = (value) => {
    setCurrentFileName(value)
  }

  return (
    <div className="FileCard">
      <div
        onMouseEnter={() =>
          !fileNameEditOpen ? setCurrentFileId(data?.id) : null
        }
        className="FileCardLeftSection"
        style={{ marginLeft }}
      >
        {data?.type === "folder" ? (
          <>
            {data?.isOpen ? (
              <AiOutlineFolderOpen className="icon" size={20} />
            ) : (
              <AiFillFolder className="icon" size={20} />
            )}
          </>
        ) : (
          <AiFillFile className="icon" size={20} />
        )}
        <div className="SubFilesName">
          {fileNameEditOpen && currentFileId === data?.id ? (
            <input
              type="text"
              value={currentFileName}
              autoFocus
              onChange={(e) => handleFileName(e.target.value)}
              onKeyDown={handleFileNameChange}
            />
          ) : (
            <>{data?.name}</>
          )}
        </div>
      </div>
      <div className="EditIcons">
        {data?.id === currentFileId ? (
          <>
            {data?.type === "folder" ? (
              <>
                <EditIcon />
                <AiFillFile size={20} />
                <AiFillFolder size={20} />
                <AiFillDelete size={20} />
              </>
            ) : (
              <>
                <EditIcon />
                <AiFillDelete size={20} />
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default FileCard

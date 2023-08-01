import { AiFillFile, AiFillFolder, AiOutlineFolderOpen } from "react-icons/ai"
import EditIcon from "../icons/EditIcon"
import DeleteIcon from "../icons/Delete"
import AddFile from "../icons/AddFile"
import AddFolder from "../icons/AddFolder"
import { useCurrentFileContext } from "../context/CurrentFile"
import { useFileEditContext } from "../context/FileEdit"
import { useState } from "react"
import { PRIMARY_COLOR } from "../constants/constants"

const FileCard = ({ data }) => {
  const [currentFileName, setCurrentFileName] = useState(data?.name)
  const { currentFileId, setCurrentFileId } = useCurrentFileContext()
  const {
    isAddFileOpen,
    isAddMainFileOpen,
    isAddFolderOpen,
    isAddMainFolderOpen,
    fileNameEditOpen,
    handleFileNameChange,
    handleFileStateChange
  } = useFileEditContext()
  const marginLeft = `${(data?.level - 1) * 15}px`

  const handleFileName = (value) => {
    setCurrentFileName(value)
  }

  return (
    <div className="FileCard">
      <div
        onMouseEnter={() =>
          !fileNameEditOpen &&
          !isAddFileOpen &&
          !isAddMainFileOpen &&
          !isAddFolderOpen &&
          !isAddMainFolderOpen
            ? setCurrentFileId(data?.id)
            : null
        }
        className="FileCardLeftSection"
        style={{ marginLeft }}
      >
        {data?.type === "folder" ? (
          <>
            {data?.isOpen ? (
              <AiOutlineFolderOpen
                color={PRIMARY_COLOR}
                className="icon"
                size={20}
              />
            ) : (
              <AiFillFolder color={PRIMARY_COLOR} className="icon" size={20} />
            )}
          </>
        ) : (
          <AiFillFile color={PRIMARY_COLOR} className="icon" size={20} />
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
            <div className="text" onClick={handleFileStateChange}>
              {data?.name}
            </div>
          )}
        </div>
      </div>
      <div className="EditIcons">
        {data?.id === currentFileId ? (
          <>
            {data?.type === "folder" ? (
              <>
                <EditIcon />
                <AddFile />
                <AddFolder />
                <DeleteIcon />
              </>
            ) : (
              <>
                <EditIcon />
                <DeleteIcon />
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

import {
  AiFillFile,
  AiFillFolder,
  AiFillDelete,
  AiOutlineFolderOpen
} from "react-icons/ai"
import EditIcon from "./EditIcon"
import { useCurrentFileContext } from "../context/CurrentFile"
import { useFileEditContext } from "../context/FileEdit"

const FileCard = ({ data }) => {
  const { currentFileId, setCurrentFileId } = useCurrentFileContext()
  const { fileNameEditOpen } = useFileEditContext()
  const marginLeft = `${(data?.level - 1) * 10}px`

  return (
    <div className="FileCard">
      <div
        onMouseEnter={() => setCurrentFileId(data?.id)}
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
            <input value={data?.name} autoFocus />
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

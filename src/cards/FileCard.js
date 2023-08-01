import { useState } from "react"
import { AiFillFile, AiFillFolder, AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"

const FileCard = ({ data }) => {
  const [showEditIcons, setShowEditIcons] = useState(false)
  const [currentId, setCurrentId] = useState(-1)

  const marginLeft = `${(data?.level - 1) * 10}px`

  const handleCurrentId = (id) => {
    setShowEditIcons(!showEditIcons)
  }

  return (
    <div className="FileCard">
      <div
        onMouseEnter={() => handleCurrentId(data?.id)}
        className="FileCardLeftSection"
        style={{ marginLeft }}
      >
        {data?.type === "folder" ? (
          <AiFillFolder className="icon" size={20} />
        ) : (
          <AiFillFile className="icon" size={20} />
        )}
        <div className="SubFilesName">{data?.name}</div>
      </div>
      <div className="EditIcons">
        {data?.type === "folder" ? (
          <>
            <FiEdit size={20} />
            <AiFillFile size={20} />
            <AiFillFolder size={20} />
            <AiFillDelete size={20} />
          </>
        ) : (
          <>
            <FiEdit size={20} />
            <AiFillDelete size={20} />
          </>
        )}
      </div>
    </div>
  )
}

export default FileCard

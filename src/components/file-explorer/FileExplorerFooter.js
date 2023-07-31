import { useState } from "react"
import { AiFillFile, AiFillFolder, AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { useToggleFooterContext } from "../../context/ToggleFooter"

const FileExplorerFooter = ({ data }) => {
  const [showEditIcon, setEditIcon] = useState(false)
  const [currentEditId, setCurrentEditId] = useState(-1)
  const [isFileNameEditOpen, setFileNameEdit] = useState(false)

  const handleEditIcon = (id) => {
    setEditIcon(!showEditIcon)
    setCurrentEditId(id)
  }

  const handleFileNameEdit = (id) => {
    setFileNameEdit(!isFileNameEditOpen)
  }

  const { displayAllFiles } = useToggleFooterContext()

  return (
    <div className="FileExplorerBoxFooter">
      {displayAllFiles ? (
        <>
          {data.children.map((item) => (
            <div className="FileExplorerContent" key={item?.id}>
              <div onClick={() => handleEditIcon(item?.id)} className="SubFile">
                {item?.type === "file" ? (
                  <AiFillFile className="icon" size={20} />
                ) : (
                  <AiFillFolder className="icon" size={20} />
                )}
                {isFileNameEditOpen && item?.id === currentEditId ? (
                  <input type="text" autoFocus></input>
                ) : (
                  <div>{item?.name}</div>
                )}
              </div>
              {showEditIcon && item?.id === currentEditId ? (
                <div className="EditFileIcon">
                  <FiEdit onClick={handleFileNameEdit} size={20} />
                  <AiFillFile size={20} />
                  <AiFillFolder size={20} />
                  <AiFillDelete size={20} />
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FileExplorerFooter

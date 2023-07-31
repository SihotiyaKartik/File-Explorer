import { useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
const FileExplorer = (props) => {
  const [data, setFileData] = useState(props.data)
  const [editMode, setEditMode] = useState(false)

  const handleEdit = () => {
    setEditMode(!editMode)
  }

  return (
    <div className={props.className}>
      <div className="FileExplorerBox">
        <AiOutlineDown />
        <div>File</div>
      </div>
    </div>
  )
}

export default FileExplorer

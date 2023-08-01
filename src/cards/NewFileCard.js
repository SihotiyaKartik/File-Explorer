import { useState } from "react"
import { TiTick } from "react-icons/ti"
import { RxCross1 } from "react-icons/rx"
import { useFileEditContext } from "../context/FileEdit"
const NewFileCard = ({ fileType, data }) => {
  const [fileName, setFileName] = useState("")
  const { handleAddFile, handleAddFileOpen } = useFileEditContext()
  const marginLeft = `${(data?.level - 1) * 15}px`
  const handleFileName = (value) => {
    setFileName(value)
  }

  return (
    <div className="FileCard">
      <div>
        <input
          type="text"
          value={fileName}
          onChange={(e) => handleFileName(e.target.value)}
          autoFocus
          style={{ marginLeft }}
        />
      </div>
      <div className="EditIcons">
        <TiTick
          onClick={() => handleAddFile(data?.level, fileName, fileType)}
          size={25}
          className="icon"
        />
        <RxCross1 onClick={handleAddFileOpen} size={20} className="icon" />
      </div>
    </div>
  )
}

export default NewFileCard

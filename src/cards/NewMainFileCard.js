import { useState } from "react"
import { TiTick } from "react-icons/ti"
import { RxCross1 } from "react-icons/rx"
import { useFileEditContext } from "../context/FileEdit"
const NewMainFileCard = ({ fileType }) => {
  const [fileName, setFileName] = useState("")
  const { handleAddMainFile, handleAddMainFileOpen, handleAddMainFolderOpen } =
    useFileEditContext()

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
        />
      </div>
      <div className="EditIcons">
        <TiTick
          onClick={() => handleAddMainFile(fileName, fileType)}
          size={25}
          className="icon"
        />
        <RxCross1
          onClick={
            fileType === "file"
              ? handleAddMainFileOpen
              : handleAddMainFolderOpen
          }
          size={20}
          className="icon"
        />
      </div>
    </div>
  )
}

export default NewMainFileCard

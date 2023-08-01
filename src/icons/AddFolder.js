import { AiFillFolder } from "react-icons/ai"
import { useFileEditContext } from "../context/FileEdit"
const AddFolder = () => {
  const { handleAddFolderOpen } = useFileEditContext()
  return (
    <AiFillFolder onClick={handleAddFolderOpen} size={20} className="icon" />
  )
}

export default AddFolder

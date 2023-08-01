import { AiFillFolder } from "react-icons/ai"
import { useFileEditContext } from "../context/FileEdit"
import { SECONDARY_COLOR, PRIMARY_COLOR } from "../constants/constants"
const AddFolder = () => {
  const { isAddFolderOpen, handleAddFolderOpen } = useFileEditContext()
  return (
    <AiFillFolder
      color={isAddFolderOpen ? SECONDARY_COLOR : PRIMARY_COLOR}
      onClick={handleAddFolderOpen}
      size={20}
      className="icon"
    />
  )
}

export default AddFolder

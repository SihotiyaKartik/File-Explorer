import { AiFillFolder } from "react-icons/ai"
import { useFileEditContext } from "../context/FileEdit"
import constants from "../constants/constants"
const AddFolder = () => {
  const { isAddFolderOpen, handleAddFolderOpen } = useFileEditContext()
  return (
    <AiFillFolder
      color={
        isAddFolderOpen ? constants.SECONDARY_COLOR : constants.PRIMARY_COLOR
      }
      onClick={handleAddFolderOpen}
      size={20}
      className="icon"
    />
  )
}

export default AddFolder

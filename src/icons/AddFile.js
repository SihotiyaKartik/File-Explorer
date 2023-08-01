import { AiFillFile } from "react-icons/ai"
import { useFileEditContext } from "../context/FileEdit"
import constants from "../constants/constants"
const AddFile = () => {
  const { isAddFileOpen, handleAddFileOpen } = useFileEditContext()
  return (
    <AiFillFile
      color={
        isAddFileOpen ? constants.SECONDARY_COLOR : constants.PRIMARY_COLOR
      }
      onClick={handleAddFileOpen}
      size={20}
      className="icon"
    />
  )
}

export default AddFile

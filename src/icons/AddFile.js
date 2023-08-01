import { AiFillFile } from "react-icons/ai"
import { useFileEditContext } from "../context/FileEdit"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constants/constants"
const AddFile = () => {
  const { isAddFileOpen, handleAddFileOpen } = useFileEditContext()
  return (
    <AiFillFile
      color={isAddFileOpen ? SECONDARY_COLOR : PRIMARY_COLOR}
      onClick={handleAddFileOpen}
      size={20}
      className="icon"
    />
  )
}

export default AddFile

import { FiEdit } from "react-icons/fi"
import { useFileEditContext } from "../context/FileEdit"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constants/constants"
const EditIcon = () => {
  const { fileNameEditOpen, handleFileNameEdit } = useFileEditContext()

  return (
    <FiEdit
      color={fileNameEditOpen ? SECONDARY_COLOR : PRIMARY_COLOR}
      onClick={handleFileNameEdit}
      size={20}
      className="icon"
    />
  )
}

export default EditIcon

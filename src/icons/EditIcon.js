import { FiEdit } from "react-icons/fi"
import { useFileEditContext } from "../context/FileEdit"
import constants from "../constants/constants"
const EditIcon = () => {
  const { fileNameEditOpen, handleFileNameEdit } = useFileEditContext()

  return (
    <FiEdit
      color={
        fileNameEditOpen ? constants.SECONDARY_COLOR : constants.PRIMARY_COLOR
      }
      onClick={handleFileNameEdit}
      size={20}
      className="icon"
    />
  )
}

export default EditIcon

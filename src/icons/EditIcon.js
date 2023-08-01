import { FiEdit } from "react-icons/fi"
import { useFileEditContext } from "../context/FileEdit"

const EditIcon = () => {
  const { handleFileNameEdit } = useFileEditContext()

  return <FiEdit onClick={handleFileNameEdit} size={20} className="icon" />
}

export default EditIcon

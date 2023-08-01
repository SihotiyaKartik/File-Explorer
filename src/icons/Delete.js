import { AiFillDelete } from "react-icons/ai"
import { useFileEditContext } from "../context/FileEdit"

const DeleteIcon = () => {
  const { handleDelete } = useFileEditContext()

  return <AiFillDelete onClick={handleDelete} size={20} className="icon" />
}

export default DeleteIcon

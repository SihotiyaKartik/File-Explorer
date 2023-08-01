import { AiFillDelete } from "react-icons/ai"
import { useFileEditContext } from "../context/FileEdit"
import { PRIMARY_COLOR } from "../constants/constants"

const DeleteIcon = () => {
  const { handleDelete } = useFileEditContext()

  return (
    <AiFillDelete
      color={PRIMARY_COLOR}
      onClick={handleDelete}
      size={20}
      className="icon"
    />
  )
}

export default DeleteIcon

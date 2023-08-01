import { AiFillFile } from "react-icons/ai"
import { useFileEditContext } from "../context/FileEdit"
const AddFile = () => {
  const { handleAddFileOpen } = useFileEditContext()
  return <AiFillFile onClick={handleAddFileOpen} size={20} className="icon" />
}

export default AddFile

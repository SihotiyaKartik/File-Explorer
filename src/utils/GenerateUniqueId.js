import { v4 as uuidv4 } from "uuid"

export default function generateUniqueId() {
  const uniqueId = uuidv4()
  return uniqueId
}

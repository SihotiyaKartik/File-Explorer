import { useState } from "react"
import FileCard from "../../cards/FileCard"

const RenderFiles = ({ data }) => {
  const [expandedFiles, setExpandedFiles] = useState({})

  const handleExpandation = (item) => {
    setExpandedFiles((prevItem) => ({
      ...prevItem,
      [item?.id]: !prevItem[item?.id]
    }))
  }

  return (
    <div>
      {data?.map((item) => (
        <div>
          <FileCard data={item} key={item?.id} />
          {item?.children && item?.isOpen && (
            <RenderFiles data={item?.children} />
          )}
        </div>
      ))}
    </div>
  )
}

export default RenderFiles

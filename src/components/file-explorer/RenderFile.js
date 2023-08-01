import FileCard from "../../cards/FileCard"
import NewFileCard from "../../cards/NewFileCard"
import { useCurrentFileContext } from "../../context/CurrentFile"
import { useFileEditContext } from "../../context/FileEdit"

const RenderFiles = ({ data }) => {
  const { isAddFileOpen } = useFileEditContext()
  const { currentFileId } = useCurrentFileContext()

  return (
    <div>
      {data?.map((item) => (
        <div>
          <FileCard data={item} key={item?.id} />
          {isAddFileOpen && currentFileId === item?.id && (
            <NewFileCard data={item} />
          )}
          {item?.children && item?.isOpen && (
            <RenderFiles data={item?.children} />
          )}
        </div>
      ))}
    </div>
  )
}

export default RenderFiles

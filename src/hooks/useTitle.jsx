import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
    document.title = `${title} -Fabulous Toys`
    },[title])
}
export default useTitle;
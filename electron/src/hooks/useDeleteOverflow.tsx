import { useEffect } from 'react'

export const useDeleteOverflow = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden"
      
        return () => { document.body.style.overflow = "auto" }
      }, [])
}

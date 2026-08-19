import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    window.location.replace("/birthday.html")
  }, [])
  return null
}

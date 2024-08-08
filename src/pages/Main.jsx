import { Outlet } from "react-router-dom"
import Header from "./navigate/Header"
import Footer from "./navigate/Footer"

const Main = () => {
  return (
    <>
    <Header />
<Outlet/>
    <Footer />
    </>
  )
}

export default Main
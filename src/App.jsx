import { Outlet } from 'react-router-dom'
import TopNav from './components/TopNav/TopNav'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <TopNav></TopNav>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App

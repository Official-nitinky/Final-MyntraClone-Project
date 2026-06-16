
import { Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css'
import Footer from '../components/footer'
import Header from '../components/header'
import HomeItem from '../components/HomeItem'
import FetchItems from '../components/FetchItems'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'


function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </>
  )
}

export default App

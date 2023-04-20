import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    < >
      <OwlCarousel className='owl-theme position-relative top-0' loop items={1} autoplay={true} autoplayTimeout={4000} dots={false}>
        <div className=' slider1 w-100 vh-100'>
          <div className="layout w-100 h-100 d-flex justify-content-center align-items-start text-white flex-column">
            <div className="container">
              <h3 className='text-dark'>Men Collection 2023</h3>
              <h1 className='my-2 text-dark'>NEW SEASON</h1>
              <Link className='btn btn-bg2 rounded-pill mt-3 px-4 py-2 fw-bold' to='/all'>SHOP NOW</Link>
            </div>
          </div>
        </div>
        <div className=' slider2 w-100 vh-100'>
          <div className="layout w-100 h-100 d-flex justify-content-center align-items-start text-white flex-column">
            <div className="container">
              <h3 className='text-dark'>Women Collection 2023</h3>
              <h1 className='my-2 text-dark'>New arrivals</h1>
              <Link className='btn btn-bg2 rounded-pill mt-3 px-4 py-2 fw-bold' to='/all'>SHOP NOW</Link>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  )
}
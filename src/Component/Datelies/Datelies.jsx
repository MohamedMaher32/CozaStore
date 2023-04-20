import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../Footer/Footer'
import toast from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext'
export default function Datelies() {
  let { getAllCartData} = useContext(CartContext)
  // main Api link
  let baseUrl = "https://route-ecommerce.onrender.com"
  // btn loading
  let [loading, setLoading] = useState(false)
  // hook to get id of product  
  let { id } = useParams()
  // naviget to card dateiles
  let navigate = useNavigate()
  // datelies object
  let [productDatelies, setProductDatelies] = useState()
  // mounting function
  useEffect(() => {
    getDatelies()
  }, [])
  // api dateiles function
  async function getDatelies() {
    let { data } = await axios.get(`${baseUrl}/api/v1/products/${id}`)
    $(".loading").fadeOut(1500)
    //console.log(data);
    setProductDatelies(data.data)
  }
  // api cart function
  async function addItemCart(productId) {
    setLoading(true)
    let body = { productId: productId }
    let headers = { token: localStorage.getItem("token") }
    let { data } = await axios.post(`${baseUrl}/api/v1/cart`, body, { headers })
    console.log(data);
    setLoading(false)
    if (data.status == "success") {
      toast.success(data.message , {className:" box-shadow",duration: 2000})
      getAllCartData()
      // navigate("/cartdatiles")
    }
  }
  return (
    <>
      <div className="loading">
        <span className="loader"></span>
      </div>
      {productDatelies ?
        <div className="container alll">
          <div className='row  m-0 py-4 mb-5 mt-4 shadow rounded-3 align-items-center'>
            <div className="close"> <Link to="/all" className='text-dark'><i className="fa-solid fa-xmark"></i></Link> </div>
            <div className='col-md-4 col-sm-12 mb-3 '>
              <OwlCarousel className='owl-theme' loop items={1}>
                {productDatelies.images.map((el) => {
                  return <img src={el} alt="category" className='w-100' key={el} height={400} />
                })}
              </OwlCarousel>
            </div>
            <div className="col-md-8 col-sm-12 ">
              <div className="information px-3">
                <h3 className='h6 fw-bold mb-4 text-color'>{productDatelies.title}</h3>
                <p className='text-muted small'>{productDatelies.description}</p>
                <span className='fw-bold'>{productDatelies.category.name}</span>
                <div className='d-flex justify-content-between mt-2'>
                  <p>{productDatelies.price}$</p>
                  <div><i className='fa-solid fa-star text-warning'></i>{productDatelies.ratingsAverage}</div>
                </div>
                {loading ? <button type='button' className='btn btn-bg2 w-100'><i className='fa-solid fa-spinner fa-spin'></i></button>
                  :
                  <button onClick={() => addItemCart(productDatelies._id)} className='btn btn-bg2 w-100'>+ Add Cart</button>}
              </div>
            </div>
          </div>
        </div>
        : ""}
      <div className="alll">
        <Footer />
      </div>
    </>
  )
}

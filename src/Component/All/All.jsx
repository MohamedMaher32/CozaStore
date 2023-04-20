import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Footer from '../Footer/Footer'
export default function All() {
  // main Api link
  let baseUrl = "https://route-ecommerce.onrender.com"
  // array product
  let [productList, setProductList] = useState([])
  // mounting function
  useEffect(() => {
    getProducts()
  }, [])
  // api function
  async function getProducts() {
    let { data } = await axios.get(`${baseUrl}/api/v1/products`)
    $(".loading").fadeOut(1500)
    //console.log(data.data);
    setProductList(data.data)
  }
  return (

    <>
      <div className="loading">
        <span className="loader"></span>
      </div>
      <div className='all mb-5 pb-5'>
        <div className="container">
          <div className='row m-0 g-3 pb-5 pt-3'>
            {productList.map((el) => {
              return <div className="col-lg-3 col-md-4 col-sm-6 item" key={el._id}>
                <Link to={"/datelies/" + el._id}>
                  <div className="product px-3 border rounded-3 position-relative">
                    <img src={el.imageCover} alt="product" className='w-100 mb-3' />
                    <div className="view position-absolute"><button className='btn'>View Detailes</button></div>
                    <span className='text-color fw-bold'>{el.category.name}</span>
                    <h3 className='h6 fw-bold'>{el.title.split(" ").slice(0, 2).join(" ")}</h3>
                    <div className='d-flex justify-content-between'>
                      <p>{el.price}$</p>
                      <div><i className='fa-solid fa-star text-warning'></i>{el.ratingsAverage}</div>
                    </div>
                  </div>
                </Link>
              </div>
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}


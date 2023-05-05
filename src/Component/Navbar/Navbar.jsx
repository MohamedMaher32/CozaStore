import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Assets/logo.png'
import empetyCart from '../../Assets/emptycart.png'
import { FunctionContext } from '../../Context/ShareFunction'
import { CartContext } from '../../Context/CartContext'
export default function Navbar() {
  let { userData, deleteData } = useContext(FunctionContext)
  let { cartList, deleteItemCard, updateQuantity } = useContext(CartContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" className='w-100' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa-solid fa-bars text-white fs-2 "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {userData ?
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link active ' : ' nav-link ')} to="home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link  active ' : ' nav-link ')} to="all">Shop</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link  active ' : ' nav-link ')} to="about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link active ' : ' nav-link ')} to="blog">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => (isActive ? ' nav-link  active ' : ' nav-link ')} to="contact">Contact</NavLink>
                </li>
              </ul> : ""}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData ?
                <>
                  <li className="nav-item  mt-2 me-3 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div className=" position-relative p-2 rounded-2">
                      <i className="fa-solid fa-cart-shopping  fs-4 cusror text-white"></i>
                      <span className="position-absolute start-25 translate-middle badge cart">{cartList?.numOfCartItems}</span>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to='/' className="nav-link btn btn-bg" style={{ cursor: "pointer" }} onClick={deleteData}>Logout</Link>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-bg mb-2" to="login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-bg" to="/">Register</Link>
                  </li>
                </>}
            </ul>
          </div>
        </div>
      </nav>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
        <div className="offcanvas-header border">
          <h5 className="offcanvas-title fw-bold" id="offcanvasRightLabel">Cart Dateiles</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h4 className='text-center bg-dark text-white py-2'>Total Price: {cartList?.data.totalCartPrice}$</h4>
          {(cartList?.numOfCartItems != 0) ? 
          <>
            {cartList ?
              cartList.data.products.map((el) => {
                return <div className='border-bottom py-2' key={el._id}>
                  <h6 className='fw-bold text-center cartsidbar'>{el.product.title}</h6>
                  <div className='d-flex justify-content-between align-items-center'>
                    <img src={el.product.imageCover} alt="" height={50} className='w-25' />
                    <span className='mx-2'>{el.price}$</span>
                    <div>
                      <button className='btn btn-success px-1 py-0 fw-bold cusror' onClick={() => { updateQuantity(el.product._id, el.count += 1) }}>+</button>
                      <span className='mx-2'>{el.count}</span>
                      <button className='btn btn-danger px-1 py-0 fw-bold  cusror' onClick={() => { updateQuantity(el.product._id, (el.count > 0) ? el.count -= 1 : 0) }}>-</button>
                    </div>
                    <i className="fa-solid fa-trash text-danger fs-4 cusror" onClick={() => deleteItemCard(el.product._id)}></i>
                  </div>
                </div>
              })
              : ""}
          </>: <div className='d-flex justify-content-center align-items-center'><img src={empetyCart} alt="empetycart"  className='w-100'/></div>}
          
        </div>
        <div className='offcanvas-bottom'>
          <div className='d-flex justify-content-around align-items-center py-3'>
            <Link to='/all' className='btn btn-bg2'>Add More Products</Link>
            <Link to={"/checkout/" + cartList?.data._id} className='btn btn-bg2 '>Checkout Payment</Link>
          </div>
        </div>
      </div>
    </>

  )
}
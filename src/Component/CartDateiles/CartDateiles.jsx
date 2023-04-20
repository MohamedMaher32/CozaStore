import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function CartDateiles() {
    // get context
    let { getAllCartData, cartList, deleteItemCard, updateQuantity } = useContext(CartContext)
    useEffect(() => {
        getAllCartData()
    }, [])
    return (
        <div className='alll'>
            <div className="loading">
                <span className="loader"></span>
            </div>
            <div className="container py-4">
                <div className='table-responsive mt-3 '>
                    {cartList ?
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <table className='table   table-bordered table-sm text-center' style={{ verticalAlign: 'middle' }}>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Quatity</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList.data.products.map((el) => {
                                        return <tr key={el._id}>
                                            <td><img src={el.product.imageCover} alt="" className='w-50' height={100} /></td>
                                            <td>{el.product.title}</td>
                                            <td>
                                                <button className='btn btn-success px-1 py-0 fw-bold cusror' onClick={() => { updateQuantity(el.product._id, el.count += 1) }}>+</button>
                                                <span className='mx-1'>{el.count}</span>
                                                <button className='btn btn-danger px-1 py-0 fw-bold  cusror' onClick={() => { updateQuantity(el.product._id, (el.count > 0)? el.count -= 1:0) }}>-</button>
                                            </td>
                                            <td>{el.price}$</td>
                                            <td><i className="fa-solid fa-trash text-danger fs-3 cusror" onClick={() => deleteItemCard(el.product._id)}></i></td>
                                        </tr>
                                    })}
                                    <tr className='fw-bold'>
                                        <td colSpan={4}>Total</td>
                                        <td>{cartList.data.totalCartPrice}$</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to={"/checkout/" + cartList.data._id} className='btn btn-bg2 my-4'>Checkout Payment</Link>
                        </div>
                        : ""}
                </div>
            </div>
            <Footer />

        </div>
    )
}

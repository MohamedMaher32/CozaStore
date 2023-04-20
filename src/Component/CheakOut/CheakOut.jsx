import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import { useParams } from "react-router-dom"
import * as Yup from 'yup'
import Footer from '../Footer/Footer'
export default function CheakOut() {
    // btn loading
    let [loading, setLoading] = useState(false)
    // main Api link
    let baseUrl = "https://route-ecommerce.onrender.com"
    // cart id
    let { cartId } = useParams()
    // validation form
    let validationSchema = Yup.object({
        details: Yup.string().required().min(2, "Name must be minmum 2 letters").max(10, "Name must be maxmum 10 letters"),
        phone: Yup.string().required().matches(/^(010|012|011|015)[0-9]{8}$/, "Enter your Egyption phone number"),
        city: Yup.string().required().min(4, "City must be minmum 2 letters").max(10, "City must be maxmum 10 letters"),
    })
    // dateiles form
    let formik = useFormik({
        initialValues: {
            details: "",
            phone: "",
            city: ""
        },
        onSubmit: (values) => {
            checkoutPayment(values, cartId)
        },
        validationSchema
    })
    // api checkout
    async function checkoutPayment(values, id) {
        let body = { dshippingAddress: values }
        let headers = { token: localStorage.getItem("token") }
        setLoading(true)
        let { data } = await axios.post(`${baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:3000/#/`, body, { headers })
        console.log(data);
        setLoading(false)
        window.location.href = data.session.url
    }
    return (

        <>
            <div className='w-75 mx-auto rounded-3 alll mb-5 mt-4 shadow p-5'>
                <h2 className="text-center">Checkout Now:</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className='my-3'>
                        <label htmlFor="details">Name:</label>
                        <input type="text" className="form-control" id="details" name="details" onChange={formik.handleChange} />
                        <p className='text-danger'>{formik.errors.details}</p>
                    </div>
                    <div className='my-3'>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" className="form-control" id="phone" name="phone" onChange={formik.handleChange} />
                        <p className='text-danger'>{formik.errors.phone}</p>
                    </div>
                    <div className='my-3'>
                        <label htmlFor="city">City:</label>
                        <input type="text" className="form-control" id="city" name="city" onChange={formik.handleChange} />
                        <p className='text-danger'>{formik.errors.city}</p>
                    </div>
                    {loading ? <button type='button' className='btn btn-bg2 d-flex mx-auto'><i className='fa-solid fa-spinner fa-spin'></i></button>
                        :
                        <button disabled={!formik.isValid} type='submit' className='btn btn-bg2 d-flex mx-auto'>Pay</button>}
                </form>
            </div>
            <div className="alll">
                   <Footer />
            </div>
         
        </>
    )
}
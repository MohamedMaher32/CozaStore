import Footer from '../Footer/Footer'
export default function Contact() {
  return (
    <div >
      <section className="contact alll pb-5 mb-5">
      <div className="container py-4">
        <div className="row text-center">
          <div className="col-md-4 col-sm-12">
            <div className="pb-4 px-4 serv">
              <div className="icon d-flex justify-content-center"><i className="fa-solid fa-location-arrow fs-3"></i></div>
              <p className=" text-muted my-2">Cairo , Egypt</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="pb-4 px-4 serv">
              <div className="icon d-flex justify-content-center"><i className="fa fa-envelope fs-3"></i></div>
              <p className=" text-muted my-2">mhalosh43@gmail.com</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="pb-4 px-4 serv">
              <div className="icon d-flex justify-content-center"><i className="fa fa-phone fs-3"></i></div>
              <p className=" text-muted my-2">+201098667330</p>
            </div>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
            </div>
            <div className="col-md-6 col-sm-12">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
            </div>
            <div className="col-12">
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="7"></textarea>
            </div>
        </div>
        <button className="btn btn-bg2 d-flex mx-auto">Submit</button>
        </form>
      </div>
    </section>
    <Footer/>
    </div>
  )
}
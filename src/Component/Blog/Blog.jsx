import Footer from '../Footer/Footer'
import blog1 from '../../Assets/blog-01.jpg'
import blog2 from '../../Assets/blog-02.jpg'
import blog3 from '../../Assets/blog-03.jpg'
export default function Blog() {
  return (
    <>
    <div className="all">
        <div className="container my-4 ">
        <div className="row">
          <div className="col-md-4 col-sm-12 blog">
            <img src={blog1} alt="news" className=" w-100 mb-3 rounded-3" />
            <span>By Mohamed Maher April 22, 2023</span>
            <h5 className='my-3 header'>8 Inspiring Ways to Wear Dresses in the Winter</h5>
            <p className='text-muted small'>Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et male-suada fames.</p>
          </div>
          <div className="col-md-4 col-sm-12 blog">
            <img src={blog2} alt="news" className=" w-100 mb-3 rounded-3" />
            <span>By Mohamed Maher April 22, 2023</span>
            <h5 className='my-3 header'>The Great Big List of Men’s Gifts for the Holidays</h5>
            <p className='text-muted small'>Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus.</p>
          </div>
          <div className="col-md-4 col-sm-12 blog">
            <img src={blog3} alt="news" className=" w-100 mb-3 rounded-3" />
            <span>By Mohamed Maher April 22, 2023</span>
            <h5 className='my-3 header'>5 Winter-to-Spring Fashion Trends to Try Now</h5>
            <p className='text-muted small'>Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc</p>
          </div>
        </div>
      </div>
    </div>
    <div className='all'><Footer/></div>
    </>
  )
}
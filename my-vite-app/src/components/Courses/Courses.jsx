import "./Courses.css";
// import images from "../../constants/images";
import f1 from "../../assets/images/fluid.jpeg"
import eg1 from "../../assets/images/eg1.jpeg"
import c_prog from "../../assets/images/c_prog.png"
import dsap from "../../assets/images/dsap.jpg"
import oc from "../../assets/images/oc.jpg"
import semi from "../../assets/images/semi.jpeg"
import acc1 from "../../assets/images/accounts1.webp"
import bm1 from "../../assets/images/bm1.jpg"
import audit1 from "../../assets/images/audit1.jpeg"
import cost1 from "../../assets/images/costacc1.jpeg"
import be1 from "../../assets/images/be1.jpeg"
import statistics1 from "../../assets/images/statistics.jpeg"
import calculus1 from "../../assets/images/calculus1.webp"
import physics1 from "../../assets/images/physics.webp"
import geo1 from "../../assets/images/geo1.jpg"
import apt1 from "../../assets/images/aptitude1.png"
import history1 from "../../assets/images/history1.jpg"
import politics1 from "../../assets/images/politics1.jpeg"
import 'boxicons/css/boxicons.min.css';
function Courses() {
    return (
        <div>
            <section className="products" id="products">
                <div className="heading">
                    <h1>Our Popular Courses</h1>
                    <h2>Engineering</h2>
                </div>

                <div className="products-container">

                    <div className="box">
                        <img src={f1} />
                        <span>Mechanical Engineering</span>
                        <h2>Fluid Mechanics</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={eg1} />
                        <span>Civil Engineering</span>
                        <h2>Engineering Graphics</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={c_prog} />
                        <span>Computer Engineering</span>
                        <h2>Programming using C</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={oc} />
                        <span>Chemical Engineering</span>
                        <h2>Organic</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={semi} />
                        <span>Electrical Engineering</span>
                        <h2>Semiconductors and Generators</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={dsap} />
                        <span>Computer Engineering</span>
                        <h2>DSA using Python</h2>
                        <h3 className="price"><s>5000₹</s><span>3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>
                </div>
                <div className="heading">
                    <h2>Commerce</h2>
                </div>
                <div className="products-container">

                    <div className="box">
                        <img src={acc1} />
                        <span>Commerce</span>
                        <h2>Accounts</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={bm1} />
                        <span>Commerce</span>
                        <h2>Business Management</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={audit1} />
                        <span>Commerce</span>
                        <h2>Complete Audit</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={cost1} />
                        <span>Commerce</span>
                        <h2>Cost Account</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={be1} />
                        <span>Commerce</span>
                        <h2>Economics</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={statistics1} />
                        <span>Commerce</span>
                        <h2>Statistics</h2>
                        <h3 className="price"><s>5000₹</s><span>3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>
                </div>
                <div className="heading">
                    <h2>Defence and Civil Services</h2>
                </div>
                <div className="products-container">

                    <div className="box">
                        <img src={history1} />
                        <span>Civil Services</span>
                        <h2>History</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={politics1} />
                        <span>Civil Services</span>
                        <h2>Politics</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={geo1} />
                        <span>Civil Services</span>
                        <h2>Geography</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={apt1} />
                        <span>Civil Services</span>
                        <h2>Aptitude</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={calculus1} />
                        <span>NDA</span>
                        <h2>Calculus</h2>
                        <h3 className="price"><s>5000₹</s><span>/3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>

                    <div className="box">
                        <img src={physics1} />
                        <span>NDA</span>
                        <h2>Physics</h2>
                        <h3 className="price"><s>5000₹</s><span>3500₹</span></h3>
                        <i className='bx bx-cart-alt'></i>
                        <i className='bx bx-heart'></i>
                        <span className="discount">-15%</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Courses
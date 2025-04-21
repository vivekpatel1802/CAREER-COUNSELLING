import React from 'react'
import './Testimonial1.css'
import 'boxicons/css/boxicons.min.css';
import rutu from "../../assets/ruturaj.jpg"
import jaddu from "../../assets/jaddu8.jpg"
import kohli from "../../assets/kohli.jpg"
import person1 from "../../assets/person1.png"
import person2 from "../../assets/person2.png"
import person3 from "../../assets/person3.png"
function Testimonial1() {
	return (
		<div>
			<section className="reviews" id="reviews" data-aos="zoom-in">
				<h2>Why Customers Love us?</h2>
				<div className="reviews-container">
					<div className="box">
						<i className='bx bxs-quote-alt-left'></i>
						<div className="stars">
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star-half'></i>
						</div>
						<p style={{textAlign:"justify"}}>The AI-driven analysis was incredibly accurate. It pointed out career paths I hadn't even considered. The user interface is clean and easy to navigate. Highly recommended!</p>
						<div className="customer-profile">
							<img src={person2} />
							<h3>Veena Agrawal</h3>
						</div>
					</div>

					<div className="box">
						<i className='bx bxs-quote-alt-left'></i>
						<div className="stars">
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star'></i>
						</div>
						<p style={{textAlign:"justify"}}>This app completely changed my career trajectory! The personalized recommendations were spot on, and the advice was practical. I'm now on my way to becoming a data scientist, all thanks to this app.
						</p>
						<div className="customer-profile">
							<img src={person1} />
							<h3>Raj Gupta</h3>
						</div>
					</div>

					<div className="box">
						<i className='bx bxs-quote-alt-left'></i>
						<div className="stars">
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star'></i>
							<i className='bx bxs-star-half'></i>
						</div>
						<p style={{textAlign:"justify"}}>Good app with solid advice. It helped clarify my career goals and provided actionable steps. It would be even better with some real-life success stories.</p>
						<div className="customer-profile">
							<img src={person3} />
							<h3>Varun Sharma</h3>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Testimonial1
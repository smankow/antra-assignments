import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import facebookSvg from '../../assets/images/facebook.svg';
import linkedinSvg from '../../assets/images/linkedin.svg';
import pinterestSvg from '../../assets/images/pinterest.svg';
import emailSvg from '../../assets/images/email.svg';

const Footer = () => {
    return (
        <div className = "footer">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "media-links">
						<div className = "col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
							<div className = "facebook">
								<Link to = "#"><img className = "img-responsive" src = {facebookSvg} alt="facebook"/></Link>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "linkedin">
								<Link to = "#"><img className = "img-responsive" src = {linkedinSvg} alt="linkedin"/></Link>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "pinterest">
								<Link to = "#"><img className = "img-responsive" src = {pinterestSvg} alt="pinterest"/></Link>
							</div>
						</div>

						<div className = "col-sm-1 col-md-1">
							<div className = "email-icon">
								<Link to = "#"><img className = "img-responsive" src = {emailSvg} alt="email"/></Link>
							</div>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-6 col-md-6 text-right">
						<div className = "personal-contact phone">
							<h4>Phone: XXXXXX</h4>
						</div>
					</div>

					<div className = "col-sm-6 col-md-6 text-left">
						<div className = "personal-contact email-personal-contact">
							<h4>Email: XXXXX@gmail.com</h4>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-4 col-md-4 text-center">
						<div className = "company-information">
							<h3>XXXX</h3>
							<h4>Copyright &copy; 2021</h4>
							<h4>NY</h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "home-footer">
							<h4><Link to = "#">Home</Link></h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "portfolio-footer">
							<h4><Link to = "#">Portfolio</Link></h4>
							<ul>
								<li><Link to = "#">Project1</Link></li>
								<li><Link to = "#">Project2</Link></li>
								<li><Link to = "#">Project3</Link></li>
								<li><Link to = "#">See All</Link></li>
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "resume-footer">
							<h4><Link to = "#">Resume</Link></h4>
							<ul>
								<li><Link to = "#">Download</Link></li>
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "contact-footer">
							<h4><Link to = "#">Contact</Link></h4>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Footer;
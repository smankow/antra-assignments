import React from 'react';
import { NavLink } from 'react-router-dom';
import logoSvg from '../../assets/images/logo.svg';
const Navigation = () => {
    return (
        <div className = "navigation">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div className = "logo">
						<NavLink exact to="/"><img src = {logoSvg} alt="logo"/></NavLink>
						</div>
					</div>

					<div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div className = "primary-nav">
							<ul>
								<li><NavLink exact to="/">Home</NavLink></li>
								<li><NavLink to="/portfolio">Portfolio</NavLink></li>
								<li><NavLink to="/contact">Contact</NavLink></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Navigation;
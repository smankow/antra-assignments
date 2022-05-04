import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoSvg from '../../assets/images/logo.svg';

// function navigation() {
// 	$('.primary-nav').css('height', $('.logo').height());
// 	$('.primary-nav li').css(
// 	  'margin-top',
// 	  ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
// 	);
  
// 	$(window).resize(function () {
// 	  setTimeout(navigation, 500);
// 	});
//   }

const Navigation = () => {
	const [height, setHeight] = useState(50)
	const [liMargintop, setLiMargintop] = useState('')

	const navRef = useRef();
	const primaryNavRef  = useRef();

	useEffect(()=> {
		// setHeight(navRef.current.clientHeight);
				setLiMargintop(
					(primaryNavRef.current.clientHeight -
						primaryNavRef.current.firstChild.firstChild.clientHeight) / 2
				)
				console.log(primaryNavRef.current.clientHeight)
				console.log(primaryNavRef.current.firstChild.firstChild.clientHeight)
		window.addEventListener('resize', () => {
			setTimeout(()=> {
				// console.log(document.getElementsByClassName('primary-nav'))
				// console.log(primaryNavRef.current.clientHeight)
				// console.log(navRef.current.clientHeight)
				setHeight(navRef.current.clientHeight);
				setLiMargintop(
					(primaryNavRef.current.clientHeight -
						primaryNavRef.current.firstChild.firstChild.clientHeight) / 2
				)
				// primaryNavRef.current.children[0]
			},500)
		})
	},[])
	console.log('Height:',height)
    return (
        <div className = "navigation">
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
						<div className = "logo" ref={navRef}>
						<NavLink exact to="/"><img src = {logoSvg} alt="logo"/></NavLink>
						</div>
					</div>

					<div className = "col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
						<div className = "primary-nav" style={{height: `${height}px`}} ref={primaryNavRef}>
							<ul>
								<li style={{marginTop: `${liMargintop}px`}}><NavLink exact to="/">Home</NavLink></li>
								<li style={{marginTop: `${liMargintop}px`}}><NavLink to="/portfolio">Portfolio</NavLink></li>
								<li style={{marginTop: `${liMargintop}px`}}><NavLink to="/contact">Contact</NavLink></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Navigation;
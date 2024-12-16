import React from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Univers Manga</h4>
					<ul>
					<li><a href="#">© Univers manga 2024</a></li>
					<li><a href="#">A propos</a></li>
  	 				<li><a href="#">Notre histoire</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Besoin d'aide</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Mentions légales</a></li>
  	 				<li><a href="#">CGU</a></li>
					<li><a href="#">Politiques de confidentialités</a></li>
  	 			</ul>
  	 		</div>
  	 	
  	 		<div className="footer-col">
  	 			<h4>Suivez-nous</h4>
  	 			<div class="social-links">
  	 				<a href="#"><FaFacebook /></a>
  	 				<a href="#"><RiTwitterXLine /></a>
  	 				<a href="#"><FaInstagram /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}

export default Footer;
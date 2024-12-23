import Image from "next/image";
import Link from "next/link";
import LogoDarkImg from "../../../public/images/logo/mustaf.jpeg";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
function Footer() {
	return (
		<footer className="aximo-footer-section7 bg-light8 aximo-section-padding4">
			<div className="container">
				<div className="aximo-section-title bricolage-font p-0">
					<FooterTop />
				</div>

				<div className="aximo-footer-top7">
					<div className="aximo-footer-info-column">
						<div className="aximo-footer-info-item">
							<Link href="/">
								<Image src={LogoDarkImg} alt="Logo" sizes="100vw" />
							</Link>
						</div>
						<div className="aximo-footer-info-item">
							<h5>Our address:</h5>
							<p>
								4517 Washington Ave.
								<br /> Manchester, Kentucky 39495
							</p>
						</div>
						<div className="aximo-footer-info-item">
							<h5>Give us a call:</h5>
							<a href="tel:456-7890">(123) 456-7890</a>
							<a href="tel:456-7890">(088) 123-4567</a>
						</div>
						<div className="aximo-footer-info-item">
							<h5>Send us an email:</h5>
							<a href="mailto:info@mthemeus.com">info@mthemeus.com</a>
						</div>
					</div>
				</div>
				<div className="aximo-footer-bottom seven">
					<FooterBottom />
				</div>
			</div>
		</footer>
	);
}

export default Footer;

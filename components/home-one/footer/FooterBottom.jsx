import Image from "next/image";
import LogoWhiteImg from "../../../public/images/logo/mustaf.jpeg";
function FooterBottom() {
	return (
		<>
			<div className="col-lg-6">
				<div className="aximo-footer-logo">
					<a href="#">
						<Image src={LogoWhiteImg} alt="Logo" />
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-copywright one">
					<p> &copy; Copyright 2024, All Rights Reserved by Mthemeus</p>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;

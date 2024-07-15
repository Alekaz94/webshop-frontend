import instaSvg from '../images/instagram-logo-facebook-2-svgrepo-com.svg';
import fbSvg from '../images/facebook-svgrepo-com.svg';
import phoneSvg from '../images/phone-svgrepo-com.svg';
import emailSvg from '../images/email-1-svgrepo-com.svg';
import '../styles/FooterStyles.css';

function Footer() {
  return (
    <>
      <div className="footer-body">
        <div>
          <h2>Contact us</h2>
          <div className="footer-contact-content">
            <img src={phoneSvg} alt="Instagram logo" className="footer-logo" />
            <img src={emailSvg} alt="Instagram logo" className="footer-logo" />
            <img src={instaSvg} alt="Instagram logo" className="footer-logo" />
            <img src={fbSvg} alt="Facebook logo" className="footer-logo" />
          </div>
        </div>
        <div>
          <h2>About us</h2>
          <div>
            <p className="footer-p">Career</p>
            <p className="footer-p">Sustainability</p>
            <p className="footer-p">Webshop Connect</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

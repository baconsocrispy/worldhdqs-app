// components
import SiteLinks from "../site-links/site-links.component";

//data
import { contactLinks, navLinks, socialLinks } from "@/app/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <SiteLinks 
          heading="Navigate"
          links={ navLinks }
        />
        <SiteLinks 
          heading="Social"
          links={ socialLinks }
        />
        <SiteLinks 
          heading='Contact'
          links={ contactLinks }
        />
      </div>
      <div className="footer__copyright">
        <span>&copy;&nbsp;World Headquarters, LLC 2024</span>
      </div>
    </div>
  )
};

export default Footer;
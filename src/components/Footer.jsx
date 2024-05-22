import { Link } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import '../styles/Footer.css'

const menus = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Teachers',
      path: '/teachers'
    },
    {
      name: 'Holidays',
      path: '/holidays'
    },
    {
      name: 'Contact Us',
      path: '/contact-us'
    }
];

const icons = [
    {
        icon: 'ri-facebook-line',
        link: 'https://www.facebook.com',
        iconName: 'Facebook',
    },
    {
        icon: 'ri-twitter-line',
        link: 'https://www.twitter.com',
        iconName: 'Twitter',
    },
    {
        icon: 'ri-instagram-line',
        link: 'https://www.instagram.com',
        iconName: 'Instagram',
    },
    {
        icon: 'ri-linkedin-box-fill',
        link: 'https://www.linkedin.com',   
        iconName: 'LinkedIn',
    }
];

const Footer = () => {      
    return (
        <footer className='font-serif'>
            <div className="footer-section">
                <h2 className='text-xl font-bold'>Address</h2>
                <p>123 Main Street</p>
                <p>City, State, 12345</p>
                <p>555-555-5555</p>
            </div>

            <div className="footer-section">
                <h2 className='text-xl font-bold'>Follow Us</h2>
                <div className="footer-links">
                    {icons.map((icon, index) => (
                        <div key={index} className='flex text-[18px]'>
                            <a href={icon.link} target="_blank">
                                <span className='mx-1.5 text-xl'><i className={icon.icon}></i></span>
                                {icon.iconName}
                            </a>
                        </div>
                    ))}                    

                    {/* <div className='footer-icon'>
                        <i className="ri-facebook-line"></i>
                        <a href="https://www.facebook.com" target="_blank">Facebook</a>                    
                    </div>
                    <div className='footer-icon'>
                        <i className="ri-twitter-line"></i>
                        <a href="https://www.twitter.com" target="_blank">Twitter</a>                 
                    </div>
                    <div className='footer-icon'>
                        <i className="ri-instagram-line"></i>
                        <a href="https://www.instagram.com" target="_blank">Instagram</a>                   
                    </div>
                    <div className='footer-icon'>
                        <i className="ri-linkedin-box-fill"></i>
                        <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>                    
                    </div>                     */}
                </div>
            </div>
            
            <div className="footer-section">
                <h2 className='text-xl font-bold'>Links</h2>
                <div className="footer-links">
                    {menus.map((menu, index) => (
                    <li key={index}>
                        <Link to={menu.path}> 
                            {menu.name} 
                        </Link>
                    </li>
                ))}
                    {/* <li><Link to="/home">Home</Link></li>
                    <li><Link to="/teachers">Teachers</Link></li>
                    <li><Link to="/holidays">Holidays</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li> */}
                </div>
            </div>

            <div className="footer-section">
                <h2 className='text-xl font-bold'>Contact Us</h2>
                <form className='footer-form'>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    
                    <button>Send</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;

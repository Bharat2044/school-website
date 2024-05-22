import { useState } from "react";
import Swal from 'sweetalert2';
import Footer from "./Footer";
import Nav from "./Nav";
import '../styles/ContactUs.css';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        Swal.fire({
            title: 'Thank You!',
            icon: 'success',
            text: 'Your message has been sent successfully. We will get back to you soon.',
            confirmButtonText: 'Okay'
        });
    }

    return (
        <div>
            <Nav />

            <div className="contact-us-section font-serif">
                <div className="image-section">
                    <img src="/images/contact-us.svg" alt="contact us" />
                </div>
                
                <div className="form-section">
                    <form onSubmit={formSubmit}> {/* Attach onSubmit event handler to the form */}
                        <div>
                            <label htmlFor="name">Full Name:</label>
                            <input 
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Enter Your Name Here..." 
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <input 
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Enter Your Email Here..."
                                required 
                            />
                        </div>

                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea 
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                id="message" 
                                name="message" 
                                rows={5} 
                                placeholder="Write Your Query/Message Here..."
                            ></textarea>
                        </div>

                        <button type="submit">SEND</button> 
                    </form>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default ContactUs;

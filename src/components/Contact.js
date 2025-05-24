import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [visible, setVisible] = useState(true);
    const [formErrors, setFormErrors] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
        if (formErrors[category]) {
            setFormErrors({ ...formErrors, [category]: '' });
        }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+\d{1,4}\d{6,14}$/; // Accepts 10-digit phone numbers only

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};

        if (!formDetails.email.trim()) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(formDetails.email)) {
            errors.email = 'Enter a valid email address';
        }

        if (!formDetails.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formDetails.phone)) {
            errors.phone = 'Please enter a valid phone number with country code.';
        }

        if (!formDetails.email.trim()) errors.email = 'Email is required';
        if (!formDetails.phone.trim()) errors.phone = 'Phone is required';
        if (!formDetails.message.trim()) errors.message = 'Message is required';

        setFormErrors(errors);

        if (Object.keys(errors).length > 0) return;


        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully'});
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.'});
        }
        setVisible(true);
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={2}>
                    </Col>
                    <Col size={12} md={8}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    {
                                        status.message && visible &&
                                        <div className={`alert ${status.success === false ? 'alert-danger danger' : 'alert-success success'}`}>
                                            <span className="alert-message">{status.message}</span>
                                            <button className="close-btn" aria-label="Close" onClick={() => setStatus(false )}>
                                                &times;
                                            </button>
                                        </div>
                                    }
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <label>
                                                    First Name
                                                </label>
                                                <input type="text" value={formDetails.firstName} placeholder="John" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <label>
                                                    Last Name
                                                </label>
                                                <input type="text" value={formDetails.lastName} placeholder="Doe" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <label>
                                                    Email <span className="required-asterisk">*</span>
                                                </label>
                                                <input type="email" value={formDetails.email} placeholder="johndoe@gmail.com" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                                {formErrors.email && <small className="field-error">{formErrors.email}</small>}
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <label>
                                                    Phone No.  <span className="required-asterisk">*</span>
                                                </label>
                                                <input type="tel" value={formDetails.phone} placeholder="+61405212452" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                                {formErrors.phone && <small className="field-error">{formErrors.phone}</small>}
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <label>
                                                    Message <span className="required-asterisk">*</span>
                                                </label>
                                                <textarea rows="6" value={formDetails.message} placeholder="Write your message here" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                {formErrors.message && <small className="field-error">{formErrors.message}</small>}
                                                <div className="d-flex justify-content-center submit-btn-bx">
                                                    <button type="submit"><span>{buttonText}</span></button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
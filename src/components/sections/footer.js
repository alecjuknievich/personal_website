import React, {Component} from "react";
import '../../App.css'

import {ReactComponent as FooterSVG} from "../../assets/site_footer.svg";
import ContactForm from "./contact-form";

class Footer extends Component {
    render() {
        return (
            <div className="footer-div">
                <div className="flex-row">
                    <div className="footer-spacer"></div>
                    <ContactForm />
                    <div className="footer-spacer"></div>
                </div>
                <FooterSVG className="footer" />
            </div>
        )
    }
}

export default Footer
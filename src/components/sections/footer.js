import React, {Component} from "react";
import '../../App.css'

import {ReactComponent as FooterSVG} from "../../assets/site_footer.svg";
import ContactForm from "./contact-form";

class Footer extends Component {
    render() {
        return (
            <div>
                <ContactForm />
                <FooterSVG className="footer" />
            </div>
        )
    }
}

export default Footer
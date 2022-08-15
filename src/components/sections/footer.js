import React, {Component} from "react";
import '../../App.css'

import {ReactComponent as FooterSVG} from "../../assets/site_footer.svg";
class Footer extends Component {
    render() {
        return (
            <div>
                <FooterSVG />
            </div>
        )
    }
}

export default Footer
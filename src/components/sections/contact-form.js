import React, {useState} from "react";
import axios from "axios";
import * as _ from "lodash"

import resourceConfig from "../../keys/resource_config.json";

const apiUrl = resourceConfig.apiUrl;


const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState("");
    const [res, setRes] = useState("")

    function submitForm() {
        setRes("")
        if (email.trim() === "" && phone.trim() === "") {
            setError("Must submit either phone or email to contact.");
        } else {
            let submission = { email, phone, subject, message};
            submission = _.pickBy(submission, _.identity);
            axios({
                method: "POST",
                data: submission,
                url: `${apiUrl}/v1.0/webhooks/contact-submission`
            }).then((res) => {
                if (res.status === 200) {
                    setError("");
                    setPhone("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    setRes("Message successfully sent!")
                } else {
                    setError("Error submitting request. Please try again")
                }

                console.log(res)
            }).catch((e) => {
                setError("Error submitting request. Please try again")
                console.log(e)
            })
            console.log(submission);
        }
    }

    return (
        <div className="form-div" id="Contact">
            <h1 className="section-header">Contact Me</h1>
            <input
                placeholder="Email"
                id="email"
                className="form-input"
                type="text"
                value={email}
                size="30"
                onChange={(e) => setEmail(e.target.value)}/>

            <input
                placeholder="Phone"
                id="phone"
                className="form-input"
                type="text"
                value={phone}
                size="30"
                onChange={(e) => setPhone(e.target.value)}/>

            <input
                placeholder="Subject"
                id="subject"
                className="form-input"
                type="text"
                value={subject}
                size="30"
                onChange={(e) => setSubject(e.target.value)}/>

            <textarea
                placeholder="Message"
                className="form-input"
                name="message"
                id="message"
                cols="35"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
                onClick={submitForm}
                className="form-input"
            >
                Submit
            </button>
            <p className="error">
                {error}
            </p>

            <p className="success">
                {res}
            </p>
        </div>
    )
}

export default ContactForm
import React, {useState} from "react";
import axios from "axios";
import * as _ from "lodash"


const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState("");
    // const [res, setRes] = useState("")

    function submitForm() {
        if (email.trim() === "" && phone.trim() === "") {
            setError("Must submit either phone or email to contact.");
        } else {
            setError("");
            let submission = { email, phone, subject, message};
            submission = _.pickBy(submission, _.identity);
            axios({
                method: "POST",
                data: submission,
                url: 'http://localhost:3000/v1.0/webhooks/contact-submission'
            }).then((res) => {
                console.log(res)
            }).catch((e) => {
                setError("Error submitting request. Please try again")
                console.log(e)
            })
            console.log(submission);
        }
    }

    return (
        <div className="form-div">
            <h1 className="section-header">Contact Me</h1>
            <input
                placeholder="Email"
                className="form-input"
                type="text"
                value={email}
                size="30"
                onChange={(e) => setEmail(e.target.value)}/>

            <input
                placeholder="Phone"
                className="form-input"
                type="text"
                value={phone}
                size="30"
                onChange={(e) => setPhone(e.target.value)}/>

            <input
                placeholder="Subject"
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
                cols="40"
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
        </div>
    )
}

export default ContactForm
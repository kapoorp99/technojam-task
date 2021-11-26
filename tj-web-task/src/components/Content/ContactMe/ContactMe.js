import React from 'react'
import { MainContainer,MainContainerThanks } from './styles'
import { useForm, ValidationError } from '@formspree/react';

function ContactMe() {
    // return (
    //     <MainContainer>
    //         <form action="https://mailthis.to/kapoorprakhar99@gmail.com" method="POST">
    //             <h1>Get in Touch</h1>
    //             <h2>Want to get in touch? I will love to hear from you. Here's how you reach me.... </h2>
    //             <input type="email" placeholder="Your Email" />
    //             <input type="text" placeholder="Your Name" />
    //             <input type="submit" value="Send Email" />
    //         </form>
    //     </MainContainer>
    // )
    const [state, handleSubmit] = useForm("mlealgnz");
    if (state.succeeded) {
        return (
            <MainContainerThanks>
                <p>Thanks for reaching out to me!</p>
            </MainContainerThanks>
        );
    }
    return (
        <MainContainer>
            <form onSubmit={handleSubmit}>
                <h1>Get in Touch</h1>
                <h2>Want to get in touch? I will love to hear from you. Here's how you can reach me.... </h2>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Get In Touch
                </button>
            </form>
        </MainContainer>
    );
}

export default ContactMe

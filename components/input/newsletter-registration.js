import { useRef } from "react"
import classes from "./newsletter-registration.module.css"

const NewsLetterRegistration = (props) => {
    const email = useRef()
    const registrationHandler = async (event) => {
        event.preventDefault();
        const emailInput = email.current.value;
        await fetch('/api/newsletter', {
            method:"POST",
            body:JSON.stringify({email:emailInput}),
            headers: {
                'Content-Type':"application/json"
            }
        }).then((response) => response.json()).then((data) => console.log(data))
    }

    return (
        <section className={classes.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input 
                        type={'email'}
                        id='email'
                        placeholder="Your email"
                        aria-label='Your email'
                        ref={email}
                    />
                    <button>registration</button>
                </div>
            </form>
        </section>
    )
}

export default NewsLetterRegistration;
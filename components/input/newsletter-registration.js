import classes from "./newsletter-registration.module.css"

const NewsLetterRegistration = (props) => {
    const registrationHandler = (event) => {
        event.preventDefault()
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
                    />
                    <button>registration</button>
                </div>
            </form>
        </section>
    )
}

export default NewsLetterRegistration;
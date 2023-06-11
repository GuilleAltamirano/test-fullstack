import Link from "next/link"
import { LineComponent, ButtonComponent } from "./accessories.component"

export default function FormSignup() {
    return (
        <form className="form-signup">
            <div>
                <label htmlFor="firstname">What's your firstname?</label>
                <input type="text" name='firstname' placeholder='Your firstname' required/>
            </div>
            <div>
                <label htmlFor="lastname">What's your lastname?</label>
                <input type="text" name='lastname' placeholder='Your lastname' required/>
            </div>
            <div>
                <label htmlFor="email">What's your email?</label>
                <input type="email" name='email' placeholder='Email' required/>
            </div>
            <div>
                <label htmlFor="password">Create a password</label>
                <input type="password" name='password' placeholder='Password' required/>
            </div>
            <div>
                <label htmlFor="age">What's your age?</label>
                <input type="number" name='age' placeholder='Your age' min={18} required/>
            </div>
            {/* <div>
                <label htmlFor="date">What's your birth date?</label>
                <FormDate />
            </div> */}
            <LineComponent />

            <p>By clicking Sign Up, you agree to the Ddbase <Link href="#">Terms and Conditions</Link> of Use</p>

            <div className="button-login">
                <ButtonComponent  title="SignUp" />
            </div>
        </form>
    )
}

// const FormDate = () => {
//     return (
//         <div className='container-date'>
//             <input className='input-date' type="number" min={1} max={12} name='month' placeholder='Month' required/>
//             <input className='input-date' type="number" min={1} max={31} name='day' placeholder='Day' required/>
//             <input className='input-date' type="number" min={1940} max={2006} placeholder='Age' required/>
//         </div>
//     )
// }

export const FormLogin = () => {
    return (
        <form className="form-signup" method="post" action={'/api/sessions/login'}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" required/>
            </div>

            <div className="button-login">
                <ButtonComponent title="Login" />
            </div>
        </form>
    )
}

export const FormForgotPassword = () => {
    return (
        <form className="form-signup" method="post" action={'/api/sessions/register'}>
            <div className="form-signup">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Email" required/>
            </div>

            <div className="button-login">
                <ButtonComponent title="Send" />
            </div>
        </form>
    )
}
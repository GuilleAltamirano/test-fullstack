import Head from 'next/head'
import { LineComponent } from '../../public/components/accessories.component'
import { FormLogin } from '../../public/components/forms.component'
import { GoogleUtil } from '../../public/components/google.component'

export default function LoginPage () {
    return (
        <div className="container_login">
            <h2>Log in to Ddbase</h2>

            <FormLogin />
            <a href="#">Forgot your password?</a>

            <LineComponent />
            <div className='google_button'><GoogleUtil /></div>
            <LineComponent />

            <p>Don't have an account? <a href="#">Sign up for Ddbase</a></p>
        </div>
    )
}
import Link from 'next/link'
import FormSignup from "../../public/components/forms.component"
import { GoogleUtil } from "../../public/components/google.component"
import { LineComponent } from "../../public/components/accessories.component"

export default function SignUp() {
    return (
        <div className='container-signup'>
            <h2>Sign up for Ddbase</h2>

            <FormSignup />

            <LineComponent />
            <div className='google_button'><GoogleUtil /></div>
            <LineComponent />

            <p>You already have an account? <Link href="/login">Log in</Link></p>
        </div>
    )
}
import { FormForgotPassword } from '../../public/components/forms.component'

export default function ForgotPassword () {
    return (
        <div className="container-forgotPassword">
            <h2>Password reset</h2>
            <p>Enter your email address that you used to register. We'll send you an email with your code to reset your password.</p>
            <FormForgotPassword />
            <p className='bottom-forgotPassword'>If you still need help, check out</p>
        </div>  
    )
}
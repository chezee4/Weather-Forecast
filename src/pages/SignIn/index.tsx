import { SignIn } from '@clerk/clerk-react'

const SignInPage = () => (
  <SignIn path="/sign-in" signUpUrl="/sign-up" afterSignInUrl="/" />
)

export default SignInPage

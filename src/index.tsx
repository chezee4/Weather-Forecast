import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App/App'
import { ClerkProvider } from '@clerk/clerk-react'
import { REACT_APP_CLERK_PUBLISHABLE_KEY } from 'src/constants'

if (!REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ClerkProvider publishableKey={REACT_APP_CLERK_PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>,
)

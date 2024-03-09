import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignInPage from 'src/pages/SignIn'
import SignUpPage from 'src/pages/SignUp'
import WeatherForecast from 'src/pages/WeatherForecast'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/" element={<WeatherForecast />} />
      </Routes>
    </Router>
  )
}

export default App

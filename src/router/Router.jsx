import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from '../pages/Login.jsx'
import HomePage from '../pages/Home.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<LoginPage />} />

        <Route path='/' element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
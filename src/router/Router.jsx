import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from '../pages/Login.jsx'
import HomePage from '../pages/Home.jsx'
import BaseLayout from "../layouts/BaseLayout.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<LoginPage />} />

        <Route element={<BaseLayout />}>
          <Route path='/' element={<HomePage />} />

          <Route path='/about' element={<h1>About page</h1>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default Router
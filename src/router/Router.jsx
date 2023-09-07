import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<h1>LOGIN PAGE</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
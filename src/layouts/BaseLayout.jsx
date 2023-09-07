import { Outlet } from "react-router-dom"

const BaseLayout = () => {
  return (
    <>
      <header>
        <h1>My APP</h1>

        <button>Logout</button>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default BaseLayout
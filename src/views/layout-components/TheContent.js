import React, { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom'


import { AuthGuard } from '../../auth/AuthGuard'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import { useDispatch, useSelector } from 'react-redux'

// routes config
import routes from '../../routes'

const loading = (
  <div>
    <p>Loading...</p>
  </div>
)

const TheContent = () => {
  const authentication = useSelector((state)=> state.authentication)

  return (
    <>
      <TheHeader></TheHeader>
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, idx) => {
              return route.element &&(
              <Route
                key={idx}
                path={route.path}
                element={route.element} />
            )
          })}
          <Route path="*" element={<Navigate to="/404" />}>
          </Route>
        </Routes>


      </Suspense>
      <TheFooter></TheFooter>
    </>
  )
}

export default React.memo(TheContent)

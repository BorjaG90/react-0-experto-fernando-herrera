import {Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, AboutPage, Navbar } from './'
import { UserProvider } from './context/UserProvider'
export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  )
}

import { Routes, Route } from 'react-router-dom'
import AboutPage from './AboutPage.tsx'
import LoginPage from './LoginPage.tsx'
import CourseManagement from './CourseManagement.tsx'
import AttendanceManagement from './AttendanceManagement.tsx'
import AdminDashboard from './AdminDashboard.tsx'
import StudentDashboard from './StudentDashboard.tsx'
import TeacherDashboard from './TeacherDashboard.tsx'
import Header from './Header.tsx'
import Navigation from './Navigation.tsx'
import PasswordChange from './PasswordChange.tsx'
import UserManagement from './UserManagement.tsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin/courses" element={<CourseManagement />} />
          <Route path="/admin/attendance" element={<AttendanceManagement />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/password-change" element={<PasswordChange />} />
          <Route path="/admin/users" element={<UserManagement />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

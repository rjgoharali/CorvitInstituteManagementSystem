function Navigation() {
  return (
    <nav style={{ backgroundColor: '#444', padding: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', color: 'white' }}>
      <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
      <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
      <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
      <a href="/admin" style={{ color: 'white', textDecoration: 'none' }}>Admin</a>
      <a href="/student" style={{ color: 'white', textDecoration: 'none' }}>Student</a>
      <a href="/teacher" style={{ color: 'white', textDecoration: 'none' }}>Teacher</a>
    </nav>
  )
}

export default Navigation

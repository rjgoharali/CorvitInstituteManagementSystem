function PasswordChange() {
  return (
    <div>
      <h2>Change Password</h2>
      <form>
        <input type="password" placeholder="Current Password" required />
        <input type="password" placeholder="New Password" required />
        <input type="password" placeholder="Confirm New Password" required />
        <button type="submit">Update Password</button>
      </form>
    </div>
  )
}

export default PasswordChange

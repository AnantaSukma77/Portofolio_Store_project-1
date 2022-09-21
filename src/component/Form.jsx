export default function Form() {
  return (
    <form>
      <h1>Login dulu</h1>
      <div>
        <label>Username</label>
        <input type="username"></input>
      </div>
      <div>
        <label>Password</label>
        <input type="password"></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

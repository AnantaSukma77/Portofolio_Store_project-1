const apiUsers = 'http://localhost:3004/users';

async function login({ email, password }) {
  const response = await fetch(apiUsers);

  const responseJson = await response.json();
  console.log(responseJson);
  const isUserExist = responseJson.find((user) => {
    return email === user.email && password === user.password;
  });
  if (isUserExist) {
    window.localStorage.setItem('email', email);
    return true;
  } else {
    alert('login gagal');
    return false;
  }
}
export { login };

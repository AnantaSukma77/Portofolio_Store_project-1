import Form from '../component/Form';
import { useNavigate } from 'react-router-dom';

const apiUsers = 'http://localhost:3004/users';

async function login({ email, password }) {
  const response = await fetch(apiUsers);

  const responseJson = await response.json();
  console.log(responseJson);
  const isUserExist = responseJson.find((user) => {
    return email === user.email && password === user.password;
  });
  if (isUserExist) {
    alert('login sukses');
    window.localStorage.setItem('email', email);
    return true;
  } else {
    alert('login gagal');
    return false;
  }

  //   if (responseJson.status !== 'success') {
  //     alert(responseJson.message);
  //     return { error: true, data: null };
  //   }

  //   return { error: false, data: responseJson.data };
}

export default function Login() {
  const navigate = useNavigate();
  const successLogin = ({ email, password }) => {
    const isSuccess = login({ email, password });
    if (isSuccess) {
      navigate('/');
    }
    console.log(email, password);
  };
  return <Form login={successLogin} />;
}

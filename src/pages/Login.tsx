import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { myAuthUser } from '../store/userStore';

interface Props {
  auth: any;
}

export const Login: FC<Props> = observer((props: Props) => {
  const history = useHistory();

  const handleLogin = () => {
    const auth = getAuth();

    const provider = new GoogleAuthProvider(); 
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
        myAuthUser.setUser({
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          login: true,
        });

        history.push('/browse')
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className='main'>
      <div className='main__login_box'>
        <h3>Авторизуйтесь для просмотра</h3>
        <button onClick={handleLogin}>
          {' '}
          <FontAwesomeIcon icon={faGoogle} />
          Войти через google
        </button>
        <Link to='/'>
          {' '}
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </div>
    </div>
  );
})

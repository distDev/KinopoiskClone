
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useHistory } from "react-router-dom";

interface Props {
    
}

export const Login = (props: Props) => {

    const history = useHistory()

    const handlePush = () => {
      history.push('/browse')
    }
    return (
      <div className='main'>
        <div className='main__login_box'>
          <h3>Авторизация</h3>
          <button onClick={handlePush}>
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
}

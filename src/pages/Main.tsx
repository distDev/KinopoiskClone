import { useHistory } from "react-router-dom";


interface Props {
    
}

export const Main = () => {

    const history = useHistory()

    const handleLogin = () => {
      history.push('/login')
    }

    return (
      <div className='main'>
        <div className='main__content'>
          <div className='main__plus_logo'>
            <img src='./images/plus-logo.png' alt='' />
          </div>
          <h1>
            Фильмы и сериалы по подписке Плюс <span>смотри бесплатно</span>
          </h1>
          <p>Отменяйте в любой момент, напишем за 3 дня до первого списания</p>
          <div className='main__button'>
            <button onClick={handleLogin}>Авторизоваться бесплатно</button>
          </div>
        </div>
      </div>
    );
}

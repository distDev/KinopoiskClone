

interface Props {
    
}

export const Main = () => {
    return (
      <div className='main'>
        <div className='main__content'>
            <div className="main__plus_logo">
                <img src="./images/plus-logo.png" alt="" />
            </div>
          <h1>
            Фильмы и сериалы по подписке Плюс <span>смотри бесплатно</span>
          </h1>
          <p>Отменяйте в любой момент, напишем за 3 дня до первого списания</p>
          <div className='main__button'>
            <button>Авторизоваться бесплатно</button>
          </div>
        </div>
      </div>
    );
}

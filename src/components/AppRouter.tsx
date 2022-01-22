
import { observer } from 'mobx-react-lite';
import { Redirect, Route, Switch } from 'react-router-dom';
import { myAuthUser } from '../store/userStore';
import { PrivateRoutes, PublicRoutes } from '../utils/routes';
import { LOGIN_ROUTE, MAIN_ROUTE } from '../utils/routesConst';



export const AppRouter = observer(() => {
  const  user  = true;

  return (
    <>
      <Switch>
        {user &&
          PrivateRoutes.map(({ path, Component }) => (
            <Route path={path} component={Component} />
          ))}

        {PublicRoutes.map(({ path, Component }) => (
          <Route path={path} component={Component} exact={true} />
        ))}
        <Redirect to={LOGIN_ROUTE} />
      </Switch>
    </>
  );
})

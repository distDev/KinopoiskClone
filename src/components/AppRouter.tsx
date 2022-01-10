
import { Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../utils/routes';
import { MAIN_ROUTE } from '../utils/routesConst';



export const AppRouter = () => {
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
        <Redirect to={MAIN_ROUTE} />
      </Switch>
    </>
  );
};

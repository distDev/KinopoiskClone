
import { BrowserRouter as Router} from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { Layout } from './components/layout/Layout';
import './styles/index.scss';


function App() {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  );
}

export default App;

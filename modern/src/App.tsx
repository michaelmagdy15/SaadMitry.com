import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import AnimatedRoutes from './components/AnimatedRoutes';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;

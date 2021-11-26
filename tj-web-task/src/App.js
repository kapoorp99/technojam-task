import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainContainer } from "./appStyles";
import Home from "./components/Home/Home";
import PageError from "./components/PageError/PageError";
import Apploader from "./components/ScreenLoaders/AppLoader/Apploader";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Projects from './components/Content/Projects/Projects';
import AboutMe from './components/Content/AboutMe/AboutMe';
import ContactMe from './components/Content/ContactMe/ContactMe';

function App() {
  const [appLoading, setApploading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setApploading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (appLoading) {
    return (
      <Apploader />
    )
  }
  else if (!appLoading) {
    return (
      <BrowserRouter>
        <MainContainer>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/aboutme" exact component={AboutMe} />
            <Route path="/contactme" exact component={ContactMe} />
            <Route path="*" exact component={PageError} />
          </Switch>
          <Footer />
        </MainContainer>
      </BrowserRouter>
    )
  }
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';
import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import Smth from './inside/Smth';
import ForgotPassword from './pages/ForgotPassword';
import Depression from './inside/Depression';
import Insomnia from './inside/Insomnia';
import AQ2 from './inside/AQ2';
import AQ1 from './inside/AQ1';
import AQ3 from './inside/AQ3';
import SQ1 from './inside/SQ1';
import SQ2 from './inside/SQ2';
import SQ3 from './inside/SQ3';
import DQ1 from './inside/DQ1';
import DQ2 from './inside/DQ2';
import DQ3 from './inside/DQ3';
import Motivation3 from './inside/Motivation3';
import FAQ from './inside/FAQ';
import Service from './inside/Service';
/*import MoodTracker from './inside/MoodTracker';*/
import Benefits from './pages/Benefits';

import Service2 from './inside/Service2';
import FAQ2 from './inside/FAQ2';
import Motivation2 from './inside/Motivation2';

import ExampleAnx from './inside/ExampleAnx';
import TipsInsomnia from './inside/TipsInsomnia';
import SleepDisorders from './inside/SleepDisorders';
import SymptomsInsomnia from './inside/SymptomsInsomnia';

import Anxiety from './inside/Anxiety';
import SymptomsAnxiety from './inside/SymptomsAnxiety';
import AnxietyDisorders from './inside/AnxietyDisorders';
import TipsAnxiety from './inside/TipsAnxiety';

import SymptomsDepression from './inside/SymptomsDepression';
import DepressionDisorders from './inside/DepressionDisorders';
import TipsDepression from './inside/TipsDepression';
import Meditation from './inside/Meditation';

import Sidebar from "./inside/Sidebar";




import Motivation from './inside/Motivation';
import MusicInsomnia from './inside/MusicInsomnia';
import MusicAnxiety from './inside/MusicAnxiety';
import MusicDepression from './inside/MusicDepression';
import SleepDiary from './inside/SleepDiary';
import ReadInsomnia from './inside/ReadInsomnia';
import ReadAnxiety from './inside/ReadAnxiety';
import ReadDepression from './inside/ReadDepression';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Advices } from './pages/Advices';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { Breadcrumb, Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import { Mood } from '@mui/icons-material';




import LogoAnimation from './components/LogoAnimation';
//import { AppBar } from '@mui/material';



function App() {

  return (
    <div className="App">
      <Router>

        <Container>

          <AuthProvider>
            <Switch>
              <Route exact path="/getstarted" component={GetStarted} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </AuthProvider>

        </Container>


        <Switch>
          <Route path="/" exact component={LogoAnimation} />
        </Switch>
        <Switch>
          <Route path="/main" exact component={Navbar} />
        </Switch>
        <Switch>
          <Route path="/about" exact component={Navbar} />
        </Switch>
        <Switch>
          <Route path="/benefits" exact component={Navbar} />
        </Switch>
        <Switch>
          <Route path="/advices" exact component={Navbar} />
        </Switch>


        <Switch>
          <Route path="/main" exact component={Home} />
        </Switch>


        <Switch>
          <Route path="/main" exact component={About} />
        </Switch>
        <Switch>
          <Route path="/main" exact component={Benefits} />
        </Switch>
        <Switch>
          <Route path="/main" exact component={Advices} />
        </Switch>

        <Switch>
          <Route path="/about" exact component={About} />
        </Switch>
        <Switch>
          <Route path="/benefits" exact component={Benefits} />
        </Switch>
        <Switch>
          <Route path="/advices" exact component={Advices} />
        </Switch>


        <Switch>
          <Route path="/motivation3" exact component={Navbar2} />
        </Switch>







        <Route path="/smth">

          <AuthProvider>
            <Switch>
              <Route path="/smth" exact component={Smth} />
            </Switch>
          </AuthProvider>
        </Route>

        <AuthProvider>
          <Switch>
            <Route path="/forgot-password" exact component={ForgotPassword} />
          </Switch>
        </AuthProvider>


        <Switch>
          <Route path="/depression" exact component={Depression} />
        </Switch>


        <Switch>
          <Route path="/aq1" exact component={AQ1} />
        </Switch>



        <Switch>
          <Route path="/aq2" exact component={AQ2} />
        </Switch>



        <Switch>
          <Route path="/aq3" exact component={AQ3} />
        </Switch>



        <Switch>
          <Route path="/sq1" exact component={SQ1} />
        </Switch>



        <Switch>
          <Route path="/sq2" exact component={SQ2} />
        </Switch>



        <Switch>
          <Route path="/sq3" exact component={SQ3} />
        </Switch>



        <Switch>
          <Route path="/dq1" exact component={DQ1} />
        </Switch>

        <Switch>
          <Route path="/dq2" exact component={DQ2} />
        </Switch>



        <Switch>
          <Route path="/dq3" exact component={DQ3} />
        </Switch>









        <Switch>
          <Route path="/motivation3" exact component={Motivation3} />
        </Switch>

        <Switch>
          <Route path="/faq" exact component={FAQ} />
        </Switch>









        <Switch>
          <Route path="/service" exact component={Service} />
        </Switch>



        <Switch>
          <Route path="/service2" exact component={Service2} />
        </Switch>
        <Switch>
          <Route path="/faq2" exact component={FAQ2} />
        </Switch>
        <Switch>
          <Route path="/motivation2" exact component={Motivation2} />
        </Switch>
        <Switch>
          <Route path="/insomnia" exact component={Insomnia} />
        </Switch>
        <Switch>
          <Route path="/example2" exact component={ExampleAnx} />
        </Switch>

        <Switch>
          <Route path="/tips-insomnia" exact component={TipsInsomnia} />
        </Switch>
        <Switch>
          <Route path="/sleep-disorders" exact component={SleepDisorders} />
        </Switch>


        <Switch>
          <Route path="/sleep-diary" exact component={SleepDiary} />
        </Switch>
        <Switch>
          <Route path="/sleep-symptoms" exact component={SymptomsInsomnia} />
        </Switch>

        <Switch>
          <Route path="/anxiety" exact component={Anxiety} />
        </Switch>
        <Switch>
          <Route path="/anxiety-symptoms" exact component={SymptomsAnxiety} />
        </Switch>
        <Switch>
          <Route path="/anxiety-disorders" exact component={AnxietyDisorders} />
        </Switch>
        <Switch>
          <Route path="/anxiety-tips" exact component={TipsAnxiety} />
        </Switch>


        <Switch>
          <Route path="/depression-symptoms" exact component={SymptomsDepression} />
        </Switch>
        <Switch>
          <Route path="/depression-tips" exact component={TipsDepression} />
        </Switch>
        <Switch>
          <Route path="/depression-disorders" exact component={DepressionDisorders} />
        </Switch>
        <Switch>
          <Route path="/anxiety-meditation" exact component={Meditation} />
        </Switch>
        <Switch>
          <Route path="/motivation" exact component={Motivation} />
        </Switch>
        <Switch>
          <Route path="/music-insomnia" exact component={MusicInsomnia} />
        </Switch>
        <Switch>
          <Route path="/music-anxiety" exact component={MusicAnxiety} />
        </Switch>
        <Switch>
          <Route path="/music-depression" exact component={MusicDepression} />
        </Switch>
        <Switch>
          <Route path="/read-insomnia" exact component={ReadInsomnia} />
        </Switch>
        <Switch>
          <Route path="/read-anxiety" exact component={ReadAnxiety} />
        </Switch>
        <Switch>
          <Route path="/read-depression" exact component={ReadDepression} />
        </Switch>











        <Switch>
          <Route path="/main" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/about" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/benefits" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/advices" exact component={Footer} />
        </Switch>

        <Switch>
          <Route path="/motivation3" exact component={Footer} />
        </Switch>


        <Switch>
          <Route path="/tips-insomnia" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/sleep-diary" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/sleep-disorders" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/sleep-symptoms" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/anxiety-meditation" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/anxiety-symptoms" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/anxiety-disorders" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/anxiety-tips" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/depression-tips" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/depression-symptoms" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/depression-disorders" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/motivation2" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/music-anxiety" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/music-depression" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/music-insomnia" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/read-insomnia" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/read-anxiety" exact component={Footer} />
        </Switch>
        <Switch>
          <Route path="/read-depression" exact component={Footer} />
        </Switch>




        <Switch>
          <Route path="/tips-insomnia" exact component={Sidebar} />
        </Switch>
        <Switch>
          <Route path="/sleep-diary" exact component={Sidebar} />
        </Switch>
        <Switch>
          <Route path="/sleep-disorders" exact component={Sidebar} />
        </Switch>
        <Switch>
          <Route path="/sleep-symptoms" exact component={Sidebar} />
        </Switch>


        <Switch>
          <Route path="/anxiety-meditation" exact component={Sidebar} />
        </Switch>
        <Switch>
          <Route path="/anxiety-symptoms" exact component={Sidebar} />
        </Switch>
        <Switch>
          <Route path="/anxiety-disorders" exact component={Sidebar} />
        </Switch>
        <Switch>
          <Route path="/anxiety-tips" exact component={Sidebar} />
        </Switch>


        <Switch>
          <Route path="/depression-tips" exact component={Sidebar} />
        </Switch>
        <Switch>
          <Route path="/depression-symptoms" exact component={Sidebar} />
        </Switch>
        <Switch>
          <Route path="/depression-disorders" exact component={Sidebar} />
        </Switch>
        <Switch>
          <Route path="/motivation2" exact component={Sidebar} />
        </Switch>









      </Router>

    </div >
  );

}

export default App;


//<Switch>
//<Route path="/" exact component={Home} />
//</Switch>

/*<Switch>

          <Route path="/getstarted" exact component={GetStarted} />
        </Switch>*/


/* <Router>
<AuthProvider>
  <Switch>
    <Route path="/home2" exact component={Navbar2} />
  </Switch>
</AuthProvider>
</Router>*/

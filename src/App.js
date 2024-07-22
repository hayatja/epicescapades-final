import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importing components
import About from './components/About';
import Home from './components/Home';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import Community from './components/Community';
import Packages from './components/Packages';
import Login from './components/Login';
import Plan from './components/Plan';
import Profile from './components/Profile';
import Register from './components/Register';
import Destinations from './components/Destinations';
import Cart from './components/Cart';
import BookingConfirmation from './components/BookingConfirmation';
import BankingInformation from './components/BankingInformation';
import FAQ from './components/FAQ';

// Internationalization
import './i18n';

// Resources
import importedData from './res/LocalData.json';

const App = () => {
  const localData = importedData;
  const localCart = { added: [], saved: [] };

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home localData={localData} />} />
          <Route path='/about' element={<About />} />
          <Route
            path='/destinations'
            element={<Destinations localData={localData} />}
          />
          <Route
            path='/packages'
            element={<Packages localData={localData} />}
          />
          <Route
            path='/community'
            element={<Community localData={localData} />}
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/plan' element={<Plan cart={localCart} />} />
          <Route
            path='/cart'
            element={<Cart cart={localCart} localData={localData} />}
          />
          <Route
            path='/booking-confirmation'
            element={<BookingConfirmation />}
          />
          <Route path='/banking-information' element={<BankingInformation />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

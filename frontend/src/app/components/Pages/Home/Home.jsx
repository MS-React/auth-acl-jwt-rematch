import React from 'react';

import Header from '../../Common/Header';
import CrudUserTable from '../../Common/Crud/Templates/User';

import './Home.scss';

const Home = () => (
  <div className="home-page">
    <div className="home-page--header">
      <Header />
    </div>
    <CrudUserTable />
  </div>
);

export default Home;

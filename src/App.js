import React from 'react';
import logo from './assets/logo.svg';


import Header from "./components/Header";
import Footer from "./components/Footer";
import NotesContainer from "./components/NotesContainer";

import './sass/AllTheStyles.scss';




const AppContainer = () => {

  const contactInfo = {
    address: "2340 Main Street",
    city: "San Bernadino",
    state: "California",
    phone: "915 959 0922"
  }

  return (
    <React.Fragment>

      <div className="App ">
          <img src={logo} className="App-logo" alt="logo" />
      </div>
      

      <section className="app-body">
        
        <Header 
          contactInfo={contactInfo}
        />


        <section className="note-container">
          <NotesContainer contactInfo={contactInfo}  />
        </section>


        <Footer 
          contactInfo={contactInfo} 
        />

      </section>


    </React.Fragment>
  );
}



export default AppContainer;



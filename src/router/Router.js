import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import PageNotFound from "../shared/PageNotFound";
import Home from "../components/Home.js";
import Projects from "../components/Projects";
import Project from "../components/Project";
import ScrollButton from "../shared/ScrollTopButton";
import ContactUs from "../components/ContactUs";

// import {Layout} from '../components/Layout'
// import Login from "../components/login/login";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import {DataContext} from '../components/common/Provider/DataProvider'

export default () => (
  <BrowserRouter>
    <div>
      <ScrollButton />
      <Header />
      {/* <DataContext.Consumer>
        {context=>{
          console.log(context.data.isLogged)
            return context.data.isLogged?<Navbar /> : ''
          }}
      </DataContext.Consumer> */}
      <Navbar />
      {/* 
      <div className="mx-1 pb-5">
        <Switch>
          <Route path="/" component={Login} exact />
          
           <Route path="/users-list/" component={UsersListPage} />
          <Route path="/user-profile/:id" component={UserProfile} /> 
      
          <Route component={PageNotFound} />
        </Switch>
        <ToastContainer />
      </div> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} />
        <Route path="/project/:id" component={Project} />
        <Route path="/contactus" component={ContactUs} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

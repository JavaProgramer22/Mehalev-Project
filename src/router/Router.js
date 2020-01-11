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
import NewIdea from "../components/NewIdea";
import IdeasBank from "../components/IdeasBank";
import Category from "../components/Category";
import SearchByCategory from "../components/SearchByCategory";
import SignIn from "../components/SignIn";
import AddProject from "../components/AddProject";
import PendingIdeas from "../components/PendingIdeas";
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
        <Route path="/project/:id" component={Project} />
        <Route path="/projects" component={Projects} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/newidea" component={NewIdea} />
        <Route path="/category/:id" component={Category} />
        <Route path="/category" component={SearchByCategory} />
        <Route path="/signin" component={SignIn} />
        <Route path="/ideas" component={IdeasBank} />
        <Route path="/addproject" component={AddProject} />
        <Route path="/pendingideas" component={PendingIdeas} />

        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./main/main";
import Header from "./header/header";
import Folder from "./folder/folder";
import Note from "./note/note";
import Sidebar from "./sidebar/sidebar";
import MainSidebar from "./mainSidebar/mainSidebar";
import NoteSidebar from "./noteSidebar/noteSidebar";
import { Switch } from "react-router-dom";
import "./App.css";

function App() {  
  return (
    <div className="flexbox">
      <Main>
        <Route path="/" component={MainSidebar} />
        <Route path="/note" component={NoteSidebar} />
        <Route exact path="/" component={Main} />
        <Route path="/folder" component={Folder} />
        <Route path="/note" component={Note} />
      </Main>
    </div>
  );
}

export default App;

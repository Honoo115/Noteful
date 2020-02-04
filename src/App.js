import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main/main";
import Folder from "./folder/folder";
import Note from "./note/note";
import Sidebar from "./sidebar/sidebar";
import CreateFolder from "./createfolder/createfolder";
import Layout from "./layout/layout";
import Store from "./store/dummy-store";
import SideButton from "./sidebutton/sidebutton";
import CreateNote from "./createnote/createnote";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.setState({
      folders: Store.folders,
      notes: Store.notes
    });
  }
  constructor(props) {
    super(props);
    this.state = { folders: [], notes: [] };
  }

  render() {
    return (
      <div className="flexbox">
        <Layout>
          <Switch>
            <Route path="/createfolder">
              <SideButton />
            </Route>
            <Route path="/createnote">
              <SideButton />
            </Route>
            <Route path="/">
              <Sidebar folders={this.state.folders} notes={this.state.notes} />
            </Route>
          </Switch>
          <Route exact path="/">
            <Main notes={this.state.notes} />
          </Route>
          <Route path="/folder/:folderId">
            <Folder notes={this.state.notes} />
          </Route>
          <Route path="/createnote">
            <CreateNote folders={this.state.folders} />
          </Route>
          <Route path="/note/:id">
            <Note notes={this.state.notes} />
          </Route>
          <Route path="/createfolder">
            <CreateFolder />
          </Route>
        </Layout>
      </div>
    );
  }
}

export default App;

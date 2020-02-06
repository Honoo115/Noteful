import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./main/main";
import Folder from "./folder/folder";
import Note from "./note/note";
import Sidebar from "./sidebar/sidebar";
import CreateFolder from "./createfolder/createfolder";
import Layout from "./layout/layout";
import SideButton from "./sidebutton/sidebutton";
import CreateNote from "./createnote/createnote";
import FilteredNote from "./filteredNotes/filteredNotes";
import { Link } from "react-router-dom";
import config from "./config";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { folders: [], notes: [], hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch(error => {
        console.error({ error });
      });
  }
  handleClickDelete = id => {
    const noteId = id;
    console.log("DELETE ATTEMPTED");

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        const shelf = this.state.notes.filter(note => note.id != noteId);
        this.setState({ notes: shelf });
      })
      .catch(error => {
        console.error({ error });
      });
  };
  handleAddNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  };
  handleAddFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    });
  };
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const { id } = this.props;
    return (
      <div className="flexbox">
        <Layout>
          <Switch>
            <Route exact path="/createfolder">
              <SideButton />
            </Route>
            <Route exact path="/createnote">
              <SideButton />
            </Route>
            <Route path="/">
              <Sidebar folders={this.state.folders} notes={this.state.notes} />
            </Route>
          </Switch>
          <Route exact path="/">
            <div>
              <Main
                notes={this.state.notes}
                onDeleteNote={this.handleClickDelete}
              />
              <Link to="/createnote">Add Note</Link>
            </div>
          </Route>
          <Route exact path="/folder/:folderId">
            <Folder notes={this.state.notes} />
          </Route>
          <Route exact path="/createnote">
            <CreateNote
              folders={this.state.folders}
              AddNote={this.handleAddNote}
            />
          </Route>
          <Route exact path="/note/:id">
            <Note notes={this.state.notes} />
          </Route>
          <Route exact path="/createfolder">
            <CreateFolder AddFolder={this.handleAddFolder} />
          </Route>
          <Route exact path="/folder/note/:id">
            <FilteredNote notes={this.state.notes} />
          </Route>
        </Layout>
      </div>
    );
  }
}

export default App;

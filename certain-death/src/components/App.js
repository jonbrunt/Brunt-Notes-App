import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import UserPage from './Pages/userpage';
import List from './Pages/list';
import NewNote from './Pages/newnote';
import FullNote from './Pages/fullnote';
import UpdateNote from './Pages/updatenote';
import NotFound from './Modals/notfound';

const StyledApp = styled.div`
  width: 830px;
  margin: 20px auto 20px;
  border: 1px solid #bfbfc0;
  border-radius: 2px;
`;

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <StyledApp>
          <Switch>
            <Route path='/' component={UserPage} exact />
            <Route path='/list' component={List} />
            <Route path='/fullnote/:id' component={FullNote} />
            <Route path='/newnote' component={NewNote} />
            <Route path='/updatenote/:id' component={UpdateNote} />
            <Route component = {NotFound} />
          </Switch>
        </StyledApp>
      </Router>
    );
  }
}

export default App;

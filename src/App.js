import React from 'react';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './components/login';
import MembersPage from './components/members';
import AddEdit from './components/members/form';
// import ProtectedRoute from './components/login/protected';
import Store from './store';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
// import MemberEdit from './components/members/edit';

function App() {
  return (
    <Store>
      <Container fluid={true}>
        <Routes>
          <Route path="/" element={<LoginPage />}>
            <Route path="login" index element={<LoginPage />} />
          </Route>
          <Route path="members">
            <Route path=":id" element={<AddEdit />} />
            <Route path="new" element={<AddEdit />} />
          </Route>

          {/* <ProtectedRoute exact path="/members" component={MembersPage} /> */}
          {/* <ProtectedRoute
            exact
            path="/member/:id/view"
            component={MemberEdit}
          />
          <ProtectedRoute
            exact
            path="/member/:id/edit"
            component={MemberEdit}
          /> */}
          {/* <ProtectedRoute
            exact
            path="/member/new"
            component={MemberCreatePage}
          /> */}
          <Route path="*" component={() => <center>404 NOT Found</center>} />
        </Routes>
      </Container>
      <ToastContainer autoClose={8000} />
    </Store>
  );
}

export default App;

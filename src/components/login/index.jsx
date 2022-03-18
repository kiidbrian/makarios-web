import React, { useContext } from 'react';
import { Row, Col, Form } from 'reactstrap';
import styled from 'styled-components';
import Login from './googleLogin';
import LHIAlert from '../common/alert';
import { Context } from '../../store';

const LoginWrapper = styled.div`
  padding: 30% 15%;
`;

const StyledCol = styled(Col)`
  @media (min-width: 350px) and (min-width: 800px) {
    width: 0%;
    max-width: 0%;
  }
  @media (min-width: 1024px) {
    max-width: 50%;
    width: 50%;
    background: #380311;
  }
`;

const ResponsiveCol = styled(Col)`
  flex: none;
  max-width: 100%;
  @media (min-width: 1024px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 350px) {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledRow = styled(Row)`
  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`;

const LoginPage = ({ history }) => {
  const [state] = useContext(Context);
  return (
    <StyledRow>
      <StyledCol xs="6"></StyledCol>
      <ResponsiveCol xs="6">
        <LoginWrapper>
          <ImageWrapper>
            <StyledImage src="/makario-logo.jpeg" alt="lhi-logo" />
          </ImageWrapper>

          <Form className="form">
            <Login history={history} />
            {state.error ? (
              <LHIAlert color="danger" message={state.error} />
            ) : (
              <></>
            )}
          </Form>
        </LoginWrapper>
      </ResponsiveCol>
    </StyledRow>
  );
};

export default LoginPage;

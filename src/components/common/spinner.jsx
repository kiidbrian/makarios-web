import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled(Loader)`
  position: absolute;
  left: 50%;
`;

function LHISpinner() {
  return (
    <div>
      <StyledLoader
        type="MutatingDots"
        color="#000"
        secondaryColor="#dedede"
        height={80}
        width={80}
      />
    </div>
  );
}

export default LHISpinner;

import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import styled from 'styled-components';

const PaginationWrapper = () => {
    return (
        <Pagination aria-label='Page navigation'>
            <PaginationItem disabled>
                <PaginationLink first href='#' />
            </PaginationItem>
            <PaginationItem disabled>
                <PaginationLink previous href='#' />
            </PaginationItem>
            <StyledPaginationItem active>
                <StyledPaginationLink href='#'>1</StyledPaginationLink>
            </StyledPaginationItem>
            <StyledPaginationItem>
                <PaginationLink href='#'>2</PaginationLink>
            </StyledPaginationItem>
            <StyledPaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
            </StyledPaginationItem>
            <StyledPaginationItem>
                <PaginationLink href='#'>4</PaginationLink>
            </StyledPaginationItem>
            <StyledPaginationItem>
                <PaginationLink href='#'>5</PaginationLink>
            </StyledPaginationItem>
            <StyledPaginationItem>
                <PaginationLink next href='#' />
            </StyledPaginationItem>
            <StyledPaginationItem>
                <PaginationLink next href='#' />
            </StyledPaginationItem>
        </Pagination>
    );
};

export default PaginationWrapper;

const StyledPaginationItem = styled(PaginationItem)`
    .page-link {
        color: black !important;
    }
    .page-item.active .page-item {
        background-color: #d8d8d8 !important;
    }
`;

const StyledPaginationLink = styled(PaginationLink)`
    background-color: #d8d8d8 !important;
    border: 1px solid #d8d8d8 !important
`;

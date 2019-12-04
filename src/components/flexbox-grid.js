import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map'

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;

    /* demo style to remove */
    border: solid 1px lightblue;
    margin: 1rem;
     /* _____________________ */
`;

const GridRow = styled.div`
    display: flex;
    flex-direction: row;

    /* demo style to remove */
    border: solid 1px lightblue;
    /* _____________________ */
`;

const GridRowItem = styled.span`
    flex: 1;

    /* demo style to remove */
    &:hover {
        cursor: pointer;
        background-color: lightblue;
    }

    border-right: solid 1px lightblue;
    min-width: 3rem;
    margin-right: 1rem;
    margin: .5rem;

    /* _____________________ */
`;

export default ({ columns = 2, items = [] }) => {

    let gridRows = [];
    let rowItems = [];
    let columnsNumber = 0;
    let rowKey = 1;
    let itemKey = 1;

    map(items, item => {

        if(columnsNumber++ === columns)
        {
            gridRows.push(<GridRow key={rowKey++}>{rowItems}</GridRow>);
            rowItems = [];
            columnsNumber = 0;
        }
        else{
            rowItems.push(<GridRowItem key={itemKey++}>{item}</GridRowItem>)
        }
    });
    gridRows.push(<GridRow key={rowKey++}>{rowItems}</GridRow>);

    return (
        <GridContainer>{gridRows}</GridContainer>
    );
}

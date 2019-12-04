import React from 'react';
import styled from 'styled-components';

import FlexboxGrid from './components/flexbox-grid'
import data from './data';

const AppContainer = styled.div`
  font-family: 'Arial';
`;

const TopHeader = styled.div`
  margin: 1rem;
`;

const ButtonsContainer = styled.div`
  margin-top: 1rem;
`;

class App extends React.Component {
  state = {
    columns: 2
  }

  render(){


    return (
      <AppContainer>
        <TopHeader>
          <header>Flexbox Grid</header>

          <ButtonsContainer>
            <section>Select number of columns</section>
            <button onClick={() => this.setState({ columns: 1})}>1</button>
            <button onClick={() => this.setState({ columns: 2})}>2</button>
            <button onClick={() => this.setState({ columns: 3})}>3</button>
            <button onClick={() => this.setState({ columns: 4})}>4</button>
            <button onClick={() => this.setState({ columns: 5})}>5</button>
          </ButtonsContainer>
        </TopHeader>

        <FlexboxGrid columns={this.state.columns} items={data}/>
      </AppContainer>
    )
  }
}

export default App;

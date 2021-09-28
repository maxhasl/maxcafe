import React, { PureComponent } from 'react';
import Restaurants from '../restaurants';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

export default App;

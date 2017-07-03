import React, {Component} from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  public render() {
    return (
      <div>
        test
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

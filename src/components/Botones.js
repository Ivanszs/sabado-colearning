import React, { Component } from 'react';

class Botones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      montar: true,
    };
  }
  componentDidMount() {
    console.log('soy un componente y me monte');
  }

  componentDidUpdate() {
    console.log('soy un componente y me actualize');
  }

  handleClick = () => {
    this.setState({ contador: this.state.contador + 1 });
    if (this.state.contador === 10) {
      this.setState({ montar: false });
    }
    console.log(this.state.montar);
  };

  render() {
    return (
      <div>
        <h1>{this.state.contador}</h1>
        <button montado={this.state.montar} onClick={this.handleClick}>
          SUMA
        </button>
      </div>
    );
  }
}

export default Botones;

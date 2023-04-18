import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">
      <div><Task1 /></div>        <br></br>
      <div><Task2 /></div>        <br></br>

        <div><Task3 /></div>        <br></br>

        <div><Task4 /></div>        <br></br>

        <div><Task5 /></div>        <br></br>

        <div><Task6 /></div>        <br></br>

        <div><Task7 /></div>        <br></br>

        <div><Task8 /></div>        <br></br>
        <div><Task9 /></div>        <br></br>

        <div><Task10 /></div>        <br></br>

        <div><Task11 /></div>
    </div>
  );
}

class Task1 extends React.Component {
  state = {name: 'Іван', age: 25};
  render() {
    return (
        <div>ім'я:{this.state.name},вік:{this.state.age}</div>);
  }
}


class Task2 extends React.Component {
  render() {

    return (
        <div>
            <button onClick={this.ShowMessage} > Say hi</button>



        </div>);
  }


   ShowMessage(){
     return  alert("hello");
    }
}

class Task3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Іван', age: 25};
    }

    showName() {
        alert("ім'я: "+this.state.name+" вік: "+this.state.age);
    }

    render() {
        return (
            <button onClick={this.showName.bind(this)}>Click me</button>
        );
    }

}

class Task4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Іван', age: 25 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.state.name=="Іван")
        this.setState({ name: 'Коля', age: 30 });
        else
            this.setState({ name: 'Іван', age: 25 });

    }

    render() {
        return (
            <div>
                <div>
                    ім'я: {this.state.name}, вік: {this.state.age}
                </div>
                <button onClick={this.handleClick}>Змінити дані</button>
            </div>
        );
    }
}

class Task5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Iван', age: 25 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ name: 'Коля', age: 30 });
    }

    render() {
        return (
            <div>
                <div>
                    Iм`я: {this.state.name}, вік: {this.state.age}
                </div>
                <button onClick={this.handleClick}>Змінити дані</button>
            </div>
        );
    }

}
class Task6 extends React.Component {  constructor(props) {
    super(props);
    this.state = { name: 'Іван', age: 25, clicked: false };
    this.handleClick = this.handleClick.bind(this);
}

    handleClick() {
        this.setState({ clicked: true });
    }

    render() {
        if (this.state.clicked) {
            return (
                <div>
                    <p>ім'я: {this.state.name}, вік: {this.state.age}</p>
                    <button>Натисни на мене</button>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.handleClick}>Натисни на мене</button>
                </div>
            );
        }
    }
}


class Task7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Іван',
            age: 25,
            showText: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({ showText: !prevState.showText }));
    }

    render() {
        const { name, age, showText } = this.state;
        return (
            <div>
                {showText && <p>ім'я: {name}, вік: {age}</p>}
                <button onClick={this.handleClick}>Натисни на мене</button>
            </div>
        );
    }
}

class Task8 extends React.Component {
    state = { show: false, name: 'Іван', age: 25 }

    toggleShow = () => {
        this.setState(prevState => ({ show: !prevState.show }))
    }

    render() {
        const { show, name, age } = this.state

        return (
            <div>
                <button onClick={this.toggleShow}>
                    {show ? 'Сховати' : 'Показати'}
                </button>
                {show && (
                    <p>ім'я: {name}, вік: {age}</p>
                )}
            </div>
        )
    }
}

class Task9 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: ['Коля', 'Вася', 'Петя']
        };
    }

    render() {
        return (
            <ul>
                {this.state.names.map((name) => <li>{name}</li>)}
            </ul>
        );
    }
}
class Task10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { names: ['Коля', 'Вася', 'Петро'] };
    }

    render() {
        const listItems = this.state.names.map((name, index) => (
            <li key={index}>{name} - {index + 1}</li>
        ));
        return <ul>{listItems}</ul>;
    }
}
class Task11 extends React.Component {

    state = {
        hrefs: [
            {href: '1.html', text: 'посилання 1'},
            {href: '2.html', text: 'посилання 2'},
            {href: '3.html', text: 'посилання 3'},
        ]
    };
  render() {

    return (
        <div><ul>
            {this.state.hrefs.map((item, index) => (
                <li key={index}>
                    <a href={item.href}>{item.text}</a>
                </li>
            ))}
        </ul></div>);
  }



}












export default App;

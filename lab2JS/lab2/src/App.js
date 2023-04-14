
import React from 'react';
import "./index.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <div><Task1 /></div>
                <div><Task2 /></div>
                <div><Task3 /></div>
                <div><Task4 /></div>
                <div><Task5 /></div>
                <div><Task6 /></div>
                <div><Task7 /></div>
                <div><Task8 /></div>
                <div><Task9 /></div>
                <div><Task10 /></div>
                <div><Task11 /></div>
            </div>
 

        );

    }
}


class Task1 extends React.Component {
    render() {
        return (
            <div>tex1</div>);
    }
}


class Task2 extends React.Component {
    render() {
        let text = "text task2";

        return (
            <div><p>{text}</p></div>);
    }
}

class Task3 extends React.Component {
    render() {
        var text = <p>text3</p>;
        return (
            <div>{text}</div>);
    }


}

class Task4 extends React.Component {
    render() {
        let text1 = "<p>Task 4 text1</p>";
        let text2 = "<p>Task 4 text2</p>";

        return (
            <div >
                {text1}
                <p>!!!</p>
                {text2}
            </div>
);
    }
}

class Task5 extends React.Component {
    render() {
        let attr = "block";
        return (
            <div id={attr}>
                Text5
            </div>
);
    }
}
class Task6 extends React.Component {
    render() {
        let str = "block";

        return (
            <div class={str}>
                text6
            </div>
);
    }
}


class Task7 extends React.Component {
    render() {
        return (
            <div class="myclass"><p>text7</p></div>);
    }
}

class Task8 extends React.Component {
    render() {
         var show = true;
 if (show === true) {
        return (
           
            <div><p>true text8</p></div>
          );}
 else {
     return (

         <div><p>false text8</p></div>
     );
        }
        
        
      
    }
}

class Task9 extends React.Component {
    render() {
        let arr = ['a', 'b', 'c', 'd', 'e'];

        return (
<div>

        {arr.map((item) => (
            <li>{item}</li>
        ))}

</div>
        );
    }
}
class Task10 extends React.Component {
    render() {
        return (
            <div>{this.getText()}</div>);
    }

    getText(){
        return <p>text task3</p>
    }
}
class Task11 extends React.Component {
    render() {
        let text = <b>text11</b>;

        return (
            <div>{text} {this.getNum1()+this.getNum2()}</div>);
    }

    getNum1(){return 1;}
    getNum2(){return 2;}



}


export default App;

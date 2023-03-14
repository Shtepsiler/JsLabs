
import React from 'react';


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
            <div>text</div>);
    }
}


class Task2 extends React.Component {
    render() {
        let text = "text";

        return (
            <div><p>text</p></div>);
    }
}

class Task3 extends React.Component {
    render() {
        let text = "<p>text</p>";

        return (
            <div><p>text</p></div>);
    }
}

class Task4 extends React.Component {
    render() {
        let text1 = "<p>text1</p>";
        let text2 = "<p>text2</p>";

        return (
            <div>
                <p>text1</p>
                <p>!!!</p>
                <p>text2</p>
            </div>
);
    }
}

class Task5 extends React.Component {
    render() {
        let attr = "block";
        return (
            <div id="attr">
                Text
            </div>
);
    }
}
class Task6 extends React.Component {
    render() {
        let str = "block";

        return (
            <div class='str'>
                text
            </div>
);
    }
}


class Task7 extends React.Component {
    render() {
        let text = "<p>text</p>";

        return (
            <div><p>text</p></div>);
    }
}

class Task8 extends React.Component {
    render() {
        let show = true;
 if (show == true) {
        return (
           
            <div><p>true text</p></div>
          );}
 else {
     return (

         <div><p>false text</p></div>
     );
        }
        
        
      
    }
}

class Task9 extends React.Component {
    render() {
        let text = "text";

        return (
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                <li>d</li>
                <li>e</li>
            </ul>
        );
    }
}
class Task10 extends React.Component {
    render() {
        let text = "text";

        return (
            <div><p>text</p></div>);
    }
}
class Task11 extends React.Component {
    render() {
        let text = "<p>text</p>";

        return (
            <div><p>text</p></div>);
    }
}


export default App;

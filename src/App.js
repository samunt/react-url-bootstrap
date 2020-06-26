import React, {Component} from 'react';
import Routes from './Routes'
import NavBar from './NavBar';
import whiskey from './images/whiskey.jpg';
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';
import './App.css';

class App extends Component {
    static defaultProps = {
        dogs: [
            {
                name: "Whiskey",
                age: 10,
                src: whiskey,
                facts: [
                    "Loves to chase balls",
                    "Eats food",
                    "Potty trained"
                ]
            },
            {
                name: "Hazel",
                age: 8,
                src: hazel,
                facts: [
                    "Loves to chase balls",
                    "Eats food",
                    "Potty trained"
                ]
            },
            {
                name: "Tubby",
                age: 4,
                src: tubby,
                facts: [
                    "Loves to chase balls",
                    "Eats food",
                    "Potty trained"
                ]
            }
        ]
    };
    render() {
        return (
            <div>
                <NavBar dogs={this.props.dogs}/>
                <div className='container'>
                    <Routes dogs={this.props.dogs}/>
                </div>
            </div>

        );
    }
}

export default App;

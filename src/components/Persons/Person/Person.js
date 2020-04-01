import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

// Here no need of component in import bcoz we r not using a class which extends components rather we r using a function...
class Person extends Component  {
        constructor(props) {
                super(props);
                this.inputElementRef = React.createRef();
        }

        static contextType = AuthContext;

        componentDidMount() {
                this.inputElementRef.current.focus();
                console.log(this.context.authenticated);
        }
        render(){


                console.log('[Person.js] rendering...');

                return (
                        <Auxiliary>
                         {       
                        this.context.authenticated ? <p>Authenticated!</p>: <p> plz Log In</p>}
                         
                           
                       
                        <p onClick={this.props.click} > I'm a {this.props.name} and I am {this.props.age} years old!!! </p>
                        <p key="i2"> {this.props.children} </p>
                        <input 
                        key="i3" 
                        ref={this.inputElementRef}
                        type="text" 
                        onChange = {this.props.changed}
                         value = {this.props.name} />
                        </Auxiliary>
                );       
                     
        }
}

        Person.propTypes = {
        click: PropTypes.func,
        name: PropTypes.string,
        age: PropTypes.number,
        changed: PropTypes.func
};

export default withClass(Person,classes.Person);
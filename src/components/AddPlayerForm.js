import React, {Component} from 'react';



/* form elements naturally keeps some internal state so if we add a value inside the input statement we wont be
able to make any change in the input area on the web recpectively. This happens because when a user types into a 
text field they are changing the state of the text field; hence we need to handle a form element state explicitly */
/*A controlled component renders a form that controls what happens in that form on subsequence user input */



class AddPlayerForm extends Component {

    

    playerInput = React.createRef();

   
    // e is a  normalized event created by react
    //handleValueChange will update the value state
    //This error function will be passed a Dom event for the change in the element

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
      
    }

    /*if we don't prevent the form's default submit behaviour it will result in the browser 
    posting a request bak to the server - this will cause3 out application to reload in the borwser(we will loose 
        all out application state in the process)*/


    render() {
        //console.log(this.state.value)
        return(
            <form onSubmit = {this.handleSubmit}>
                <input
                    type = "text"
                    ref = {this.playerInput}
                    placeholder = "Enter a player's name"
                />

                <input
                    type = "submit"
                    value= "Add Player"
                />
            </form>

        );
    }
}

export default AddPlayerForm;
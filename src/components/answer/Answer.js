import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='mt-5'>
            <h3 className='text-success text-center mb-2'>Props VS State</h3>
            <div className='d-flex flex-column flex-md-row justify-content-evenly mx-5 gap-5'>
                <div>
                    <h4 className='text-center'>Props</h4>
                    <p className='answer'>
                        Props is an object . It stores the value of attributes of a tag. We can pass the data from one component to another component by the Props. When we work with Similar in look different in data component Props come to play in these cases, We pass the different data in different time in the same component by props, we can Destructure the props object and use them easily. Props can be a variable function, object or array.
                        Note that, Props are read-only so we can’t change the value of props 

                    </p>
                </div>
                <div>
                    <h4 className='text-center'>State</h4>
                    <p className='answer'>
                        State is a React Built in structure. State components can store and modify  their own data but a state should not be modified directly like a js variable, State has a special method setState() and by using this method state should be changed. Based on user action state will be changed and react rendering happens based on state data. 
                        So By State changes the React gets informed and re-renders the DOM with which component has updated the state, and whole process will happens without re-rendering the full DOM
                    </p>
                </div>
            </div>
            <div className='w-75 mx-auto'>
                <h3 className='text-center text-success my-3'>How Dose UseState Work</h3>
                <p className='answer'>
                    useState() is a built-in function that comes with the React library.  So firstly we have to import useState() state from react. 
                    useState()  returns an array, where the first element is the state variable and the second element is a function to update the value of the state  variable like [stateVar, setStateVar]
                    And firstly we Set the initial value of state variable as the argument of state function, Whenever we call the state function and pass any value, then  the initial value will ignore and store the current passing value in state variable  and We can use the state variable in the functional component like any other variable:

                </p>
            </div>
        </div>
    );
};

export default Answer;
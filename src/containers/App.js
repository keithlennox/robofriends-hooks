import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = () => {

    const [ robots, setRobots ] = useState([]); //Set initial value to empty array
    const [ searchfield, setSearchfield ] = useState(''); //Set initial value to empty string

    /*Normally all of the code inside our App function (component) gets run everytime React re-renders the DOM. And as we know,
    React does this whenever we update state. Becuase of this, we must put fetch() inside useEffect(). If we didn't
    do this, fetch would run and then update state. Then there would be a re-render, causing fetch to run again.
    You would have an endless loop of re-renders. useEffect() takes 2 paramaters. The first is a function to run
    whenever useEffect() is triggered. The 2nd is, which is optional, is an array of values. The code inside
    useEffect() will only run if any of the values in the array changes. For example, if you include robots, useEffect
    only runs if the robots state is updated. Likewise for the searchfield state. In either case, the code would still
    be triggered too many times. What we want is for fetch() to run once, when the component first loads. You can do this
    by providing an empty array, which is what we do. If you do not provide a 2nd parameter, useEffect gets run every
    time React re-renders the DOM. Or basically the same as not using useEffect at all.*/
    useEffect(() => {
        console.log(robots, searchfield)
        fetch('https://jsonplaceholder.typicode.com/users') //Make API call, returns an array of users
        .then(response => response.json()) //Recieve response and convert it to json
        .then(users => setRobots(users)); //Update the state with contents 
      }, []) //Empty array provided as 2nd parameter

    //Function that fires whenever there is a change in the search form field
    const onSearchChange = (event) => { //The event object is passed to this function. It contains the updated contents of the search box
        setSearchfield(event.target.value) // //Updates state with the new value in the search box. Whenever you update state it causes a re-render.
    }

    const filteredRobots = robots.filter(robot => { //filter() loops thru the roboys array and creates a new array containing only the values that pass the test in the provided function.
        return robot.name.toLowerCase().includes(searchfield.toLowerCase()) //includes() returns a value only if the robot name in the robots array matches the robot name in the search field.
    })

    return !robots.length ? //This uses a ternary to do an if else statement. If there are no users returned yet from the APi call, display loading..., else dispaly the users. "!robots.length" is the same as "robots.length === 0".
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1> {/*className uses tachyons*/}
                <SearchBox searchChange={onSearchChange}/> {/*onSearchChange function is passed as a prop to the SeachBox component*/}
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
        
}

export default App;
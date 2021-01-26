import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { //This is using destructuring to destructure props. I need to learn destructuring.

    //Use this to test ErrorBoundry
    // if (true) { 
    //     throw new Error('No!');
    // }

    return (
        <div>
            {
               robots.map((robot, i) => { //map() loops through robots object and returns a new array, 2nd param i is the array index
                    return  (
                        <Card 
                            key={i} //It's important to provide a key!
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email} 
                        />
                    )
                })  
            }
        </div>
    );
}

export default CardList;

/*When looping in react, such as using map, and outputting the results in JSX,
which basically is outputting to the DOM, you have a slight issue. If the results
output from the loop may change each time the loop is run, React needs to be able
to uniquely identify each item. If it cannot, it will update the entire DOM each time,
which is not efficient. If it can, it will only update the parts of the DOM it needs to.
This is better practice. All you have to do is add an attribute to your JSX element
called "key" and give it a unique value. For example, <Element key=7472323 />. Remember,
in React we call them props not attributes. So, this is commonly referred to as a key prop.
So, for example, if you are performing a search on a database table that returns different
results based on the search criteria provided by the user, it makes sense to grab the unique
identifier used in the databased for the table, probably the primary key, and use that to populate
the key prop. This insures the key prop is always unique.*/
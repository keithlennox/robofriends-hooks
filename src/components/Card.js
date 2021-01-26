import React from 'react';

const Card = ({ name, email, id}) => { //This is using destructuring to destructure props.
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} /> {/*This URL uses back ticks, which allows the insertion of variables into strings. Also note the weird way you have to comment JSX.*/}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

/*Robohash is a free API that returns a unique robot imgage for any string you provide.
You may also provide parameters such as image size*/
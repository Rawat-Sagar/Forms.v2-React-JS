import React , {useState} from 'react';


const App = () =>{
    
    // stores in value={snames}
    const [snames, setname] = useState('');
    const [lastName, setLastname] = useState('');
    // change on Submit
    const [onSubmitName, setSubmitName] = useState('');
    const [onSubmitLastName, setSubmitLastName] = useState('');

    const inputEvent = (event) =>{
        // console.log(event.target.value);
        setname(event.target.value);
        
    }

    const inputEventTwo = (event) =>{
        setLastname(event.target.value);
    }

    const onSubmit = (event) =>{
        // Helps page to not refresh
        event.preventDefault();
        setSubmitName(snames);
        setSubmitLastName(lastName);
    }

    
    return(
        <>
        {/* Forms refresh automatically so use onSubmit */}
        <form onSubmit={onSubmit}>
            <div>
                <h1>Hello {onSubmitName} {onSubmitLastName}</h1>
                <input  type='text' placeholder='Enter Your First Name' onChange={inputEvent} value={snames}/>
                <input  type='text' placeholder='Enter Your Last Name' onChange={inputEventTwo} value={lastName}/>
                <button type='submit' >Click ME 👍</button>
            </div>
        </form>
        </>
    );
}


export default App;
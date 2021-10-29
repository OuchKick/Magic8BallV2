import React, { useState, useEffect } from 'react';
import Stack  from 'react-bootstrap/Stack';
import Button  from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import eightBall from '../../utilities/images/8ball.png'
import Container from 'react-bootstrap/Container';
import {twistedBlue, twistedJosefin, twistedOrange} from '../../utilities/CSSUtilities/CSSUtil';


function MagicEightBall() {
    
    const [question, setQuestion] = useState(() => {
        const savedQuestion = localStorage.getItem("question");
        const initialVal = JSON.parse(savedQuestion);
        return initialVal || "";
    });

    let params = encodeURIComponent(question);
    let uri = "https://8ball.delegator.com/magic/JSON/" + params;
    

      const myFunction = () => {
        // Regex to confirm that there's letters, spaces, and question marks for the question
        if (question.match(/^[A-Za-z'0-9 ]+[?]/)) {
          fetch(uri)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            const answer = JSON.stringify(json.magic.answer);
            localStorage.setItem('answer', answer);
          }) 
        } else {
          window.alert("That wasn't a question.")
        } 
      };


      useEffect(() => {
        localStorage.setItem("question", JSON.stringify(question));
      }, [question]);


    return(
        <Container>
        <div style={{
            display: 'flex', 
            justifyContent: 'center',
            paddingTop: '1em',
            
        }}>
        <h1 className="fw-bolder" style={{fontSize: '60px', fontFamily: `${twistedJosefin}`}}>Magic 8Ball</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={eightBall} aria-label="Magic 8-Ball" style={{width: '15em', paddingBottom: '10px'}}/>
        </div>

        
        <div id="query" style={{display: 'flex', justifyContent: 'center'}}>
        </div>
        <Stack gap={3} className="col-md-5 mx-auto">
            
        <Form.Control placeholder="Have a question?" value={question} onChange={(e) => setQuestion(e.target.value)}></Form.Control>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button variant="primary" type="button" onClick={myFunction} style={{
            backgroundColor: `${twistedBlue}`,
            fontFamily: `${twistedJosefin}`,
            width: '15em',
            fontSize: '20px'

        }}>
        Submit</Button>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button variant="outline-secondary" style={{
            backgroundColor: `${twistedOrange}`,
            fontFamily: `${twistedJosefin}`,
            color: '#fff',
            width: '15em',
            fontSize: '20px'

        }} href="/history">History</Button>
        </div>
        
        </Stack>
        </Container>




    )
}

export default MagicEightBall;
import React, { useState } from 'react';
import Stack  from 'react-bootstrap/Stack';
import Button  from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import eightBall from '../../utilities/images/8ball.png'
import Container from 'react-bootstrap/Container';
import {twistedBlue, twistedJosefin, twistedOrange} from '../../utilities/CSSUtilities/CSSUtil';
import '../MagicBall/index.css'


function MagicEightBall() {
    
    // State & Parsing question
    const [question, setQuestion] = useState(() => {
        const savedQuestion = localStorage.getItem("question");
        const initialVal = JSON.parse(savedQuestion);
        return initialVal || "";
    });
    
    // State for answers
    const [apiAnswer, setApiAnswer] = useState();

    // API
    let params = encodeURIComponent(question);
    let uri = "https://8ball.delegator.com/magic/JSON/" + params;
    

      const apiFunction = () => {
        // Regex to confirm that there's letters, spaces, and question marks for the question
        if (question.match(/^[A-Za-z'0-9 ]+[?]/)) {
          fetch(uri) //Api call if the question meets parameters
          .then(response => response.json())
          .then(json => {
            setApiAnswer(JSON.stringify(json.magic.answer));  //Set state for Api answer from question entered and stringify
            localStorage.setItem(question, json.magic.answer); // Setting key and value
          })
          // Catch for errors
          .catch((error) => {
            console.log(error);
            window.alert("8Ball didn't like that, try once more.")
          })
        } else {
          // If question doesn't meet parameters - display alert.
          window.alert("That wasn't a question.")
        } 
      };


    return(
      <Container>
        <div className="d-flex justify-content-center pb-3 pt-2">
          
          <h1 className="fw-bolder magicTitle">Magic 8Ball</h1>
        </div>

          
        <div className="d-flex justify-content-center">
          <img src={eightBall} aria-label="Magic 8-Ball" className="eightBall" style={{ width: '15em', paddingBottom: '10px' }} />
        </div>

        {/* Answer reponse displays here */}
        <div className="d-flex justify-content-center pb-2 h2">{apiAnswer}</div>
        

        <Stack gap={3} className="col-md-5 mx-auto">

          <Form.Control placeholder="Have a question?"
           value={question} onChange={(e) => setQuestion(e.target.value)}></Form.Control>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="button" className="submitButton" onClick={apiFunction} style={{
              backgroundColor: `${twistedBlue}`,
              fontFamily: `${twistedJosefin}`,
              width: '15em',
              fontSize: '20px'

            }}>
              Submit</Button>
          </div>

          <div className="d-flex justify-content-center">
            <Button variant="outline-secondary" className="historyButton" style={{
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
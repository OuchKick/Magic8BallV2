import React from 'react';
import Table  from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { twistedJosefin } from '../../utilities/CSSUtilities/CSSUtil';


function History() {
    
    return(
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '1em'
            }}>
                <h1 className="fw-bolder" style={{ fontSize: '60px', fontFamily: `${twistedJosefin}` }}>History</h1>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><Button variant="danger">Delete</Button></td>
                    </tr>
                    <tr>

                    </tr>
                    <tr>

                    </tr>
                </tbody>
            </Table>
        </>

    )
}

export default History;
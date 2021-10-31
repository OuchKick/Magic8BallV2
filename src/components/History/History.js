import React, { useState, useEffect } from 'react';
import Table  from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { twistedJosefin } from '../../utilities/CSSUtilities/CSSUtil';
import trashCan from '../../utilities/images/trashCan.png'


function History() {

    // State to store if an entry in localstorage has been removed or not
    const [remove, setRemove] = useState(false);


    // Object.entires will iterate through all key,value pairs from localstorage and map into the table
    const dynamicTable = (Object.entries({...localStorage})).map((response, index) => {
        return (
            <tr key={index}>
            <td>{response[0]}</td>
            <td>{response[1]}</td>
            <td>
                <div className="d-flex justify-content-center">
                <Button  type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(response[0])}>
                <img src={trashCan} aria-label="Delete Icon - Trash Can" style={{filter: 'invert(100%)'}}/>
                </Button>
                </div>
                </td>
            </tr>
        )
    });

    // useEffect for updating table - executed once Remove boolean turns true
    useEffect((dynamicTable) => {
        return {dynamicTable}
    }, [remove])
    
    // Function for removing item from localstorage 
    // State is set to false, if remove is executed it changes state to True
    // Removing entry from localstorage and table
    const handleDelete = (del) => {
        localStorage.removeItem(del);
        (remove) ? setRemove(false) : setRemove(true);
    };
    
    
    return(
        <>
            <div className="d-flex justify-content-center pt-3">
                <h1 className="fw-bolder" style={{ fontSize: '60px', fontFamily: `${twistedJosefin}` }}>History</h1>
            </div>
            <div className="d-flex justify-content-center" style={{fontFamily: `${twistedJosefin}`}}>
            <Table striped bordered hover className="w-50" style={{backgroundColor: '#fff'}}>
                <thead>
                    <tr>
                        <th>Question</th>
                        <th>Answer</th>
                        <th className="d-flex justify-content-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {(localStorage.length === 0) ?
                        <tr>
                        <td>Ask 8 Ball a question.</td>
                        <td>8 Ball has no answers right now.</td>
                        <td className="d-flex justify-content-center">Nothing to delete.</td>
                        </tr> :
                        dynamicTable
                    }
                </tbody>
            </Table>
            </div>
        </>
    )
}

export default History;
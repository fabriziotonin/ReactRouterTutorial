import React, { Fragment} from 'react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

export default function User() {
    
    const { id } = useParams();
    const history = useHistory();

    let usuario = id ? id : 'Sin usuario';
    
    return (
    <Fragment>
        <h2>Usuario: {usuario}</h2>
        <div>
            <button onClick={() => history.goBack()}>Back</button>
            <button onClick={() => history.push("/")}>Home</button>
        </div>
    </Fragment>

    )
}
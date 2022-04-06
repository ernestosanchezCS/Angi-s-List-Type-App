import React from 'react';
import styled from 'styled-components';

export default function WorkerCard(props) {
    return (
        <CardContainer>
            <div>
                <h3>Job Completed:</h3>
                <p>Work Type: {props.workType}</p>
                <p>Work Description: {props.workDescription}</p>
            </div>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    flex: 1 1 5em;
    display: flex;
    margin: 1em;
    padding: 1em;
    flex-direction: row;
    background-color: #7298e1;
    align-items: center;
    justify-text: center;
    border-radius: 5px;
    box-shadow: 0 3px 3px 3px slategrey;
    color: white;
    font-size: 1.25rem;
`;

import React, { useState } from 'react';

function Logs({ student, personId }) {
    const [coreSubjects, setCoreSubjects] = useState("");
    const [electives, setElectives] = useState("");
    const [consentForms, setConsentForms] = useState(null);
    const [curricular, setCurricular] = useState("");
    const [behavior, setBehavior] = useState("");
    const [projects, setProjects] = useState("");

    const handleCoreSubjects = (e) => {
        setCoreSubjects(e.target.value);
    }

    const handleElectives = (e) => {
        setElectives(e.target.value);
    }

    const handleConsentForms = (e) => {
        setConsentForms(e.target.value);
    }

    const handleCurricular = (e) => {
        setCurricular(e.target.value);
    }

    const handleBehavior = (e) => {
        setBehavior(e.target.value);
    }

    const handleProjects = (e) => {
        setProjects(e.target.value);
    }

    const labels = [
        { name: 'Core Subjects', value: coreSubjects, onChange: handleCoreSubjects },
        { name: 'Electives', value: electives, onChange: handleElectives },
        { name: 'Consent Forms', value: consentForms, onChange: handleConsentForms },
        { name: 'Curricular', value: curricular, onChange: handleCurricular },
        { name: 'Behavior', value: behavior, onClick: () => console.log(personId) },
        { name: 'Projects', value: projects, onChange: handleProjects }
    ];

    return (
        <div>
            <h1>Logs</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {labels.map((label, index) => (
                    <div key={index} style={{ width: 'calc(33% - 20px)', padding: '10px', margin: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
                        <label style={{ fontWeight: 'bold' }}>{label.name}</label>
                        <div onClick={label.onClick} style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '3px', marginTop: '5px', cursor: 'pointer' }}>
                            {label.value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Logs;

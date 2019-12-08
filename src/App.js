import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
    const [techList, setTechList] = useState([]);
    const [newTech, setNewTech] = useState('');

    const handleAdd = useCallback(() => {
        setTechList([...techList, newTech]);
        setNewTech('');
    }, [newTech, techList]);

    useEffect(() => {
        const storageTechList = localStorage.getItem('techList');

        if (storageTechList) {
            setTechList(JSON.parse(storageTechList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('techList', JSON.stringify(techList));
    }, [techList]);

    const techSize = useMemo(() => techList.length, [techList]);

    return (
        <>
            <ul>
                {techList.map(tech => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            <strong>Você tem {techSize} tecnologias</strong>
            <br />
            <input
                type="text"
                value={newTech}
                onChange={e => setNewTech(e.target.value)}
            />
            <button type="submit" onClick={handleAdd}>
                Adicionar
            </button>
        </>
    );
}

export default App;

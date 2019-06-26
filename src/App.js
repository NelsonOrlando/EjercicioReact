import React from 'react';
import Cards from './Cards';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './style.css';

function App() {
    return (
    <div>
        <header className="header">
            <Container>
                <h1>Ejercicio con React Consumiendo API de JSON</h1>
            </Container>
        </header>
        <body>
            <div className="bg-color">
                <Container>
                    <Row>
                        <Cards />
                    </Row>
                </Container>
            </div>
        </body>
        <footer className="footer">
            <Container>
                <h1>Hecho por NELSON, by Colab</h1>
            </Container>
        </footer>
    </div>
    );
}

export default App;
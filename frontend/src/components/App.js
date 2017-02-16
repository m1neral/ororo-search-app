import React from 'react';
import { Container, Jumbotron, Row, Col, Badge } from 'reactstrap';
import InfoBadge from './InfoBadge';
import ShowList from './ShowList';

const App = () => (
    <Container>
        <Jumbotron>
            <Row>
                <Col xs='12' md={{ size: 8, offset: 2 }}>
                    <InfoBadge />
                    <ShowList />
                </Col>
            </Row>
        </Jumbotron>
    </Container>
);

export default App;

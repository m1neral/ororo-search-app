import '../styles/main.css';

import React from 'react';
import { Container, Jumbotron, Row, Col, Badge } from 'reactstrap';
import InfoBadge from './InfoBadge';
import SearchInput from './SearchInput';
import Filters from './Filters';
import ShowList from './ShowList';

const App = () => (
    <Container>
        <Jumbotron>
            <Row>
                <Col xs='12' md={{ size: 8, offset: 2 }}>
                    <InfoBadge />
                    <hr />
                    <SearchInput />
                    <hr />
                    <Filters />
                    <ShowList />
                </Col>
            </Row>
        </Jumbotron>
    </Container>
);

export default App;

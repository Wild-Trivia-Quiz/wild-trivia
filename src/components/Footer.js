import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../img/logo-white.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div>
              <Link to='/'>
                <img src={logo} alt='logo' className='logo' />
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8}>
            <ul>
              <li>
                <p>
                  A ReactJS project made with <span className='ic-heart' /> by{' '}
                  <a
                    href='https://github.com/amduraes'
                    target='_blank'
                    rel='noopener noreferrer'>
                    André Pereira
                  </a>{' '}
                  and{' '}
                  <a
                    href='https://github.com/filipamarta'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Filipa Marta
                  </a>
                  , directly from our quarantined <span className='ic-home' />
                </p>
              </li>
              <li>
                <p>
                  For more information check directly the GitHub page of our
                  project{' '}
                  <a
                    href='https://github.com/Wild-Trivia'
                    target='_blank'
                    rel='noopener noreferrer'>
                    here
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Coding at{' '}
                  <a
                    href='https://www.wildcodeschool.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Wild Code School
                  </a>
                  , May 2020, Lisbon.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

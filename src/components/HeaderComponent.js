import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Header(props){
  const socialButtons = (
    <div>
      <Button href='https://github.com/jaredpolw'>
        <FontAwesomeIcon icon={faGithub}/>
      </Button>
      <Button href='https://www.linkedin.com/in/jared-polwort-b74517183/'>
        <FontAwesomeIcon icon={faLinkedin}/>
      </Button>
      <Button href='#'>
        <FontAwesomeIcon icon={faEnvelope}/>
      </Button>
    </div>
  );
  return(
      <Jumbotron fluid>
        <Container>
          <div className='row row-content'>
            <div className='col-6'>
              <h1>Jared Polwort</h1>
            </div>
            <div className='col-6'>
              Contact Info: {socialButtons}
            </div>
          </div>
        </Container>
      </Jumbotron>
  );
}

export default Header;

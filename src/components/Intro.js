import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className='intro' id='intro'>
      <Container className="text-white d-flex justify-content-center align-items-center ">
        <Row>
          <Col>
            <div className='title text-center'>
              NONTON GRATIS
            </div>
            <div className='title text-center'>
              GAK PAKE KARCIS
            </div>
            <div className='introButton mt-4 text-center'>
                <Button href="#trending" variant="dark">
                  Lihat Semua List
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
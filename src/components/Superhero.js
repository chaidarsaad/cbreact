import { Card, Container, Row, Col, Image } from "react-bootstrap";

const Superhero = () => {
    return (
        <div id="superhero">
            <Container>
                <br/>
                <br/>
                <h1 className="p-3 mb-2 text-light maintitle">SUPERHERO MOVIES</h1>
                <Row>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image 
                                src="https://i.postimg.cc/Qd77VnPv/iron-man.jpg"
                                alt="Iron Man 3"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Iron Man 3
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image
                                src="https://i.postimg.cc/L8vJqKDC/thor.jpg"
                                alt="Thor Love and Thunder"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Thor Love and Thunder
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 12 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image
                                src="https://i.postimg.cc/MZyKMJK7/captain-america.jpg"
                                alt="Captain America"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Captain America
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 30 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image
                                src="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg"
                                alt="Captain Marvel"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Captain Marvel
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 39 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image
                                src="https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg"
                                alt="Aquaman"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Aquaman
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 20 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image
                                src="https://pbs.twimg.com/media/DNFEYr0XkAUFzGd?format=jpg&name=medium"
                                alt="Justice League"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Justice League
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 43 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero
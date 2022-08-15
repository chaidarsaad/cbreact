import { Card, Container, Row, Col, Image } from "react-bootstrap";

const Trending = () => {
    return (
        <div id="trending">
            <Container>
                <br />
                <br/>
                <h1 className="p-3 mb-2 text-light maintitle">TRENDING MOVIES</h1>
                <Row>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image 
                                src="https://i.postimg.cc/PqSp5wKC/dune.jpg"
                                alt="Dune Movie"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Dune
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 3 hours ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image
                                src="https://i.postimg.cc/vBf0XkFF/avengers.jpg"
                                alt="The Avengers End Game"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        The Avengers End Game
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
                                src="https://i.postimg.cc/cHRV6rJn/pengabdi-setan.jpg"
                                alt="Pengabdi Setan 2"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Pengabdi Setan 2
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 6 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image
                                src="https://i.postimg.cc/PxD8DkGZ/kkn.jpg"
                                alt="KKN di Desa Penari"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        KKN di Desa Penari
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 1 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image
                                src="https://i.postimg.cc/J0BKtFxd/top-gun.jpg"
                                alt="Top Gun Maverick"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Top Gun Maverick
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 8 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='mvWrp'>
                        <Card className="mvImg">
                            <Image
                                src="https://i.postimg.cc/BbXZFTPz/kuntilanak-3.jpg"
                                alt="Kuntilanak 3"
                                className="images"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">
                                        Kuntilanak 3
                                    </Card.Title>
                                    <Card.Text className="txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                                    <Card.Text className="txt">
                                        Last updated 1 hour ago
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

export default Trending
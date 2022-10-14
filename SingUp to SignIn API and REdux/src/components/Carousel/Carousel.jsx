import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ width: '100px', height: '400px' }}
                    src="https://img.freepik.com/premium-photo/mockup-laptop-computer-with-empty-screen-with-coffee-cup-table-coffee-shop_29332-1730.jpg?w=2000"
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ width: '100px', height: '400px' }}
                    src="https://st.depositphotos.com/1968353/2558/i/600/depositphotos_25587751-stock-photo-laptops.jpg"
                    alt="Second slide"
                />

                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ width: '100px', height: '400px' }}
                    src="https://media.istockphoto.com/photos/computer-room-picture-id172342259?b=1&k=20&m=172342259&s=170667a&w=0&h=H5J408_ONw_IZh9Mum4ZNdvot0fN8OImiD4C21Yj62U="
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;
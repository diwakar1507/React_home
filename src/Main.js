import React from 'react'
import { Card, Button } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Mi10 from './images/Mi10.png'
import OnePlus10pro from './images/OnePlus10Pro.jpg'
import oneplus from './images/oneplus.jpg'
import Realme8pro from './images/Realme8pro.png'
import Realmegt from './images/Realmegt.png'
import Xiaomi11 from './images/Xiaomi11.webp'
class Main extends React.Component {
    render() {

        return (
            <div className="bg-slate-50">
                <div className="sm:grid lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 content-center lg:mx-48 xl:mx-48 mx-12 sm:content-center sm:mx-16 py-10 justify between">

                    <Card className="mb-8 " style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Mi10} />
                        <Card.Body>
                            <Card.Title>Mi 10</Card.Title>
                            <Card.Text>
                                Mi 10 (Coral Green, 8GB RAM, 256GB Storage) - 108MP Quad Camera, SD 865 Processor, 5G Ready
                            </Card.Text>
                            <Button variant="primary">Buy now (₹55,999)</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mb-8" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={oneplus} />
                        <Card.Body>
                            <Card.Title>OnePlus 9 Pro</Card.Title>
                            <Card.Text>
                                OnePlus 9 Pro 5G (Stellar Black, 8GB RAM, 128GB Storage)50 MP Ultra Wide Angle Camera with Sensor size of 1/1.56'',16 MP Front Camera
                            </Card.Text>
                            <Button variant="primary">Buy now (₹65,999)</Button>
                        </Card.Body>
                    </Card>
                    <Card className="mb-8" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Realme8pro} />
                        <Card.Body>
                            <Card.Title>Realme 8 pro</Card.Title>
                            <Card.Text>
                                8 GB RAM|128 GB ROM|16.26cm(6.4 inch) Full HD+ Display 4500 mAh Battery
                                Qualcomm Snapdragon 720G Processor
                                Super AMOLED Display
                            </Card.Text>
                            <Button variant="primary">Buy now (₹19,999)</Button>
                        </Card.Body>
                    </Card>

                    <Card className="mb-8" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Xiaomi11} />
                        <Card.Body>
                            <Card.Title>Mi 11 Ultra </Card.Title>
                            <Card.Text>
                                Mi 11 Ultra 5G (Ceramic Black, 12GB RAM, 256GB Storage) | Snapdragon 888
                            </Card.Text>
                            <Button variant="primary">Buy now (₹43,999)</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className="h-72" variant="top" src={Realmegt} />
                        <Card.Body>
                            <Card.Title>Realme GT</Card.Title>
                            <Card.Text>
                                8 GB RAM|128 GB ROM|64MP+8MP+2MP|16MP Front Camera|Snapdragon 888 Processor
                            </Card.Text>
                            <Button variant="primary">Buy now (₹41,999)</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={OnePlus10pro} />
                        <Card.Body>
                            <Card.Title>OnePlus 10 pro </Card.Title>
                            <Card.Text>
                                To be launched
                            </Card.Text>
                            <Button variant="primary">Buy now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div >
        );
    }
}

export default Main;
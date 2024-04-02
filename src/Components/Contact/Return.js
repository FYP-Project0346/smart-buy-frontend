import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../CSS/Style.css' // Import custom CSS for styling
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

function App() {
  return (
    <div className='container' style={{ width: '100%', 'margin-top': '60px' }}>
      <div className='row'>
        <div className='col'>
          <div className='text-center'>
            <p>Have any queries?</p>
            <h1>We're here to help.</h1>
          </div>
        </div>
      </div>
      <div className='row' style={{ width: '100%', 'margin-top': '40px' }}>
        <div className='col'>
          <div className='row'>
            <div className='col'>
              <Card className='custom-card'>
                <CardBody>
                  <CardTitle>
                    <h2 className='text-center'>Sales</h2>
                  </CardTitle>
                  <CardText className='text-center'>
                    Vestibulum ante ipsum primis in faucibus orci luctus.
                  </CardText>
                  <CardText className='text-center custom-blue'>
                    1800 123 4567
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className='col'>
              <Card className='custom-card'>
                <CardBody>
                  <CardTitle>
                    <h2 className='text-center'>Complaints</h2>
                  </CardTitle>
                  <CardText className='text-center'>
                    Vestibulum ante ipsum primis in faucibus orci luctus.
                  </CardText>
                  <CardText className='text-center custom-blue'>
                    1900 223 8899
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className='col'>
              <Card className='custom-card'>
                <CardBody>
                  <CardTitle>
                    <h2 className='text-center'>Returns</h2>
                  </CardTitle>
                  <CardText className='text-center'>
                    Vestibulum ante ipsum primis in faucibus orci luctus.
                  </CardText>
                  <CardText className='text-center custom-blue'>
                    returns@mail.com
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className='col'>
              <Card className='custom-card'>
                <CardBody>
                  <CardTitle>
                    <h2 className='text-center'>Marketing</h2>
                  </CardTitle>
                  <CardText className='text-center'>
                    Vestibulum ante ipsum primis in faucibus orci luctus.
                  </CardText>
                  <CardText className='text-center custom-blue'>
                    1700 444 5578
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart, faBell } from '@fortawesome/free-solid-svg-icons'
import service from '../services/services.js'
import {
  subscribe,
  verifySubscription,
  unsubscribe,
} from '../services/price_tracker_service.js'
import { useContext } from 'react'
import userContext from '../Context/Create-Context'
import { useNavigate } from 'react-router-dom'
import { autologin } from '../services/auth'

function Details() {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [isFavouriteClicked, setIsFavouriteClicked] = useState(false)
  const [isSubscribeClicked, setIsSubscribeClicked] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const { id } = useParams()
  const user = useContext(userContext)

  const fetchData = async () => {
    try {
      const data = await service.getProductById(id)
      setData(data)
      handleSubscription()
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  async function handleSubscription() {
    handleAutoLogin().then(async (data) => {
      try {
        const subscribed = await verifySubscription(data.id, id)
        setSubscribed(subscribed)
      } catch (e) {
        setSubscribed(false)
        console.error('Error in verifying subscription')
      }
    })
  }

  async function handleAutoLogin() {
    if (user.state.type !== 'guest') {
      return user.state
    }

    const data = await autologin()
    if (data) {
      user.update(data)
      return data
    }
  }

  const handleSubscribeButtonActionHandler = async () => {
    const userId = user.state.id

    if (userId == undefined || userId == '') {
      navigate('/login')
      return
    }

    if (subscribed) {
      const code = await unsubscribe(userId, id)
      if (code == 200) {
        alert(
          "You have been unsubscribed\nNow you'll not get notified whenever a deal is available on that product."
        )
      } else {
        alert(
          "Couldn't unsubscribe you for some unexpected reason. Try again,\nif the problem persists then contact the developer through the Contact Us page."
        )
      }
    } else {
      const code = await subscribe(userId, id)
      if (code == 200) {
        alert(
          "You have been subscribed\nNow you'll get notified whenever a deal is available on that product."
        )
      } else {
        alert(
          "Couldn't subscribe you for some unexpected reason. Try again,\nif the problem persists then contact the developer through the Contact Us page."
        )
      }
    }

    handleSubscription()
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderStars = (rating) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} color='gold' />)
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} color='gray' />)
      }
    }
    return stars
  }

  if (!data) {
    return null
  }

  function Description(text) {
    console.log(text)
    const formattedText = text.split('////n////').map((item, index) => {
      console.log(`item ----> ${item}`)
      return (
        <React.Fragment key={index}>
          {item}
          <br />
        </React.Fragment>
      )
    })

    return <div>{formattedText}</div>
  }

  return (
    <div className='container-fluid py-5' style={{ marginTop: '50px' }}>
      <div className='row px-xl-5'>
        <div className='col-lg-5 pb-5'>
          <div
            id='product-carousel'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner border' style={{
              boxShadow: "0px 0px 30px gray"
            }}>
              <img
                className='product-image'
                src={data.images[0]}
                onError={(e) => {
                  console.log('Error loading image:', e)
                }}
                alt='Product'
              />
            </div>
          </div>
        </div>

        <div className='col-lg-7 pb-5'>
          <h3 className='font-weight-semi-bold'>{data.title}</h3>
          <div className='d-flex mb-3'>
            <small className='pt-1'>({data.reviews.length} Reviews)</small>
          </div>
          <h3 className='font-weight-semi-bold mb-4'>Rs: {data.price}</h3>
          <p className='mb-4'>{data.stock ? 'In Stock' : 'Not in Stock'}</p>

          <h3 className='font-weight-semi-bold mb-2'>Site: {data.site}</h3>
          <h3 className='font-weight-semi-bold mb-4'>
            Category: {data.category}
          </h3>
          {data.ratings !== 'null' && (
            <h3 className='font-weight mb-2 rating-starts'>
              {renderStars(data.ratings)}
            </h3>
          )}
          <div className='d-flex align-items-center justify-content-between mb-4 pt-2'>
            <div className='ml-3'>
              <FontAwesomeIcon
                icon={faHeart}
                color={isFavouriteClicked ? 'black' : 'white'}
                size='2x'
                onClick={() => {
                  setIsFavouriteClicked(!isFavouriteClicked)
                }}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className='mr-3'>
              <FontAwesomeIcon
                icon={faBell}
                color={isSubscribeClicked ? 'black' : 'white'}
                size='2x'
                onClick={() => {
                  setIsSubscribeClicked(!isSubscribeClicked)
                }}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          <div className='d-flex align-items-center mb-4 pt-2'>
            <div className='ml-3 d-flex'>
              <button
                className='btn btn-primary px-3 mr-4'
                style={{
                  backgroundColor: subscribed ? 'blue' : 'rgb(0, 65, 90)',
                  color: 'white',
                  padding: '10px 15px',
                  marginRight: '1rem',
                }}
                onClick={handleSubscribeButtonActionHandler}
              >
                {subscribed ? 'Unsubscribe' : 'Subscribe'}
              </button>
              <button
                className='btn btn-primary px-3 ml-4'
                style={{
                  backgroundColor: 'rgb(0, 65, 90)',
                  color: 'white',
                  padding: '10px 15px',
                }}
                onClick={() => {
                  window.open(data.product_url, '_blank')
                }}
              >
                Visit Store
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row px-xl-5 ml-2'>
        <h4 className='mb-3'>Product Description</h4>
        <p
          style={{
            color: '#082137',
          }}
        >
          {Description(data.desc)}
        </p>
      </div>

      {/* New div example */}
      <div className='row px-xl-5 ml-2'>
        <h4>Additional Information</h4>
        <p>This is some additional information about the product.</p>
      </div>
    </div>
  )
}

export default Details

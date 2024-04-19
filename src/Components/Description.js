import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart, faBell } from '@fortawesome/free-solid-svg-icons'
import service from "../services/services.js"
import { subscribe } from '../services/price_tracker_service.js'
import { useContext } from 'react'
import userContext from "../Context/Create-Context.js"
import { useNavigate } from 'react-router-dom'



function Details() {
  const navigate = useNavigate();
  const [data, setData] = useState(null)
  const [isFavouriteClicked, setIsFavouriteClicked] = useState(false)
  const [isSubscribeClicked, setIsSubscribeClicked] = useState(false)
  const { id } = useParams()
  const user = useContext(userContext)
  

  const fetchData = async () => {
    try {
      const data = await service.getProductById(id)
      setData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSubscribeButtonActionHandler = async ()=>{
    const userId = user.id
    // if (userId == undefined){
    //   navigate("/login")
    //   return;
    // }
    // if (userId == ""){
    //   navigate("/login")
    //   return ;
    // }

    console.log(userId)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => {
  //   if (data) {
  //     console.log('Data:', data)
  //     console.log('Image URL:', data.images[0])
  //   }
  // }, [data])

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

  return (
    <div className='container-fluid py-5'>
      <div className='row px-xl-5'>
        <div className='col-lg-5 pb-5'>
          <div
            id='product-carousel'
            className='carousel slide'
            data-ride='carousel'
          >
            <div className='carousel-inner border'>
              <img
                className='product-image'
                src={data.images[0]}
                onError={(e) => {
                  console.log("error occured")
                  console.log('There is Error loading image:', e.nativeEvent);
                }}
                alt='Product'
                onClick={() => {
                  console.log('Click happened')
                }}
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
          {data.rating !== 'null' && (
            <h3 className='font-weight mb-2 rating-starts'>
              {renderStars(data.rating)}
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
                  console.log('Favourite clicked')
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
                  console.log('Subscribe clicked')
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
                  backgroundColor: 'rgb(0, 65, 90)',
                  color: 'white',
                  padding: '10px 15px',
                }}
                onClick={handleSubscribeButtonActionHandler}
              >
                Subscribe
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
          {data.desc}
        </p>
      </div>
    </div>
  )
}

export default Details

import Product from './Product'
import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="images/amazon.jpg" alt="" />
        <div className="home__row">
          <Product
            id="232542423"
            title="lean start"
            price={29.99}
            image="images/logo192.png"
            rating={3}
          />
          <Product
            id="242142142"
            title="lean start"
            price={29.99}
            image="images/logo192.png"
            rating={4}
          />
          {/* 2 Products */}
        </div>

        <div className="home__row">
          <Product
            id="24232142142"
            title="lean start"
            price={29.99}
            image="images/logo192.png"
            rating={4}
          />
          <Product
            id="242143542142"
            title="lean start"
            price={29.99}
            image="images/logo192.png"
            rating={4}
          />
          <Product
            id="242146542142"
            title="lean start"
            price={29.99}
            image="images/logo192.png"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="242144212142"
            title="lean start"
            price={29.99}
            image="images/logo192.png"
            rating={4}
          />
        </div>
      </div>
      {/* modify this to have a different number of rows */}
    </div>
  );
}

export default Home
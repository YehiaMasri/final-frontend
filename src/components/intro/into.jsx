import React from "react";
import "./intro.css";
import coffeeImage from "../../asset/images/small-coffee-shop-business-ideas-683x1024.png";

const IntroSection = () => {
	return (
		<section className="abou__section" id="about">
			<div className="about__grid container grid">
				<div className="about__img-wrapper">
					<img
						src={coffeeImage}
						alt="Coffee"
						className="about__img"
					/>
				</div>
				<div className="abou__content">
					{/* <h1 className="section__title">About Us</h1> */}
					<h3 className="section__title" data-title="About Us">
						Fresh Quality And Organic Tasty Coffee House For You
					</h3>

					<p className="about__description">
						where we strive to provide you with an exceptional
						coffee experience. As passionate coffee enthusiasts, we
						believe that great coffee starts with the finest,
						freshest ingredients. That's why we source only the
						highest quality, organic coffee beans from around the
						world, ensuring a rich and flavorful brew in every cup.
						Our dedicated team of skilled baristas combines their
						expertise with state-of-the-art brewing techniques to
						create the perfect balance of aroma, taste, and texture
					</p>

					<a href="/menu" className="btn about__btn">
						Our Menu
					</a>
				</div>
			</div>
		</section>
	);
};

export default IntroSection;
// <section className="intro-section">
/* <h1>Our Value</h1>
  <div className="intro-image">
    <img src={coffeeImage} alt="Coffee" />
  </div>
  <div className="intro-content">
    <h1>Welcome to our Coffee World</h1>
    <p>
      Indulge in the rich aroma and exquisite flavors of our carefully
      selected coffee beans. Experience the perfect blend that will awaken
      your senses and elevate your coffee journey.
    </p>
    <button className="cta-button">Explore Our Menu</button>
  </div> */

import { Component, Host, h, Prop, ComponentInterface, State } from '@stencil/core';
import Logo from '../../assets/Logo.svg';
import { RandomPlace } from '../../global/models/randomPlace.model';
import {navBarPropsData} from './../../global/data/nav-bar-props.data'

@Component({
  tag: 'front-page',
  styleUrl: 'front-page.scss',
  shadow: true,
})
export class FrontPage implements ComponentInterface{

  @Prop() randomPlace: RandomPlace;
  @State() isShowingMore: boolean;

  showMoreCategories(){
    this.isShowingMore = !this.isShowingMore;
  }

  render() {
    return (
      <Host>
        {/* <div class="home-page-hero-container" style={{background: `url(${this.randomPlace.imageURL})`}}> */}
        <div class="home-page-hero-container">

            {/* Nav Bar Component */}
            <div>
              <nav-bar props={navBarPropsData}></nav-bar>
            </div>

            {/* Logo  and Search Bar*/}
            <div class="home-page-inner-container">
            
              <img src={Logo} alt="" />
              <search-component></search-component>
            
              <ul>
                <li>Restaurants</li>
                <li>Nightlife</li>
                <li>Local Services</li>
                <li>Delivery</li>
                <li>Black Owned</li>
              </ul>
            </div>
            

            <div class="random-place-info">
              <div>
                <a>{this.randomPlace.title}</a>
              </div>
              <div>
                Photo by <a>{this.randomPlace.photoBy}</a>
              </div>
              
            </div>

        </div> 

        {/* Recent Activity Cards */}
        <div>
          <recent-activity></recent-activity>
        </div>

        {/* Browse Businesses by Category */}
        <div class="business-category-wrapper">
          <h2>Browse Businesses by Category</h2>
          <div class="business-category-container">
            
              <div class="widget">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_restaurants@2x.yji-7cef764a214416ca9991e53ceb108b5c.png" alt="RestaurantsIcon" />
                Restaurants
              </div>
              <div class="widget">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_shopping@2x.yji-559f23226d9f9f651812ddc5d6e3d1b2.png" alt="Shopping" />  
                Shopping
              </div>
              <div class="widget">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_nightlife@2x.yji-925cd32ac4c934d465c664f140c5b629.png" alt="Nightlife" />  
                Nightlife
              </div>
              <div class="widget">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_active_life@2x.yji-2df9fcd6a68eb739e68a026778dd7a3f.png" alt="Active Life" />
                Active Life
              </div>
              <div class="widget">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_beauty@2x.yji-3cfb4e602ac139443228f090ec71b84f.png" alt="Beauty and Spas" />
                Beauty and Spas
              </div>
              <div class="widget">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_automotive@2x.yji-c73bd70791375ec60256243055745f63.png" alt="Automotive" />
                Automotive
              </div>
              <div class="widget">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_home_services@2x.yji-20723ad0e5ee302de563935be68c6638.png" alt="Home Services" />
                Home Services
              </div>
              <div onClick={()=> this.showMoreCategories()} class="widget">
              <img src="https://s3-media0.fl.yelpcdn.com/assets/public/72x72_more_categories@2x.yji-e7be9a50bf8cf4a2eea9f7d7e2b5f194.png" alt="More Categories" />
                {this.isShowingMore ? "Fewer" : "More"} Categories
              </div>

          </div>

          {/* More Categories */}
          {this.isShowingMore ? 
          <div class="more-categories">
            <div>
              Coffee and Tea
            </div>
            <div>

            </div>
          </div>
          : ''}


        </div>

        <h2>Yelp Mobile Apps</h2>
        <div class="category-container">
            <div class="app-widget">
            Iphone, iPad and Watch
            <img src="https://s3-media0.fl.yelpcdn.com/assets/public/pitch_ios@2x.yji-56ec6655a7ac925b080fa9833895e2a2.png" alt="ios img" />
            </div>
            <div class="app-widget">
            Android
            <img src="https://s3-media0.fl.yelpcdn.com/assets/public/pitch_android@2x.yji-c0e32a3afc513227116910caefb3a994.png" alt="android img" />
            </div>
        </div>

        {/* Footer */}
        <div class="footer">
        Copyright © 2004–2022 Yelp
        </div>
      </Host>
    );
  }

}

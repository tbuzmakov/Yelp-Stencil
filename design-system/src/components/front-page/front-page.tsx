import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';
import Logo from '../../assets/Logo.svg';
import { RandomPlace } from '../../global/models/randomPlace.model';

@Component({
  tag: 'front-page',
  styleUrl: 'front-page.scss',
  shadow: true,
})
export class FrontPage implements ComponentInterface{

  @Prop() randomPlace: RandomPlace;

  render() {
    return (
      <Host>
        {/* <div class="home-page-hero-container" style={{background: `url(${this.randomPlace.imageURL})`}}> */}
        <div class="home-page-hero-container">

            {/* Nav Bar Component */}
            <div>
              <nav-bar></nav-bar>
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

        <div>
          <recent-activity></recent-activity>
        </div>

      </Host>
    );
  }

}

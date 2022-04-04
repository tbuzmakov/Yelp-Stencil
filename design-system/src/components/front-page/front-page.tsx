import { Component, ComponentInterface, h, Host, Prop, State } from '@stencil/core';

import Logo from '../../assets/Logo.svg';
import {navBarPropsData} from './../../global/data/nav-bar-props.data'

export interface IFrontPageEntry {
  links: Array<{
    title: string, 
    url: string}
  >,
  randomPlace: {
    title: string;
    photoBy: string;
    imageURL: string;
  },
  businessCategory: Array<{
    title: string,
    photo: string,
    url: string,
  }>,
  mobileApps: Array<{
    title: string,
    photo: string,
    url: string,
  }>,
  moreCategories: Array<{
    title: string,
    icon: string,
  }>
}
@Component({
  tag: 'front-page',
  styleUrl: 'front-page.scss',
  shadow: true,
})
export class FrontPage implements ComponentInterface {

  @Prop() frontPageEntry: IFrontPageEntry;
  @State() isShowingMore: boolean;


  logoAndSearchBarRender(){
    return(
        <div class="home-page-inner-container">
            
            <img src={Logo} alt="" />
            <search-component></search-component>

            {this.linksRender()}
            
          </div>
    )
  }
  navBarRender(){
    return(
      <div>
        <nav-bar navbarEntry={navBarPropsData}></nav-bar>
      </div>
    )
  }
  linksRender(){
      return(
        <ul>
            {this.frontPageEntry.links.map((link) => (
              <li>{link.title}</li>
            ))}
        </ul>
      )
  }
  randomPlaceRender(){
    return(
      <div class="random-place-info">
              <div>
                <a>{this.frontPageEntry.randomPlace.title}</a>
              </div>
              <div>
                Photo by <a>{this.frontPageEntry.randomPlace.photoBy}</a>
              </div>
      </div>
    )
  }
  businessCategoriesRender(){
    return(
        <div class="business-category-container">
          <div class="business-category-container">
          {this.frontPageEntry.businessCategory.map((category) =>(
            <div onClick={() => {this.onClickHandler(category.title)}} class="widget">
                <img src={category.photo} alt="" />
                    {category.title}
            </div>
          ))}
          </div>
        </div>
    )
  }
  recentActivityCardsRender(){
    return(
      <div>
          <recent-activity></recent-activity>
      </div>
    )
  }
  mobileAppCategoriesRender(){
    return(
      <div>
        <h2>Yelp Mobile Apps</h2>
        <div class="category-container">
          
            {this.frontPageEntry.mobileApps.map((category) => (
              <div class="app-widget">
                  {category.title}
                  <img src={category.photo} alt="" />
              </div>
            ))}
        </div>
      </div>
    )
  }
  onClickHandler(category: string){
    if(category === 'More Categories') this.isShowingMore = !this.isShowingMore;
  }
  showMoreCategories(){
    
        return(
          <div class="more-categories">
                  {this.frontPageEntry.moreCategories.map((c)=>(
                    <div class="container">
                      {c.title}
                    </div>
                  ))}
          </div>
        )
    }
  footerRender(){
    return(
      <div class="footer">
        Copyright © 2004–2022 Yelp
      </div>
    )
  } 


  render() {
    return (
      <Host>

        <div class="home-page-hero-container">
            {/* Nav Bar Component */}
            {this.navBarRender()}
            {/* Logo  and Search Bar*/}
            {this.logoAndSearchBarRender()}
            {/* Random Place Render */}
            {this.randomPlaceRender()}
        </div> 

        {/* Recent Activity Cards */}
        {this.recentActivityCardsRender()}

        {/* Businesses Categories */}
        <div class="business-category-wrapper">
            <h2>Browse Businesses by Category</h2>

            {this.businessCategoriesRender()}
            {this.isShowingMore? this.showMoreCategories() : ''}
                
        </div>

        {/* Mobile Apps Categories */}
        {this.mobileAppCategoriesRender()}
        
        {/* Footer */}
        {this.footerRender()}
      </Host>
    );
  }

}

import { Component, Host, h, Prop, State } from '@stencil/core';
import { ActivityCardType } from '../../global/models/activity-card.model';
import ThumbUp from '../../assets/icons/thumb-up.svg';
import Award from '../../assets/icons/award.svg';
import Like from '../../assets/icons/like.svg';
import Nice from '../../assets/icons/nice.svg';
import Tired from '../../assets/icons/tired.svg';


@Component({
  tag: 'activity-card',
  styleUrl: 'activity-card.scss',
  shadow: true,
})
export class ActivityCardComponent {
  
  @Prop() post: ActivityCardType;
  @State() likes: number;

  componentWillLoad(){
    this.post.likes ? this.likes = this.post.likes : this.likes = 0;
  }
  
  addLike(){
    this.likes++;
  }

  renderCard(){
    if(this.post.activity === 'addedPhoto'){
      
      // Card with Photo added
      return (
        <div class="card-container">
          
          <div class="title-container">
              <div class="avatar">
                <img src={this.post.user.avatar} alt="Avatar" />
              </div>
              <div class="author">
                <a>{this.post.user.name}</a>
                <span>Added {this.post.photos.length} photos</span>
              </div>
          </div>

          <div class="line"></div>
          
          <a class="place-name">{this.post.placeName}</a>
          
          <div class="photo-container">
            <img src={this.post.photos[0]} alt="Photo" />
            
            <div class="like" onClick={()=> this.addLike()}>
                
                <img src={ThumbUp} alt="Thumb Up" />
                <div>
                  <span>{this.likes != 0 ? this.likes : ''} Like</span>
                </div>
            </div>
          </div>

          <div class="show-all-photos">
            <a>Show all {this.post.photos.length} photos</a>
          </div>

        </div>
      )
    } else {

      // Card with written comment
      return (
        <div class="card-container">
          
          <div class="title-container">
              <div class="avatar">
                <img src={this.post.user.avatar} alt="Avatar" />
              </div>
              <div class="author">
                <a>{this.post.user.name}</a>
                <span>Wrote a review</span>
              </div>
          </div>

          <div class="photo-container">
            <img src={this.post.placePhoto} alt="Photo" />
          </div>

          <a class="place-name">{this.post.placeName}</a>
          <div class="line"></div>

          <div>
            <stars-component rating={this.post.review.rating}></stars-component>
          </div>

          <div class="review">
            <p>{this.post.review.description}</p>
          </div>
          <div class="line"></div>

          <div class="icons-container">
            <div class="icons">
                <img src={Tired} alt="" />
                <img src={Nice} alt="" />
                <img src={Like} alt="" />
            </div>
            <div class="award">
                <img src={Award} alt="" />
            </div>
          </div>

        </div>
      )
    }
  }
  

  render() {
  
    return (
      <Host>
          {this.renderCard()}
      </Host>
    );
  }

}

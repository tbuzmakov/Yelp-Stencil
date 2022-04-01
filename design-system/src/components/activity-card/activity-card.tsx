import { Component, Host, h, Prop } from '@stencil/core';
import { ActivityCardType } from '../../global/models/activity-card.model';
import ThumbUp from '../../assets/icons/thumb-up.svg';

@Component({
  tag: 'activity-card',
  styleUrl: 'activity-card.scss',
  shadow: true,
})
export class ActivityCardComponent {
  
  @Prop() post: ActivityCardType;

  
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
            <div class="like">
                
                <img src={ThumbUp} alt="Thumb Up" />
                <dib>
                  Like
                </dib>
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

          <div>Icons</div>

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

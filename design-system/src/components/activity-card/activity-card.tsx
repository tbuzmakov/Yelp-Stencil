import { Component, Host, h, Prop } from '@stencil/core';
import { ActivityCardType } from '../../global/models/activity-card.model';

@Component({
  tag: 'activity-card',
  styleUrl: 'activity-card.css',
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
            <p>Like</p>
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
          <p>Wrote comment</p>
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

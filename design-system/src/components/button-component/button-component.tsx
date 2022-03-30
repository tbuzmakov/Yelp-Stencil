import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: true,
})
export class ButtonComponent {
  @Prop() title: string;
  @Prop() withBoarder: boolean;

  render() {
    return (
      <Host>

      
      {this.withBoarder ? <button class="btn">{this.title}</button> : <button class="btn-without-border">{this.title}</button>}
        
      </Host>
    );
  }

}

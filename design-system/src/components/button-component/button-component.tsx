import { Component, h, Host, Prop } from '@stencil/core';

export interface IButtonEntry {
  title: string,
  withBorder: boolean
}
@Component({
  tag: 'button-component',
  styleUrl: 'button-component.scss',
  shadow: true,
})
export class ButtonComponent {
  
  @Prop() buttonEntry: IButtonEntry;

  render() {
    return (
      <Host>

        <button class={{'btn': true, 'btn-without-border': !this.buttonEntry.withBorder}}>{this.buttonEntry.title}</button>
        
      </Host>
    );
  }

}

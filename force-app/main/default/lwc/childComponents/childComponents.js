import { LightningElement, api } from 'lwc';
import img from '@salesforce/resourceUrl/SFDC';

export default class ChildComponents extends LightningElement 
{
    @api showImage = false;

    image = img;

   handleClick()
   {
        const event = new CustomEvent('toggleimage');
        this.dispatchEvent(event);
   }

}
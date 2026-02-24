import { LightningElement, api } from 'lwc';
import img from '@salesforce/resourceUrl/SFDC';
export default class ChildComponent extends LightningElement 
{
   @api showImage = false;

    image = img;
}
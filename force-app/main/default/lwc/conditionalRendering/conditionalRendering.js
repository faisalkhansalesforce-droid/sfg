import { LightningElement } from 'lwc';
import img1 from '@salesforce/resourceUrl/FLM1';
import logo from '@salesforce/resourceUrl/FLMLogo';
import salesforcelogo from '@salesforce/resourceUrl/SFDC';

export default class ConditionalRendering extends LightningElement 
{
    isVisible = true;
    FLMImage = img1;
    FLMLogo = logo;
    SFDCLogo =salesforcelogo;
    showImages()
    {
        this.isVisible = true;

    }
    hideImage()
    {
        this.isVisible = false;
    }
    


}
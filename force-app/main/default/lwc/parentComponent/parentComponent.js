import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement 
{
    isVisible = false;

    handleClick()
    {
        this.isVisible = true;
    }
}
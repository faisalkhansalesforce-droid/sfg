import { LightningElement } from 'lwc';

export default class ParentComponents extends LightningElement 
{
    isVisible = false;

    handleToggle()
    {
        this.isVisible=true;
    }
}
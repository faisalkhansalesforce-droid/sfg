import { LightningElement } from 'lwc';

export default class Getterdemo extends LightningElement 
{
    amount = 300000;

    get isPremium()
    {
        return this.amount >= 100000;
    }
}
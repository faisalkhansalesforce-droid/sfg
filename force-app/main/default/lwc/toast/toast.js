import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Toast extends LightningElement {

    showNotification()
    {
        const event = new ShowToastEvent(
            {
                title : "Notification",
                message : "This is a Show Toast Notification",
                variant : "error"

            }
        );
        this.dispatchEvent(event);

    }
}
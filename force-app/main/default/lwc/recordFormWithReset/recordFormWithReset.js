import { LightningElement, api } from 'lwc';

export default class RecordFormWithReset extends LightningElement 
{
    @api recordId;

    handleReset()
    {
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        inputFields.forEach(field => {field.reset();} );
    }
}
import { LightningElement } from 'lwc';
import conData from '@salesforce/apex/accountRelContact.collectingContacts';
const columns = [
    {
        label:'Id', fieldName:'Id',
    
    },
    {
        label:'LastName', fieldName:'LastName'
    },
    {
        label:'Phone', fieldName:'Phone'
    }
]
export default class DataTable extends LightningElement 
{
    accountId;
    contacts;
    col = columns;

    handleChange(event)
    {
        this.accountId = event.target.value;
    }

    fetchContacts()
    {
        conData({accid:this.accountId})
        .then(result => {
            this.contacts = result;})


    }

}
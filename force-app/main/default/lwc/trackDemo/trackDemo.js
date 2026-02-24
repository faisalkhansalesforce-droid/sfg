import { LightningElement, track } from 'lwc';
export default class TrackDemo extends LightningElement 
{
     @track studentDetails = {
        FirstName : 'Jhon',
        LastName : 'Wick'
    }

    updateNames()
    {
        this.studentDetails.FirstName = 'Peter';
        this.studentDetails.LastName = 'Parker';
    }
}
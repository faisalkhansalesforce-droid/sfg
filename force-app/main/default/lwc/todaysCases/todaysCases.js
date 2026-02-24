import { LightningElement, wire } from 'lwc';
import caseList from '@salesforce/apex/todaysCases.getcases';
export default class TodaysCases extends LightningElement 
{
    @wire(caseList)
    cases;
}
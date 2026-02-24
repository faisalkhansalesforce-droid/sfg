import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Navigations extends NavigationMixin (LightningElement) 
{
    navigateToHome()
    {
        this[NavigationMixin.Navigate]
        (
            {
                type: 'standard__namedPage',
                attributes: {
                    pageName : 'home'
                }
            }
        )
    }
    navigateToChatter()
    {
        this[NavigationMixin.Navigate]
        (
            {
                type:'standard__namedPage',
                attributes:
                {
                    pageName : 'chatter'
                }
            }
        );
    }
    navigateToAccountTab()
    {
        this[NavigationMixin.Navigate]
        (
            {
                type:'standard__objectPage',
                attributes:
                {
                    objectApiName : 'Account',
                    actionName:'list'
                }
            }
        );
    }
    navigateToRecordPage()
    {
        this[NavigationMixin.Navigate]
        (
            {
                type:'standard__recordPage',
                attributes:
                {
                    recordId: '001HE00000HUEQRYA5',
                    objectApiName : 'Account',
                    actionName:'view'
                }
            }
        );
        
    }
    NavigateToCreateNewAccount()
    {
        this[NavigationMixin.Navigate]
        (
            {
                type:'standard__objectPage',
                attributes:
                {
                    objectApiName : 'Account',
                    actionName:'new'
                }
            }
        );
    }
    NavigateToSFDC()
    {
        this[NavigationMixin.Navigate]
        (
            {
                type:'standard__webPage',
                attributes:
                {
                    url:'https://www.salesforce.com/in/?ir=1'
                }
            }
        );

    }
}
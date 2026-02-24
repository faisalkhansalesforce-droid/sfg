public with sharing class todaysCases {
    @AuraEnabled(cacheable=true)
    public static list<case> getcases() 
    {
        list<case> getTodaysCases = [select Id, CreatedDate, Priority, Status, Origin from case where createddate = today];
        return getTodaysCases;

    }
}
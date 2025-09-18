---
title: "Database.Stateful Usecases"
date: "2025-09-18"
num: 1
excerpt: "About Database.Stateful Usecases"
---

## Database.Stateful in Apex

Normally, Batch Apex doesn’t keep variable values between `execute` runs, after each excute teh variable will be reset 

If you need to retain the value across executes, use the `Database.Stateful` interface.
 
### Example

```apex
global class MyBatchClass 
    // implement the Stateful
    implements Database.Batchable<SObject>, Database.Stateful {

    // let's say we need to calculate the count of records processes
    global Integer totalProcessed = 0;

    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([SELECT Id FROM Account]);
    }

    global void execute(Database.BatchableContext BC, List<Account> scope) {
        // Add current count to total
        totalProcessed += scope.size();
    }

    global void finish(Database.BatchableContext BC) {
        // Logs total records processed across all batches
        System.debug('Total Processed: ' + totalProcessed);
    }
}

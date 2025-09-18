---
title: "Database.Stateful Usecases"
date: "2025-09-18"
excerpt: "About Database.Stateful Usecases"
---

## Database.Stateful in Apex

Normally, Batch Apex doesn’t keep variable values between `execute` runs — each chunk starts fresh.  
If you need to **retain state across batches**, use the `Database.Stateful` interface.

### Example

```apex
global class MyBatchClass 
    implements Database.Batchable<SObject>, Database.Stateful {

    // Instance variable that keeps value across execute calls
    global Integer totalProcessed = 0;

    global Database.QueryLocator start(Database.BatchableContext BC) {
        // Fetch all accounts
        return Database.getQueryLocator([SELECT Id FROM Account]);
    }

    global void execute(Database.BatchableContext BC, List<Account> scope) {
        // Add current batch size to total
        totalProcessed += scope.size();
    }

    global void finish(Database.BatchableContext BC) {
        // Logs total records processed across all batches
        System.debug('Total Processed: ' + totalProcessed);
    }
}

---
title: "SOQL AggregateResult"
date: "2025-09-19"
num: 3
excerpt: "About SOQL AggregateResult in Apex"
---

## SOQL AggregateResult

When using aggregate functions like `COUNT()`, `SUM()`, `AVG()`, etc. with `GROUP BY`,  
the query does not return a list of sObjects like Account but instead a list of AggregateResult objects.

If you try to assign the result directly to a `List<Account>`, you will get an error:  
`Illegal assignment from List<AggregateResult> to List<Account>`

Thus, you must store the results in a `List<AggregateResult>` and then extract the values using aliases with `.get('aliasName')`.

---

### Example

```apex
public class AccountAggregateResult {
    public static void getAccountSourceCount() {
        // Query with GROUP BY and alias for COUNT(Id)
        List<AggregateResult> accList = [
            SELECT AccountSource, COUNT(Id) SourceCount 
            FROM Account 
            GROUP BY AccountSource
        ];

        // Loop through results
        for (AggregateResult ar : accList) {
            // Retrieve values using .get('fieldOrAliasName')
            System.debug('Source: ' + ar.get('AccountSource'));
            System.debug('Count: ' + ar.get('SourceCount'));
        }
    }
}

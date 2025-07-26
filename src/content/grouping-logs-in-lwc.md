---
title: "Grouping Logs in LWC"
date: "2025-07-26"
---

# Grouping Logs in LWC

If you're working with a JavaScript file that contains a lot of methods and logs, your browser console can quickly get messy.

Luckily, there’s a simple and powerful trick to organize your logs:  
`console.groupCollapsed()` and `console.groupEnd()`.

## How It Works

Use `console.groupCollapsed('Method_Name')` before your logs and `console.groupEnd()` after them. This groups everything between into a collapsible section in your console.

```js
function fetchData() {
  console.groupCollapsed('fetchData');
  
  console.log('Fetching data...');
  console.log('Request sent to /api/data');
  console.log('Response received');
  
  console.groupEnd();
}
```

![Grouped logs example](/images/consolegroupexample.jpeg)






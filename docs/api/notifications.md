# Notification API

## Overview

The notifications API provides the ability to alert users to errors, warnings or general info about what is happening in the app.



## Showing a basic notification

As stated above there are three types of notifications; `error`, `warning` and `info`.

```js
var rInstance = RAMP.createInstance(domElement, configs);
rInstance.notify.show("info", "The map has been created!");
rInstance.notify.show("error", "Could not connect to the server for fixture A, try reloading the page");
rInstance.notify.show("warning", "Slow response times from the server");
```

In real cases errors and warnings would probably not be right after the instance creation and would be in a callback or some error handling code.



## Grouping notifications

The notifications API also allows the creation of groups

```js
let serverErrors = rInstance.notify.addGroup('server-errors', 'error', 'Some servers seem to be having issues');
```

After creating a group you can show messages in them

```js
serverErrors.show('Could not connect to server A');
serverErrors.show('No response from server B in 10 seconds');
```


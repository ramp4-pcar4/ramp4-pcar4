# Notification API

## Overview

The notification API provides the ability to alert users to errors, warnings or general info about what is happening in the app.



## Showing a basic notification

As stated above there are three types of notifications; `error`, `warning` and `info`.

```js
var rInstance = new RAMP.Instance(domElement, configs);
rInstance.notification.showInfo("The map has been created!");
rInstance.notification.showError("Could not connect to the server for fixture A, try reloading the page");
rInstance.notification.showWarning("Slow response times from the server");
```

In real cases errors and warnings would probably not be right after the instance creation and would be in a callback or some error handling code.



## Grouping notifications

The notification API allows the creation of groups

```js
let serverErrors = rInstance.notification.addGroup('server-errors', 'error', 'Some servers seem to be having issues');
```

After creating a group you can show messages in them

```js
serverErrors.show('Could not connect to server A');
serverErrors.show('No response from server B in 10 seconds');
```


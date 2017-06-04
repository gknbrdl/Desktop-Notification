# Desktop-Notification

## How To I Use It?

### First Step

Inject your angular project

```
angular.module('app',['Notification']);
```

### Second Step

Inject your controller

```
angular.module('app').controller('YourController',YourController);

function YourController(DesktopNotification){
    var title   = 'Sample Title',
        content = 'Sample Content',
        url     = 'https://your_click_url',
        image   = 'https://notification_content_image';
        
    DesktopNotification.show(title, content, url, image);
    
}

```

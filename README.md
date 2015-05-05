# jQuery Lock Plugin
With this jQuery plugin you will be able to prevent some users from changing content in your page, using the Chrome Developer Tools for example.

[Demo](http://cnova.github.io/jquery-lock/)
## Basic Usage
```html
<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="//cnova.github.io/jquery-lock/release/jquery.lock.min.js"></script>
<script>
$( document ).ready(function() {
	$("h1").lock();
});
</script>
<h1> I am locked =) </h1>
```

## Options
You can customize the behavior of the plugin using this options:

- `alertMessagee` (String)

Send a custom alert for every change on the locked elements

#### Sample
```javascript
$("h1").lock({
    alertMessage: "You can`t change this."
});
```
- `customHandler(element, updatedHtml, savedHtml)` (Function) 

Change the behavior of the plugin, insted of replacing every change with the `savedHtml`.

#### Sample
```javascript
$("h1").lock({
    customHandler: function(element, updatedHtml, savedHtml) {
        //Block the change	
        $(element).html(savedHtml);
        //Do something else if the updatedHtml
        console.log('Change blocked %s', updatedHtml);
    }
});
```



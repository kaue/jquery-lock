# jQuery Lock Plugin
With this jQuery plugin you will be able to prevent some users from changing content in your page, using the Chrome Developer Tools for example.

[Demo](http://kaue.github.io/jquery-lock/)
## Basic Usage
```html
<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
<script src="//kaue.github.io/jquery-lock/release/jquery.lock.min.js"></script>
<script>
$( document ).ready(function() {
	$("h1,p").lock();
});
</script>
<h1> I am locked =) </h1>
<p> I am locked too! </p>
```

## Options
You can customize the behavior of the plugin using this options:

- `alertMessage` (String)

Send a custom alert for every change on the locked elements

#### Sample
```javascript
$("h1,p").lock({
    alertMessage: "You can`t change this."
});
```
- `customHandler(element, updatedHtml, savedHtml)` (Function) 

Change the behavior of the plugin, insted of replacing every change with the `savedHtml`.

#### Sample
```javascript
$("h1,p").lock({
    customHandler: function(element, updatedHtml, savedHtml) {
        //Block the change	
        $(element).html(savedHtml);
        //Do something else with the updatedHtml
        console.log('Change blocked %s', updatedHtml);
    }
});
```



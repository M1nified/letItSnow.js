# letItSnow.js
letItSnow.js is a jQuery extension that makes your website snowing :)
Go to `example/index.html` for more.

####Required libraries
- jQuery 2.x
- jQuery-ui 1.11+ with `Effects Core` included

####Usage
#####Simple
```
$(function() {
  $('#snowspawner').letItSnow({
    fall_time:5000
  });
})
```
#####With options
```
$('#snowspawner').letItSonw({
  fall_time:5000
});
```
#####About #snowspawner
Flakes append into given element. It's good to choose some `#snowspawner` instead of `body` for easier manipulation and debugging.
```
<body>
  <div id="snowspawner"></div>
  ...
```
#####Default options (those can be set as well)
```
{
  color: '#fff',
  size_min: 1,
  size_max: 5,
  zindex: 99999,
  maxcount: 100,
  wind: 250,
  easing_x: "easeInBack",
  easing_y: "easeInCubic",
  fall_time: 10000
}
```
#####What do they mean?
> - (string) color = color of snow
> - (number) size_min = min size of snowflake
> - (number) size_max = max size of snowflake
> - (number) zindex = z-index
> - (number) maxcount = the maximum ammount of flakes to be generated
> - (number) wind = finall horizontal movement of flake
> - (string) easing_x = animation easing of wind
> - (string) easing_y = animation easing of falling
> - (number) fall_time = time in milliseconds of falling for every flake

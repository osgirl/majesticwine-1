# Majestic Wine - Code Test

Code development by James Brandon for Majestic Wine code test.

- Coded own framework to show better ability

- I have also taken the requested font sizes you required me to use and coded some logic into the template so it calculates and an easily convert px to rem with fallback as well. Its not best to use PX because its not very consistent across different browsers, devices and older devices.

Snippet:
```
html {
    font-size: 62.5%; 
    /* 1rem = 10px on default browser settings (16px) */
}
```
So above we are resetting it for everything to use 1rem, 10px as the base
```
body {
    font-size: 16px;
    /* setting PX unit for browsers that dont support rem below */
    font-size: 1.6rem; 
    /* default to be used, browsers that dont support REM will use PX above */
    line-height: 1.5;
    font-family: sans-serif; /* used current font-family used on live website */
    color: #283533;
}
```
On the body we are resetting the default font size for everything to 16px (this is the fallback) and 1.6rem which converts to 16px

The rem unit is relative to the font-size of the parent, which causes the compounding issue. The rem unit is relative to the root—or the html—element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that.

I am in this case defining a base font-size of 62.5% to have the convenience of sizing rems in a way that is similar to using px.

So in a nut shell we can use across styles like this:

```
8px = 0.8rem;
10px = 1rem;
14px = 1.4rem;
26px = 2.6rem;
```

- Only done in CSS but preference would like to build in SASS / LESS which could also set global variables for gutters, margins, paddings, font sizes etc... which would allow us to use them through the whole framework from one set value.

- I have added a nice UI enhancement, if you click in write a comment and start writing, create a new line etc... it will auto increase the height / expand the textarea and again removing content will decrease as well.

- The input bubble "Write a comment..." you will notice does not have the pointer above... i would have to code differently from how ive done it as uses css3 border width currently.

- Added a quick scrollTo animation when you focus / click into a comment textarea - for demo purposes.

- When you click / focus into a comment textarea i have added a little JS to change the parent containers border colour so its more noticeable that its selected. UPDATE: Added a little CSS3 transition effect so it fades the selected bubble in and out...

- Done most changes for mobile devices

- I would also like to go through and change paddings, margins etc... to use rem with px fallback.

- Have added a simple function just to show / allow increasing of comment count - this is just for a sample on this test and would be done differently when developing correctly using JSON / AJAX calling from a database or something similar.

- Also added and created a new favicon for you, can see in browser window on this code test.

- BTW you have a duplicate Pixel ID: 163713914005344 on the current site - so its being loaded twice somewhere... ive not looked but just flagged in my debugger when went to the homepage :)

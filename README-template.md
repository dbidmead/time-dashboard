# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

## Links

- Solution URL: [https://dbidmead.github.io/time-dashboard](https://dbidmead.github.io/time-dashboard)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS to populate JSON data
- JS to manipulate DOM based on state

## What I learned

### In order to use CSS grid to lay out a wrapping grid that automatically stacks for mobile:

Start with mobile dimensions and add divs to HTML in the order you want them to appear
```html
<div class="content-container">
  <div class="grid-cell large">1</div>
  <div class="grid-cell">2</div>
  <div class="grid-cell">3</div>
  <div class="grid-cell">4</div>
  <div class="grid-cell">4</div>
</div>
```

Then, style the content container as a grid in the following manner
```css
.content-wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}

/* if you then want some cells to span multiple rows/cols at certain screen sizes, use media queries */
@media (min-width: 550px) {
    .large {
        grid-row: span 2;
    }
}
```


## Author

- GitHub - [@dbidmead](https://github.com/dbidmead)
- Frontend Mentor - [@dbidmead](https://www.frontendmentor.io/profile/dbidmead)

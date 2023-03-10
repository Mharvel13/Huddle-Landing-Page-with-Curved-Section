# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  <!-- - [Useful resources](#useful-resources) -->
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Perform Basic Form Validation on the Email Field

### Screenshot

![My Solution Screenshot](./Screenshot(Desktop).png)


### Links

- Frontend Mentor Solution URL: [Frontend Mentor Solution Page](https://www.frontendmentor.io/solutions/huddle-landing-page-with-curved-sections-PO_nQgRJYY)
- Live Site URL: [Live Hosted Website](https://mharvel13.github.io/Huddle-Landing-Page-with-Curved-Section/)
- Github Solution URL: [Github Hosted Codes](https://github.com/Mharvel13/Huddle-Landing-Page-with-Curved-Section)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Media Queries


### What I learned

#### Wavy Background Pattern

The Project required the use of background wavy patterns in the webpage and i was able to accomplish it by use of background image and position property.
The code snippet i used is below

```html
<div class="wave top-one"></div>

```
```css
.wave {
  height: 10rem;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.top-one {
  background-image: url("images/Wavy Images/bg-section-top-desktop-1.svg");
}

```

#### Form Validation
I also practiced form validation on The email field at the footer section of the page and used it to ensure data validation and input on the form.

The code snippet is below

```js
function checkEmail() {
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.value.match(emailPattern)) {
      email.classList.add("error");
      emailErrorText.innerHTML = "Check Your Email";
    } else {
      email.classList.remove("error");
      email.classList.add("sucess");
      emailErrorText.innerHTML = "";
    }
  }
```
#### Refactoring of CSS code
I also learnt how to make my css readable and organized by refactoring it and grouping the styles based on its segment and components 
I also employed comments and a table of content to help in easier navigation of the css file



<!-- ### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept. -->


## Author


- GitHub Profile - [Mharvel13](https://github.com/Mharvel13)
- Frontend Mentor - [Marvel Victor](https://www.frontendmentor.io/profile/Mharvel13)
- Twitter - [Marvel](https://twitter.com/Mharvel_O)


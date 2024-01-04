# Creating a Simple Web Page: CodePen to VS Code

## CodePen Setup

1. Go to [CodePen](https://codepen.io/).
2. In the HTML box, enter `!` and hit tab. This auto-fills some page setup automatically.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name</title>
</head>
<body>
  <h1>hello world</h1>

  <!-- More HTML Content... -->

  <script src="script.js"></script>
</body>
</html>
```

3. Change the title in the `<title>` tag to your name.

4. Between the `<body> ` tags, add:
- Type hello world 
- This would update in the bottom and display hello world. This is your first web page!

5. Let's make it a little more exciting with some tags 
    - Encase the hello world the the `<h1> </h1>` tags 
        - `<h1> Everything here will be a heading 1 element </h1>`
        - Nothing on the left of the tag will be affected by the h1 `<h1> ` 
        - `</h1>`  nothing to the right of the closed h1 will be affected 


6. Under the heading tag let's experiment with the paragraph tag.
    - On a new line type the following <p> This is a paragraph tag! </p>
    - Notice its regular text with some space under the heading. 


7. Let's experiment with a couple more tags. Under the paragraph tag lets make some subheadlines. 
Type the following: 
    - `<h2>Subheading 1</h2>`
    - `<p>Content under subheading 1.</p>`
    <br>
    <br>
    - `<h2>Subheading 2</h2>`
    - `<p>Content under subheading 2.</p>`
    <br>
    <br>
    - `<h3>Sub-subheading</h3>`
    - `<p>Content under sub-subheading.</p>`

8. Now we have a page with a bit more structure, it's starting to look like something. 
    - Lets add an attribute inside the last paragraph tag. 
    - Attributes inside HTML tags provide additional information about the element or modify its behavior. They are used to configure or customize the element to achieve specific effects. 
    - The line  <p>Content under sub-subheading.</p> we will add the attribute lang=”en-us” inside the opening paragraph tag. 
    - The line should look like this:  <p lang=”en-us”>Content under sub-subheading.</p>
    - Notice nothing changed to the web page. So why would we add extra code?
        - **Accessibility:** It helps assistive technologies understand the language of the content, which can aid in providing better accessibility for users.
        - **Internationalization:** It provides information about the language, which can be useful for internationalization and localization efforts.
        - **Search Engine Optimization (SEO):** Search engines may use language information to better understand and index the content.

# Adding CSS

9. In the CSS box lets make some styling for the h1 tag 
    ```css
    h1 {
    font-family: 'Arial', sans-serif;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    color: blue; 
    }
    ```



- We created a style that determined the font that will be used. We also put the title in italics and made it bold. We also centered the text and changed the color to blue. 
- CSS is really powerful and add a lot  to a web page. Lets do something a little more flashy. 

    ```css
    h1:hover {
      transform: scale(1.1); 
    }
    ```

- Now notice when you move the mouse over the text the size increases. 

10. Now lets add a paragraph style. 

    ```css
    p {
    text-align: center;
    font-family: 'Arial', sans-serif;
    color: #2986cc; 
    max-width: 600px; 
    margin: 0 auto; 
    line-height: 1.5; 
    }
    ```
- We centered the text like on the heading. We picked a font family to use. Notice the color is a hash tag with numbers and letters. That's called a hex color and can be used to get a specific color. Great for matching logos and company colors ect. The max width limits the maximum width of the paragraph to 600 pixels.  margin: 0 auto;: This centers the paragraph horizontally by setting the left and right margins to 'auto'. This is often used in combination with max-width to create a centered block of text. line-height: 1.5;: This sets the line height to 1.5 times the font size.

- Using what we have learned lets center the h2 and h3 tags. 

11. Now lets add some **javascript** to show a little of what it can do! 

In the HTML pages add:

```html
    <h1 id="clickable" onclick="changeText()">Click me!</h1>
 ```
- In the **javascript** add the following: 

    ```js 
    const changeText = () => {
    const h1Element = document.getElementById('clickable');
    
    if (h1Element.innerHTML === 'Click me!') {
        h1Element.innerHTML = 'Text Changed!';
    } else {
        h1Element.innerHTML = 'Click me!';
    }
    };
    ```
- Now when you click on the Click me! Text it changes and if you click again it will change back. 

# Visual Studio Code (VS Code)


- Now let's move our code to vs code! 

- In the repo you should have a index.html, styles.css, and a scripts.js

- Copy the code to the correct pages from codepen.io

- After you copy the code to the pages, save. Then navigate to the folder on your computer and open the index.html document. 

- It should open in the computer's web browser. 

- If you notice none of the styles are applied and the javascript isn’t working. 

- Let's correct that and link them together. 

- Back in VS Code in the head tag under the title add the following:
    ``` html
    <link rel="stylesheet" href="styles.css">
    ```

- That will link the style sheet to the html page. Go back to the browser and verify its working. Refresh the page. 

- Now in the body of the html page right at the very end before the closing tag add the following:

    ```html
    <script src="scripts.js"></script>
    ```
- This links the javascript page to the html page. 
- ### Verify this is now working in the browser! 

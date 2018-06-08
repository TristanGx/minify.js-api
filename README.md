# minify.js-api

**A Very Small API based off from jQuery.**

# How To Use

### $$()
 To call the function use '$$()' and between the parenthesis put the Element.
 You can use the Element's id,class or Tagname

**Example:**
  ```javascript
    //To call the function
    $$()

    //The function with the selected element
    $$("#foo")
    $$("div")
    $$(".bar")
  ```

### List of Function in the API
    *$$()
        *write()
        *html()
        *value()
        *color()
        *bgColor()
        *width()
        *cssWidth()
        *height()
        *cssHeight()
        *border()
        *background()
        *borderRadius()
        *element (not a function)
    *$e
        *createEl()
            *appendTo()



## Function List of _$$()_

Functions   |       Description       | Example
------------------------------------------------
write()     |Sets the innerText of the Selected Element | $$('#foo').write('hello world!')
html()      |Sets the innerHTML of the Selected Element | $$('#foo').write('<span>hello world!</span>')
value()     |Sets the value of the Selected Element can be a String or Number | $$('.bar').value(10)
color()     |Sets the text color of the Selected Element | $$("div").color("yellow")
bgColor()   |Sets the background color of the Selected Element | $$('.foo').bgColor('blue')
width()     |Sets the width of the Element | $$('canvas').width(200)
cssWidth()  |Sets the width of the Element in CSS | $$('fieldset').cssWidth("300px")
height()    |Sets the height of the Element | $$('canvas').height(200)
cssHeight() |Sets the height of the Element in CSS | $$('fieldset').cssHeight("400px")
border()    |Sets the border of the Element. Takes 3 arguments | $$('div').border("2px", "solid", "black")
background()|Sets the background of the Element. You can use the gradients in CSS | $$('#foo').background("url('foo.png')")
borderRadius()|Sets the border-radius of the Element | $$('div').borderRadius(30px)
Extra       |       Description       | Example
-----------------------------------------------
element     |This is not a function   | $("#foo").element.id

## $e
 **_$e_** is used to create Elements and append it to a selected element

### Usage
```javascript

    //Just type $e
    $e

    //And call the createEl function
    $e.createEl()

    //Put the Element name between the parenthesis
    $e.createEl("div")

    //And call the appendTo function.
    //The appendTo function appends the Created Element to the Selected Element
    $e.createEl("div").appendTo()

    //In the appendTo function put the Element id,class or tagname
    $e.createEl("div").appendTo("#foo")

    //The created Element have a default id of 'el' and you can edit it by
    $e.createEl("div").appendTo("#foo")
    $$("#el").element.id = "foo" //You can change the foo to any id you likes

```

# gridify.css
A lightweight CSS library for creating  responsive float-based layouts - aimed at bringing all the goodness of flexbox and the likes to older browsers

## Usage 
Using gridify is pretty straight-forward.

> To create a row of columns, just create a ```<div>``` or (whatever block element that semantically suits it's content) and give it a ```row``` class.

> Inside of the element with the row class, nest elements with ```.col-{number}-of-{number}``` classes depending on how many columns you want each element to span. The first ```{number}``` is the number of columns you want the element to span. The second is how many columns you want in that row.

> The code snippet below probably describes it better

![](../gridify/images/carbon.png)

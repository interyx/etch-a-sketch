This is a project to create (initially) a 16x16 grid from Javascript, and to have each grid element change
color on mouseover.

I created the layout using the CSS grid to dynamically change the size of the "board" based on the current value of the CSS variable "rowNum."  Initially it's set to 16 squares per side, but it can be increased and the CSS grid will automatically calculate the size of the new grid via the "grid-template-rows" and "grid-template-columns" attributes.  All these things have already been implemented.

The next steps are to take input from the user via UI buttons to reset the grid and to resize it.  I'm not sure how extreme the values can get, so testing is required to see where it breaks and keep the input within valid ranges.

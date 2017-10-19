This is a project to create (initially) a 16x16 grid from Javascript, and to have each grid element change
color on mouseover.

I created the layout using the CSS grid to dynamically change the size of the "board" based on the current value of the CSS variable "rowNum."  Initially it's set to 16 squares per side, but it can be increased and the CSS grid will automatically calculate the size of the new grid via the "grid-template-rows" and "grid-template-columns" attributes.  All these things have already been implemented.

Next I implemented buttons to resize the grid dynamically and to clear all current entries.  I also fixed a lingering bug where, when resized, the grid cells would get smaller and smaller inside of the container div -- I solved it by removing all previous cells before drawing new ones in the initializeGrid() method.

V1.0

If I wanted to work on this some more, I could implement the feature where each cell turns a different color, and on each pass with the mouse the color gets 10% darker until it's black.  I'm confident that I *could* do this to the point where I feel like I don't *need* to.

The other features I could work on are styling the elements more thoroughly and making the entire grid responsive, but for now, I feel like I've done a good job on this assignment.

--jtl 10/17/17

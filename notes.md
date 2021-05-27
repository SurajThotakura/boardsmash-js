# Things that I learned along the way.

## Semantic elements: 
element that clearly describes it's meaning to both the browser and the developer
semantic elments include \</form>, \<table>, \<article>, \<header>, \<main>, etc.
when semantic elements are used the browser renders the element in particula way relevant to the element, for example </header> is always rendered before \<main> irrespective of the position in the code.
elements like \<div> and \<span> are called non-semantic elements.

<br>

## Open link in new tab:
This can be done by adding target="_blank" to the \<a> element. Along with this rel-"noopener noreferrer" should be added to the element to compensate a vulnerability.
adding rel="noopener noreferrer" to links protects your site's users against having the site you've linked to potentially hijacking the browser (via rogue JS).
https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/

<br>

## Adding css in *{} :
Only a minimumum number of attributes should be added this as these attributes will be rendered to every element which might impact the performance significantly.

<br>

## File paths are case sensitive:
local deployments seem to ignore this but when deployed on firebase few assets were missing due to wrong folder name particularly a mistake in using capital "A"

<br>

## let Vs var:
Scoping

<br>

## **Keywords**

ES ecma script

Lexical Scoping

Mutability - 

RunJS

Function Mani()

Window.onLoad
Window.addEventLister('load', main)

Eager evaluation

History appear

Hard reload
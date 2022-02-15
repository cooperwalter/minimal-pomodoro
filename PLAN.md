# Plan

## Specification

* Clean, minimal, macOS Monterey style UI
  * translucent background
  * curved corners
  * Few colors
  * Native fonts
* Opens at startup (if setting selected)
* Can skip period
* Fades out when not interacted with for X seconds
* Appears when period ends
* Clicking anywhere in window plays/pauses period
* Pressing spacebar when window is focused plays/pauses period
* Way to tip developer
* Free

## Model Design

* Current duration
* Current period length (25 minutes vs. 5 minutes, e.g.)
* Current period type (?)
* Current period set (i.e. group of 4)
* Current period set number (i.e. increment up each time a set is finished, 0-indexed)
* Past periods
  * set number
  * period length
  * period type (?)

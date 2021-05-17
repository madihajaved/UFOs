# UFOs

## Overview of the Project
To add multiple criteria for filtering data simultaneously. This is done on UFO sightings data and the output is displayed using html. The filters added on the webpage include date, city, state, country, and shape.

 
## Results
The criteria mentioned were added to the webpage with the final look as below:

![](https://github.com/madihajaved/UFOs/blob/main/static/images/webpage_outlay.png)

The following image shows data being filtered for two criteria: date which was inputted as "1/4/2010" and shape which was inputted as "light". To use the search, all the user has to do is input the criteria and hit "enter" to filter results. On the image, the lighter colored text in the filter area shows the default format while the black colored text in the filter bar is the search criteria inputted by user. 

![](https://github.com/madihajaved/UFOs/blob/main/static/images/date_shape.png) 
 
## Summary 
One major drawback of the current layout is it is case sensitive, so "US" in country will not yield any results but "us" will because the data being used is in lower case. 

Two ways to further improve this include:

* Make the filter criteria more dynamic in terms of lower/upper case for city, country and state data 
* Adding drop down list options for date and shape will be very helpful since the current data is for limited dates and there are only a handful of shapes defined. Instead of user guessing these two criteria, a drop down list would give all the options from within the data set. 


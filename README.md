![Team Treehouse Logo][TTHLogo]

# Team Treehouse Tech Degree [Pagination Project][1]

I decided to take a look ath Web Boss short writing [Markdown Course][2] and use to with with Readme for practice.

##Functions for meet expectations
1. **Number of Pages**
    * Takes total number of students in array and divides it buy maiximum number of students allowed per page
    * Returns the number of pages required for pagination   
1. **Show Page**
    * This is the initial function that sets the display of hide for each LI in the array by setting the start and end index
    This function will be called to update pagination when a button is clicked. The Text content of the button will adjust
    the start and end index values
1. **Append Page Links**
    * This function creates a new div and appends it to the page. It then creates an unordered list and appends that to the div
    The funcuion then calls the numberOfPages() function and loops through each required page creating one LI with a text value 
    based on the value of i.
        - Note that the LI with a text value of one will be set to active.
     * The function appends the new LIs to the UL and calls the setEventHandlerFunction
1. **Set Event Handlers**
    *This function assigns an 'On Click Event Handler' to each of the LIs that were created by the Append Page Links Function.
    It calls the updateActiveLinks() function to remove the active CSS from all LIs and adds the active class to the link 
    that was clicked. 
    * It then calls the showPage() function passing the array of students and the text value of the LI to change the active page.
    
1. **Update Active Links**
    *Removes the active class from all LIs to that the setEventHandlers function can reassign it to the event target.      

 
##Functions for exceeds expectations
 
 [1]: https://teamtreehouse.com/home
 [2]: https://masteringmarkdown.com
 [TThLogo]: https://static.teamtreehouse.com/assets/marketing/opengraph/logo_facebook-5a7642409483233360d948ca4dd6840de0a6083475af4b047d452b77b00ca68a.png
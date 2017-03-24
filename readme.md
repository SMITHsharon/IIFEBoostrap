# NSS IIFE Bootstrap

### Walk-A-Thon Donations Project Description 
Upon launch, application 
- writes current donor information that is stored in an object array to a table, displayed to the left (or the top) of the screen, and 
- displays an input form for a user to enter information as a new donor for the Walk-A-Thon. The application validates the information given on the form, then adds the new donor to the object array and rewrites the updated array to the DOM. 

#### Walk-A-Thon Screen Shot at Launch, Desktop Size 
![Walk-A-Thon Screen Shot at Launch, Desktop Size](...)

#### Walk-A-Thon Screen Shot After Adding Donors, Tablet Size, Landscape Orientation
![Walk-A-Thon Screen Shot After Adds, Landscape](...)

#### Walk-A-Thon Screen Shot After Adds, Mobile Vertical Orientation
![Walk-A-Thon Screen Shot After Adds, Vertical](...)


### Project Specs
#### `html` structure and definitions
- Created a donation submission page for a Walk-A-Thon that allows donors to enter their name, email and dollar amount, and whether their donation is *Total Pledge Amount*, or *Per Lap*

#### functionality implemented in `javascript` 
- The donor information is stored in a private object array, `donorsArray`, in an IIFE. 
- `donorsArray` contains content type as keys and user submitted information as values: 
`{name: "John Doe", email: "johndoe@me.com", pledge: "99", type: "Total"}`
- `donorsArray` can be accessed only by the IIFE method `getDonors`.
- New donors are added to `donorsArray` via the IIFE method `addDonor`, that accepts an array that holds the values the user entered on the input screen. 
- `donorIntake.js` processes the information entered by a user on the input screen, including verifying that information is valid. 
- `donorOutput.js` writes the contents of `donorsArray` to the DOM. 

#### Styling
Used Bootstrap's grid system and styling classes to achieve:
- at desktop size display the table displays on the left, the form on the right, with some space around the sides
- the page has the same display on a tablet in landscape mode, but with no space at the sides
- on mobile/vertical tablet the table displays above the form
- the table entries are alternately striped


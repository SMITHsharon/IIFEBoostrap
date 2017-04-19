# NSS IIFE Bootstrap

### Walk-A-Thon Donations Project Description 
Upon launch, this application 
- writes current donor information that is stored in an object array to a table, displayed to the left (or the top) of the screen, and 
- displays an input form for a user to enter information as a new donor for the Walk-A-Thon. The application validates the information input on the form, then adds the new donor to the object array and rewrites the updated array to the DOM. 

#### Walk-A-Thon Screen Shot at Launch, Desktop Size 
![Walk-A-Thon Screen Shot at Launch, Desktop Size](https://raw.githubusercontent.com/SMITHsharon/IIFEBoostrap/screens/screens/Walk-A-Thon%20Donations%20Screen%20at%20Launch%2C%20Desktop%20Size.png)

#### Walk-A-Thon Screen Shot After Adding Donors, Tablet Size, Landscape Orientation
![Walk-A-Thon Screen Shot After Adds, Landscape](https://raw.githubusercontent.com/SMITHsharon/IIFEBoostrap/screens/screens/Walk-A-Thon%20Donations%20Screen%20After%20Adds%2C%20Tablet%20Size.png)

#### Walk-A-Thon Screen Shot After Adds, Mobile Vertical Orientation
![Walk-A-Thon Screen Shot After Adds, Vertical](https://raw.githubusercontent.com/SMITHsharon/IIFEBoostrap/screens/screens/Walk-A-Thon%20Screen%20Shot%20After%20Adds%2C%20Vertical%20Orientation.png)


### Project Specs
#### `html` structure and definitions
- Creates a donation submission page for a Walk-A-Thon that allows donors to enter their name, email and dollar amount, and whether their donation is *Total Pledge Amount*, or *Per Lap*

#### functionality implemented in `JavaScript` 
- The donor information is stored in a private object array, `donorsArray`, in an `iife`
- `donorsArray` contains content type as keys and user submitted information as values: 
`{name: "John Doe", email: "johndoe@me.com", pledge: "99", type: "Total"}`
- `donorsArray` can be accessed only by the `iife` method `getDonors`
- New donors are added to `donorsArray` via the `iife` method `addDonor`, which accepts an array that holds the values the user enters on the input screen
- `donorIntake.js` processes the information entered by the user on the input screen, including verifying the information is valid
- `donorOutput.js` writes the contents of `donorsArray` to the DOM

#### Styling :: `Bootstrap`
Used `Bootstrap`'s grid system and styling classes to achieve:
- at desktop size, the table displays on the left, the user input form on the right, with some space around the sides
- the page has the same display on a tablet in landscape mode, but with no space at the sides
- on mobile/vertical tablet the table displays above the form
- the table entries are alternately striped


### Technologies Used
- `html`
- `css`
- `JavaScript`
- `Bootstrap`


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/IIFEBoostrap.git
cd iifeBootstrap
http-server -p 8080
This will show in your browser at: http://localhost:8080
```

### Contributor
[Sharon Smith](https://github.com/SMITHsharon)


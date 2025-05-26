**Quote Generator**

**Overview**
A beautiful, responsive Quote Generator web app that displays inspirational quotes fetched from an online API with graceful fallback to a large collection of local quotes when the API is unreachable. Features a stunning full-screen background image, smooth animations, and easy sharing on Twitter.

**Features**
Fetches random quotes from the Forismatic API.

Shows a loading spinner while fetching quotes.

Includes a large fallback set of quotes stored locally in quotes.js.

“New Quote” button to fetch fresh quotes on demand.

Tweet button to share the current quote easily.

Large decorative opening quotation mark for elegant typography.

Fully responsive and accessible design.

Uses your custom background image for a visually appealing experience.

**Installation**
Clone or download the repository.

Place your desired background image named cover.jpg in the project root folder.

Open index.html in a modern browser (Chrome, Firefox, Edge, Safari).

For full functionality, run a local HTTP server (optional but recommended) to avoid CORS issues.

Running a Local Server (Optional but Recommended)
If you have Node.js installed, you can serve the project folder with:

node server.js

Or use:

npx http-server

Then navigate to http://localhost:8080 in your browser.

**Usage**
Click New Quote to fetch a new inspirational quote.

Click Tweet to share the quote on Twitter.

If the API is unreachable or fails, the app automatically shows a random quote from a large local collection of offline quotes stored inside quotes.js.

**Customization**
Replace cover.jpg with any image of your choice.

Modify the localQuotes array inside quotes.js to add your favorite quotes or update the local fallback collection.

Adjust styles in style.css to change fonts, colors, or layout.

**Dependencies**
Font Awesome (loaded via CDN) for Twitter icon.

Forismatic API for fetching quotes.

Pure HTML/CSS/JavaScript, no build tools required.

**License**
This project is open-source and free to use under the MIT License.
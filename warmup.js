/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)
       
    2. Make a request to: https://www.craigslist.org/about/
       and print out the resulting HTML (text) String, using Fetch
    3. Compare what you see in Node to visiting the actual page in
       your Browser - what matches up?
*/

const response = fetch("https://www.craigslist.org/about/");

console.log(response);

response
  .then((results) => {
    //   for (const key in results) {
    //     console.log(key);
    //   }
    //   const text = results.text();
    //   text.then((html) => console.log(html));

    return results.text();
  })
  .then((html) => console.log(html));

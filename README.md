
![image](https://github.com/VimansaWickramasinghe/playwright-testing/assets/62212838/250cc2b8-466f-41a6-965c-f1353747ebd4)
# playwright-testing
Projects I try during the learning process of playwright

## Basic concepts: 

Browser context -  An isolated environment within the browser. Each context is independent from other contexts. This is useful for testing of multi accounts or multi-user experiences.

page - A single tab, window in the browser

Selectors - CSS----XPath----Custom

CSS Selectors
-commonly used type
-const button = await page.$('.submit-button');

XML path language Selectors
-used when we have complex DOM structures
-const button = await page.$x('//button[contains(@class, "submit-button")]');

Custom Selectors
-user-defined strategies 
// Register the custom selector engine at the start of your script
// Define the createDataAttrSelectorEngine() function






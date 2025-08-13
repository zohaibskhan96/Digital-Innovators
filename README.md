# Digital-Innovators
See below how to reproduce the development and runtime environment for the demo project.
## Instructions to set up the Exempt Development Demo Code in VS Code

1. Click the "Code" dropdown in the top-right of this page.
2. Download the repository ZIP file.
3. Extract the ZIP file to any location on your PC.
4. Open VS Code and go to **File > Open Folder...**
5. Navigate to where you saved the ZIP file and select the folder named `exempt-development-demo-code` inside `Digital-Innovators`.
6. Download and install the latest version of Node.js from https://nodejs.org/en/download (if you already have skip this and step 6.1).

   6.1. Open the installer and follow the on-screen prompts to install Node.js.
8. Once the project is loaded in VS Code, open the terminal by going to Terminal > New Terminal... at the top.
9. If the filepath in the terminal ends with `Digital-Innovators` instead of `exempt-development-demo-code`, enter the command `cd exempt-development-demo-code`, otherwise skip this step.
10. Now enter the following command: `npm create vite@latest` (initialises the development server at the latest version).
11. It will now prompt you to enter a project name, enter `exempt-development-demo-code`.
12. Now select the framework, navigate to `React` using the vertical arrow keys and press enter.
13. Next select the variant, navigate to `JavaScript` and hit enter, using the arrow keys again.
14. Now you can enter `npm install`, wait for it to finish.
15. Finally, enter `npm run dev` which will launch the code on the development server and return a localhost link. `CTRL + Click` on that link to open it in your browser.

## Notes
- All code and React components can be located in the `src/assets` folder.
- You'll find CSS files under the `src` directory, as well.
- If anything doesn't work, let me know on Teams and I'll help.

## Links
**Don't have VS Code?**<br>Download it here: https://code.visualstudio.com/

**Need Node.js?**<br>Get it here: https://nodejs.org/en/download

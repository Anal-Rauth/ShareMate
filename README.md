### *Project Overview: Share Mate - Bill Splitter Web Application* 🍽💸

The *Share Mate* Bill Splitter Web App is a dynamic, user-friendly tool designed to help users split a bill among multiple people and calculate the associated tip. The app is built using *HTML, **CSS, and **JavaScript, ensuring an interactive experience with a modern aesthetic. It supports both **light* and *dark modes*, and includes features like input validation, flexible tip options, and a responsive layout for a seamless user experience across devices.

---

### *Features & Functionality* 🛠

1. *Dark Mode & Light Mode Toggle* 🌙🌞:

   * The app allows users to toggle between *dark* and *light modes* using a checkbox. When the user switches the mode, the theme is applied dynamically, and the preference is saved in *localStorage*. This ensures that the theme persists even when the page is reloaded.
   * When the page loads, the saved theme is retrieved from *localStorage*, and the appropriate mode is applied automatically.

2. *Interactive Navbar* 📱💻:

   * The navbar dynamically adjusts its layout based on the screen size, supporting both desktop and mobile views. It’s styled using *gradients*, creating a modern visual effect.

3. *Bill Calculation* 💰:

   * The app allows users to input:

     * *Bill Amount*: The total cost of the bill.
     * *Number of People*: The number of people among whom the bill will be split.
     * *Tip Percentage*: Users can select from predefined tip percentages or enter a custom tip value.
   * Upon clicking *Generate Bill*, the app calculates:

     * *Tip Amount*: The total tip based on the selected percentage.
     * *Total Bill*: The sum of the original bill and the tip.
     * *Each Person’s Share*: The total divided by the number of people.
   * If invalid inputs are detected (non-numeric values or negative numbers), the app prompts the user to correct them.

4. *Responsive Layout* 📱:

   * The application is fully responsive, using *CSS media queries* to adjust layout elements based on the screen size. Whether on mobile, tablet, or desktop, the app ensures the interface remains clean and user-friendly.

5. *Input Validation & Error Handling* 🚨:

   * The app performs *input validation* to ensure that the user enters valid numerical values. If invalid data is entered (such as negative numbers or non-numeric characters), an error message is shown, and the process is halted.

6. *Tip Customization* 💵:

   * Users can choose a predefined tip percentage or enter a *custom tip*. If the custom tip is entered, it dynamically overrides the predefined values. If the "No Tip" checkbox is checked, the tip is set to 0, and the custom tip input is disabled.

7. *Reset Functionality* 🔄:

   * The app includes a *reset button* to clear all fields and reset the UI, allowing the user to start over. When the reset button is clicked, all inputs and outputs are cleared, and the app is returned to its initial state.

8. *“No Tip” Option* 🚫💰:

   * If the *noTipCheckbox* is selected, it disables the tip buttons and sets the tip percentage to 0. The custom tip input is also disabled to prevent the user from adding a tip.

---

### *Design & Styling* 🎨

1. *Modern Aesthetic* 🌈:

   * The app uses *gradients* and *neon glow effects* for a sleek, modern look. The background changes between light and dark tones based on the user’s theme preference, providing visual variety.

2. *Interactive Elements* ✨:

   * The app includes *hover effects* and *focus styles* on buttons and inputs, ensuring the user can easily identify clickable elements.

3. *Typography* 🅰:

   * The app uses clear, *sans-serif fonts* for readability. The font sizes adjust dynamically, ensuring the text is legible on all screen sizes.

---

### *Technical Implementation* 🖥

1. *HTML (Structure)* 🏗:

   * The HTML defines the basic structure of the application, including input fields, buttons, and containers for the bill and tip information. The semantic structure includes elements like <section>, <header>, and <footer> for clarity and accessibility.

2. *CSS (Styling)* 🎨:

   * *CSS* is used extensively to create a responsive layout and apply modern visual effects, including gradients and hover animations. *Flexbox* and *grid* are used for layout management, ensuring flexibility across different screen sizes.

3. *JavaScript (Logic)* 🤖:

   * *Event listeners* handle user interactions, such as clicking the *generateBillBtn*, selecting tip percentages, and toggling the theme.
   * *LocalStorage* is used to save the theme preference, ensuring persistence across page reloads.
   * The *generateBillBtn* triggers the calculation of the bill, tip, and each person’s share. The results are displayed dynamically based on the inputs.
   * *Input validation* ensures the user inputs valid numerical data and prevents incorrect calculations.
   * The *reset button* clears all fields and resets the UI state to its initial condition.

---

### *Challenges & Solutions* ⚡

1. *Responsive Design* 📱:

   * Ensuring that the app works well on all devices, from large desktop screens to smaller mobile screens, was challenging. By using *CSS media queries* and flexible layouts, the app was made responsive and adaptable.

2. *Interactive Features* 💡:

   * Implementing dynamic tip selection required handling multiple user inputs, including predefined tip options, custom tips, and the “no tip” option. This was solved by updating the UI and logic based on user interaction.

3. *Input Validation* ⚠:

   * To ensure the app works reliably, especially when users enter invalid data, validation checks were implemented. If invalid data is entered, an error message prompts the user to correct it before proceeding.

---

### *Future Enhancements* 🚀

1. *Saving Bill History* 📜:

   * A feature to store and view the history of bills could be added, allowing users to track previous calculations.

2. *Currency Support* 💱:

   * Adding support for different currencies (with appropriate formatting) would make the app more useful for international users.

3. *User Accounts & Authentication* 🔒:

   * By integrating user authentication, users could save their preferences, history, and other data between sessions.

4. *Mobile App Version* 📲:

   * A native mobile app version could be developed using frameworks like *React Native* or *Flutter*, optimizing the app’s experience on mobile devices.

---

### *Conclusion* 🏆

*Share Mate* is a feature-rich, user-friendly tool that provides a seamless experience for splitting bills, calculating tips, and managing group expenses. With a clean modern design, responsive layout, and flexible functionality (including theme support, tip customization, and input validation), the app ensures efficient use across devices and meets the diverse needs of users looking to manage their shared expenses effectively.

---

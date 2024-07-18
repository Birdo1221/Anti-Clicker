***Start of Development was on 17/7/2024 at 7:50PM 🕢***

***Start of Researching Development Started on 18/7/2024 at 1:44AM 🕓***

Limitations and Challenges:
Frame Busting Scripts: Historically, frame-busting scripts have been used to prevent clickjacking by detecting if the page is being framed and breaking out of the frame. However, modern browsers have implemented protections to restrict frame-busting scripts under certain conditions to prevent abuse and ensure security.

Content Security Policy (CSP): Websites can use CSP to define where resources can be loaded from, including frame ancestors. A well-configured CSP can mitigate clickjacking risks by limiting which origins can embed the site in a frame.

Browser Extension Restrictions: Similar to modifying navigator.userAgent, browser extensions face restrictions in how they can interact with web pages. Extensions cannot directly modify the DOM of cross-origin pages due to security policies, which limits their ability to dynamically detect and prevent clickjacking.

Approaches for the Browser Extensions:
Despite these challenges, browser extensions can still contribute to clickjacking prevention using the following methods:

Content Script Injection: Extensions can inject content scripts into web pages to detect and modify the behavior of elements susceptible to clickjacking, such as <iframe> elements.

Policy Enforcement: Extensions can enforce security policies or guidelines on browsing behavior to warn users when they are on potentially clickjacked pages or block suspicious actions.

While preventing clickjacking through a browser extension may not be as straightforward as it once was due to browser security enhancements, it is still feasible with careful design

Alot of Clickjacking can actual be prevented by educating users about clickjacking and how to do safe browsing practices. 
This could potentially become a web application project in the near future, but there are enough resources available online to teach users.


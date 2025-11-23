// Data structured to match the assessment questions and includes an ID
const data = [
  {
    id: 1,
    question: "Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.",
    answer: "The core stack is intentionally simple, consisting of the three fundamental pillars of web development: <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Vanilla JavaScript</strong>. <strong>HTML5</strong> provides the robust, semantic structure for the content, including the sticky header, hero section, and the main container for the dynamic Q&A area. <strong>CSS3</strong> manages all presentation, layout, and visual effects, with a clean, sophisticated aesthetic featuring a warm cream background and subtle box shadows, using a modified Neumorphism approach, ensuring high contrast, excellent legibility, and a professional user experience across all devices. <strong>Vanilla JavaScript</strong> is used exclusively for DOM manipulation, dynamically rendering the Q&A data structure, and controlling the interactive accordion functionality.<br><br>The primary technical challenge involved implementing a smooth, accessible accordion component for the Q&A section using only Vanilla JavaScript and CSS.I overcame this by using a JavaScript-driven approach that leverages the DOM element's scrollHeight property: When a card is clicked, the script sets its maxHeight to the content’s scrollHeight for a smooth expansion. To collapse, it resets maxHeight to null, letting the CSS transition shrink the card fluidly regardless of content length.",
    isHtml: true
  },
  {
    id: 2,
    question: "What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.",
    answer: "I found Netlify very intuitive and efficient, especially for quickly deploying static sites. The Git integration and automatic SSL setup were particularly impressive. For improvement, clearer build error messages and more advanced debugging tools would be helpful, especially for complex projects. Overall, it’s a fast, reliable, and user-friendly platform.",
    isHtml: false
  },
  {
    id: 3,
    question: "Rank your 5 favorite and 5 least favorite activities from this list",
    // This card uses HTML content to display the two-column ranked list 
    answer: `
      <div class="activity-lists">
        <div class="list-column">
          <h4> Top 5 Favorite Activities:</h4>
          <ol class="custom-list custom-list-start">
            <li>Work with the development team to help design a new feature based on feedback from customers</li>
            <li>Write and maintain Support Guides for our product</li>
            <li>Respond to Netlify customers on Twitter</li>
            <li>Help manage communications during a service outage</li>
            <li>Respond to 20+ support requests via email every day</li>
          </ol>
        </div>
        <div class="list-column">
          <h4>Least 5 Favorite Activities:</h4>
          <ol class="custom-list custom-list-start">
            <li>Manage a Support team</li>
            <li>Work with prospective customers to explain our service and the pricing model</li>
            <li>Debug a customer's build using a programming language and framework that you've never seen before</li>
            <li>Develop a code example to share with a customer</li>
            <li>Set up your own copy of several site frameworks for debugging</li>
          </ol>
        </div>
      </div>
    `,
    isHtml: true
  },
  {
    id: 4,
    question: "Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why you think they are well done.",
    answer: 'Kubernetes Documentation (Official): <a href="https://kubernetes.io/docs/home" target="_blank">Kubernetes Documentation</a>.<br><br> Audience-Centric Structure: They use a clear structure to serve different user needs. For example, the Kubernetes docs are separated into Concepts (for understanding), Tasks (for step-by-step actions), Tutorials (for learning projects), and Reference (for deep technical details).',
    isHtml: true
  },
  {
    id: 5,
    question: "Explain, in a couple of paragraphs, what you think are two major challenges around DNS configuration for less-technical customers hosting websites.",
    answer: "One major challenge less-technical customers face with DNS configuration is understanding the complexity of DNS records and their functions. DNS isn’t just about pointing a domain to a website, it involves multiple types of records, such as A, CNAME, MX, TXT, and NS records, each serving a specific purpose. For someone without technical experience, figuring out which record to update, what values to enter, and how changes propagate can be confusing. Mistakes, like entering incorrect IP addresses or misconfiguring CNAMEs, can lead to downtime, email delivery issues, or the site being inaccessible, which can be very frustrating for users who just want their website to work.<br><br>Another significant challenge is propagation time and troubleshooting. DNS changes are not instantaneous; they can take anywhere from a few minutes to 48 hours to propagate globally. Less technical users often expect immediate results and may repeatedly attempt changes, potentially causing conflicts or confusion.",
    isHtml: true
  },
  {
    id: 6,
    question: "A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.",
    answer: '<strong>Troubleshooting Steps:</strong><br>First, check if the issue has been reported or resolved previously and review any relevant documentation. Consult your team or development team for insights and confirmation. Attempt to reproduce the error to identify potential causes and gather troubleshooting knowledge. Document all findings thoroughly, then craft a detailed customer response with applicable troubleshooting steps and clarifying questions to ensure guidance is relevant.<br><br><strong>Customer-Facing Response:</strong><br>Hi [Customer Name],<br><br>Thank you for contacting Netlify Support. I have reviewed your site build logs and observed that the build failed with the following<strong>error: Build script returned non-zero exit code: 2</strong> This type of error typically occurs when a command in the build process encounters an issue, such as a missing dependency, an environment variable, or a script error.<br><br>As your repository is private, I am unable to test the build directly. To assist in troubleshooting, could you kindly:<br><br> 1. Confirm the build command configured in your site settings.<br>2. Provide any relevant portions of the build log, particularly messages preceding the error.<br>3. Verify that all required dependencies are installed and that any necessary environment variables are properly set.<br>4.Attempt to run the build locally to determine whether the issue can be reproduced.<br><br>In the meantime, I have identified resources that may assist you with troubleshooting. Should you encounter any difficulties or have questions while reviewing these materials, please do not hesitate to contact us. I remain available to provide further assistance.<br><br><a href="https://docs.netlify.com/configure-builds/troubleshooting-tips/" target="_blank">Netlify Documentation</a><br><a href="https://answers.netlify.com/t/building-script-returned-non-zero-exit-code-2/49827" target="_blank">Netlify Forum</a><br><a href="https://stackoverflow.com/questions/64468843/netlify-deployment-failed-during-stage-building-site-build-script-returned-n" target="_blank">Related to React.js</a><br><br>Best Regards,<br>Erika<br>Netlify Support',
    isHtml: true
  },
  {
    id: 7,
    question: "How would you set up an http 301 status redirect from “/netlify/anything” on your site, to https://www.google.com/search?q=anything. Please provide the redirect formatting here. Now, how about a proxy redirect? Please add that proxy redirect rule directly to your site!",
    answer: "I'd start by checking the build logs for specific error messages (e.g., dependency mismatches, syntax errors). Next, I'd review the environment variables and the build command in their configuration. If the issue is complex, I'd ask the customer for a minimal reproducible example (MRE) or temporary access to their repository to replicate the issue locally.",
    isHtml: false
  },
  {
    id: 8,
    question: "Please attempt to deploy a function on our service. This need not be complicated. It could be 'Hello World'. Note that failure to deploy is not failing the exercise! Whether you have trouble or not, please describe what you experienced and how you attempted to troubleshoot any issues you encountered.",
    answer: "I'd start by checking the build logs for specific error messages (e.g., dependency mismatches, syntax errors). Next, I'd review the environment variables and the build command in their configuration. If the issue is complex, I'd ask the customer for a minimal reproducible example (MRE) or temporary access to their repository to replicate the issue locally.",
    isHtml: false
  },
  {
    id: 9,
    question: "We understand you don't know anything about our internal procedures at this stage, but we want you to explain at a high level how you'd react to this situation: You receive a report of a severe security issue on www.netlify.com. You can't immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven't confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?",
    answer: "I'd start by checking the build logs for specific error messages (e.g., dependency mismatches, syntax errors). Next, I'd review the environment variables and the build command in their configuration. If the issue is complex, I'd ask the customer for a minimal reproducible example (MRE) or temporary access to their repository to replicate the issue locally.",
    isHtml: false
  }

  
];

// Toggle function for card expansion/collapse
function toggleAnswer(event) {
  const card = event.currentTarget;
  const content = card.querySelector('.answer-content');
  
  // Toggle the 'active' class on the card and 'open' class on the content
  card.classList.toggle('active');

  if (content.style.maxHeight) {
    // Collapse
    content.style.maxHeight = null;
    content.style.padding = '0 25px';
  } else {
    // Expand
    // Add bottom padding only when expanded
    content.style.maxHeight = content.scrollHeight + 25 + "px"; 
    content.style.padding = '25px'; 
  }
}


// Render Q&A
const container = document.getElementById("qa-container");

data.forEach((item, index) => {
  const card = document.createElement("div");
  // Updated class from 'fade-in' to 'fade-slide' for consistency with new CSS
  card.className = "card fade-slide"; 
  // Staggered delay for each card
  card.style.animationDelay = `${index * 0.1}s`;
  card.addEventListener('click', toggleAnswer); // Attach click listener

  // 1. Header/Question Area
  const header = document.createElement("div");
  header.className = "card-header";

  // A. Question Number/Icon
  const qNumber = document.createElement("div");
  qNumber.className = "q-number";
  qNumber.textContent = `Q${item.id}`; // *** ADDING Q PREFIX HERE ***

  // B. Question Text
  const qText = document.createElement("div");
  qText.className = "question-text";
  qText.textContent = item.question;
  
  // C. Chevron Icon 
  const chevron = document.createElement("i");
  chevron.className = "fas fa-chevron-up chevron";

  header.appendChild(qNumber);
  header.appendChild(qText);
  header.appendChild(chevron);
  
  // 2. Content (Answer)
  const content = document.createElement("div");
  content.className = "answer-content";
  
  if (item.isHtml) {
    content.innerHTML = item.answer;
  } else {
    // Wrap simple text in a paragraph for consistent styling
    const p = document.createElement('p');
    p.textContent = item.answer;
    content.appendChild(p);
  }

  card.appendChild(header);
  card.appendChild(content);
  container.appendChild(card);
});
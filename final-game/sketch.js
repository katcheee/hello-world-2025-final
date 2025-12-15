// ========== DATA STRUCTURE ==========
// This is where ALL your questions live
const questions = [
  // Add questions here
  {
    id: 1,
    question: "What type of animal\nwould you like to foster?",
    buttons: [
      { text: "Dogs only", value: "dog" },
      { text: "Cats only", value: "cat" },
      { text: "Either one!", value: "other" },
    ],
  whyMatters: [
    "It's perfectly fine to have a preference! Dogs and cats have different care needs.",
    "Dogs require daily walks and more active engagement.",
    "Cats need litter box maintenance and often adapt better to smaller spaces.",
    "Neonatal kittens have the highest need for fosters due to intensive care requirements."
  ]
  },

  {
    id: 2,
    question: "What age range\ninterests you most?",
    buttons: [
      { text: "Neonatal/Young\n(0–6 months)", value: "young" },
      { text: "Adult\n(7 months-7 years)", value: "adult" },
      { text: "Senior\n(7+ years)", value: "senior" },
    ],
  whyMatters: [
    "Neonatal animals need feeding every 2-4 hours",
    "and are the most at-risk in shelters - they CANNOT",
    "survive without foster care.",
    "Young animals are energetic and need training.",
    "Adults are often calmer but may have unknown histories.",
    "Seniors are typically mellow but may have medical needs.",
    "Each age has unique rewards!"
  ]
  },

  {
    id: 3,
    question: "What size animal\nworks for your space?",
    buttons: [
      { text: "Small\n(under 25 lbs)", value: "small" },
      { text: "Medium\n(25–50 lbs)", value: "medium" },
      { text: "Large\n(50+ lbs)", value: "large" },
      { text: "Any size", value: "any" },
    ],
  whyMatters: [
    "Large dogs stay in shelters the longest and desperately",
    "need fosters! They need more space and stronger handling",
    "skills. Small animals can work in apartments. Consider your",
    "living space, physical ability to handle the animal, and",
    "transportation (can you safely transport a large dog?).",
  ]
  },

  {
    id: 4,
    question: "What activity level\nmatches your lifestyle?",
    buttons: [
      { text: "Low\n(calm, senior, or recovering)", value: "low" },
      {
        text: "Moderate\n(average activity, some playtime)",
        value: "moderate",
      },
      { text: "High\n(young, very active)", value: "high" },
      { text: "I can adapt to\nany energy level", value: "any" },
    ],
  whyMatters: [
    "Be honest about your energy level! High-energy puppies and young dogs",
    "need multiple walks, play sessions, and mental stimulation daily.",
    "Low-energy animals may be recovering from surgery or just naturally calm.",
    "Matching activity levels prevents stress for both you and the animal."
  ]
  },

  {
    id: 5,
    question: "How much time can you spend\nwith a foster pet each day?",
    buttons: [
      { text: "More than 4 hours", value: "4+" },
      { text: "1–3 hours", value: "1–3" },
      { text: "Less than 1 hour", value: "-1" },
      { text: "Not sure yet", value: "uncertain" },
    ],
  whyMatters: [
    "Neonatal kittens require feeding every 2-4 hours, 24/7.",
    "Adult animals need less intensive care but still require",
    "daily attention, feeding, and socialization. The younger",
    "the animal, the more time they need."
  ]
  },
  {
    id: 6,
    question: "What level of specialized\ncare feels manageable for you?",
    buttons: [
      { text: "Healthy animals only", value: "healthy" },
      { text: "Basic medical care\n(medications, vet visits)", value: "basic" },
      { text: "Behavior support\n(anxious or shy animals)", value: "behavior" },
      {
        text: "High-intensity care\n(bottle-feeding, complex cases)",
        value: "intense",
      },
    ],
  whyMatters: [
    "Foster animals have varying needs: some are healthy and",
    "just need temporary housing, others require medications",
    "or vet care, some need behavioral support for anxiety or",
    "fear, and neonates need intensive 24/7 bottle-feeding.",
    "Shelters match fosters based on their comfort level and",
    "experience. Being honest about what you can handle ensures",
    "the best outcome for both you and your foster. Every level",
    "of care saves lives - there's no 'wrong' answer!"
  ]
  },
];

const scenarios = [
  {
    id: 1,
    situation: [
      "It's 2:30 AM. Your foster puppy is crying and pawing at the crate.",
      "You have an important meeting at 8 AM tomorrow.",
    ],
    buttons: [
      { text: "Take puppy outside immediately", value: "outside" },
      { text: "Check if they need water, thene back to crate", value: "water" },
      { text: "Bring them into your bed for comfort", value: "bed" },
      { text: "Let them cry it out – they'll learn", value: "cry" },
    ],
    feedback: {
      outside: "Great choice! Puppies can't hold their bladders very long at night. Taking them out right away helps them learn where the bathroom really is and prevents crate accidents.",
      water: "Good thinking! Checking basic needs first is smart, though young puppies often do need a bathroom break at night.",
      bed: "While comforting, this can create dependency issues. Puppies learn best with consistent crate training.",
      cry: "Not ideal. Young puppies physically can't hold it all night. Ignoring them can lead to accidents and anxiety."
    }
  },
  {
    id: 2,
    situation: [
      "You come home after 4 hours. Your foster puppy has destroyed a couch cushion,",
      "knocked over plants, and had an accident on the rug.",
    ],
    buttons: [
      { text: "Get frustrated - this is too much work", value: "frustrated" },
      { text: "Contact shelter about puppy's behavior issues", value: "coordinator" },
      { text: "Clean up & adjust: puppies need more supervision", value: "cleanup" },
      { text: "Realize 4 hours alone is too long for a puppy", value: "realize" },
    ],
    feedback: {
      frustrated: "It's okay to feel overwhelmed, but this is normal puppy behavior - not a problem. Young puppies can't handle being alone for long periods and need supervision to learn appropriate behavior.",
      coordinator: "While reaching out is good, this is typical puppy behavior when left alone too long, not a serious issue. Adjusting your setup and schedule will help prevent future destruction.",
      cleanup: "Great choice! Puppies can’t handle long periods alone, and destructive moments are totally normal. Cleaning up and adjusting the environment shows you understand their energy and growing needs.",
      realize: "Exactly right! Four hours is too long for a young puppy without supervision. They need frequent potty breaks, safe confinement, and activities to prevent boredom and accidents."
    }
  },  
  {
    id: 3,
    situation: [
      "Your neighbor invites you to a backyard BBQ with kids and other dogs.",
      "Your foster puppy is 10 weeks old and hasn't been around many people yet.",
    ],
    buttons: [
      { text: "This is perfect! Puppies need socialization", value: "socialization" },
      { text: "Too risky – keep puppy home safely", value: "risky" },
      { text: "Go, but keep puppy on leash and monitor closely", value: "leash" },
      { text: "Ask the shelter about vaccination status first", value: "vaccination" },
    ],
    feedback: {
      socialization: "Socialization is important, but a busy BBQ might overwhelm a 10-week-old puppy. Too much stimulation at once can create fear rather than confidence. Start with calmer, controlled introductions first.",
      risky: "While caution is good, completely avoiding new experiences limits crucial early socialization. Puppies need positive exposure during this window - the key is making it safe and gradual.",
      leash: "Great choice! At 10 weeks, puppies are in a socialization stage, and short outings—while keeping them leashed and supported—help them learn about people, sounds, and other animals.",
      vaccination: "Smart thinking! Checking vaccination status is important before exposing puppies to other dogs. Young puppies can be vulnerable to diseases like parvo until they're fully vaccinated."
    }
  },  
];

// ========== GLOBAL VARIABLES ==========
let GAMESTATE = "MENU"; // Can be: "MENU", "QUESTIONS", "RESULTS"
let currentQuestionIndex = 0; // Which question we're on (starts at 0)
let userAnswers = []; // Stores all the user's answers
let currentScenarioIndex = 0;
let scenarioAnswers = [];
let showingWhyMatters = false;
let animatingToInfo = false;  // tracks if animating to info screen
let animatingFromInfo = false;  // tracks if animating back
let animationProgress = 0;  // 0 to 1, controls animation
let infoBadgeImg;
let scenario1Img;
let scenario1AfterImg;
let scenario2Img;
let scenario2AfterImg;
let scenario3Img;
let scenario3AfterImg;
let backToQImg;
let rewardsImg;
let peekImg;
let showingFeedback = false;
let rotationAngle = 0;

// ========== PRELOAD & SETUP ==========
function preload() {
  infoBadgeImg = loadImage("badge-image.png");
  scenario1Img = loadImage("scenario1.png");
  scenario1AfterImg = loadImage('scenario1-after.png');
  scenario2Img = loadImage("scenario2.png");
  scenario2AfterImg = loadImage('scenario2-after.png');
  scenario3Img = loadImage("scenario3.png");
  scenario3AfterImg = loadImage('scenario3-after.png');
  backToQImg = loadImage('backtoq.png');
  rewardsImg = loadImage('rewards.png');
  peekImg = loadImage('peek.png');
}

function setup() {
  createCanvas(1440, 1024);
  textFont("Niramit");
}

// ========== MAIN DRAW LOOP ==========
function draw() {
  background(235, 100, 36);
  
  if (GAMESTATE === "MENU") {
    drawMenu();
  } else if (GAMESTATE === "QUESTIONS") {
    if (animatingToInfo) {
      drawQuestion();  // Draw question underneath
      drawOrangeSpread();  // Draw spreading orange on top
      animationProgress += 0.05;  // Animation speed
      if (animationProgress >= 1) {
        animatingToInfo = false;
        showingWhyMatters = true;
        animationProgress = 0;
      }
    } else if (animatingFromInfo) {
      drawWhyMatters();  // Draw info screen underneath
      drawPinkShrink();  // Draw shrinking effect
      animationProgress += 0.05;  // Animation speed
      if (animationProgress >= 1) {
        animatingFromInfo = false;
        showingWhyMatters = false;
        animationProgress = 0;
      }
    } else if (showingWhyMatters) {
      drawWhyMatters();
    } else {
      drawQuestion();
    }
  } else if (GAMESTATE === "SCENARIOS") {
    drawScenario();
  } else if (GAMESTATE === "RESULTS") {
    drawResults();
  }
  
  updateCursor();
}

// ========== DRAW FUNCTIONS ==========
// Each "page" of your game gets its own function

function drawMenu() {
  textAlign(CENTER, CENTER);
  textSize(125);
  textFont("Bagel Fat One");
  textStyle(NORMAL);
  fill(255, 201, 229);
  text("Ready to Foster?", 720, 240);

  textSize(40);
  textFont("Niramit");
  textStyle(BOLD);
  fill(255);
  text("Ready to see what fostering's all about?", 720, 390);

  textSize(30);
  textFont("Bagel Fat One");
  textFont("Niramit");
  textStyle(NORMAL);
  text("Step into real-life-inspired scenarios, make choices,", 720, 450);
  text("and discover how fostering could fit into your world.", 720, 492);

  // Draw START button
  drawStartButton();
  
  imageMode(CENTER);
  image(peekImg, 720, 760);
}

function drawQuestion() {
  background(255, 182, 193); // Pink background

  // Get the current question from our list
  let currentQ = questions[currentQuestionIndex];

  // Draw question text
  textAlign(CENTER, CENTER);
  textFont("Niramit");
  textSize(80);
  fill(235, 100, 36);
  textStyle(BOLD);

  let lines = currentQ.question.split("\n");
  let startY = 230;
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], 720, startY + i * 100);
  }

  // Draw all the answer buttons for this question
  drawAnswerButtons(currentQ);

  // Draw the rotating "Why does this matter?" badge
  drawInfoBadge();
}

function drawWhyMatters() {
  background(235, 100, 36);  // Orange background
  
  // Get current question's why matters content
  let currentQ = questions[currentQuestionIndex];
  
  // Title
  textAlign(CENTER, CENTER);
  textFont("Bagel Fat One");
  textSize(80);
  fill(221, 223, 95);  // Yellow-green color
  text("Why does this matter?", 720, 220);
  
  // Content text
  textFont("Niramit");
  textStyle(NORMAL);
  textSize(30);
  fill(255);  // White text
  
  // Draw each line of content
  let startY = 360;
  let lineSpacing = 62;
  for (let i = 0; i < currentQ.whyMatters.length; i++) {
    text(currentQ.whyMatters[i], 720, startY + (i * lineSpacing));
  }
  
  // Draw rotating pink "Back to Question" badge
  drawBackBadge();
  
  rotationAngle += 0.02;
}

function drawScenario() {
  background(20, 30, 60);
  
  let currentScenario = scenarios[currentScenarioIndex];
  
  // If showing feedback
if (showingFeedback) {
    let lastAnswer = scenarioAnswers[scenarioAnswers.length - 1];
    
    // Determine which buttons show custom images
    let showCustomImage = false;
    if ((currentScenarioIndex === 0 && lastAnswer === "outside") ||
        (currentScenarioIndex === 1 && lastAnswer === "cleanup") ||
        (currentScenarioIndex === 2 && lastAnswer === "leash")) {
      showCustomImage = true;
    }
    
    if (showCustomImage) {
      // Custom illustration for "outside" choice
      imageMode(CENTER);
// Show correct feedback image
if (currentScenarioIndex === 0) {
  image(scenario1AfterImg, 720, 512, 1440, 1024);
} else if (currentScenarioIndex === 1) {
  image(scenario2AfterImg, 720, 512, 1440, 1024);
} else if (currentScenarioIndex === 2) {
  image(scenario3AfterImg, 720, 512, 1440, 1024);
}      
      let feedbackText = currentScenario.feedback[lastAnswer];
      
      fill(200, 200, 220, 220);
      noStroke();
      rectMode(CENTER);
      rect(350, 160, 560, 165, 20);
      
      fill(40, 50, 80);
      textAlign(LEFT, TOP);
      textSize(22);
      textStyle(NORMAL);
      textFont("Niramit");
      text(feedbackText, 355, 105, 500);
      
      drawContinueButton();
      
} else {
  // Show feedback for other choices
  background(150);
  
  let feedbackText = currentScenario.feedback[lastAnswer];
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(28);
  textStyle(NORMAL);
  textFont("Niramit");
  text(feedbackText, 720, 512, 1000);
  
  drawContinueButtonCenter();
}
    
  } else {
    // Normal scenario screen
    imageMode(CENTER);
    // Show correct scenario image
if (currentScenarioIndex === 0) {
  image(scenario1Img, 720, 512, 1440, 1024);
} else if (currentScenarioIndex === 1) {
  image(scenario2Img, 720, 512, 1440, 1024);
} else if (currentScenarioIndex === 2) {
  image(scenario3Img, 720, 512, 1440, 1024);
}
    
    fill(200, 200, 220, 220);
    noStroke();
    rectMode(CENTER);
    rect(720, 150, 1160, 160, 20);
    
    fill(40, 50, 80);
    textAlign(CENTER, CENTER);
    textSize(28);
    textStyle(NORMAL);
    textFont("Niramit");
    
    text(currentScenario.situation[0], 720, 125);
    text(currentScenario.situation[1], 720, 165);
    
    drawScenarioButtons(currentScenario);
  }
}

function drawOrangeSpread() {
  // Orange circle expanding from badge position
  let badgeX = 1325;
  let badgeY = 115;
  
  // Calculate radius - expands to cover entire screen
  let maxRadius = dist(badgeX, badgeY, 0, 1024);  // Distance to furthest corner
  let currentRadius = maxRadius * animationProgress;
  
  fill(235, 100, 36);  // Orange color
  noStroke();
  circle(badgeX, badgeY, currentRadius * 2);
  
  // Fade in the "Why does this matter?" content as circle grows
  if (animationProgress > 0.6) {
    let textAlpha = map(animationProgress, 0.6, 1, 0, 255);
    
    let currentQ = questions[currentQuestionIndex];
    
    // Title
    textAlign(CENTER, CENTER);
    textFont("Bagel Fat One");
    textSize(90);
    fill(221, 223, 95, textAlpha);
    text("Why does this matter?", 720, 220);
    
    // Content
    textFont("Niramit");
    textStyle(NORMAL);
    textSize(34);
    fill(255, textAlpha);
    
    let startY = 360;
    let lineSpacing = 62;
    for (let i = 0; i < currentQ.whyMatters.length; i++) {
      text(currentQ.whyMatters[i], 720, startY + (i * lineSpacing));
    }
  }
  
  // Draw the rotating badges on top
  if (animationProgress < 0.5) {
    drawInfoBadge();  // Orange badge fading
  } else {
    drawBackBadge();  // Pink badge appearing
  }
  rotationAngle += 0.02;
}

function drawPinkShrink() {
  // Pink circle shrinking back to badge
  let badgeX = 1325;
  let badgeY = 115;
  
  // Calculate radius - shrinks from full screen to zero
  let maxRadius = dist(badgeX, badgeY, 0, 1024);
  let currentRadius = maxRadius * (1 - animationProgress);
  
  fill(255, 182, 193);  // Pink color
  noStroke();
  circle(badgeX, badgeY, currentRadius * 2);
  
  // Draw the badges
  if (animationProgress < 0.5) {
    drawBackBadge();  // Pink badge fading
  } else {
    drawInfoBadge();  // Orange badge appearing
  }
  rotationAngle += 0.02;
}

function drawContinueButton() {
  let buttonX = 350;
  let buttonY = 290;
  let buttonWidth = 200;
  let buttonHeight = 60;
  
  let isHovering = mouseX > buttonX - buttonWidth/2 &&
                   mouseX < buttonX + buttonWidth/2 &&
                   mouseY > buttonY - buttonHeight/2 &&
                   mouseY < buttonY + buttonHeight/2;
  
  if (isHovering) {
    fill(180, 190, 200, 230);
  } else {
    fill(110, 200, 195, 220);
  }
  
  noStroke();
  rectMode(CENTER);
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 30);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  textStyle(BOLD);
  text("CONTINUE", buttonX, buttonY);
}

function drawContinueButtonCenter() {
  let buttonX = 720;
  let buttonY = 620;
  let buttonWidth = 200;
  let buttonHeight = 60;
  
  let isHovering = mouseX > buttonX - buttonWidth/2 &&
                   mouseX < buttonX + buttonWidth/2 &&
                   mouseY > buttonY - buttonHeight/2 &&
                   mouseY < buttonY + buttonHeight/2;
  
  if (isHovering) {
    fill(180, 190, 200);
  } else {
    fill(110, 200, 195);
  }
  
  noStroke();
  rectMode(CENTER);
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 30);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  textStyle(BOLD);
  text("CONTINUE", buttonX, buttonY);
}

function drawFindMatchButton() {
  let buttonX = 720;
  let buttonY = 810;
  let buttonWidth = 550;
  let buttonHeight = 90;
  
  let isHovering = mouseX > buttonX - buttonWidth/2 &&
                   mouseX < buttonX + buttonWidth/2 &&
                   mouseY > buttonY - buttonHeight/2 &&
                   mouseY < buttonY + buttonHeight/2;
  
  if (isHovering) {
    fill(255, 120, 80);  // Lighter orange on hover
  } else {
    fill(235, 100, 36);  // Orange
  }
  
  noStroke();
  rectMode(CENTER);
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 45);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont("Niramit");
  textStyle(BOLD);
  text("Find your foster match!", buttonX, buttonY);
}

function drawResults() {
  let readinessLevel = calculateReadiness();
  
  if (readinessLevel === "ready") {
    // "You're foster-ready!" screen
    background(221, 223, 95);  // Yellow background
    
    // Title
    textAlign(CENTER, CENTER);
    textFont("Bagel Fat One");
    textSize(100);
    fill(235, 100, 36);  // Orange text
    text("You're foster-ready!", 720, 130);
    
    // Subtitle
    textFont("Niramit");
    textStyle(BOLD);
    textSize(32);
    fill(0);
    text("You're 80% ready to foster! Your patience is strong,", 720, 225);
    text("your home is cozy, and your foster pet will feel safe with you.", 720, 270);
    
    // Draw rewards badges
    imageMode(CENTER);
// Scale proportionally - adjust this number to resize
let rewardScale = 1.0;  // 0.8 = 80% of original size, 1.0 = 100%, 1.2 = 120%
image(rewardsImg, 720, 530, rewardsImg.width * rewardScale, rewardsImg.height * rewardScale);    
    // Call-to-action button
    drawFindMatchButton();
    
  } else if (readinessLevel === "almost") {
    // "You're almost there!" screen
    background(255, 182, 193);  // Pink background
    
    textAlign(CENTER, CENTER);
    textFont("Bagel Fat One");
    textSize(90);
    fill(235, 100, 36);
    text("You're almost there!", 720, 300);
    
    textFont("Niramit");
    textStyle(NORMAL);
    textSize(36);
    fill(0);
    text("You're 60% ready! A few adjustments and you'll be all set.", 720, 450);
    text("Consider your schedule and space, and you'll be fostering soon!", 720, 500);
    
  } else {
    // "Not there yet" screen
    background(255, 182, 193);  // Pink background
    
    textAlign(CENTER, CENTER);
    textFont("Bagel Fat One");
    textSize(100);
    fill(235, 100, 36);
    text("Not there yet", 720, 300);
    
    textFont("Niramit");
    textStyle(NORMAL);
    textSize(36);
    fill(0);
    text("Fostering might not be the right fit right now.", 720, 450);
    text("But that's okay! You can always revisit when your situation changes.", 720, 500);
  }
}

// ========== BUTTON DRAWING FUNCTIONS ==========

function drawStartButton() {
  let buttonX = 720;
  let buttonY = 630;
  let buttonWidth = 265;
  let buttonHeight = 80;

  // Check if mouse is hovering
  let isHovering =
    mouseX > buttonX - buttonWidth / 2 &&
    mouseX < buttonX + buttonWidth / 2 &&
    mouseY > buttonY - buttonHeight / 2 &&
    mouseY < buttonY + buttonHeight / 2;

  // Change color based on hover
  if (isHovering) {
    fill(247, 194, 202);
  } else {
    fill(221, 223, 95);
  }

  noStroke();
  rectMode(CENTER);
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 40);

  // Button text
  fill(235, 100, 36);
  textSize(60);
  textFont("Niramit");
  textStyle(BOLD);
  text("START", buttonX, buttonY + 1);
}

function drawAnswerButtons(question) {
  textSize(32);
  textStyle(NORMAL);
  rectMode(CENTER);

  // Position buttons based on how many there are
  let positions = getButtonPositions(question.buttons.length);

  for (let i = 0; i < question.buttons.length; i++) {
    let btn = question.buttons[i];
    let pos = positions[i];

    let buttonWidth = 430;
    let buttonHeight = 80;

    // Check if mouse is hovering over this button
    let isHovering =
      mouseX > pos.x - buttonWidth / 2 &&
      mouseX < pos.x + buttonWidth / 2 &&
      mouseY > pos.y - buttonHeight / 2 &&
      mouseY < pos.y + buttonHeight / 2;

    // Change color on hover
    if (isHovering) {
      fill(80, 180, 180);
    } else {
      fill(110, 200, 195);
    }

    noStroke();
    rect(pos.x, pos.y, buttonWidth, buttonHeight, 40);

// Button text
fill(255);

// Use smaller text size if button has parentheses
if (btn.text.includes("(")) {
  textSize(25);  // Smaller for buttons with parentheses
} else {
  textSize(25);  // Normal size
}

text(btn.text, pos.x, pos.y);
  }
}

function drawInfoBadge() {
  let badgeX = 1325;
  let badgeY = 115;
  let badgeSize = 140;

  push();
  translate(badgeX, badgeY);
  rotate(rotationAngle);
  imageMode(CENTER);
  image(infoBadgeImg, 0, 0, badgeSize, badgeSize);
  pop();

  rotationAngle += 0.02;
}

function drawBackBadge() {
  let badgeX = 1325;
  let badgeY = 115;
  let badgeSize = 140;
  
  push();
  translate(badgeX, badgeY);
  rotate(rotationAngle);
  imageMode(CENTER);
  image(backToQImg, 0, 0, badgeSize, badgeSize);
  pop();
  
  // rotationAngle is already being updated in draw()
}

function drawScenarioButtons(scenario) {
  textSize(24);
  textStyle(NORMAL);
  rectMode(CENTER);

  // Positions for 4 buttons (2x2 grid)
  let positions = [
    { x: 410, y: 287 }, // Top left
    { x: 1020, y: 287 }, // Top right
    { x: 410, y: 390 }, // Bottom left
    { x: 1020, y: 390 }, // Bottom right
  ];

  for (let i = 0; i < scenario.buttons.length; i++) {
    let btn = scenario.buttons[i];
    let pos = positions[i];

    let buttonWidth = 550;
    let buttonHeight = 80;

    // Check hover
    let isHovering =
      mouseX > pos.x - buttonWidth / 2 &&
      mouseX < pos.x + buttonWidth / 2 &&
      mouseY > pos.y - buttonHeight / 2 &&
      mouseY < pos.y + buttonHeight / 2;

    // Button background - seni-transparent
    if (isHovering) {
      fill(180, 190, 200, 230);
    } else {
      fill(200, 200, 220, 200);
    }

    noStroke();
    rect(pos.x, pos.y, buttonWidth, buttonHeight, 40);

    // Button text
    fill(40, 50, 80);
    text(btn.text, pos.x, pos.y);
  }
}

// ========== HELPER FUNCTIONS ==========
function getButtonPositions(numButtons) {
  if (numButtons === 3) {
    return [
      { x: 435, y: 512 }, // Left button - shifted right from 385 to 435
      { x: 965, y: 512 }, // Right button - shifted right from 915 to 965
      { x: 685, y: 626 }, // Bottom center button - shifted right from 635 to 685
    ];
  } else if (numButtons === 2) {
    return [
      { x: 570, y: 512 }, // Left button - shifted right from 520 to 570
      { x: 970, y: 512 }, // Right button - shifted right from 920 to 970
    ];
  } else if (numButtons === 4) {
    return [
      { x: 435, y: 512 }, // Top left - shifted right from 385 to 435
      { x: 965, y: 512 }, // Top right - shifted right from 915 to 965
      { x: 435, y: 626 }, // Bottom left - shifted right from 385 to 435
      { x: 965, y: 626 }, // Bottom right - shifted right from 915 to 965
    ];
  }
}

function updateCursor() {
  if (GAMESTATE === "QUESTIONS") {
    let d = dist(mouseX, mouseY, 1325, 115);
    if (d < 70) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }
}

// Scoring System
function calculateReadiness() {
  let score = 0;
  
  // QUESTIONS SECTION (12 points total possible)
  // Questions assess readiness and flexibility
  
  // Question 1: Animal type (2 points)
  if (userAnswers[0] === "dog" || userAnswers[0] === "cat" || userAnswers[0] === "other") {
    score += 2;  // Any preference is fine - shows you've thought about it
  }
  
  // Question 2: Age range (2 points)
  if (userAnswers[1] === "adult") {
    score += 2;  // Adults are easiest for first-time fosters
  } else if (userAnswers[1] === "senior") {
    score += 2;  // Seniors also great, often overlooked
  } else if (userAnswers[1] === "young") {
    score += 1;  // Young/neonatal requires more work but shows commitment
  }
  
  // Question 3: Size (2 points)
  if (userAnswers[2] === "any") {
    score += 2;  // Flexibility is valuable
  } else {
    score += 1;  // Having a preference is okay, just less flexible
  }
  
  // Question 4: Activity level (2 points)
  if (userAnswers[3] === "any") {
    score += 2;  // Adaptability is key
  } else {
    score += 1;  // Knowing your limits is also responsible
  }
  
  // Question 5: Time available (2 points)
  if (userAnswers[4] === "4+") {
    score += 2;  // Plenty of time for a foster
  } else if (userAnswers[4] === "1–3") {
    score += 1;  // Can work with the right animal
  } else if (userAnswers[4] === "-1") {
    score += 0;  // May not be enough time
  } else if (userAnswers[4] === "uncertain") {
    score += 1;  // Honesty is good, can figure it out
  }
  
  // Question 6: Care level (2 points)
  if (userAnswers[5] === "basic" || userAnswers[5] === "behavior") {
    score += 2;  // Willing to handle typical foster needs
  } else if (userAnswers[5] === "intense") {
    score += 2;  // Advanced but shows strong commitment
  } else if (userAnswers[5] === "healthy") {
    score += 1;  // Okay to start simple
  }
  
  // SCENARIOS SECTION (18 points total possible)
  // Scenarios test real-world judgment - weighted more heavily
  
  // Scenario 1: Puppy crying at night (6 points possible)
  if (scenarioAnswers[0] === "outside") {
    score += 6;  // Best answer - understands puppy needs
  } else if (scenarioAnswers[0] === "water") {
    score += 4;  // Second best - shows care but may delay bathroom break
  } else if (scenarioAnswers[0] === "bed") {
    score += 2;  // Compassionate but creates bad habits
  } else if (scenarioAnswers[0] === "cry") {
    score += 0;  // Not understanding young puppy needs
  }
  
  // Scenario 2: Destructive puppy (6 points possible)
  if (scenarioAnswers[1] === "cleanup") {
    score += 6;  // Best answer - understands it's normal, takes responsibility
  } else if (scenarioAnswers[1] === "realize") {
    score += 4;  // Second best - recognizes the issue
  } else if (scenarioAnswers[1] === "coordinator") {
    score += 2;  // Shows communication but may not recognize normalcy
  } else if (scenarioAnswers[1] === "frustrated") {
    score += 1;  // Understandable emotion but not constructive
  }
  
  // Scenario 3: BBQ socialization (6 points possible)
  if (scenarioAnswers[2] === "leash") {
    score += 6;  // Best answer - balanced approach to socialization
  } else if (scenarioAnswers[2] === "vaccination") {
    score += 4;  // Second best - important safety consideration
  } else if (scenarioAnswers[2] === "socialization") {
    score += 2;  // Right idea but may be too overwhelming
  } else if (scenarioAnswers[2] === "risky") {
    score += 1;  // Too cautious, limiting important development
  }
  
  // Total possible score: 30 points
  // Questions: 12 points (40%)
  // Scenarios: 18 points (60%)
  
  // Return result level based on score
  if (score >= 24) {
    return "ready";  // 80%+ ready
  } else if (score >= 15) {
    return "almost";  // 50-79% ready
  } else {
    return "not-yet";  // Under 50% ready
  }
}

// ========== CLICK HANDLING ==========

function mousePressed() {
  if (GAMESTATE === "MENU") {
    handleMenuClick();
  } else if (GAMESTATE === "QUESTIONS") {
    handleQuestionClick();
} else if (GAMESTATE === "SCENARIOS") {
    handleScenarioClick();
  } else if (GAMESTATE === "RESULTS") {
    handleResultsClick();
  }
}

function handleMenuClick() {
  // Check if START button was clicked
  let buttonX = 720;
  let buttonY = 630;
  let buttonWidth = 265;
  let buttonHeight = 80;

  if (
    mouseX > buttonX - buttonWidth / 2 &&
    mouseX < buttonX + buttonWidth / 2 &&
    mouseY > buttonY - buttonHeight / 2 &&
    mouseY < buttonY + buttonHeight / 2
  ) {
    GAMESTATE = "QUESTIONS";
    currentQuestionIndex = 0;
    userAnswers = [];
  }
}

function handleQuestionClick() {
  // Don't allow clicks during animation
  if (animatingToInfo || animatingFromInfo) {
    return;
  }
  
  // Check if back badge was clicked (when showing why matters)
  if (showingWhyMatters) {
    let d = dist(mouseX, mouseY, 1325, 115);
    if (d < 70) {
      animatingFromInfo = true;  // Start animation back
      animationProgress = 0;
      return;
    }
  }
  
  // Check if info badge was clicked
  let d = dist(mouseX, mouseY, 1325, 115);
  if (d < 70) {
    animatingToInfo = true;  // Start animation to info
    animationProgress = 0;
    return;
  }
  
  // Answer button clicks
  let currentQ = questions[currentQuestionIndex];
  let positions = getButtonPositions(currentQ.buttons.length);
  
  for (let i = 0; i < currentQ.buttons.length; i++) {
    let btn = currentQ.buttons[i];
    let pos = positions[i];
    let buttonWidth = 430;
    let buttonHeight = 80;
    
    if (mouseX > pos.x - buttonWidth/2 &&
        mouseX < pos.x + buttonWidth/2 &&
        mouseY > pos.y - buttonHeight/2 &&
        mouseY < pos.y + buttonHeight/2) {
      
      userAnswers.push(btn.value);
      console.log("Clicked:", btn.text);
      
      currentQuestionIndex++;
      if (currentQuestionIndex >= questions.length) {
        GAMESTATE = "SCENARIOS";
        currentScenarioIndex = 0;
      }
    }
  }
}

function handleScenarioClick() {
  
  // If showing feedback, check for Continue button
  if (showingFeedback) {
    let lastAnswer = scenarioAnswers[scenarioAnswers.length - 1];
    
let buttonX, buttonY;
// Check if this answer gets custom image with left-positioned button
if ((currentScenarioIndex === 0 && lastAnswer === "outside") ||
    (currentScenarioIndex === 1 && lastAnswer === "cleanup") ||
    (currentScenarioIndex === 2 && lastAnswer === "leash")) {
  buttonX = 350;
  buttonY = 290;
} else {
  buttonX = 720;
  buttonY = 620;
}
    
    let buttonWidth = 200;
    let buttonHeight = 60;
    
    if (mouseX > buttonX - buttonWidth/2 &&
        mouseX < buttonX + buttonWidth/2 &&
        mouseY > buttonY - buttonHeight/2 &&
        mouseY < buttonY + buttonHeight/2) {
      
      showingFeedback = false;
      currentScenarioIndex++;
      
      if (currentScenarioIndex >= scenarios.length) {
        GAMESTATE = "RESULTS";
      }
    }
    return;
  }
  
  // Normal scenario button clicks
  let currentScenario = scenarios[currentScenarioIndex];
  
  let positions = [
    { x: 410, y: 287 },
    { x: 1020, y: 287 },
    { x: 410, y: 390 },
    { x: 1020, y: 390}
  ];
  
  for (let i = 0; i < currentScenario.buttons.length; i++) {
    let btn = currentScenario.buttons[i];
    let pos = positions[i];
    let buttonWidth = 550;
    let buttonHeight = 80;
    
    if (mouseX > pos.x - buttonWidth/2 &&
       mouseX < pos.x + buttonWidth/2 &&
       mouseY > pos.y - buttonHeight/2 &&
       mouseY < pos.y + buttonHeight/2) {
      
      scenarioAnswers.push(btn.value);
      console.log("Scenario choice:", btn.text);
      
      showingFeedback = true;
    }
  }
}

function handleResultsClick() {
  // Placeholder for results page interactions
}
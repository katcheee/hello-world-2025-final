# hello-world-2025-final
# Ready to Foster? - Interactive Pet Fostering Assessment Game

Many people want to foster pets, but don't fully understand what daily fostering actually involves.  

This project is designed to help potential foster pet parents assess their readiness for fostering through a simple, interactive game, rather than lengthy forms. It also helps them discover what type of foster animal might be the best match for their lifestyle.

## Overview

This game guides users through a series of questions and real-life-inspired scenarios to evaluate their fostering readiness. Based on their responses, users receive personalized feedback and recommendations for next steps in their fostering journey.

👉 **[Play the game online (https://editor.p5js.org/katcheee/full/YSQs6yPzM)]**

 ## Gameplay Preview

![Main Menu](https://github.com/user-attachments/assets/c267104b-a18e-4c4b-8837-97dac7312ce7)
![Question Screen](https://github.com/user-attachments/assets/97ba9128-7d6e-406c-9341-f436c3db4fc1)
![Scenario](https://github.com/user-attachments/assets/2f16d5e0-7467-4b2a-849c-887d758597b5)
![Result](https://github.com/user-attachments/assets/751b31f4-1c94-4399-8b10-6b4bbd43d5ea)

## Features

### 1. Welcome Screen
- Title: "Ready to Foster?"
- Clear explanation of the game's purpose
- Visual peek preview of what's to come
- Start button to begin the assessment

### 2. Question Phase (6 Questions)
Users answer questions about their lifestyle and preferences:
- **Animal preference**: Dogs, cats, or either
- **Age range**: Neonatal/young, adult, or senior animals
- **Size preference**: Small, medium, large, or any size
- **Activity level**: Low, moderate, high energy, or flexible
- **Time availability**: Daily time commitment they can provide
- **Care level comfort**: From healthy animals only to intensive care

**Interactive "Why does this matter?" Feature:**
- Rotating badge in corner of each question
- Click to reveal educational content about why each question is important
- Smooth animated transition to orange background with detailed explanations
- Helps users make informed decisions and understand foster care needs
- Click "Back to Question" badge to return

### 3. Scenario Phase (3 Real-Life Situations)
Users face realistic fostering challenges:

**Scenario 1: Late-Night Puppy Care**
- 2:30 AM puppy crying in crate
- Tests understanding of young animal needs and appropriate responses

**Scenario 2: Destructive Behavior**
- Coming home to a destroyed room
- Evaluates ability to handle normal puppy behavior constructively

**Scenario 3: Socialization Opportunity**
- Neighborhood BBQ invitation with young puppy
- Assesses judgment about appropriate socialization timing and safety

**Feedback System:**
- Custom illustrated feedback for best answers
- Educational explanations for all choices
- Helps users learn regardless of their selection
- Continue button advances to next scenario

### 4. Results Screen (3 Possible Outcomes)

Based on a 30-point scoring system:

#### "You're foster-ready!" (24+ points / 80%+)
- **Visual**: Yellow background with orange text
- **Display**: Animated rewards badges showing achievements
- **Message**: Celebrates user's readiness and patience
- **Call-to-Action**: Large "Find your foster match!" button

**Intended Next Steps:**
- Link to local animal shelter foster programs
- Personalized animal recommendations based on quiz answers:
  - Animal type (dog/cat)
  - Ideal age range
  - Recommended size
  - Activity level match
  - Time commitment suggestions
  - Care level capabilities
- Direct contact information for foster coordinators
- Resources for first-time fosters

#### "You're almost there!" (15-23 points / 50-79%)
- **Visual**: Pink background with orange title
- **Message**: Encouraging feedback about being 60% ready
- **Guidance**: Identifies areas for adjustment (schedule, space)

**Intended Next Steps:**
- Tips for preparing home and schedule
- Checklist of items to consider before fostering
- Links to foster preparation resources
- Option to retake quiz after making adjustments
- Information about foster support programs
- Alternative involvement options:
  - Volunteer at local shelter
  - Become a temporary foster (weekends only)
  - Support foster families through supply donations
  - Join foster community groups for learning

#### "Not there yet" (0-14 points / <50%)
- **Visual**: Pink background with orange title
- **Message**: Honest but supportive feedback
- **Reassurance**: Emphasizes that timing matters and situations change

**Intended Next Steps:**
- Alternative ways to help animals:
  - **Volunteer opportunities**: Dog walking, cat socialization, facility maintenance
  - **Donation drives**: Food, supplies, monetary contributions
  - **Advocacy**: Share shelter posts, attend fundraising events
  - **Education**: Learn more about animal welfare
- Resources for when circumstances change
- Option to sign up for foster readiness updates
- Links to virtual volunteering (social media support, grant writing, graphic design)
- "Check back later" reminder with email notification option

## Scoring System

### Total Points: 30
- **Questions**: 12 points (40% of total)
- **Scenarios**: 18 points (60% of total)

### Question Scoring Breakdown

1. **Animal Type** (2 points): Any preference shows thoughtfulness
2. **Age Range** (2 points): 
   - Adult/Senior: 2 points (easier for first-time fosters)
   - Young/Neonatal: 1 point (higher commitment)
3. **Size** (2 points):
   - Any size: 2 points (flexibility valued)
   - Specific size: 1 point (valid preference)
4. **Activity Level** (2 points):
   - Flexible: 2 points (adaptability key)
   - Specific level: 1 point (knowing limits is responsible)
5. **Time Available** (2 points):
   - 4+ hours: 2 points
   - 1-3 hours: 1 point
   - Less than 1 hour: 0 points
   - Uncertain: 1 point (honesty valued)
6. **Care Level** (2 points):
   - Basic/Behavior/Intensive: 2 points
   - Healthy only: 1 point (okay to start simple)

### Scenario Scoring (6 points each)

Each scenario rewards best judgment and understanding:
- **Best answer**: 6 points (demonstrates thorough understanding)
- **Second best**: 4 points (good judgment with minor gaps)
- **Acceptable**: 2 points (shows care but may have misconceptions)
- **Poor choice**: 0-1 points (needs more learning)

## Technical Details

### Built With
- **p5.js**: JavaScript library for creative coding
- **Custom fonts**: "Bagel Fat One" for titles, "Niramit" for body text
- **Assets**: Custom illustrations for scenarios and feedback screens

### File Structure
```
project/
├── sketch.js (main game code)
├── index.html (p5.js setup)
├── badge-image.png (rotating "Why matters?" badge)
├── backtoq.png (rotating "Back to question" badge)
├── scenario1.png (late-night puppy scenario)
├── scenario1-after.png (feedback illustration)
├── scenario2.png (destructive behavior scenario)
├── scenario2-after.png (feedback illustration)
├── scenario3.png (BBQ socialization scenario)
├── scenario3-after.png (feedback illustration)
├── rewards.png (achievement badges for results)
└── peek.png (menu screen preview image)
```

### Canvas Size
1440 × 1024 pixels

### Color Palette
- **Orange**: rgb(235, 100, 36) - Primary brand color
- **Pink**: rgb(255, 182, 193) - Question screens
- **Yellow-Green**: rgb(221, 223, 95) - Accent and results
- **Teal**: rgb(110, 200, 195) - Interactive buttons
- **Dark Navy**: rgb(20, 30, 60) - Scenario backgrounds

## Game Flow

```
MENU
  ↓ (Click START)
QUESTIONS (6 questions)
  ↓ (Each question can show "Why matters?" info)
SCENARIOS (3 situations)
  ↓ (Feedback after each choice)
RESULTS
  ↓ (Find foster match / Get preparation tips / Alternative ways to help)
```

## Key Interactions

### Rotating Badge System
- Orange "Why does this matter?" badge rotates continuously
- Click triggers smooth circular wipe animation from badge position
- Content fades in as animation progresses
- Pink "Back to Question" badge appears with same rotation
- Click triggers reverse animation back to question

### Button Hover States
- All buttons change color on hover for clear affordance
- Custom cursor changes to hand pointer over clickable badges
- Provides immediate visual feedback for interactive elements

### Responsive Feedback
- Custom illustrations appear for optimal scenario choices
- Educational explanations for all choices
- Continuous learning opportunity regardless of selection

## Educational Goals

1. **Inform realistic expectations** about foster care demands
2. **Highlight urgent needs** (e.g., neonatal kittens, large dogs)
3. **Teach proper responses** to common fostering situations
4. **Reduce returns** by ensuring preparedness
5. **Guide users** to appropriate involvement levels
6. **Connect people** to shelter resources and support

## Future Enhancements

### Immediate Development Needs

1. **Results Screen Actions**
   - Implement "Find your foster match!" button functionality
   - Create recommendation engine based on user answers
   - Link to real shelter foster programs in user's area
   - Generate personalized PDF with quiz results and recommendations

2. **Alternative Pathway Screens**
   - "Almost there" screen: Interactive preparation checklist
   - "Not yet" screen: Browse volunteer/donation options
   - Email capture for follow-up resources
   - Social share buttons to spread awareness

3. **Resource Integration**
   - Database of local shelters and foster programs
   - API integration with Petfinder or shelter management systems
   - Real-time availability of foster-needed animals
   - Calendar integration for volunteer shifts

### Enhanced Features

- **Progress saving**: Allow users to return and continue
- **Retake option**: Try quiz again after preparation
- **Share results**: Social media integration
- **Print option**: PDF summary of readiness and recommendations
- **Multilingual support**: Reach broader audience
- **Mobile optimization**: Touch-friendly responsive design
- **Analytics**: Track which questions/scenarios are most educational
- **Additional scenarios**: Expand scenario library based on real foster experiences
- **Foster stories**: Testimonials from successful fosters
- **Cost calculator**: Estimate time and resource commitment

## Design Philosophy

The game balances **honesty with encouragement**:
- Doesn't sugarcoat the challenges of fostering
- Celebrates all levels of animal welfare involvement
- Provides educational value even for those not ready to foster
- Recognizes that "not now" doesn't mean "never"
- Emphasizes that every contribution helps (fostering, volunteering, donations)

## Target Audience

- Potential first-time foster parents
- Animal lovers curious about fostering
- People looking for ways to help shelters
- Educators teaching about animal welfare
- Shelter staff for volunteer orientation

## Credits

Created as part of a service design and interactive technology project focused on community engagement and animal welfare.

---

## Getting Started

1. Open `index.html` in a modern web browser
2. Click START to begin your fostering readiness assessment
3. Answer 6 questions about your lifestyle and preferences
4. Navigate 3 real-world fostering scenarios
5. Receive personalized results and recommendations

**Note**: This is an educational tool and assessment guide. Final fostering decisions should always involve consultation with local animal shelters and rescue organizations.


👩‍🎨 About the Authors

Designed and developed by **Kathy & Yuxuan**  
Interaction Design students at the School of Visual Arts (SVA)

This project explores how interactive design can support better decision-making around pet fostering.

---

## Development Notes

This project was developed with AI assistance (Claude) to help with specific coding challenges:

**AI was used for:**
- Setting up initial code structure and interaction systems
- Locating where to make custom changes (colors, font sizes, positioning)
- Implementing specific interactive features (rotating badges, animations, hover states)
- Troubleshooting and validating code changes

**We handled independently:**
- All design decisions and visual assets
- Game content (questions, scenarios, feedback text)
- Adding preloaded images and draw functions once the base was established
- Final customizations and refinements

Once the foundational code structure was in place, it became easier to understand how different parts connected and make our own modifications. AI was used as a learning tool to understand p5.js patterns and double-check our implementations.
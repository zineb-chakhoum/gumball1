# Agent Guide: The Watterson Family Universe

This is a vanilla HTML/CSS/JavaScript project - no build tools, no npm, no bundling. A simple, interactive fan website about The Amazing World of Gumball.

## Project Structure

```
gumball/
├── index.html          # Single HTML file containing all pages (Home, Family, Quiz)
├── styles.css          # All animations, styling, and responsive design
├── script.js           # All interactions, quiz logic, character data
├── assets/
│   ├── characters/    # Character GIFs (gitignored but documented in README)
│   ├── sounds/        # Sound effects (gitignored but documented in README)
│   └── videos/        # Character moment videos (gitignored but documented in README)
├── README.md          # Comprehensive project documentation
└── QUICKSTART.md      # Quick start guide
```

## Essential Commands

### Running the Project

```bash
# Option 1: Direct file open (easiest)
# Just double-click index.html

# Option 2: Local server (recommended for full functionality)
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: VS Code Live Server
# Install "Live Server" extension, right-click index.html, select "Open with Live Server"
```

### No Build/Test Commands

This is a static project with no build step, no testing framework, and no package manager. Manual testing in the browser is required.

## Architecture & Data Flow

### Page Navigation

- **Single Page Application (SPA) pattern**: All pages exist in `index.html` as `<section>` elements with `.page` class
- **Navigation via JavaScript**: `showPage(pageId)` function toggles `.active` class on pages
- **Pages**: `home-page`, `family-page`, `quiz-page`
- No actual page reloads - all navigation happens via DOM manipulation

### Character Data

- **Centralized in script.js**: `characters` object (lines 2-219) contains all character data
- **Structure per character**:
  ```javascript
  {
      name: string,
      bio: string,
      personality: string,
      traits: string[],
      facts: string[],
      quotes: string[],
      image: string (path, .jpg),
      gif: string (path, .gif for action),
      video: string (path),
      sound: string (path),
      colors: { primary: hex, secondary: hex }
  }
  ```
- **Character IDs**: `gumball`, `darwin`, `anais`, `nicole`, `richard`, `jojo`, `penny`, `carrie`

### Quiz System

- **Questions in script.js**: `quizQuestions` object (lines 222-319)
- **Structure**:
  ```javascript
  {
      easy: [],
      chaos: [],
      nightmare: []
  }
  ```
- **Question format**:
  ```javascript
  {
      question: string,
      options: string[],
      correct: number (index),
      type: "multiple-choice" | "true-false" | "who-said"
  }
  ```
- **Quiz state**: `quizState` object tracks score, combo, current question, timer
- **Timer**: 30 seconds per question, resets for each question
- **Combo system**: Max combo of 5x, multiplies points (10 points × combo)

### Event Handling

- **DOMContentLoaded**: Initializes all systems (lines 334-341)
- **Character cards**: Click plays character sound, "Learn More" button shows details modal
- **Modal**: Closes on X button click or clicking outside modal content
- **Swipe gestures**: Touch events for mobile navigation (lines 973-1013)

## Naming Conventions

### CSS Classes

- **Page navigation**: `.page`, `.page.active`, `#page-container`
- **Character cards**: `.char-card`, `.char-card[data-character="id"]`, `.card-border`
- **Character-specific**: `.gumball-card`, `.darwin-card`, etc.
- **Glow effects**: `.char-glow`, `.gumball-glow`, `.darwin-glow`, etc.
- **Quiz**: `.quiz-container`, `.quiz-game`, `.quiz-result`, `.answer-btn`
- **Buttons**: `.btn-primary`, `.btn-secondary`, `.details-btn`, `.difficulty-btn`
- **Modal**: `.details-container`, `.details-container.active`
- **Utilities**: `.hidden`, `.glass`, `.comic-border`

### JavaScript Functions

- **Page navigation**: `showPage(pageId)`
- **Character**: `showCharacterDetails(characterId)`, `closeCharacterDetails()`, `playCharacterSound(characterId)`
- **Quiz**: `startQuiz(difficulty)`, `displayQuestion()`, `selectAnswer(index)`, `endQuiz()`, `restartQuiz()`
- **Audio**: `playSound(type)`, `initializeMusicToggle()`
- **Effects**: `createConfetti()`, `setMood(mood)`, `initializeCursorTrail()`
- **Easter eggs**: `initializeEasterEggs()`, `activateSecretMode()`

## Code Patterns

### Character Card Effects

Each character has unique visual effects defined in CSS (lines 594-835):
- **Gumball**: Sparkles (`.sparkle`)
- **Darwin**: Bubbles (`.bubble`)
- **Anais**: Floating equations (`.equation`)
- **Nicole**: Rage pulse (`.rage-pulse`)
- **Richard**: Falling food (`.food-drop`)
- **Jojo**: TV glitch (`.tv-glitch`)
- **Penny**: Heart particles (`.heart-particle`)
- **Carrie**: Ghost float (`.ghost-float`)

Pattern: `[character]-effects` class container with specific child elements

### Modal System

- **HTML**: Modal exists in DOM but hidden via CSS (`.details-container` with `opacity: 0; visibility: hidden`)
- **Activation**: Add `.active` class to show (opacity: 1; visibility: visible)
- **Content population**: `showCharacterDetails()` function populates all content dynamically based on character data
- **Close methods**: X button, clicking outside modal, calling `closeCharacterDetails()`

### Quiz Answer Selection

```javascript
function selectAnswer(selectedIndex) {
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === question.correct) {
        // Add .correct class for green styling
        buttons[selectedIndex].classList.add('correct');
        playSound('correct');
        // Update score and combo
    } else {
        // Add .wrong class for red styling
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
        playSound('wrong');
        quizState.combo = 1; // Reset combo
    }

    // Move to next question after 1.5s delay
    setTimeout(() => {
        quizState.currentQuestion++;
        if (quizState.currentQuestion < quizState.questions.length) {
            displayQuestion();
            resetTimer();
        } else {
            endQuiz();
        }
    }, 1500);
}
```

### Sound System

The project uses a **hybrid audio system**:

**UI Sounds (Generated with Web Audio API):**
- `playSound('click')` - Short, crisp button click sound (0.1s)
- `playSound('hover')` - Subtle hover sound (0.15s)
- `playSound('correct')` - Cheerful ding with ascending notes
- `playSound('wrong')` - Funny buzzer with descending sawtooth wave
- `playSound('success')` - Celebratory fanfare with 4 ascending notes

**Character Sounds (MP3 Files):**
- `playCharacterSound('gumball')` - Plays `assets/sounds/gumball.mp3`
- `playCharacterSound('darwin')` - Plays `assets/sounds/darwin.mp3`
- `playCharacterSound('anais')` - Plays `assets/sounds/anais.mp3`
- `playCharacterSound('nicole')` - Plays `assets/sounds/nicole.mp3`
- `playCharacterSound('richard')` - Plays `assets/sounds/richard.mp3`
- `playCharacterSound('jojo')` - Plays `assets/sounds/jojo.mp3`
- `playCharacterSound('penny')` - Plays `assets/sounds/penny.mp3`
- `playCharacterSound('carrie')` - Plays `assets/sounds/carrie.mp3`

**Background Music (MP3 File):**
- Uses `assets/sounds/background-music.mp3`
- Toggled via music button, loops continuously
- Volume controlled via HTML5 Audio API

**Audio Functions in script.js:**
- Lines 540-688: Audio system
- `generateSound(type)` - Creates UI sounds with oscillators
- `playCharacterSound(characterId)` - Plays character MP3 files

### CSS Animations

- **Keyframes defined inline**: Most animations in styles.css (e.g., `@keyframes float`, `@keyframes wobble`)
- **Dynamic animations**: Some added via JavaScript in script.js (lines 898-962)
- **Performance**: Uses `transform` and `opacity` for GPU acceleration
- **Naming pattern**: `[element]-[action]` (e.g., `bubble-rise`, `sparkle-float`, `food-fall`)

## Important Gotchas

### Media Files

- **All media files are gitignored**: See `.gitignore` - assets won't be in repository
- **Audio files needed**: 
  - `assets/sounds/background-music.mp3` - Background music (looping)
  - `assets/sounds/gumball.mp3` through `carrie.mp3` - Character voice files (8 total)
- **UI sounds NOT needed**: click, hover, correct, wrong, success are generated with Web Audio API
- **Video/Character images still needed**: Characters still need images, GIFs, and video files in `assets/` subdirectories
- **Path references assume files exist**: The code assumes media files are in `assets/` subdirectories
- **Graceful degradation**: Audio/video fails silently with `.catch()` handlers
- **Missing files show as broken images**: No fallback UI for missing media
- **Don't add media files to git**: They're intentionally excluded

### Anais Character

- **Special main image**: `anais-smart.jpg` represents her "Smart Anais" trait (documented in README:76)
- **Must show intelligence**: When selecting/creating Anais media, emphasize genius/evil genius aspect
- **Consistent naming**: Note the `-smart` suffix on main image (JPG) vs `-thinking` for action GIF

### Quiz Timer

- **Resets per question**: Timer doesn't continue between questions - resets to 30s
- **Auto-advance on timeout**: If timer hits 0, automatically moves to next question (not game over)
- **Color changes**: Timer bar turns yellow at 50%, red at 20%

### Mobile Swipe Navigation

- **Works on all pages**: Swipe left = next page, swipe right = previous page
- **Threshold**: 50px minimum swipe distance
- **Page order**: home-page → family-page → quiz-page
- **Can swipe past boundaries**: Code checks index bounds before navigating

### Mood Mode

- **Only in character details modal**: Mood buttons change modal background color
- **Three modes**: happy (green gradient), chaotic (red gradient + shake animation), dramatic (purple gradient)
- **Temporary**: Mood is reset when modal closes (no persistence)
- **CSS class approach**: Adds `.mood-[mood]` class to `.details-content`

### Konami Code

- **Sequence**: ↑↑↓↓←→←→BA (ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a)
- **Effect**: Activates rainbow mode (hue-rotate animation on body)
- **State tracking**: Maintains last 10 keystrokes in array
- **Alert**: Shows alert popup when activated

### CSS Specificity

- **Glassmorphism**: Uses `backdrop-filter: blur()` for frosted glass effect
- **Z-index layers**:
  - Loading screen: 10000
  - Music toggle: 1000
  - Modal: 1000 (container), 1001 (close button)
  - Cursor trails: 9999
  - Background elements: 1
  - Page container: 10
- **Hidden elements**: Use `.hidden` class with `display: none !important` for critical hiding

## Adding Content

### Adding a Character

1. **Add to `characters` object in script.js**:
   ```javascript
   newcharacter: {
       name: "Character Name",
       bio: "Biography text",
       personality: "Personality description",
       traits: ["trait1", "trait2", ...],
       facts: ["fact1", "fact2", ...],
       quotes: ["quote1", "quote2", ...],
       image: "assets/characters/newcharacter.gif",
       gif: "assets/characters/newcharacter-action.gif",
       video: "assets/videos/newcharacter-moment.mp4",
       sound: "assets/sounds/newcharacter.mp3",
       colors: {
           primary: "#HEX",
           secondary: "#HEX"
       }
   }
   ```

2. **Add card HTML to index.html** (in `.character-grid`):
   - Follow existing pattern (lines 110-296)
   - Use `data-character="newcharacter"` attribute
   - Add character-specific glow CSS class (e.g., `.newcharacter-glow`)
   - Add unique card effects CSS class (e.g., `.newcharacter-effects`)

3. **Add CSS for new character**:
   - `.newcharacter-card` (optional, for specific styling)
   - `.newcharacter-glow` (required for hover effect)
   - `.newcharacter-effects` child elements (for unique animations)

### Adding Quiz Questions

Add to appropriate difficulty array in `quizQuestions` object (lines 222-319):

```javascript
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 0, // Index of correct answer (0-based)
    type: "multiple-choice" // or "true-false" or "who-said"
}
```

### Adding a New Page

1. **Add HTML section to index.html**:
   ```html
   <section id="new-page" class="page">
       <!-- Page content -->
   </section>
   ```

2. **Call `showPage('new-page')`** to navigate to it
3. **Add CSS styling** as needed
4. **Note**: Pages appear in DOM order for swipe navigation

## Customization

### Changing Colors

Edit `styles.css`:
- **Character glows**: Search for `*-glow` classes (lines 513-543)
- **Background gradient**: `body` selector (line 11)
- **Button colors**: `.btn-primary`, `.btn-secondary` (lines 374-384)
- **Quiz difficulty buttons**: `.difficulty-btn.easy`, `.chaos`, `.nightmare` (lines 1130-1140)

### Modifying Quiz Behavior

- **Timer duration**: Change `30` in `startTimer()` (line 678) and `updateTimerBar()` (line 718)
- **Points per question**: Change `10` in `selectAnswer()` (line 641)
- **Max combo**: Change `5` in `selectAnswer()` (line 643)
- **Question count**: Add more questions to difficulty arrays

### Adjusting Animations

- **Loading screen duration**: Change `3000` in `initializeLoadingScreen()` (line 368)
- **Cursor trail density**: Change `0.7` in `initializeCursorTrail()` (line 376)
- **Random popup frequency**: Change `0.95` in `initializeEasterEggs()` (line 842)
- **Confetti count**: Change `50` in `createConfetti()` (line 803)

## Testing Notes

- **No automated tests**: Manual testing required
- **Test on multiple browsers**: Chrome, Firefox, Safari, Edge
- **Test mobile view**: Use browser DevTools device emulation
- **Test audio**: Ensure sound files load and play correctly
- **Test swipe gestures**: On mobile devices or DevTools touch emulation
- **Test Konami code**: ↑↑↓↓←→←→BA should activate rainbow mode
- **Test all character cards**: Click cards, check sounds and details modal
- **Test quiz all difficulties**: Easy, Chaos, Nightmare
- **Test mood modes**: Happy, Chaotic, Dramatic buttons in modal
- **Test navigation**: All buttons, back buttons, swipe gestures
- **Test modal close**: X button, clicking outside, escape key (if added)

## Performance Considerations

- **Large media files**: Not in repository but will affect load time when added
- **No lazy loading**: All images load immediately
- **CSS animations**: Use `transform` and `opacity` for GPU acceleration
- **No bundling**: All CSS/JS loaded as-is (good for small projects, not for large ones)
- **Cursor trails**: Created/removed frequently (one every few mouse moves)
- **Confetti**: Creates 50 DOM elements, removes after animation

## Browser Compatibility

- **Modern browsers only**: Uses CSS features like `backdrop-filter`, custom properties
- **No polyfills**: Not included
- **ES6+ JavaScript**: Uses arrow functions, template literals, destructuring, etc.
- **Audio**: Uses HTML5 Audio API
- **Touch events**: Used for mobile swipe gestures
- **Not tested on IE11**: Likely won't work

// CHARACTER DATA WITH TRAITS AND MEDIA
const characters = {
    gumball: {
        name: "Gumball Watterson",
        bio: "A 12-year-old blue cat who attends Elmore Junior High. He's the protagonist of the show and always finds himself in chaotic situations.",
        personality: "Gumball is extremely chaotic and impulsive. He often makes terrible decisions but has a good heart underneath all the sarcasm. He's loyal to his friends and family, especially Darwin, and gets jealous easily. Despite his chaotic nature, he's creative and surprisingly emotional when it matters most.",
        traits: ["🌀 Chaotic", "😄 Funny", "🎭 Dramatic", "💖 Loyal Friend", "💡 Creative", "😤 Impulsive"],
        facts: [
            "He's afraid of the planet Saturn",
            "His full name is Gumball Tristopher Watterson",
            "He once got married to a pile of trash",
            "He has a crush on Penny Fitzgerald",
            "He's terrible at math but tries his best"
        ],
        quotes: [
            '"I\'m not lazy, I\'m just on energy saving mode."',
            '"That\'s it! I\'m done being responsible!"',
            '"Darwin, you\'re the best brother ever!"',
            '"Why does everything bad happen to me?"'
        ],
        image: "assets/characters/gumball.jpg",
        gif: "assets/characters/gumball-action.gif",
        video: "assets/videos/gumball-moment.mp4",
        sound: "assets/sounds/gumball.mp3",
        colors: {
            primary: "#00BFFF",
            secondary: "#1E90FF"
        }
    },
    darwin: {
        name: "Darwin Watterson",
        bio: "Gumball's adoptive brother and best friend. He's a fish with legs who grew legs after needing more attention.",
        personality: "Darwin is the emotional heart of the group. He's incredibly kind-hearted, innocent, and often serves as the moral compass. Despite his innocence, he can be surprisingly savage when pushed. He's optimistic, sweet, and deeply cares about everyone around him.",
        traits: ["💕 Kind-hearted", "😊 Innocent", "🧠 Emotional Intelligence", "🧭 Moral Compass", "🌟 Optimistic", "🤗 Caring"],
        facts: [
            "He used to be Gumball's pet fish",
            "He grew legs because he needed more love",
            "He's afraid of the dark",
            "He has a hidden talent for singing",
            "He once believed he was a superhero"
        ],
        quotes: [
            '"I believe in you, Gumball!"',
            '"That doesn\'t seem very nice..."',
            '"We can do this together!"',
            '"Why can\'t we all just get along?"'
        ],
        image: "assets/characters/darwin.jpg",
        gif: "assets/characters/darwin-cute.gif",
        video: "assets/videos/darwin-moment.mp4",
        sound: "assets/sounds/darwin.mp3",
        colors: {
            primary: "#FFA500",
            secondary: "#FF8C00"
        }
    },
    anais: {
        name: "Anais Watterson",
        bio: "The youngest member of the Watterson family but easily the smartest. A 4-year-old pink rabbit with genius-level intelligence.",
        personality: "Anais is a child prodigy with terrifying intelligence. She solves everyone's problems and is the strategic thinker of the family. Despite her cute appearance, she can be hilariously evil and manipulative. She's emotionally mature and serves as the 'brain' of the family.",
        traits: ["🧠 Genius", "🔬 Strategic Thinker", "😈 Secretly Evil", "📚 The Brain", "💡 Logical", "🎯 Problem Solver"],
        facts: [
            "She has an IQ of 200+",
            "She can speak multiple languages",
            "She once built a robot to do her homework",
            "She's only 4 years old",
            "She has a doll named Daisy"
        ],
        quotes: [
            '"I calculated the probability of success: 0%."',
            '"You\'re doing it wrong. Let me handle this."',
            '"I\'m not bossy, I\'m just always right."',
            '"Simple minds, simple problems."'
        ],
        image: "assets/characters/anais-smart.jpg",
        gif: "assets/characters/anais-thinking.gif",
        video: "assets/videos/anais-moment.mp4",
        sound: "assets/sounds/anais.mp3",
        colors: {
            primary: "#FF69B4",
            secondary: "#FF1493"
        }
    },
    nicole: {
        name: "Nicole Watterson",
        bio: "The mother of the Watterson family. A hardworking blue cat who keeps the family functioning despite the chaos.",
        personality: "Nicole is extremely hardworking and competitive. She's scary when angry and will do anything to protect her family. She's a perfectionist and the strongest member of the family. Despite her tough exterior, she has deep emotional strength and loves her family fiercely.",
        traits: ["💪 Hardworking", "😠 Scary When Angry", "🛡️ Protective", "🏆 Perfectionist", "❤️ Loving Mother", "⚡ Strongest"],
        facts: [
            "She works at the Rainbow Factory",
            "She was a champion martial artist",
            "She once destroyed a car with her bare hands",
            "She's afraid of losing control",
            "She keeps the family from falling apart"
        ],
        quotes: [
            '"I will find you and I will... HELP you!"',
            '"Clean your room OR ELSE!"',
            '"I do everything for this family!"',
            '"Don\'t make me come over there!"'
        ],
        image: "assets/characters/nicole.jpg",
        gif: "assets/characters/nicole-angry.gif",
        video: "assets/videos/nicole-moment.mp4",
        sound: "assets/sounds/nicole.mp3",
        colors: {
            primary: "#FF4500",
            secondary: "#DC143C"
        }
    },
    richard: {
        name: "Richard Watterson",
        bio: "The father of the Watterson family. A lazy but lovable pink rabbit who loves food more than anything.",
        personality: "Richard is incredibly lazy and not very bright, but he's one of the most loving characters. He has a childlike personality and is often the source of comedy. Despite his stupidity, he occasionally shows surprising wisdom. He loves his family deeply, especially his food.",
        traits: ["😴 Lazy", "🤪 Dumb but Lovable", "🍕 Loves Food", "❤️ Caring Father", "😂 Funny", "🎈 Childlike"],
        facts: [
            "He's unemployed and proud of it",
            "He once ate a whole wedding cake",
            "He has a secret talent for bowling",
            "He's afraid of spiders",
            "He loves his wife more than food (sometimes)"
        ],
        quotes: [
            '"I\'m not lazy, I\'m just... resting."',
            '"Can we order pizza?"',
            '"I don\'t understand any of this."',
            '"That sounds like too much work."'
        ],
        image: "assets/characters/richard.jpg",
        gif: "assets/characters/richard-eating.gif",
        video: "assets/videos/richard-moment.mp4",
        sound: "assets/sounds/richard.mp3",
        colors: {
            primary: "#FFD700",
            secondary: "#FFA500"
        }
    },
    jojo: {
        name: "Granny Jojo",
        bio: "Richard's mother and the grandmother of the Watterson children. A weird and unpredictable old rabbit.",
        personality: "Granny Jojo is weird, funny, and completely unpredictable. She has chaotic grandma energy and often says strange things. She's loving in her own unique way and adds to the family's chaos with her unpredictable behavior.",
        traits: ["🎩 Weird", "😂 Funny", "🎲 Unpredictable", "👵 Grandma Energy", "🔮 Strange", "💖 Loving (in her way)"],
        facts: [
            "She has a mysterious past",
            "She once worked as a spy",
            "She collects strange objects",
            "She tells bizarre stories",
            "She's surprisingly strong for her age"
        ],
        quotes: [
            '"Back in my day, we didn\'t have..."',
            '"I\'ve seen things you wouldn\'t believe."',
            '"Don\'t ask me how I know this."',
            '"That reminds me of the time I..."'
        ],
        image: "assets/characters/jojo.jpg",
        gif: "assets/characters/jojo-weird.gif",
        video: "assets/videos/jojo-moment.mp4",
        sound: "assets/sounds/jojo.mp3",
        colors: {
            primary: "#9370DB",
            secondary: "#8A2BE2"
        }
    },
    penny: {
        name: "Penny Fitzgerald",
        bio: "Gumball's girlfriend and a shape-shifting peanut who can transform into different forms based on her emotions.",
        personality: "Penny is sweet and shy but emotionally powerful. She's Gumball's love interest and has the ability to shape-shift based on her feelings. Despite being shy, she's brave and supportive. Her shape-shifting abilities make her unique and expressive.",
        traits: ["💖 Sweet", "💕 Gumball's Love", "🦋 Shape-shifter", "😊 Shy but Powerful", "🌈 Expressive", "💝 Supportive"],
        facts: [
            "She's a peanut who can transform",
            "Her forms change with her emotions",
            "She's been Gumball's friend since kindergarten",
            "She's afraid of being judged",
            "She has a hidden singing talent"
        ],
        quotes: [
            '"I believe in you, Gumball!"',
            '"I don\'t care what others think."',
            '"This is who I really am."',
            '"We can face anything together."'
        ],
        image: "assets/characters/penny.jpg",
        video: "assets/videos/penny-moment.mp4",
        sound: "assets/sounds/penny.mp3",
        colors: {
            primary: "#FF1493",
            secondary: "#FF69B4"
        }
    },
    carrie: {
        name: "Carrie Krueger",
        bio: "A goth ghost girl who floats around Elmore Junior High. She's sarcastic, calm, and emotionally intelligent.",
        personality: "Carrie is a goth ghost with a sarcastic personality. Despite her dark exterior, she's calm and emotionally intelligent. She often provides perspective on situations and has a unique understanding of emotions. She's a loyal friend with a mysterious past.",
        traits: ["👻 Goth Ghost", "😏 Sarcastic", "😌 Calm", "💭 Emotionally Intelligent", "🌙 Mysterious", "🖤 Loyal Friend"],
        facts: [
            "She's a ghost who can possess people",
            "She's afraid of losing her friends",
            "She has a collection of spooky items",
            "She once fell in love with a pizza",
            "She's surprisingly good at giving advice"
        ],
        quotes: [
            '"Whatever..."',
            '"That\'s so... dramatic."',
            '"I\'ve seen worse."',
            '"Life is temporary, but style is eternal."'
        ],
        image: "assets/characters/carrie.jpg",
        gif: "assets/characters/carrie-float.gif",
        video: "assets/videos/carrie-moment.mp4",
        sound: "assets/sounds/carrie.mp3",
        colors: {
            primary: "#9932CC",
            secondary: "#8B008B"
        }
    }
};

// QUIZ QUESTIONS
const quizQuestions = {
    easy: [
        {
            question: "Who is the smartest Watterson?",
            options: ["Gumball", "Darwin", "Anais", "Richard"],
            correct: 2,
            type: "multiple-choice"
        },
        {
            question: "Which character acts as the moral compass?",
            options: ["Nicole", "Darwin", "Richard", "Gumball"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Who becomes terrifying when angry?",
            options: ["Anais", "Nicole", "Penny", "Carrie"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "True or False: Richard is the hardest working Watterson",
            options: ["True", "False"],
            correct: 1,
            type: "true-false"
        },
        {
            question: "Who is Gumball's girlfriend?",
            options: ["Carrie", "Penny", "Tobias", "Banana Joe"],
            correct: 1,
            type: "multiple-choice"
        }
    ],
    chaos: [
        {
            question: "Who said: 'I'm not lazy, I'm just on energy saving mode'?",
            options: ["Richard", "Gumball", "Darwin", "Anais"],
            correct: 1,
            type: "who-said"
        },
        {
            question: "Which character is a ghost?",
            options: ["Penny", "Carrie", "Tina", "Jamie"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "What is Anais's IQ approximately?",
            options: ["100", "150", "200+", "50"],
            correct: 2,
            type: "multiple-choice"
        },
        {
            question: "True or False: Darwin used to be a regular fish",
            options: ["True", "False"],
            correct: 0,
            type: "true-false"
        },
        {
            question: "Who works at the Rainbow Factory?",
            options: ["Richard", "Gumball", "Nicole", "Anais"],
            correct: 2,
            type: "multiple-choice"
        }
    ],
    nightmare: [
        {
            question: "What is Gumball's full name?",
            options: ["Gumball Watterson", "Gumball Tristopher Watterson", "Gumball Christopher Watterson", "Gumball Blue Watterson"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "Which character once got married to a pile of trash?",
            options: ["Darwin", "Gumball", "Richard", "Anais"],
            correct: 1,
            type: "multiple-choice"
        },
        {
            question: "What is Penny Fitzgerald's special ability?",
            options: ["Flying", "Invisibility", "Shape-shifting", "Super strength"],
            correct: 2,
            type: "multiple-choice"
        },
        {
            question: "True or False: Carrie can possess people",
            options: ["True", "False"],
            correct: 0,
            type: "true-false"
        },
        {
            question: "Who is Granny Jojo's son?",
            options: ["Gumball", "Richard", "Larry", "Mr. Robinson"],
            correct: 1,
            type: "multiple-choice"
        }
    ]
};

// GLOBAL VARIABLES
let currentCharacter = null;
let quizState = {
    score: 0,
    combo: 1,
    currentQuestion: 0,
    questions: [],
    difficulty: 'easy',
    timer: null,
    timeLeft: 30
};

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    initializeLoadingScreen();
    initializeCursorTrail();
    initializeCharacterCards();
    initializeMusicToggle();
    initializeEasterEggs();
    initializeCloseButton();
});

// INITIALIZE CLOSE BUTTON
function initializeCloseButton() {
    const closeButton = document.querySelector('.close-details');
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            closeCharacterDetails();
        });
    }

    // Close modal when clicking outside content
    const modal = document.querySelector('.details-container');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCharacterDetails();
            }
        });
    }
}

// LOADING SCREEN
function initializeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        playSound('click');
    }, 3000);
}

// CURSOR TRAIL EFFECT
function initializeCursorTrail() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.7) {
            createTrail(e.clientX, e.clientY);
        }
    });
}

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x - 10 + 'px';
    trail.style.top = y - 10 + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
}

// PAGE NAVIGATION
function showPage(pageId) {
    playSound('click');

    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Stop any running quiz
    if (pageId !== 'quiz-page') {
        stopQuiz();
    }
}

// CHARACTER CARDS
function initializeCharacterCards() {
    document.querySelectorAll('.char-card').forEach(card => {
        card.addEventListener('click', () => {
            const characterId = card.dataset.character;
            playCharacterSound(characterId);
        });

        card.addEventListener('mouseenter', () => {
            playSound('hover');
        });
    });

    // Add event listeners to "Learn More" buttons
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling to card
            const characterId = button.closest('.char-card').dataset.character;
            showCharacterDetails(characterId);
        });
    });
}

// PLAY CHARACTER SOUND
function playCharacterSound(characterId) {
    const character = characters[characterId];
    if (character && character.sound) {
        const audio = new Audio(character.sound);
        audio.volume = 0.5;
        audio.play().catch(() => {
            // Audio might not be available, that's okay
        });
    }
}

// CHARACTER DETAILS
function showCharacterDetails(characterId) {
    console.log('Showing character details for:', characterId);
    playSound('click');
    currentCharacter = characterId;

    if (!characters[characterId]) {
        console.error('Character not found:', characterId);
        return;
    }

    const character = characters[characterId];

    // Update details content
    document.getElementById('detail-name').textContent = character.name;
    document.getElementById('detail-bio').textContent = character.bio;
    document.getElementById('detail-personality').textContent = character.personality;
    document.getElementById('detail-image').src = character.image;
    document.getElementById('detail-image').alt = character.name;

    // Handle optional GIF
    const gifElement = document.getElementById('detail-gif');
    if (character.gif) {
        gifElement.src = character.gif;
        gifElement.style.display = 'block';
    } else {
        gifElement.style.display = 'none';
    }

    const video = document.getElementById('detail-video');
    video.querySelector('source').src = character.video;
    video.load();

    // Update facts
    const factsList = document.getElementById('detail-facts');
    factsList.innerHTML = character.facts.map(fact => `<li>${fact}</li>`).join('');

    // Update quotes
    const quotesDiv = document.getElementById('detail-quotes');
    quotesDiv.innerHTML = character.quotes.map(quote => `<div class="quote">${quote}</div>`).join('');

    // Update glow color
    const glow = document.getElementById('detail-glow');
    glow.style.background = `radial-gradient(circle, ${character.colors.primary}40 0%, transparent 70%)`;

    // Play character sound
    playCharacterSound(characterId);

    // Show modal
    const modal = document.querySelector('.details-container');
    if (modal) {
        modal.classList.add('active');
        console.log('Modal opened');
    } else {
        console.error('Modal not found');
    }
}

function closeCharacterDetails() {
    console.log('Closing character details');
    
    // Stop character sound when closing modal
    stopCharacterSound();
    
    playSound('click');
    const modal = document.querySelector('.details-container');
    if (modal) {
        modal.classList.remove('active');
    }
    currentCharacter = null;
}

// MOOD MODE
function setMood(mood) {
    playSound('click');
    const detailsContent = document.querySelector('.details-content');

    // Remove existing mood classes
    detailsContent.classList.remove('mood-happy', 'mood-chaotic', 'mood-dramatic');

    // Add new mood class
    detailsContent.classList.add(`mood-${mood}`);

    // Apply mood-specific styles
    switch(mood) {
        case 'happy':
            detailsContent.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
            break;
        case 'chaotic':
            detailsContent.style.background = 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)';
            // Add shake effect
            detailsContent.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                detailsContent.style.animation = '';
            }, 500);
            break;
        case 'dramatic':
            detailsContent.style.background = 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)';
            break;
    }
}

// MUSIC TOGGLE
function initializeMusicToggle() {
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    
    // Set initial volume and load the audio
    bgMusic.volume = 0.8;
    bgMusic.load();
    
    // Prevent rapid double-clicks
    let isTransitioning = false;
    
    // Add error handling
    bgMusic.addEventListener('error', (e) => {
        console.error('Background music error:', e);
        isTransitioning = false;
    });
    
    bgMusic.addEventListener('loadeddata', () => {
        console.log('Background music loaded successfully');
    });
    
    // Update button icon based on actual audio state
    bgMusic.addEventListener('play', () => {
        musicToggle.innerHTML = '<span>🎵</span>';
    });
    
    bgMusic.addEventListener('pause', () => {
        musicToggle.innerHTML = '<span>🔇</span>';
    });
    
    bgMusic.addEventListener('ended', () => {
        musicToggle.innerHTML = '<span>🔇</span>';
        isTransitioning = false;
    });

    musicToggle.addEventListener('click', () => {
        playSound('click');
        
        // Prevent rapid clicks
        if (isTransitioning) {
            console.log('Audio is transitioning, ignoring click');
            return;
        }
        
        isTransitioning = true;

        // Check actual audio state
        if (bgMusic.paused || bgMusic.ended) {
            // Audio is paused or ended, try to play
            console.log('Attempting to play background music');
            bgMusic.play().then(() => {
                console.log('Background music playing');
                isTransitioning = false;
            }).catch((err) => {
                console.error('Failed to play background music:', err);
                isTransitioning = false;
                musicToggle.innerHTML = '<span>🔇</span>';
            });
        } else {
            // Audio is playing, pause it
            console.log('Pausing background music');
            bgMusic.pause();
            isTransitioning = false;
        }
    });
}

// AUDIO CONTEXT FOR UI SOUND GENERATION
let audioContext = null;

// TRACK CURRENT CHARACTER SOUND
let currentCharacterSound = null;

// SOUND QUEUE TO PREVENT OVERLAPPING UI SOUNDS
let isPlayingSound = false;
let soundQueue = [];

function getAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

// GENERATE UI SOUNDS WITH WEB AUDIO API
function generateSound(type) {
    const ctx = getAudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    const now = ctx.currentTime;

    switch(type) {
        case 'click':
            // Short, crisp click
            oscillator.frequency.setValueAtTime(800, now);
            oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
            gainNode.gain.setValueAtTime(0.2, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            oscillator.start(now);
            oscillator.stop(now + 0.1);
            break;

        case 'hover':
            // Subtle hover sound
            oscillator.frequency.setValueAtTime(400, now);
            oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.1);
            gainNode.gain.setValueAtTime(0.05, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            oscillator.start(now);
            oscillator.stop(now + 0.15);
            break;

        case 'correct':
            // Cheerful ding
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, now); // C5
            oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, now + 0.2); // G5
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
            oscillator.start(now);
            oscillator.stop(now + 0.5);
            break;

        case 'wrong':
            // Funny error buzzer
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(150, now);
            oscillator.frequency.linearRampToValueAtTime(100, now + 0.2);
            gainNode.gain.setValueAtTime(0.2, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
            oscillator.start(now);
            oscillator.stop(now + 0.4);
            break;

        case 'success':
            // Celebratory fanfare
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + i * 0.15);
                gain.gain.setValueAtTime(0.2, now + i * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.3);
                osc.start(now + i * 0.15);
                osc.stop(now + i * 0.15 + 0.3);
            });
            return; // Don't use the main oscillator
    }
}

// SOUND EFFECTS (UI SOUNDS ONLY) - WITH QUEUE SYSTEM
function playSound(type) {
    soundQueue.push(type);
    processSoundQueue();
}

function processSoundQueue() {
    if (isPlayingSound || soundQueue.length === 0) {
        return;
    }
    
    isPlayingSound = true;
    const type = soundQueue.shift();
    
    try {
        generateSound(type);
        // Simple delay to prevent overlapping sounds
        setTimeout(() => {
            isPlayingSound = false;
            processSoundQueue();
        }, 100);
    } catch (e) {
        console.log('Sound generation failed:', e);
        isPlayingSound = false;
        processSoundQueue();
    }
}

// PLAY CHARACTER SOUND FROM MP3 FILE
function playCharacterSound(characterId) {
    // Stop any existing character sound
    stopCharacterSound();
    
    const character = characters[characterId];
    if (character && character.sound) {
        const audio = new Audio(character.sound);
        audio.volume = 0.5;
        audio.play().catch(() => {
            // Audio might not be available, that's okay
        });
        currentCharacterSound = audio;
    }
}

// STOP CURRENT CHARACTER SOUND
function stopCharacterSound() {
    if (currentCharacterSound) {
        currentCharacterSound.pause();
        currentCharacterSound.currentTime = 0;
        currentCharacterSound = null;
    }
}

// QUIZ FUNCTIONS
function startQuiz(difficulty) {
    playSound('click');
    quizState = {
        score: 0,
        combo: 1,
        currentQuestion: 0,
        questions: [...quizQuestions[difficulty]],
        difficulty: difficulty,
        timer: null,
        timeLeft: 30
    };

    // Shuffle questions
    shuffleArray(quizState.questions);

    // Update UI
    document.getElementById('quiz-start').classList.add('hidden');
    document.getElementById('quiz-game').classList.remove('hidden');
    document.getElementById('total-q').textContent = quizState.questions.length;

    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = quizState.questions[quizState.currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('current-q').textContent = quizState.currentQuestion + 1;
    document.getElementById('score-display').textContent = `Score: ${quizState.score}`;
    document.getElementById('combo-display').textContent = `Combo: x${quizState.combo}`;

    // Create answer buttons
    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const question = quizState.questions[quizState.currentQuestion];
    const buttons = document.querySelectorAll('.answer-btn');

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === question.correct) {
        // Correct answer
        buttons[selectedIndex].classList.add('correct');
        playSound('correct');

        // Calculate score with combo
        const points = 10 * quizState.combo;
        quizState.score += points;
        quizState.combo = Math.min(quizState.combo + 1, 5); // Max combo of 5

        // Show combo effect
        if (quizState.combo > 1) {
            showComboEffect();
        }
    } else {
        // Wrong answer
        buttons[selectedIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
        playSound('wrong');
        quizState.combo = 1; // Reset combo
    }

    // Move to next question after delay
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

function showComboEffect() {
    const comboDisplay = document.getElementById('combo-display');
    comboDisplay.style.animation = 'none';
    comboDisplay.offsetHeight; // Trigger reflow
    comboDisplay.style.animation = 'combo-pop 0.5s ease-out';
}

function startTimer() {
    quizState.timeLeft = 30;
    updateTimerBar();

    quizState.timer = setInterval(() => {
        quizState.timeLeft--;
        updateTimerBar();

        if (quizState.timeLeft <= 0) {
            // Time's up
            clearInterval(quizState.timer);
            playSound('wrong');
            quizState.combo = 1;

            // Show correct answer
            const question = quizState.questions[quizState.currentQuestion];
            const buttons = document.querySelectorAll('.answer-btn');
            buttons.forEach((btn, index) => {
                btn.disabled = true;
                if (index === question.correct) {
                    btn.classList.add('correct');
                }
            });

            // Move to next question
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
    }, 1000);
}

function updateTimerBar() {
    const timerProgress = document.getElementById('timer-progress');
    const percentage = (quizState.timeLeft / 30) * 100;
    timerProgress.style.width = percentage + '%';

    // Change color based on time left
    timerProgress.classList.remove('warning', 'danger');
    if (percentage <= 20) {
        timerProgress.classList.add('danger');
    } else if (percentage <= 50) {
        timerProgress.classList.add('warning');
    }
}

function resetTimer() {
    clearInterval(quizState.timer);
    startTimer();
}

function stopQuiz() {
    clearInterval(quizState.timer);
}

function endQuiz() {
    stopQuiz();
    playSound('success');

    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');

    // Calculate result
    const totalQuestions = quizState.questions.length;
    const percentage = (quizState.score / (totalQuestions * 50)) * 100; // Max score is 50 per question (10 points * 5 combo)

    let title, message, characterReaction;

    if (percentage >= 80) {
        title = "🏆 Anais-Level Genius!";
        message = "Incredible! You know everything about the Watterson family!";
        characterReaction = {
            image: "assets/characters/anais-smart.gif",
            text: "\"I'm impressed. You might actually be as smart as me... almost.\""
        };
    } else if (percentage >= 60) {
        title = "⭐ Future Watterson!";
        message = "Great job! You're definitely part of the family now!";
        characterReaction = {
            image: "assets/characters/darwin.gif",
            text: "\"You did amazing! I knew you could do it!\""
        };
    } else if (percentage >= 40) {
        title = "🎉 Certified Elmore Citizen!";
        message = "Not bad! You know your way around Elmore!";
        characterReaction = {
            image: "assets/characters/gumball.gif",
            text: "\"Hey, not too shabby! Want to hang out?\""
        };
    } else {
        title = "🌀 Chaotic Like Gumball!";
        message = "You're definitely a true Elmore resident - chaotic but lovable!";
        characterReaction = {
            image: "assets/characters/richard.gif",
            text: "\"I don't understand what happened, but it was fun!\""
        };
    }

    // Update result page
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-score').textContent = `Score: ${quizState.score}`;
    document.getElementById('result-message').textContent = message;
    document.getElementById('reaction-image').src = characterReaction.image;
    document.getElementById('reaction-text').textContent = characterReaction.text;

    // Create confetti
    createConfetti();
}

function restartQuiz() {
    playSound('click');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-start').classList.remove('hidden');
}

// CONFETTI EFFECT
function createConfetti() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA500', '#FF69B4', '#9370DB'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';

        const animationDuration = Math.random() * 3 + 2;
        confetti.style.animation = `confetti-fall ${animationDuration}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}

// EASTER EGGS
function initializeEasterEggs() {
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateSecretMode();
        }
    });

    // Random character popups
    setInterval(() => {
        if (Math.random() > 0.95) {
            showRandomCharacterPopup();
        }
    }, 10000);
}

function activateSecretMode() {
    playSound('success');
    alert('🎮 SECRET MODE ACTIVATED! You found the Konami Code! 🎮');
    document.body.style.animation = 'rainbow-mode 3s linear infinite';
}

function showRandomCharacterPopup() {
    const characterKeys = Object.keys(characters);
    const randomCharacter = characterKeys[Math.floor(Math.random() * characterKeys.length)];
    const character = characters[randomCharacter];
    const randomQuote = character.quotes[Math.floor(Math.random() * character.quotes.length)];

    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, ${character.colors.primary}, ${character.colors.secondary});
        color: white;
        padding: 1rem;
        border-radius: 15px;
        max-width: 300px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: popup-slide 0.5s ease-out;
    `;

    popup.innerHTML = `
        <strong>${character.name}:</strong>
        <p>${randomQuote}</p>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.animation = 'popup-exit 0.5s ease-out forwards';
        setTimeout(() => popup.remove(), 500);
    }, 3000);
}

// UTILITY FUNCTIONS
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ADDITIONAL CSS ANIMATIONS (DYNAMIC)
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }

    @keyframes combo-pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); color: #FFD700; }
        100% { transform: scale(1); }
    }

    @keyframes popup-slide {
        0% {
            transform: translateX(400px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes popup-exit {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }

    @keyframes rainbow-mode {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }

    .mood-happy {
        transition: background 0.5s ease;
    }

    .mood-chaotic {
        transition: background 0.5s ease;
    }

    .mood-dramatic {
        transition: background 0.5s ease;
    }
`;
document.head.appendChild(style);

// PARALLAX EFFECT ON SCROLL
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const backgroundElements = document.querySelector('.background-elements');
    if (backgroundElements) {
        backgroundElements.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// TOUCH SWIPE FOR MOBILE
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next page
            const currentPage = document.querySelector('.page.active');
            const pages = Array.from(document.querySelectorAll('.page'));
            const currentIndex = pages.indexOf(currentPage);

            if (currentIndex < pages.length - 1) {
                const nextPageId = pages[currentIndex + 1].id;
                showPage(nextPageId);
            }
        } else {
            // Swipe right - previous page
            const currentPage = document.querySelector('.page.active');
            const pages = Array.from(document.querySelectorAll('.page'));
            const currentIndex = pages.indexOf(currentPage);

            if (currentIndex > 0) {
                const prevPageId = pages[currentIndex - 1].id;
                showPage(prevPageId);
            }
        }
    }
}

console.log('🎉 The Watterson Family Universe loaded successfully!');
console.log('🎮 Try the Konami Code for a secret!');
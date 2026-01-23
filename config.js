// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Stef",

    // The title that appears in the browser tab
    // You can use emojis! 🐰💪🍿
    pageTitle: "Reminding you how much you’re missed",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['♥️', '♥️'],  // Heart emojis
        bears: ['🦭', '🦜']                       // Seal and Bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "If you could teleport me to San Francisco, where would we go first?",                                    // First interaction
            yesBtn: "Telegraph Hill",                                             // Text for "Yes" button
            noBtn: "Japanese Tea Garden",                                               // Text for "No" button
            secretAnswer: "A place with no people❗"           // Secret hover message
        },
        second: {
            text: "What do I like most about you? 🏎️🍄🏁🎮",                          // For the love meter
            startText: "What could it be?",                                   // Text before the percentage
            nextBtn: "After you check the thermometer, click here"                                         // Text for the next button
        },
        third: {
            text: "Amateur coder at work?", // The big question!
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Our long cozy nights together 🥰",  // Shows when they go past 5000%
        high: "The way you quietly judge chaos but somehow make it amusing",              // Shows when they go past 1000%
        normal: "Your perfectionism that drives both of us a little crazy but works 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I value every moment we spend together",
        message: "Having you in my life is something I never take for granted and I feel lucky every day",
        emojis: "🤗♥️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#60AFFF",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#3066BE",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#963484",     // Button color (should stand out against the background)
        buttonHover: "#AEB8FE",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://www.youtube.com/watch?v=UZHs5Pm3ELk&list=RDUZHs5Pm3ELk&start_radio=1", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Stef",

    // The title that appears in the browser tab
    // You can use emojis! 🐰💪🍿
    pageTitle: "to my favorite person",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['♥️'],  // Heart emojis
        bears: ['🦭','🐰','🐹','🦦']                       // Seal and Bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Who likes to ask questions during a movie?",                                    // First interaction
            yesBtn: "Me (obviously)",                                             // Text for "Yes" button
            noBtn: "You (the patient one)",                                               // Text for "No" button
            secretAnswer: "We both secretly enjoy the commentary anyway, right?"           // Secret hover message
        },
        second: {
            text: "What do I like most about you?",                          // For the love meter
            startText: "Let’s see…what stands out?",                                   // Text before the percentage
            nextBtn: "Check the thermometer, then click here"                                         // Text for the next button
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
        extreme: "And how we approach everything together, the best partner I could ask for",  // Shows when they go past 5000%
        high: "Your commitment to what you promise",              // Shows when they go past 1000%
        normal: "Your calm presence"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "I value every moment with you",
        message: "Being with you makes me grateful every single day",
        emojis: "♥️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
colors: {
    backgroundStart: "#88304E",      // Soft blue gradient start — calm and soothing
    backgroundEnd: "#522546",        // Deep navy gradient end — adds depth and contrast
    buttonBackground: "#2C2C2C",     // Matches gradient end — stands out without clashing
    buttonHover: "#F7374F",          // Lighter blue for subtle hover effect
    textColor: "#19183B"             // Soft off-white — readable against dark background
},

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "20s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "70px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.8s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 2.0         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/do81earks/video/upload/v1771107250/Gravac%CC%A7a%CC%83o_nova_ocoli3.m4a", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.7                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

// Add this to your existing tailwind.config.js or create a new one if it doesn't exist
tailwind.config = {
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 1s ease-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' }
                }
            }
        }
    }
}
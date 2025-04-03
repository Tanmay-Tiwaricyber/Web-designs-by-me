
        // Animate captain cards when they come into view
        const captainCards = document.querySelectorAll('.captain-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 150);
                }
            });
        }, { threshold: 0.1 });
        
        captainCards.forEach(card => {
            observer.observe(card);
        });

        // Add hover sound effect to cards
        captainCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Would play a subtle sound effect in production
                console.log('Hover sound effect would play here');
            });
        });

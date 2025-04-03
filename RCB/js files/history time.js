        // Animate timeline items when they come into view
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        timelineItems.forEach(item => {
            observer.observe(item);
        });

        // Add hover sound effect to timeline buttons
        const timelineButtons = document.querySelectorAll('.timeline-button');
        
        timelineButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                // Would play a subtle sound effect in production
                console.log('Hover sound effect would play here');
            });
        });

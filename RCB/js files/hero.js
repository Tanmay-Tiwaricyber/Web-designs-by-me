
        // Create particles
        function createParticles() {
            const particleLayer = document.getElementById('particleLayer');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 6 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100 + 100;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                const opacity = Math.random() * 0.3 + 0.1;
                
                // Apply styles
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.opacity = opacity;
                
                // Random color variation
                const colorVariance = Math.random() * 40 - 20;
                const red = Math.min(255, Math.max(0, 236 + colorVariance));
                particle.style.backgroundColor = `rgb(${red}, 28, 36)`;
                
                particleLayer.appendChild(particle);
            }
        }

        // Audio control
        const audioControl = document.getElementById('audioControl');
        const rcbChant = document.getElementById('rcbChant');
        let audioPlaying = false;

        audioControl.addEventListener('click', () => {
            if (audioPlaying) {
                rcbChant.pause();
                audioControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
                audioPlaying = false;
            } else {
                rcbChant.play();
                audioControl.innerHTML = '<i class="fas fa-volume-up"></i>';
                audioPlaying = true;
            }
        });

        // Hover effect for CTA to play chant briefly
        const exploreBtn = document.getElementById('exploreBtn');
        exploreBtn.addEventListener('mouseenter', () => {
            if (!audioPlaying) {
                rcbChant.currentTime = 0;
                rcbChant.play();
                setTimeout(() => {
                    if (!audioPlaying) {
                        rcbChant.pause();
                    }
                }, 2000);
            }
        });

        // Smooth scroll for CTA
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Scroll down indicator
        const scrollDown = document.getElementById('scrollDown');
        scrollDown.addEventListener('click', () => {
            window.scrollBy({
                top: window.innerHeight - 100,
                behavior: 'smooth'
            });
        });

        // Initialize
        window.addEventListener('load', () => {
            createParticles();
            
            // Start with muted audio
            rcbChant.volume = 0.3;
        });

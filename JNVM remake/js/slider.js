
        document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.slider-container');
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            
            let currentIndex = 0;
            let slideInterval;
            const slideCount = slides.length;
            
            // Initialize slider
            function initSlider() {
                updateSlider();
                startSlideShow();
            }
            
            // Update slider position
            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update active slide and dot
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                slides[currentIndex].classList.add('active');
                dots[currentIndex].classList.add('active');
            }
            
            // Go to next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slideCount;
                updateSlider();
                resetSlideShow();
            }
            
            // Go to previous slide
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateSlider();
                resetSlideShow();
            }
            
            // Start automatic slideshow
            function startSlideShow() {
                slideInterval = setInterval(nextSlide, 5000);
            }
            
            // Reset slideshow timer
            function resetSlideShow() {
                clearInterval(slideInterval);
                startSlideShow();
            }
            
            // Event listeners
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlider();
                    resetSlideShow();
                });
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                }
            });
            
            // Initialize the slider
            initSlider();
        });

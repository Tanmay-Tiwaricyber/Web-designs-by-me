
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            this.innerHTML = mobileMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Mobile dropdown toggles
        const aboutDropdownBtn = document.getElementById('aboutDropdownBtn');
        const aboutDropdown = document.getElementById('aboutDropdown');
        const academicsDropdownBtn = document.getElementById('academicsDropdownBtn');
        const academicsDropdown = document.getElementById('academicsDropdown');

        aboutDropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            aboutDropdown.classList.toggle('active');
            this.querySelector('.fa-chevron-down').classList.toggle('fa-chevron-up');
        });

        academicsDropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            academicsDropdown.classList.toggle('active');
            this.querySelector('.fa-chevron-down').classList.toggle('fa-chevron-up');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                
                // Also close any open dropdowns
                aboutDropdown.classList.remove('active');
                academicsDropdown.classList.remove('active');
                document.querySelectorAll('.fa-chevron-up').forEach(icon => {
                    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
                });
            }
        });

        // Prevent clicks inside mobile menu from closing it
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });

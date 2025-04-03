document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        themeToggle.innerHTML = document.body.classList.contains('light-theme') ? 
            '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#EC1C24"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#EC1C24",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Timeline data and rendering
    const timelineData = [
        {
            year: "2008",
            title: "The Beginning",
            description: "Royal Challengers Bangalore was formed as one of the original eight teams of the Indian Premier League. Rahul Dravid was named the first captain.",
            image: "assets/2008.jpg"
        },
        {
            year: "2009",
            title: "First Final",
            description: "Under Anil Kumble's leadership, RCB reached their first IPL final but lost to Deccan Chargers in a close match.",
            image: "assets/2009.jpg"
        },
        {
            year: "2011",
            title: "Gayle Storm Arrives",
            description: "Chris Gayle joined RCB mid-season and immediately made an impact with his explosive batting, scoring 608 runs in just 12 matches.",
            image: "assets/2011.jpg"
        },
        {
            year: "2013",
            title: "Kohli Takes Over",
            description: "Virat Kohli was appointed as the full-time captain of RCB, beginning a new era for the franchise.",
            image: "assets/2013.jpg"
        },
        {
            year: "2016",
            title: "Record-Breaking Season",
            description: "Virat Kohli scored 973 runs in a single season, the highest in IPL history. RCB reached the final but lost to Sunrisers Hyderabad.",
            image: "assets/2016.jpg"
        },
        {
            year: "2022",
            title: "Women's Team Launched",
            description: "RCB launched their women's team in the inaugural Women's Premier League, with Smriti Mandhana as captain.",
            image: "assets/2022.jpg"
        },
        {
            year: "2024",
            title: "Faf's Leadership",
            description: "Under Faf du Plessis, RCB continues to compete at the highest level with a mix of experienced stars and young talents.",
            image: "assets/2024.jpg"
        }
    ];

    const timelineContainer = document.querySelector('.timeline-container');
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-desc">${item.description}</p>
                <a href="#" class="timeline-btn">View Highlights</a>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });

    // Captains data and rendering
    const captainsData = [
        {
            name: "Rahul Dravid",
            period: "2008",
            image: "assets/dravid.jpg",
            matches: 14,
            wins: 4,
            winPercentage: 28.57,
            quote: "We may not have won the cup, but we won millions of hearts with our spirit."
        },
        {
            name: "Anil Kumble",
            period: "2009-2010",
            image: "assets/kumble.jpg",
            matches: 26,
            wins: 15,
            winPercentage: 57.69,
            quote: "Leadership is about setting an example on and off the field."
        },
        {
            name: "Daniel Vettori",
            period: "2011-2012",
            image: "assets/vettori.jpg",
            matches: 22,
            wins: 12,
            winPercentage: 54.54,
            quote: "RCB taught me the passion of Indian cricket fans."
        },
        {
            name: "Virat Kohli",
            period: "2013-2021",
            image: "assets/kohli.jpg",
            matches: 110,
            wins: 55,
            winPercentage: 50.00,
            quote: "Playing for RCB is a matter of pride for me. We play with heart every time."
        },
        {
            name: "Faf du Plessis",
            period: "2022-Present",
            image: "assets/faf.jpg",
            matches: 30,
            wins: 16,
            winPercentage: 53.33,
            quote: "The RCB fan support is unbelievable. We want to give them the trophy they deserve."
        },
        {
            name: "Smriti Mandhana",
            period: "WPL 2023-Present",
            image: "assets/mandhana.jpg",
            matches: 8,
            wins: 3,
            winPercentage: 37.50,
            quote: "Leading RCB women is an honor. We're building something special here."
        }
    ];

    const captainsGrid = document.querySelector('.captains-grid');
    
    captainsData.forEach(captain => {
        const captainCard = document.createElement('div');
        captainCard.className = 'captain-card';
        
        captainCard.innerHTML = `
            <div class="captain-image">
                <img src="${captain.image}" alt="${captain.name}">
            </div>
            <div class="captain-info">
                <h3 class="captain-name">${captain.name}</h3>
                <p class="captain-period">${captain.period}</p>
                <div class="captain-stats">
                    <div class="stat-item">
                        <div class="stat-value">${captain.matches}</div>
                        <div class="stat-label">Matches</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${captain.wins}</div>
                        <div class="stat-label">Wins</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${captain.winPercentage}%</div>
                        <div class="stat-label">Win %</div>
                    </div>
                </div>
                <p class="captain-quote">${captain.quote}</p>
            </div>
        `;
        
        captainsGrid.appendChild(captainCard);
    });

    // Jersey slider functionality
    const jerseyData = [
        {
            year: "2008",
            image: "assets/jersey-2008.png",
            description: "The inaugural season jersey featured the original RCB logo with a predominantly red and golden yellow design, sponsored by Vijay Mallya's Kingfisher Airlines."
        },
        {
            year: "2011",
            image: "assets/jersey-2011.png",
            description: "The 2011 jersey introduced a darker red shade with black accents. This was the season when Chris Gayle joined and the team reached the finals."
        },
        {
            year: "2016",
            image: "assets/jersey-2016.png",
            description: "The 2016 jersey featured a sleek design with diagonal stripes, commemorating RCB's strong season where Virat Kohli scored 973 runs."
        },
        {
            year: "2020",
            image: "assets/jersey-2020.png",
            description: "The 2020 jersey had a bold new look with a gradient effect from red to black, representing the team's aggressive playing style."
        },
        {
            year: "2023",
            image: "assets/jersey-2023.png",
            description: "The current jersey maintains the classic red and black but with a modern, minimalist design and the new sponsor Qatar Airways."
        }
    ];

    const jerseySlider = document.querySelector('.jersey-slider');
    const jerseyNav = document.createElement('div');
    jerseyNav.className = 'jersey-nav';
    
    jerseyData.forEach((jersey, index) => {
        const jerseySlide = document.createElement('div');
        jerseySlide.className = `jersey-slide ${index === 0 ? 'active' : ''}`;
        
        jerseySlide.innerHTML = `
            <img src="${jersey.image}" alt="RCB Jersey ${jersey.year}" class="jersey-image">
            <div class="jersey-info">
                <div class="jersey-year">${jersey.year} Jersey</div>
                <p class="jersey-desc">${jersey.description}</p>
            </div>
        `;
        
        jerseySlider.appendChild(jerseySlide);
        
        const jerseyDot = document.createElement('div');
        jerseyDot.className = `jersey-dot ${index === 0 ? 'active' : ''}`;
        jerseyDot.dataset.index = index;
        jerseyNav.appendChild(jerseyDot);
    });
    
    jerseySlider.appendChild(jerseyNav);
    
    const jerseySlides = document.querySelectorAll('.jersey-slide');
    const jerseyDots = document.querySelectorAll('.jersey-dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        jerseySlides.forEach(slide => slide.classList.remove('active'));
        jerseyDots.forEach(dot => dot.classList.remove('active'));
        
        jerseySlides[index].classList.add('active');
        jerseyDots[index].classList.add('active');
        currentSlide = index;
    }
    
    jerseyDots.forEach(dot => {
        dot.addEventListener('click', function() {
            showSlide(parseInt(this.dataset.index));
        });
    });
    
    // Auto slide change
    setInterval(() => {
        currentSlide = (currentSlide + 1) % jerseySlides.length;
        showSlide(currentSlide);
    }, 5000);

    // Records data
    const teamRecords = [
        { title: "Highest Total", value: "263/5", player: "vs Pune Warriors, 2013" },
        { title: "Lowest Total", value: "49", player: "vs Kolkata Knight Riders, 2017" },
        { title: "Biggest Win (by runs)", value: "144 runs", player: "vs Gujarat Lions, 2016" },
        { title: "Longest Winning Streak", value: "7 matches", player: "2011 season" },
        { title: "Most Consecutive Playoffs", value: "3 seasons", player: "2009-2011" }
    ];

    const playerRecords = [
        { title: "Most Runs", value: "7,263+", player: "Virat Kohli" },
        { title: "Most Wickets", value: "139", player: "Yuzvendra Chahal" },
        { title: "Highest Score", value: "175*", player: "Chris Gayle" },
        { title: "Best Bowling", value: "6/14", player: "Sreenath Aravind" },
        { title: "Most Catches", value: "90", player: "Virat Kohli" }
    ];

    const teamRecordsContainer = document.querySelector('.team-records');
    const playerRecordsContainer = document.querySelector('.player-records');
    
    teamRecords.forEach(record => {
        const recordItem = document.createElement('div');
        recordItem.className = 'record-item';
        
        recordItem.innerHTML = `
            <div class="record-title">${record.title}</div>
            <div class="record-value">${record.value}</div>
            <div class="record-player">${record.player}</div>
        `;
        
        teamRecordsContainer.appendChild(recordItem);
    });
    
    playerRecords.forEach(record => {
        const recordItem = document.createElement('div');
        recordItem.className = 'record-item';
        
        recordItem.innerHTML = `
            <div class="record-title">${record.title}</div>
            <div class="record-value">${record.value}</div>
            <div class="record-player">${record.player}</div>
        `;
        
        playerRecordsContainer.appendChild(recordItem);
    });

    // Legends data
    const legendsData = [
        {
            name: "Virat Kohli",
            role: "Batsman",
            image: "assets/kohli-legend.jpg",
            runs: "7,263+",
            matches: "237",
            average: "37.25",
            strikeRate: "130.02"
        },
        {
            name: "AB de Villiers",
            role: "Batsman/WK",
            image: "assets/abd-legend.jpg",
            runs: "4,522",
            matches: "156",
            average: "41.10",
            strikeRate: "158.33"
        },
        {
            name: "Chris Gayle",
            role: "Batsman",
            image: "assets/gayle-legend.jpg",
            runs: "3,163",
            matches: "85",
            average: "43.32",
            strikeRate: "154.24"
        },
        {
            name: "Yuzvendra Chahal",
            role: "Bowler",
            image: "assets/chahal-legend.jpg",
            wickets: "139",
            matches: "113",
            economy: "7.58",
            best: "4/25"
        },
        {
            name: "Glenn Maxwell",
            role: "All-rounder",
            image: "assets/maxwell-legend.jpg",
            runs: "1,246",
            matches: "47",
            wickets: "18",
            strikeRate: "157.62"
        },
        {
            name: "Mohammed Siraj",
            role: "Bowler",
            image: "assets/siraj-legend.jpg",
            wickets: "68",
            matches: "73",
            economy: "8.54",
            best: "4/21"
        }
    ];

    const legendsGrid = document.querySelector('.legends-grid');
    
    legendsData.forEach(legend => {
        const legendCard = document.createElement('div');
        legendCard.className = 'legend-card';
        
        legendCard.innerHTML = `
            <div class="legend-image">
                <img src="${legend.image}" alt="${legend.name}">
                <div class="legend-overlay">
                    <h3 class="legend-name">${legend.name}</h3>
                    <p class="legend-role">${legend.role}</p>
                </div>
            </div>
            <div class="legend-stats">
                <div class="stat-row">
                    <span class="stat-name">Runs</span>
                    <span class="stat-value">${legend.runs}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-name">Matches</span>
                    <span class="stat-value">${legend.matches}</span>
                </div>
                ${legend.average ? `
                <div class="stat-row">
                    <span class="stat-name">Average</span>
                    <span class="stat-value">${legend.average}</span>
                </div>
                ` : ''}
                ${legend.wickets ? `
                <div class="stat-row">
                    <span class="stat-name">Wickets</span>
                    <span class="stat-value">${legend.wickets}</span>
                </div>
                ` : ''}
                <div class="stat-row">
                    <span class="stat-name">${legend.strikeRate ? 'SR' : 'Best'}</span>
                    <span class="stat-value">${legend.strikeRate || legend.best}</span>
                </div>
            </div>
        `;
        
        legendsGrid.appendChild(legendCard);
    });

    // Classic matches data
    const matchesData = [
        {
            date: "23 Apr 2013",
            venue: "M. Chinnaswamy Stadium",
            team1: "RCB",
            team1Logo: "assets/rcb-logo.png",
            team1Score: "263/5 (20)",
            team2: "Pune Warriors",
            team2Logo: "assets/pwi-logo.png",
            team2Score: "133/9 (20)",
            result: "RCB won by 130 runs",
            highlight: "https://www.youtube.com/embed/g-jwWYX7Jlo"
        },
        {
            date: "14 Apr 2016",
            venue: "M. Chinnaswamy Stadium",
            team1: "RCB",
            team1Logo: "assets/rcb-logo.png",
            team1Score: "248/3 (20)",
            team2: "Gujarat Lions",
            team2Logo: "assets/gl-logo.png",
            team2Score: "104 (18.4)",
            result: "RCB won by 144 runs",
            highlight: "https://www.youtube.com/embed/9d_2-9xQ9YQ"
        },
        {
            date: "10 May 2015",
            venue: "Wankhede Stadium",
            team1: "RCB",
            team1Logo: "assets/rcb-logo.png",
            team1Score: "235/1 (20)",
            team2: "Mumbai Indians",
            team2Logo: "assets/mi-logo.png",
            team2Score: "196/7 (20)",
            result: "RCB won by 39 runs",
            highlight: "https://www.youtube.com/embed/5X_1vJGj3dA"
        },
        {
            date: "25 Apr 2023",
            venue: "M. Chinnaswamy Stadium",
            team1: "RCB",
            team1Logo: "assets/rcb-logo.png",
            team1Score: "212/2 (20)",
            team2: "Rajasthan Royals",
            team2Logo: "assets/rr-logo.png",
            team2Score: "171/5 (20)",
            result: "RCB won by 41 runs",
            highlight: "https://www.youtube.com/embed/9d_2-9xQ9YQ"
        }
    ];

    const matchesContainer = document.querySelector('.matches-container');
    
    matchesData.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        
        matchCard.innerHTML = `
            <div class="match-header">
                <div class="match-date">${match.date}</div>
                <div class="match-venue">${match.venue}</div>
            </div>
            <div class="match-teams">
                <div class="team-row">
                    <div class="team-logo">
                        <img src="${match.team1Logo}" alt="${match.team1}">
                    </div>
                    <div class="team-name">${match.team1}</div>
                    <div class="team-score">${match.team1Score}</div>
                </div>
                <div class="team-row">
                    <div class="team-logo">
                        <img src="${match.team2Logo}" alt="${match.team2}">
                    </div>
                    <div class="team-name">${match.team2}</div>
                    <div class="team-score">${match.team2Score}</div>
                </div>
            </div>
            <div class="match-result">${match.result}</div>
            <div class="match-actions">
                <button class="watch-btn" data-highlight="${match.highlight}">Watch Highlights</button>
            </div>
        `;
        
        matchesContainer.appendChild(matchCard);
    });

    // Watch highlights modal
    document.querySelectorAll('.watch-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const highlightUrl = this.dataset.highlight;
            const modal = document.createElement('div');
            modal.className = 'modal';
            
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <iframe width="100%" height="500" src="${highlightUrl}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.querySelector('.close-modal').addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    });

    // Fan messages data
    const fanMessages = [
        {
            name: "Rahul Sharma",
            text: "Been supporting RCB since 2008. The passion never fades! Ee Sala Cup Namde!",
            date: "2 days ago"
        },
        {
            name: "Priya Patel",
            text: "That 2016 season with Kohli was magical. Still get goosebumps thinking about it!",
            date: "1 week ago"
        },
        {
            name: "Arjun Kapoor",
            text: "Win or lose, RCB till I die! The team has given us so many unforgettable moments.",
            date: "3 days ago"
        },
        {
            name: "Sneha Reddy",
            text: "ABD's 133* against MI is the best T20 innings I've ever seen. Pure genius!",
            date: "5 days ago"
        }
    ];

    const fanWall = document.querySelector('.fan-wall');
    
    fanMessages.forEach(message => {
        const fanMessage = document.createElement('div');
        fanMessage.className = 'fan-message';
        
        fanMessage.innerHTML = `
            <div class="fan-name">${message.name}</div>
            <p class="fan-text">${message.text}</p>
            <div class="fan-date">${message.date}</div>
        `;
        
        fanWall.appendChild(fanMessage);
    });

    // Share story form
    const shareStoryBtn = document.querySelector('.share-story-btn');
    shareStoryBtn.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h3>Share Your RCB Story</h3>
                <form id="fan-story-form">
                    <div class="form-group">
                        <input type="text" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Your Email">
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your RCB Story..." required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.close-modal').addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        modal.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for sharing your RCB story!');
            document.body.removeChild(modal);
        });
    });

    // Add modal styles dynamically
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
        }
        
        .modal-content {
            background: var(--darker);
            padding: 30px;
            border-radius: 10px;
            max-width: 600px;
            width: 90%;
            position: relative;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        
        .close-modal {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--light);
            transition: all 0.3s ease;
        }
        
        .close-modal:hover {
            color: var(--primary);
        }
        
        .modal h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: var(--light);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 5px;
            color: var(--light);
            font-family: 'Montserrat', sans-serif;
        }
        
        .form-group textarea {
            height: 150px;
            resize: none;
        }
        
        .submit-btn {
            padding: 12px 30px;
            background: var(--primary);
            color: var(--light);
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
            background: var(--gold);
            color: var(--black);
        }
    `;
    
    document.head.appendChild(modalStyles);
});
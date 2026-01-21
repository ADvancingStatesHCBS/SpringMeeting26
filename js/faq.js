/* =============================================
   FAQ Section
   ============================================= */

/* --- FAQ Data --- */
const faqData = {
    general: [
        {
            q: "What is the Spring Membership Meeting?",
            a: "The Spring Meeting is an opportunity for you to engage with state aging and disabilities directors, Medicaid LTSS directors, and federal officials to share promising practices."
        },
        {
            q: "Who should attend and why?",
            a: "ADvancing States members and partnering sponsors are encouraged to attend. Your participation is invaluable to help other states develop their work."
        },
        {
            q: "Are meals included?",
            a: "Yes! Breakfast and lunch are provided at the hotel on Tuesday and Wednesday. Monday features lunch at the venue."
        },
        {
            q: "What is the dress code?",
            a: "We suggest business casual attire for all conference events."
        }
    ],
    registration: [
        {
            q: "How do I pay?",
            a: "We accept credit cards (5% fee), checks, and purchase orders for government attendees."
        },
        {
            q: "Cancellation Policy",
            a: "Cancellations must be in writing by April 1st for a refund minus $50 processing fee."
        }
    ],
    health: [
        {
            q: "Health Protocols",
            a: "We ask attendees to monitor health and avoid participation if symptomatic."
        }
    ],
    travel: [
        {
            q: "Venue Location",
            a: "Minneapolis Marriott City Center, 30 South 7th Street, Minneapolis, MN."
        },
        {
            q: "Airport",
            a: "Minneapolis–Saint Paul International Airport (MSP) is 20 mins away."
        },
        {
            q: "Hotel Booking",
            a: "Room block links will be emailed to registered attendees."
        }
    ]
};

/* --- Category Labels --- */
const categoryLabels = {
    general: 'General Questions',
    registration: 'Registration',
    health: 'Health & Safety',
    travel: 'Travel'
};

/* --- Initialize FAQ --- */
function initFAQ() {
    const container = document.getElementById('cardContainer');
    const scrollContainer = document.getElementById('scrollContainer');
    const titleIndicator = document.getElementById('categoryTitle');
    const btns = document.querySelectorAll('.category-btn');

    if (!container || !scrollContainer) return;

    let currentCardIndex = 0;
    let isScrolling = false;
    let cardElements = [];

    function render(category) {
        titleIndicator.textContent = categoryLabels[category];
        container.innerHTML = '';
        currentCardIndex = 0;

        faqData[category].forEach((item, i) => {
            const card = document.createElement('div');
            card.className = `faq-card ${i === 0 ? 'is-focused' : ''}`;
            card.onclick = function() {
                forceScrollTo(i);
            };
            card.innerHTML = `<h3>${item.q}</h3><div>${item.a}</div>`;
            container.appendChild(card);
        });

        cardElements = document.querySelectorAll('.faq-card');
        scrollContainer.scrollTop = 0;
        setTimeout(() => forceScrollTo(0), 50);
    }

    function forceScrollTo(index) {
        if (index < 0 || index >= cardElements.length) return;
        currentCardIndex = index;
        const targetCard = cardElements[index];

        cardElements.forEach(c => c.classList.remove('is-focused'));
        targetCard.classList.add('is-focused');

        const containerCenter = scrollContainer.clientHeight / 2;
        const cardCenter = targetCard.offsetTop + (targetCard.clientHeight / 2);
        const scrollPos = cardCenter - containerCenter;

        scrollContainer.scrollTo({
            top: scrollPos,
            behavior: 'smooth'
        });
    }

    // Snap scroll engine
    scrollContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (isScrolling) return;

        const direction = e.deltaY > 0 ? 1 : -1;
        const nextIndex = currentCardIndex + direction;

        if (nextIndex >= 0 && nextIndex < cardElements.length) {
            isScrolling = true;
            forceScrollTo(nextIndex);
            setTimeout(() => {
                isScrolling = false;
            }, 600);
        }
    }, { passive: false });

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            render(btn.dataset.target);
        });
    });

    // Initialize with general category
    render('general');
}

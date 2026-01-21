/* =============================================
   Sponsor Banner & Modal
   ============================================= */

/* --- Sponsor Data --- */
const sponsors = [
    {
        name: "Acentra Health",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/0e4bdbb6eea744f9b753fb1c5b2bea9f.png",
        bio: "Acentra Health combines public health management expertise with technology to help government agencies improve health outcomes. Their innovative solutions support states in delivering quality care to vulnerable populations.",
        website: "https://acentra.com",
        linkedin: "https://linkedin.com/company/acentra-health",
        facebook: "",
        twitter: ""
    },
    {
        name: "Centene Corporation",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/72ac70b4672847bc9fc4114d941f31d0.png",
        bio: "Centene is a leading healthcare enterprise committed to helping people live healthier lives through innovative programs and services. They provide a portfolio of services to government-sponsored healthcare programs.",
        website: "https://centene.com",
        linkedin: "https://linkedin.com/company/centene-corporation",
        facebook: "https://facebook.com/CenteneCorp",
        twitter: "https://twitter.com/CenteneCorp"
    },
    {
        name: "Elevance Health",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/436bbd74457b4a8a914d171d27def7ec.png",
        bio: "Elevance Health is a health company dedicated to improving lives and communities through better health outcomes. They serve more than 118 million people through their family of health plans.",
        website: "https://elevancehealth.com",
        linkedin: "https://linkedin.com/company/elevancehealth",
        facebook: "",
        twitter: "https://twitter.com/ElevanceHealth"
    },
    {
        name: "FEI Systems",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/85b9efd938814dc190020fa2b4d4e690.png",
        bio: "For more than 25 years, FEI Systems has provided innovative IT solutions that assist federal, state and local health and human services agencies in caring for the most vulnerable members of their communities. FEI's Blue Compass suite of solutions includes a host of modules designed to address common requirements while meeting the unique and complex needs of each of the agencies and organizations we serve.",
        website: "https://feisystems.com",
        linkedin: "https://linkedin.com/company/fei-systems",
        facebook: "",
        twitter: ""
    },
    {
        name: "GT Independence",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/53ea7eea9cd14b46af19af1becf5bf19.png",
        bio: "GT Independence empowers people with disabilities to live independently through self-directed support services. They provide financial management services that give individuals control over their care.",
        website: "https://gtindependence.com",
        linkedin: "https://linkedin.com/company/gt-independence",
        facebook: "https://facebook.com/gtindependence",
        twitter: ""
    },
    {
        name: "Humana Healthy Horizons",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/5e10fbeeb2e345fe9475f529b5369dde.png",
        bio: "Humana Healthy Horizons provides Medicaid and Medicare services focused on whole-person health and community support. They integrate medical care with social services to improve member outcomes.",
        website: "https://humana.com",
        linkedin: "https://linkedin.com/company/humana",
        facebook: "https://facebook.com/humana",
        twitter: "https://twitter.com/humana"
    },
    {
        name: "Mathematica",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/e05a6ccde3ec48849a9f0c5124ead9c0.png",
        bio: "Mathematica applies data analytics and research to improve public well-being through evidence-based policy solutions. They partner with governments to evaluate and improve programs serving vulnerable populations.",
        website: "https://mathematica.org",
        linkedin: "https://linkedin.com/company/mathematica-policy-research",
        facebook: "",
        twitter: "https://twitter.com/MathematicaNow"
    },
    {
        name: "Maximus",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/654e9b65ec244f668a24e559591884f9.png",
        bio: "Maximus helps government serve the people through technology and services that improve health and employment outcomes. They operate programs that connect citizens with essential services.",
        website: "https://maximus.com",
        linkedin: "https://linkedin.com/company/maximus",
        facebook: "https://facebook.com/maximusinc",
        twitter: "https://twitter.com/Maximus"
    },
    {
        name: "Mercer",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/7ec99940a6a5440ba93435991c126ab2.png",
        bio: "Mercer delivers advice and technology-driven solutions to help organizations meet the health and financial needs of their people. They provide consulting services to government health programs.",
        website: "https://mercer.com",
        linkedin: "https://linkedin.com/company/mercer",
        facebook: "https://facebook.com/mercer",
        twitter: "https://twitter.com/Mercer"
    },
    {
        name: "Molina Healthcare",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/acd4db92635e4badac1f93176d9833e2.png",
        bio: "Molina Healthcare provides quality healthcare to people receiving government assistance with a focus on HCBS programs. They serve millions of members through Medicaid and Medicare programs.",
        website: "https://molinahealthcare.com",
        linkedin: "https://linkedin.com/company/molina-healthcare",
        facebook: "https://facebook.com/MolinaHealthcare",
        twitter: "https://twitter.com/MolinaHealth"
    },
    {
        name: "Mon Ami",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/83b9b1cb3a944a36bcc28eb32fea4167.png",
        bio: "Mon Ami connects older adults and people with disabilities to community resources and volunteer support services. Their platform enables meaningful connections that reduce isolation.",
        website: "https://monami.io",
        linkedin: "https://linkedin.com/company/mon-ami",
        facebook: "",
        twitter: ""
    },
    {
        name: "Pulselight",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/a9b7815265ed42ddbb5d6007499cd3e3.png",
        bio: "Pulselight provides innovative technology solutions for healthcare organizations to improve care coordination and outcomes. Their tools help agencies manage complex care delivery.",
        website: "https://pulselight.com",
        linkedin: "https://linkedin.com/company/pulselight",
        facebook: "",
        twitter: ""
    },
    {
        name: "Therap Services",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/1c7bc967a427486d8aef0c61f2be4781.png",
        bio: "Therap provides comprehensive electronic documentation and communication solutions for disability service providers. Their platform supports person-centered care across all settings.",
        website: "https://therapservices.net",
        linkedin: "https://linkedin.com/company/therap-services",
        facebook: "https://facebook.com/therapservices",
        twitter: "https://twitter.com/TherapServices"
    },
    {
        name: "WellSky",
        logo: "https://custom.cvent.com/4DC85802658B432AB1FD735BC8F5B457/pix/d7f4cc5669a348fe853433d714bb236e.jpg",
        bio: "WellSky provides technology solutions enabling healthcare providers to deliver better care and improve outcomes. They serve the continuum of care from acute to post-acute settings.",
        website: "https://wellsky.com",
        linkedin: "https://linkedin.com/company/wellsky",
        facebook: "https://facebook.com/wellsky",
        twitter: "https://twitter.com/WellSky"
    }
];

/* --- Social Icons SVG --- */
const sponsorIcons = {
    website: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
};

const sponsorLinkLabels = {
    website: 'Website',
    linkedin: 'LinkedIn',
    facebook: 'Facebook',
    twitter: 'X (Twitter)'
};

/* --- Initialize Sponsor Banner --- */
function initSponsorBanner() {
    const track = document.getElementById('sponsorTrack');
    const modalOverlay = document.getElementById('sponsorModal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalLogo = document.getElementById('modalLogo');
    const modalBio = document.getElementById('modalBio');
    const modalConnect = document.getElementById('modalConnect');

    if (!track) return;

    function openModal(sponsor) {
        modalTitle.textContent = sponsor.name;
        modalLogo.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name}">`;
        modalBio.textContent = sponsor.bio;

        let connectHTML = '';
        ['website', 'linkedin', 'facebook', 'twitter'].forEach(type => {
            const url = sponsor[type];
            const disabled = !url ? 'disabled' : '';
            connectHTML += `
                <a href="${url || '#'}" target="_blank" rel="noopener noreferrer" class="sponsor-modal-link ${disabled}" ${disabled ? 'tabindex="-1"' : ''}>
                    ${sponsorIcons[type]}
                    ${sponsorLinkLabels[type]}
                </a>
            `;
        });
        modalConnect.innerHTML = connectHTML;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
    });

    function createSponsorLogo(sponsor) {
        const logoDiv = document.createElement('div');
        logoDiv.className = 'sponsor-logo';
        logoDiv.innerHTML = `<img src="${sponsor.logo}" alt="${sponsor.name}">`;
        logoDiv.addEventListener('click', () => openModal(sponsor));
        return logoDiv;
    }

    // Duplicate sponsors for seamless scrolling
    [...sponsors, ...sponsors].forEach(sponsor => track.appendChild(createSponsorLogo(sponsor)));
}

// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "Wat is de betekenis van de afkorting UX en waarom is het belangrijk voor softwareontwikkeling?",
        answer: "UX staat voor User eXperience en is belangrijk voor het ontwerpen van software die goed aansluit bij de behoeften en verwachtingen van de gebruiker.",
        options: [
            "UX staat voor Universal eXperience en is belangrijk voor het ontwerpen van software die geschikt is voor iedereen.",
            "UX staat voor User eXperience en is belangrijk voor het ontwerpen van software die goed aansluit bij de behoeften en verwachtingen van de gebruiker.",
            "UX staat voor User eXception en is belangrijk voor het minimaliseren van foutmeldingen en storingen in de software.",
            "UX staat voor User eXtraction en is belangrijk voor het verzamelen van data en informatie over de gebruiker."
        ]
    },
    {
        numb: 2,
        question: "Wat zijn de belangrijkste uitdagingen bij het ontwikkelen van cloud-native applicaties?  ",
        answer: " Cloud-native applicaties hebben meer beveiligingsrisico's dan traditionele applicaties.",
        options: [
            " Cloud-native applicaties zijn niet schaalbaar.",
            " Cloud-native applicaties zijn niet kosteneffectief en vereisen aanzienlijke investeringen in infrastructuur en training van het personeel.",
            " Cloud-native applicaties hebben meer beveiligingsrisico's dan traditionele applicaties.",
            "  Cloud-native applicaties zijn niet geschikt voor gebruik buiten de cloud."
        ]
    },
    {
        numb: 3,
        question: "Wat is de betekenis van de afkorting CI/CD en hoe wordt het gebruikt in softwareontwikkeling?",
        answer: "CI/CD staat voor Continuous Integration and Continuous Deployment en wordt gebruikt om het ontwikkelproces te automatiseren en de kwaliteit van de software te verbeteren.",
        options: [
            "CI/CD staat voor Code Integration and Continuous Deployment en wordt gebruikt om de ontwikkeling van software te versnellen.",
            "CI/CD staat voor Continuous Improvement and Continuous Deployment en wordt gebruikt om continue verbetering van de software te realiseren.",
            "CI/CD staat voor Configuration Integration and Continuous Delivery en wordt gebruikt om de infrastructuur van de software te beheren.",
            "CI/CD staat voor Continuous Integration and Continuous Deployment en wordt gebruikt om het ontwikkelproces te automatiseren en de kwaliteit van de software te verbeteren."
        ]
    },
    {
        numb: 4,
        question: "Wat is de betekenis van de afkorting MVP in softwareontwikkeling en hoe wordt het gebruikt?",
        answer: "MVP staat voor Minimum Viable Product en wordt gebruikt om een eenvoudige versie van de software te ontwikkelen die voldoet aan de belangrijkste vereisten.",
        options: [
            "MVP staat voor Most Valuable Player en wordt gebruikt om de beste softwareontwikkelaar in het team te identificeren.",
            "MVP staat voor Minimum Viable Product en wordt gebruikt om een eenvoudige versie van de software te ontwikkelen die voldoet aan de belangrijkste vereisten.",
            "MVP staat voor Most Valuable Product en wordt gebruikt om de software te ontwikkelen die het meeste waarde oplevert voor de gebruikers",
            "MVP staat voor Minimum Valuable Performance en wordt gebruikt om de minimale prestatievereisten van de software te bepalen."
        ]
    },
    {
        numb: 5,
        question: "Wat is de betekenis van de afkorting API in softwareontwikkeling en hoe wordt het gebruikt?",
        answer: "API staat voor Application Protocol Interface en wordt gebruikt om de communicatie tussen verschillende softwareapplicaties te standaardiseren.",
        options: [
            " API staat voor Application Performance Indicator en wordt gebruikt om de prestaties van de software te meten.",
            "API staat voor Application Protocol Interface en wordt gebruikt om de communicatie tussen verschillende softwareapplicaties te standaardiseren.",
            "API staat voor Application Productivity Indicator en wordt gebruikt om de productiviteit van de softwareontwikkelaars te meten.",
            " API staat voor Application Programmed Interface en wordt gebruikt om de programmeerinterface van de software te standaardiseren."
        ]
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

    {
       numb: 6,
       question: "(For Fun) Wie is Mohammad Noorsi ",
       answer: "Software engineer & SEO expert",
       options: [
         "Advocaat ",
         "Software engineer & SEO expert",
         "Schrijver",
         "Voedseltechnoloog"
       ]
     },
];
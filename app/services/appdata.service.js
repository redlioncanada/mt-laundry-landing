System.register(['angular2/core', './logger.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1;
    var AppDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            AppDataService = (function () {
                function AppDataService(logger) {
                    this.logger = logger;
                    this.language = this.getLanguage();
                    this.contents = {};
                    this.contents.en = {
                        masthead: {
                            enabled: true,
                            image: "./public/images/refer-landing-masthead-1.jpg",
                            alt: "test",
                            title: "Laundry"
                        },
                        banner: {
                            enabled: true,
                            link: '/en_CA/2_3_1121/jump-page_may-is-maytag-promo.content.html',
                            image: './public/images/banner.jpg',
                            ctaText: 'Learn More',
                            ctaBackground: './public/images/button-background.png',
                            analytics: {
                                category: "@category",
                                action: "Clicked Footer Banner",
                                label: "May-Is-Maytag-Learn-More"
                            }
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "./public/images/refer-landing-shopping-cart.png",
                                    title: "Buying Guide",
                                    alt: "test",
                                    desc: "What to look for when buying",
                                    ctaText: "Click Here",
                                    ctaBackground: "./public/images/button-background.png",
                                    link: "/other-assets/en_CA/pdf/MT-Laundry-Buying_Guide_EN.pdf",
                                    type: "cart",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Resources",
                                        label: "Buying Guide"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Ratings and Reviews",
                                    alt: "test",
                                    desc: "See what others are saying",
                                    ctaText: "Click Here",
                                    ctaBackground: "./public/images/button-background.png",
                                    link: "http://www.maytag.ca/en_CA/2_3_90/jump-page_best-products.content.html",
                                    type: "star",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Resources",
                                        label: "Ratings and Reviews"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Find Your Maytag",
                                    alt: "test",
                                    desc: "Need help finding your appliance?",
                                    ctaText: "Click Here",
                                    ctaBackground: "./public/images/button-background.png",
                                    link: "http://findmy.maytag.ca",
                                    type: "magnifier",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Resources",
                                        label: "Find Your MT"
                                    }
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Get more from Maytag<sup>&reg;</sup> laundry pairs",
                            features: [
                                {
                                    title: "Vibration Control Guarantee",
                                    image: "./public/images/more-features-2.jpg",
                                    link: "http://www.maytag.ca/other-assets/en_CA/pdf/2016_Maytag_VIBRATION_FREE_LIMITED%20GUARANTEE_EN.pdf",
                                    alt: "test",
                                    text: "We’re so confident Maytag laundry pairs are built to tackle tough loads for years, we’ve backed them with a 10-year limited parts warranty on the drive motor, stainless steel wash basket, and dryer drum*<br/>*visit maytag.ca for warranty details.",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Get More From Your Laundry",
                                        label: "Vibration Control Guarantee"
                                    }
                                },
                                {
                                    title: "10-Year Warranty",
                                    image: "./public/images/more-features-1.jpg",
                                    link: "http://www.maytag.ca/en_CA/2_3_147/jump-page_ten-year-warranty.content.html",
                                    alt: "test",
                                    text: "At Maytag we don’t just talk about dependability, we back it up.",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Get More From Your Laundry",
                                        label: "10- Year Warranty"
                                    }
                                },
                                {
                                    title: "Additional Accessories",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "http://www.maytag.ca/en_CA/Laundry-1/Laundry_Laundry_Appliances_Laundry_Pedestals-3/102290063/",
                                    alt: "test",
                                    text: "",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Get More From Your Laundry",
                                        label: "Additional Accessories"
                                    }
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Built Better",
                            videos: [
                                {
                                    id: 'TyH7i8lmvyM',
                                    thumb: './public/images/video-select-1.jpg',
                                    title: 'Maytag<sup><sup>&reg;</sup></sup> Washers - PowerWash<sup><sup>&trade;</sup></sup> Cycle',
                                    alt: "test",
                                    ctaTitle: 'Maytag<sup><sup>&reg;</sup></sup> PowerWash<sup><sup>&reg;</sup></sup> System',
                                    ctaText: 'Watch Video',
                                    ctaBackground: "./public/images/button-background.png",
                                    desc: "The Maytag<sup>&reg;</sup> PowerWash<sup><sup>&reg;</sup></sup> System works three ways to give you one great clean. Optimal Dispensers and Power Spray team together to automatically release detergent at the right time, and give clothes a more concentrated treatment for difficult stains. While the PowerWash<sup>&reg;</sup> Cycle uses extra cleaning action to fight your worst stains in a single wash.",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Built Better",
                                        label: "Power Wash"
                                    }
                                },
                                {
                                    id: 'FuBeNRcpM6Q',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Maytag<sup><sup>&reg;</sup></sup> Laundry - Optimal Dose Dispensers',
                                    alt: "test",
                                    ctaTitle: 'Maytag<sup><sup>&reg;</sup></sup> Laundry - Optimal Dose Dispensers',
                                    ctaText: 'Watch Video',
                                    ctaBackground: "./public/images/button-background.png",
                                    desc: "Take the guesswork out of doing your laundry. Maytag's Optimal Dose Dispenser automatically adds just the right amount of detergent at just the right time for an outstanding cleaning performance. And, because it stores enough high efficiency detergent for up to twelve loads of laundry, you won’t have to add detergent with every load*.<br/><br/>*based on an 8lb load.",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Built Better",
                                        label: "Optimal Dose Dispenser"
                                    }
                                },
                                {
                                    id: 'S_nQgte6bP0',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Maytag<sup><sup>&reg;</sup></sup> Washers & Dryers tackle your Tough Loads | Maytag<sup><sup>&reg;</sup></sup> Man',
                                    alt: "test",
                                    ctaTitle: 'Maytag<sup><sup>&reg;</sup></sup> All Your Things',
                                    ctaText: 'Watch Video',
                                    ctaBackground: "./public/images/button-background.png",
                                    desc: "Maytag washers and dryers team up to give your laundry a truly dependable clean.",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Built Better",
                                        label: "Washers & Dryers"
                                    }
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Built to clean tough loads in<br/>two powerful configurations',
                            nav: {
                                text: 'See<br/>All',
                                link: 'http://cuat.maytag.ca/en_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050/',
                                analytics: {
                                    category: "@category",
                                    action: "Clicked Laudry Configuration",
                                    label: "See all Laundry"
                                }
                            },
                            products: [
                                {
                                    image: "./public/images/products/top_load.png",
                                    thumb: "./public/images/products/top_load-small.png",
                                    title: "High Efficiency<br/>Top-Load",
                                    alt: "High Efficiency Top-Load",
                                    desc: "Looking for the best performance? This traditional style washer has come a long way, now offering the Best Cleaning in the Industry driven by the PowerWash<sup><sup>&reg;</sup></sup> System! Available in medium to mega capacity up to 7.1 cu. Ft. I.E.C., the High-Efficiency Top Load laundry pairs allow you to get more laundry done at once. In addition, look for our ENERGY STAR<sup>&reg;</sup> Qualified washers and dryers to save in lifetime water and energy costs – all while providing a powerfully deep clean for every type of load.",
                                    link: "http://www.maytag.ca/en_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050+4294965946/",
                                    id: "top-load",
                                    ctaText: "Learn More",
                                    ctaBackground: "./public/images/button-background.png",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Configuration",
                                        label: "High Efficiency Top-Load",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/front_load.png",
                                    thumb: "./public/images/products/front_load-small.png",
                                    title: "High Efficiency<br/>Front-Load",
                                    alt: "High Efficiency Front-Load",
                                    desc: "This contemporary style provides space saving flexibility, while also boasting the Best Cleaning in the Industry driven by the PowerWash<sup><sup>&reg;</sup></sup> System. With Advanced Vibration Control<sup><sup>&trade;</sup></sup> Plus and optional stack kits, this configuration allows for quiet placement in smaller spaces. ENERGY STAR<sup><sup>&reg;</sup></sup> Qualified, High-Efficiency Front-Load washers and dryers mean you’re saving on water and energy costs and still getting a clean you can count on.",
                                    link: "http://www.maytag.ca/en_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050+4294965947/",
                                    id: "front-load",
                                    ctaText: "Learn More",
                                    ctaBackground: "./public/images/button-background.png",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Configuration",
                                        label: "High Efficiency Front-Load",
                                        learnMore: 'Learn More'
                                    }
                                }
                            ]
                        }
                    };
                    this.contents.fr = {
                        masthead: {
                            enabled: true,
                            image: "./public/images/refer-landing-masthead-1-fr.jpg",
                            alt: "test",
                            title: "Laveuses et sécheuses"
                        },
                        banner: {
                            enabled: true,
                            link: '/fr_CA/2_3_1121/jump-page_may-is-maytag-promo.content.html',
                            image: './public/images/banner.jpg',
                            ctaText: 'Learn More',
                            ctaBackground: './public/images/button-background.png',
                            analytics: {
                                category: "@category",
                                action: "Clicked Footer Banner",
                                label: "May-Is-Maytag-Learn-More"
                            }
                        },
                        features: {
                            enabled: true,
                            features: [
                                {
                                    image: "./public/images/refer-landing-shopping-cart.png",
                                    title: "Guide d'achat",
                                    alt: "test",
                                    desc: "Éléments à considérer lorsque vous magasinez",
                                    ctaText: "Cliquez ici",
                                    ctaBackground: "./public/images/button-background.png",
                                    link: "/other-assets/en_CA/pdf/MT-Laundry-Buying_Guide_FR.pdf",
                                    type: "cart",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Resources",
                                        label: "Buying Guide"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-star.png",
                                    title: "Évaluations et commentaires",
                                    alt: "test",
                                    desc: "Voyez ce que les autres clients en disent",
                                    ctaText: "Cliquez ici",
                                    ctaBackground: "./public/images/button-background.png",
                                    link: "http://www.maytag.ca/fr_CA/2_3_90/jump-page_best-products.content.html",
                                    type: "star",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Resources",
                                        label: "Ratings and Reviews"
                                    }
                                },
                                {
                                    image: "./public/images/refer-landing-mag-glass.png",
                                    title: "Trouvez votre électroménager Maytag",
                                    alt: "test",
                                    desc: "Vous avez besoin d'aide pour trouver votre duo de lessive?",
                                    ctaText: "Cliquez ici",
                                    ctaBackground: "./public/images/button-background.png",
                                    link: "http://trouvermon.maytag.ca",
                                    type: "magnifier",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Laundry Resources",
                                        label: "Find Your MT"
                                    }
                                }
                            ]
                        },
                        morefeatures: {
                            enabled: true,
                            title: "Autres avantages des duos de lessive Maytag<sup>&reg;</sup>",
                            features: [
                                {
                                    title: "Garantie de contrôle des vibrations",
                                    image: "./public/images/more-features-2-fr.jpg",
                                    link: "http://www.maytag.ca/other-assets/fr_CA/pdf/2016_Maytag_VIBRATION_FREE_LIMITED%20GUARANTEE_FR.pdf",
                                    alt: "test",
                                    text: "Chez Maytag nous nous ne contentons pas de parler de fiabilité – nous l'appuyons.",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Additional Features",
                                        label: "FIT System"
                                    }
                                },
                                {
                                    title: "Garantie de 10 ans",
                                    image: "./public/images/more-features-1-fr.jpg",
                                    link: "http://www.maytag.ca/fr_CA/2_3_147/jump-page_ten-year-warranty.content.html",
                                    alt: "test",
                                    text: "Nous sommes tellement convaincus de la fiabilité des duos de lessive Maytag pour se charger de vos brassées pendant des années que nous les avons accompagnés d'une garantie limitée de 10 ans sur les pièces du moteur à entraînement, du panier de lavage en acier inoxydable et du tambour de la sécheuse. Visitez maytag.ca pour les détails de la garantie.",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Additional Features",
                                        label: "10-Year Warranty"
                                    }
                                },
                                {
                                    title: "Accessoires supplémentaires",
                                    image: "./public/images/more-features-3.jpg",
                                    link: "http://www.maytag.ca/fr_CA/Laundry-1/Laundry_Laundry_Appliances_Laundry_Pedestals-3/102290063/",
                                    alt: "test",
                                    text: "",
                                    cta: "",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Additional Features",
                                        label: "Power Burner"
                                    }
                                }
                            ]
                        },
                        videoplayer: {
                            enabled: true,
                            title: "Mieux construit",
                            videos: [
                                {
                                    image: './public/images/video-thumb-1.jpg',
                                    thumb: './public/images/video-select-1.jpg',
                                    title: 'Système PowerWash<sup>&reg;</sup> de Maytag<sup>&reg;</sup>',
                                    alt: "test",
                                    ctaTitle: 'Système PowerWash<sup>&reg;</sup> de Maytag<sup>&reg;</sup>',
                                    ctaText: 'Voir',
                                    ctaBackground: "./public/images/button-background.png",
                                    desc: "Le système PowerWash<sup>&reg;</sup> de Maytag<sup>&reg;</sup> utilise trois fonctions pour vous offrir un excellent nettoyage. Les distributeurs optimaux et le système Power Spray libèrent le détergent automatiquement et au bon moment, procurant aux vêtements un traitement concentré pour venir à bout des taches tenaces. Le programme PowerWash<sup>&reg;</sup> utilise une action de nettoyage supplémentaire pour combattre vos taches en un seul lavage.",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Built Better",
                                        label: "Maytag Man Video"
                                    }
                                },
                                {
                                    image: './public/images/video-thumb-2.jpg',
                                    thumb: './public/images/video-select-2.jpg',
                                    title: 'Appareils de lessive Maytag<sup>&reg;</sup>  - Distributeur de dose optimale',
                                    alt: "test",
                                    ctaTitle: 'Appareils de lessive Maytag<sup>&reg;</sup>  - Distributeur de dose optimale',
                                    ctaText: 'Voir',
                                    ctaBackground: "./public/images/button-background.png",
                                    desc: "Élimine les approximations associées à la lessive. Le distributeur de dose optimale Maytag ajoute automatiquement la quantité exacte de détergent pour un nettoyage efficace. Étant donné qu'il peut contenir  suffisamment de détergent haute efficacité pour laver jusqu’à 12 brassées de lessive, vous n'avez plus besoin d'ajouter du détergent avant chaque lavage*. *D'après une brassée de 8 lb.",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Built Better",
                                        label: "Power Pre-Heat Video"
                                    }
                                },
                                {
                                    id: 'KEkbdgfZ87k',
                                    thumb: './public/images/video-select-3.jpg',
                                    title: 'Laissez Maytag se charger de toutes vos affaires',
                                    alt: "test",
                                    ctaTitle: 'Laissez Maytag se charger de toutes vos affaires',
                                    ctaText: 'Voir',
                                    ctaBackground: "./public/images/button-background.png",
                                    desc: "La combinaison des laveuses et sécheuses Maytag offre à vos vêtements un nettoyage impeccable.",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Built Better",
                                        label: "Evenair Video"
                                    }
                                }
                            ]
                        },
                        productselector: {
                            enabled: true,
                            title: 'Construit pour nettoyer vos brassées difficiles, offert en 2 puissantes configurations',
                            nav: {
                                text: 'Tout<br/>Voir',
                                link: 'http://www.maytag.ca/fr_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050/',
                                analytics: {
                                    category: "@category",
                                    action: "Clicked Choose Your Cooking Configuration",
                                    label: "See all Laundry"
                                }
                            },
                            products: [
                                {
                                    image: "./public/images/products/top_load.png",
                                    thumb: "./public/images/products/top_load-small.png",
                                    title: "Haute efficacité à chargement vertical",
                                    alt: "Haute efficacité à chargement vertical",
                                    desc: "Vous recherchez une performance optimale? Cette laveuse de style traditionnel a fait l'objet de nombreuses améliorations, offrant aujourd'hui le meilleur nettoyage de l'industrie, optimisé par le système PowerWash<sup>&reg;</sup>! Offerts en capacités moyennes à mégas, jusqu'à 7,1 pi<sup>3</sup> du C.E.I., les duos de lessive à chargement vertical haute efficacité vous permettent d'effectuer davantage de lessive en une seule fois. Recherchez également nos laveuses et sécheuses homologuées ENERGY STAR<sup>&reg;</sup> pour réduire votre consommation d'eau et d'énergie au cours de leur durée de vie - tout en vous assurant un nettoyage optimal pour tout type de brassée.",
                                    link: "http://www.maytag.ca/fr_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050+4294965994/",
                                    id: "top-load",
                                    ctaText: "En savoir plus",
                                    ctaBackground: "./public/images/button-background.png",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Laundry Configuration",
                                        label: "Front Control",
                                        learnMore: 'Learn More'
                                    }
                                },
                                {
                                    image: "./public/images/products/front_load.png",
                                    thumb: "./public/images/products/front_load-small.png",
                                    title: "Haute efficacité à chargement frontal",
                                    alt: "Haute efficacité à chargement frontal",
                                    desc: "Ce style contemporain permet d'économiser de l'espace tout en procurant le meilleur nettoyage de sa catégorie, optimisé par le système PowerWash<sup>&reg;</sup>*. Grâce à des trousses de superposition facultatives et un contrôle perfectionné des vibrations Advanced Vibration Control<sup>&trade;</sup>, cette configuration permet une installation dans des espaces restreints, avec un fonctionnement silencieux. Homologuées ENERGY STAR<sup>&reg;</sup>, les laveuses et sécheuses à chargement frontal à haute efficacité vous permettent de réaliser des économies d’eau et énergie tout en vous assurant un nettoyage optimal.",
                                    link: "http://www.maytag.ca/fr_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050+4294965998/",
                                    id: "front-load",
                                    ctaText: "En savoir plus",
                                    ctaBackground: "./public/images/button-background.png",
                                    analytics: {
                                        category: "@category",
                                        action: "Clicked Choose Your Laundry Configuration",
                                        label: "Rear Control",
                                        learnMore: 'Learn More'
                                    }
                                }
                            ]
                        }
                    };
                }
                AppDataService.prototype.get = function () {
                    if (!(this.language in this.contents)) {
                        this.logger.error('Language does not exist');
                    }
                    return this.contents[this.language];
                };
                AppDataService.prototype.applyText = function (obj) {
                    if (!(this.language in this.contents)) {
                        this.logger.error('Language does not exist');
                    }
                    if (obj.name in this.contents[this.language]) {
                        for (var i in this.contents[this.language][obj.name]) {
                            obj[i] = this.contents[this.language][i];
                        }
                    }
                };
                AppDataService.prototype.getLanguage = function () {
                    var url = window.location.href;
                    if (url.indexOf('/fr_CA') > -1)
                        return 'fr';
                    return 'en';
                };
                AppDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [logger_service_1.LoggerService])
                ], AppDataService);
                return AppDataService;
            }());
            exports_1("AppDataService", AppDataService);
        }
    }
});
//# sourceMappingURL=appdata.service.js.map
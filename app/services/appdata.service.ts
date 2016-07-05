
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service'

@Injectable()
export class AppDataService {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: LoggerService) {
		this.language = this.getLanguage()
		this.contents = {}
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
						link: "/other-assets/en_CA/pdf/MT_Cooking_Buying_Guide.pdf",
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
						link: "http://www.maytag.ca/en_CA/2_3_147/jump-page_ten-year-warranty.content.html",
						alt: "test",
						text: "We’re so confident Maytag laundry pairs are built to tackle tough loads for years, we’ve backed them with a 10-year limited parts warranty on the drive motor, stainless steel wash basket, and dryer drum*<br/>*visit maytag.ca for warranty details.",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Additional Features",
							label: "10-Year Warranty"
						}
					},
					{
						title: "10-Year Warranty",
						image: "./public/images/more-features-1.jpg",
						link: "http://www.maytag.ca/other-assets/en_CA/pdf/2016_Maytag_VIBRATION_FREE_LIMITED%20GUARANTEE_EN.pdf",
						alt: "test",
						text: "At Maytag we don’t just talk about dependability, we back it up.",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Additional Features",
							label: "Power Burner"
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
							action: "Clicked Additional Features",
							label: "FIT System"
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
						title: 'Maytag<sup>®</sup> Washers - PowerWash<sup>™</sup> Cycle',
						alt: "test",
						ctaTitle: 'Maytag<sup>®</sup> PowerWash<sup>®</sup> System',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "The Maytag® PowerWash<sup>®</sup> System works three ways to give you one great clean. Optimal Dispensers and Power Spray team together to automatically release detergent at the right time, and give clothes a more concentrated treatment for difficult stains. While the PowerWash® Cycle uses extra cleaning action to fight your worst stains in a single wash.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Maytag Man Video"
						}
					},
					{
						id: 'FuBeNRcpM6Q',
						thumb: './public/images/video-select-2.jpg',
						title: 'Maytag<sup>®</sup> Laundry - Optimal Dose Dispensers',
						alt: "test",
						ctaTitle: 'Maytag<sup>®</sup> Laundry - Optimal Dose Dispensers',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Take the guesswork out of doing your laundry. Maytag's Optimal Dose Dispenser automatically adds just the right amount of detergent at just the right time for an outstanding cleaning performance. And, because it stores enough high efficiency detergent for up to twelve loads of laundry, you won’t have to add detergent with every load*.<br/><br/>*based on an 8lb load.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Power Pre-Heat Video"
						}
					},
					{
						id: 'S_nQgte6bP0',
						thumb: './public/images/video-select-3.jpg',
						title: 'Maytag<sup>®</sup> Washers & Dryers tackle your Tough Loads | Maytag<sup>®</sup> Man',
						alt: "test",
						ctaTitle: 'Maytag<sup>®</sup> All Your Things',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Maytag washers and dryers team up to give your laundry a truly dependable clean.",
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
				title: 'Built to clean tough loads in<br/>two powerful configurations',
				nav: {
					text: 'See<br/>All',
					link: '#',
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
                        title: "High Efficiency<br/>Top-Load",
                        alt: "High Efficiency Top-Load",
                        desc: "Looking for the best performance? This traditional style washer has come a long way, now offering the Best Cleaning in the Industry driven by the PowerWash<sup>®</sup> System! Available in medium to mega capacity up to 7.1 cu. Ft. I.E.C., the High-Efficiency Top Load laundry pairs allow you to get more laundry done at once. You can depend on this ENERGY STAR<sup>®</sup> Qualified washer and dryer to save in lifetime water and energy costs – all while providing a powerfully deep clean for every type of load.",
                        link: "http://www.maytag.ca/en_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050+4294965946/",
                        id: "top-load",
                        ctaText: "Learn More",
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
                        title: "High Efficiency<br/>Front-Load",
                        alt: "High Efficiency Front-Load",
                        desc: "This contemporary style provides space saving flexibility, while also boasting the Best Cleaning in the Industry driven by the PowerWash<sup>®</sup> System. With Advanced Vibration Control<sup>™</sup> Plus and optional stack kits, this configuration allows for quiet placement in smaller spaces.  ENERGY STAR<sup>®</sup> Qualified, High-Efficiency Front-Load Washers mean you’re saving on water and energy costs and still getting a clean you can count on.",
                        link: "http://www.maytag.ca/en_CA/Laundry-1/Laundry_Laundry_Appliances_Washers-3/102290050+4294965947/",
                        id: "front-load",
                        ctaText: "Learn More",
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
		}

		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-1-fr.jpg",
				imageForeground: "./public/images/refer-landing-masthead-2-fr.jpg",
				alt: "test",
				title: "Cuisine"
			},
			banner: {
				enabled: true,
				link: '/en_CA/2_3_1121/jump-page_may-is-maytag-promo.content.html',
				image: './public/images/banner_fr.jpg',
				ctaText: 'En savoir plus',
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
						title: "Guide D'achat",
						alt: "test",
						desc: "Éléments à considérer lorsque vous magasinez",
						ctaText: "Cliquez ici",
						ctaBackground: "./public/images/button-background.png",
						link: "/other-assets/fr_CA/pdf/MT_Cooking_Buying_Guide_FR.pdf",
						type: "cart",
						analytics: {
							category: "@category",
							action: "Clicked Laundry Resources",
							label: "Buying Guide"
						}
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Classements et Évaluations",
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
						title: "Trouvez Votre Électroménager Maytag",
						alt: "test",
						desc: "Vous avez besoin d'aide pour trouver un cuisinière?",
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
				title: "Caractéristiques Additionnelles",
				features: [
					{
						title: "Brûleur Power<sup>&trade;</sup>",
						image: "./public/images/more-features-1.jpg",
						link: "",
						alt: "test",
						text: "",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Additional Features",
							label: "Power Burner"
						}
					},
					{
						title: "Garantie de 10 Ans",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.maytag.ca/fr_CA/2_3_147/jump-page_ten-year-warranty.content.html",
						alt: "test",
						text: "",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Additional Features",
							label: "10-Year Warranty"
						}
					},
					{
						title: "Garantie Limitée du Système D’installation FIT",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.maytag.ca/other-assets/fr_CA/pdf/FIT_Wall%20Oven_Guarantee_MTG_CANADA_FR_2016_FINAL.pdf",
						alt: "test",
						text: "",
						cta: "",
						analytics: {
							category: "@category",
							action: "Clicked Additional Features",
							label: "FIT System"
						}
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Mieux Construit",
				videos: [
					{
						image: './public/images/video-thumb-1.jpg',
						thumb: './public/images/video-select-1.jpg',
						title: 'Fours Maytag<sup>&reg;</sup> – mettez-vous aux fourneaux / monsieur Maytag<sup>&reg;</sup>',
						alt: "test",
						ctaTitle: 'Monsieur Maytag<sup>&reg;</sup>',
						ctaText: 'Voir',
						ctaBackground: "./public/images/button-background.png",
						desc: "Grâce aux fours doubles Maytag®, la cuisson est élevée à un degré supérieur, sur deux niveaux.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Maytag Man Video"
						}
					},
					{
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Cuisinières Maytag<sup>&reg;</sup> – fonction de préchauffage rapide power preheat',
						alt: "test",
						ctaTitle: 'Préchauffage Rapide',
						ctaText: 'Voir',
						ctaBackground: "./public/images/button-background.png",
						desc: "La fonction de préchauffage rapide Power Preheat qui se met en marche pour préchauffer votre four en 8 petites minutes utilise en alternance l'élément de cuisson et l'élément de grillage tout en faisant circuler l'air à l'aide du ventilateur de convection. Tout ce que vous avez besoin de savoir, c'est que cette fonction vous permet d'avoir votre souper prêt en une étape de moins, plus rapidement que jamais.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Power Pre-Heat Video"
						}
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-3.jpg',
						title: 'Cuisinières Maytag<sup>&reg;</sup>  – convection véritable evenair',
						alt: "test",
						ctaTitle: 'Convection véritable EvenAir<sup>&trade;</sup>',
						ctaText: 'Voir',
						ctaBackground: "./public/images/button-background.png",
						desc: "Qu'est-ce que la convection véritable EvenAir Maytag®? C'est un serpentin à chauffage rapide et un ventilateur qui travaillent ensemble pour faire circuler l'air chaud efficacement et rôtir 30 % plus rapidement qu'un four conventionnel. La convection véritable vous procure des résultats optimaux, peu importe ce que vous cuisez.",
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
				title: 'Choisissez Votre Configuration',
				nav: {
					text: 'Voir<br/>Tout',
					link: '#',
					analytics: {
						category: "@category",
						action: "Clicked Choose Your Laundry Configuration",
						label: "See all Cooking"
					}
				},
				products: [
					{
						image: "./public/images/products/front_control.png",
						thumb: "./public/images/products/front_control-sml.png",
                        title: "Cuisinière à commandes frontales",
                        alt: "Cuisinière à commandes frontales",
                        desc: "Les commandes frontales sont conçues pour un accès facile, ont un aspect robuste intégré qui s'agence sans effort à tout comptoir. Vous souhaitez l'installer au bout du comptoir? Aucun problème : les côtés sont finis, et l'allure de votre nouvelle cuisinière sera impeccable.",
                        link: "http://www.maytag.ca/fr_CA/kitchen-1/cooking-2/ranges-3/-[YMES8880DS]-5511597/YMES8880DS/",
                        id: "fcr",
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
						image: "./public/images/products/rear_control.png",
						thumb: "./public/images/products/rear_control-sml.png",
                        title: "Cuisinière à commandes arrière",
                        alt: "Cuisinière à commandes arrière",
                        desc: "Les cuisinières à commandes arrière sont disponibles dans une grande variété de prix et offrent de nombreux choix de style. Dotées d’un panneau de commandes arrière, elles se placent sans problème entre des placards/comptoirs ou au bout d'un comptoir.",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102290012+10000150/",
                        id: "rcr",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Laundry Configuration",
							label: "Rear Control",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/double_oven.png",
						thumb: "./public/images/products/double_oven-sml.png",
                        title: "Cuisinière à four double",
                        alt: "Cuisinière à four double",
                        desc: "Les fours doubles sont dotés de tailles et configurations variées; le four de petite taille est pratique pour la cuisine de tous les jours et le four de plus grande taille est toujours disponible pour cuire un repas de fête. Quelque soit la configuration que vous choisissez, vous serez assuré de pouvoir cuisiner toute sorte de repas.",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102290012+10000151/",
                        id: "dbl-oven",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Laundry Configuration",
							label: "Double Oven",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/wall_oven.png",
						thumb: "./public/images/products/wall_oven-sml.png",
                        title: "Fours muraux",
                        alt: "Fours muraux",
                        desc: "Les fours muraux sont encastrés, offrant simplicité et polyvalence en termes de configuration de cuisine. Généralement situés à hauteur de poitrine, les plats lourds sont faciles à prendre et à transférer sur le comptoir. Avec Maytag, vous pouvez choisir entre un four à micro-ondes encastré, un four mural simple, double, ou combiné avec un four à micro-ondes.",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Wall_Ovens-3/102290015/",
                        id: "wall-ovens",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Laundry Configuration",
							label: "Wall Ovens",
							learnMore: 'Learn More'
						}
                    },
                    {
						image: "./public/images/products/cooktop.png",
						thumb: "./public/images/products/cooktop-sml.png",
                        title: "Surfaces de cuisson",
                        alt: "Surfaces de cuisson",
                        desc: "Les tables de cuisson offrent une surface épurée pour tous vos besoins : ébullition, mijotage et friture. Que la surface de cuisson se trouve sur une cuisinière ou sur une table de cuisson encastrée, la technologie est la même. La surface de cuisson est conçue pour conserver l'élégance de votre cuisine tout en offrant des résultats précis.",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Cooktops-3/102290019/",
                        id: "cooktops",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Laundry Configuration",
							label: "Cooktops",
							learnMore: 'Learn More'
						}
                    },
                    {
						image: "./public/images/products/microwave.png",
						thumb: "./public/images/products/microwave-sml.png",
                        title: "Fours à micro&#8209;ondes",
                        alt: "Fours à micro&#8209;ondes",
                        desc: "Les fours à micro-ondes peuvent s'installer au dessus de votre surface de cuisson, qu'il s'agisse d'une cuisinière ou une table de cuisson, et procurent une puissante hotte de ventilation intégrée. Des fonctions haut de gamme sont aussi offertes, par exemple des fours à micro-ondes à convection qui utilisent des ventilateurs internes et des éléments chauffants séparés afin de faire circuler uniformément l'air chaud.",
                        link: "http://www.maytag.ca/fr_CA/Kitchen-1/Kitchen_Cooking_Microwaves-3/102290026/",
                        id: "microwaves",
                        ctaText: "En savoir plus",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Laundry Configuration",
							label: "Microwaves",
							learnMore: 'Learn More'
						}
                    }
				]
			}
		}
	}

	get() {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		return this.contents[this.language];
	}

	applyText(obj) {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		if (obj.name in this.contents[this.language]) {
			for (var i in this.contents[this.language][obj.name]) {
				obj[i] = this.contents[this.language][i]
			}
		}
	}

	getLanguage() {
		var url = window.location.href
		if (url.indexOf('/fr_CA') > -1) return 'fr'
		return 'en'
	}
}

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
				imageForeground: "./public/images/refer-landing-masthead-2.jpg",
				alt: "test",
				title: "Cooking"
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
							action: "Clicked Cooking Resources",
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
							action: "Clicked Cooking Resources",
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
							action: "Clicked Cooking Resources",
							label: "Find Your MT"
						}
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Additional Features",
				features: [
					{
						title: "Power<sup>&trade;</sup> Burner",
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
						title: "10-Year Warranty",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.maytag.ca/en_CA/2_3_147/jump-page_ten-year-warranty.content.html",
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
						title: "FIT System Guarantee",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.maytag.ca/other-assets/en_CA/pdf/FIT_Wall%20Oven_Guarantee_MTG_CANADA_2016_FINAL.pdf",
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
						id: '14R7RmMFzf8',
						thumb: './public/images/video-select-1.jpg',
						title: 'Maytag<sup>&reg;</sup> Ovens – Get Cookin’ / Maytag Man',
						alt: "test",
						ctaTitle: 'Maytag<sup>&reg;</sup> Man',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Maytag<sup>&reg;</sup> ovens take dependable cooking to another level, with another level.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Maytag Man Video"
						}
					},
					{
						id: 'igvVlpAIJzc',
						thumb: './public/images/video-select-2.jpg',
						title: 'Maytag&reg; Ranges - Power Pre-Heat Function',
						alt: "test",
						ctaTitle: 'Power Pre-Heat',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Alternating bake and broil elements, an air circulated convection fan - there's quite a bit going on when our Power Pre-Heat Function kicks into action to heat your oven in 8 quick minutes. But all you need to know is that it gets you one step closer to dinner being done, faster than ever before.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Power Pre-Heat Video"
						}
					},
					{
						id: 'b5npNHPD3T4',
						thumb: './public/images/video-select-3.jpg',
						title: 'Maytag&reg; Ranges - EvenAir True Convection',
						alt: "test",
						ctaTitle: 'EvenAir True Convection',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "What is Maytag® EvenAir True Convection? It's a quick heating coil. It's a fan. It's both, actually. Working in tandem to move hot air more efficiently and roast up to 30% faster than a traditional oven. Giving your perfectly consistent results, no matter what you're putting inside.",
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
				title: 'Choose Your Configuration',
				nav: {
					text: 'See<br/>All',
					link: 'http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_French_Door-3/102290031/',
					analytics: {
						category: "@category",
						action: "Clicked Choose Your Cooking Configuration",
						label: "See all Cooking"
					}
				},
				products: [
					{
						image: "./public/images/products/front_control.png",
						thumb: "./public/images/products/front_control-sml.png",
                        title: "Front Control Ranges",
                        alt: "Front Control Ranges",
                        desc: "The up front controls are designed for easy access, providing a sturdy, built-in look that fits effortlessly into any countertop. Looking to install at the end of the countertop run? No problem, the sides are finished too, so you can depend on your new range looking great.",
                        link: "http://www.maytag.ca/en_CA/kitchen-1/cooking-2/ranges-3/-[YMES8880DS]-5511597/YMES8880DS/",
                        id: "fcr",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "Front Control",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/rear_control.png",
						thumb: "./public/images/products/rear_control-sml.png",
                        title: "Rear Control Ranges",
                        alt: "Rear Control Ranges",
                        desc: "Rear Control Ranges can be found across all price points and offer ample flexibility in terms of style. With a back panel and standard rear controls, it is sure to fit between cabinets / countertops, or sit steadfast at the end of a run.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102290012+10000150/",
                        id: "rcr",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "Rear Control",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/double_oven.png",
						thumb: "./public/images/products/double_oven-sml.png",
                        title: "Double Oven Ranges",
                        alt: "Double Oven Ranges",
                        desc: "Double Ovens come in several sizes and configurations; the smaller oven is tried and true when it comes to every day cooking and the larger oven is always willing to lend a helping hand for a holiday feast. No matter which configuration you choose, you’re guaranteed to be able to take care of meals of any size.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Ranges-3/102290012+10000151/",
                        id: "dbl-oven",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "Double Oven",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/wall_oven.png",
						thumb: "./public/images/products/wall_oven-sml.png",
                        title: "Wall Ovens",
                        alt: "Wall Ovens",
                        desc: "With simplicity in mind, Wall Ovens are built-in, offering more flexibility in terms of kitchen layout. Typically installed at chest height, heavier dishes are easy-to-reach and transfer to the countertop. With Maytag, you can choose from Single Wall Oven, Double, Microwave Combination and Built-In Microwave options.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Wall_Ovens-3/102290015/",
                        id: "wall-ovens",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "Wall Ovens",
							learnMore: 'Learn More'
						}
                    },
                    {
						image: "./public/images/products/cooktop.png",
						thumb: "./public/images/products/cooktop-sml.png",
                        title: "Cooktops",
                        alt: "Cooktops",
                        desc: "Cooktops offer a flat and sleek surface for all of your cooking needs; boiling, simmering and frying. The technology choices are the same whether you’re looking at a range cooktop or a built-in, designed to keep your kitchen looking great while delivering powerful results.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Cooktops-3/102290019/",
                        id: "cooktops",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "Cooktops",
							learnMore: 'Learn More'
						}
                    },
                    {
						image: "./public/images/products/microwave.png",
						thumb: "./public/images/products/microwave-sml.png",
                        title: "Microwaves",
                        alt: "Microwaves",
                        desc: "No matter if it’s a range or a cooktop, microwave models are installed above your cooking area with a powerful built-in hood fan. Enhanced features are available; such as convection microwaves which use an interior fan and separate heating element to evenly circulate hot air.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Cooking_Microwaves-3/102290026/",
                        id: "microwaves",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Cooking Configuration",
							label: "Microwaves",
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
							action: "Clicked Cooking Resources",
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
							action: "Clicked Cooking Resources",
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
							action: "Clicked Cooking Resources",
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
						action: "Clicked Choose Your Cooking Configuration",
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
							action: "Clicked Choose Your Cooking Configuration",
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
							action: "Clicked Choose Your Cooking Configuration",
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
							action: "Clicked Choose Your Cooking Configuration",
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
							action: "Clicked Choose Your Cooking Configuration",
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
							action: "Clicked Choose Your Cooking Configuration",
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
							action: "Clicked Choose Your Cooking Configuration",
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
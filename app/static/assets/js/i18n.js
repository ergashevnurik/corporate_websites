/*
 *  I18n.js
 *  =======
 *
 *  Simple localization util.
 *  1. Store your localized labels in json format: `localized-content.json`
 *  2. Write your markup with key references using `data-i18n` attributes.
 *  3. Explicitly invoke a traverse key resolver: `i18n.localize()`
 *     OR
 *     Change the language, and the contents will be refreshed: `i18n.lang('en')`
 *
 *  This util relies on jQuery to work. I would recommend using the latest version
 *  available (1.12.x or 2.1.4+), although this will probably run with any older
 *  version since it is only taking advantage of `$.getJSON()` and the jQuery
 *  selector function `$()`.
 * 
 *  © 2016 Diogo Simões - diogosimoes.com
 *
 */

 var demoJson = {
 	"header": {
        "main": {
          "uz": "Asosiy",
          "ru": "Главная",
          "en": "Main"
        },
        "about": {
    			"uz": "Kompaniya",
          "ru": "Компания",
          "en": "Company"
        },
        "product": {
        	"uz": "Mahsulotlar",
          "ru": "Продукция",
          "en": "Products"
        },
        "career": {
        	"uz": "Karyera",
          "ru": "Карьера",
          "en": "Career"
        },
        "supply": {
        	"uz": "Ta'minot",
          "ru": "Снабжение",
          "en": "Supply"
        },
        "contacts": {
        	"uz": "Kontaktlar",
          "ru": "Контакты",
          "en": "Contacts"
        }
      },
  
    	"hero": {
    		"title": {
      		"uz": "Muhim narsaga e'tibor qarating",
          "ru": "Сосредоточьтесь на том, что важно",
          "en": "Focus on what's important"
    		},
    		"description": {
      		"uz": "Innovatsion bosib chiqarish bilan moslashuvchan qadoqlash va plyonka materiallarini professional ishlab chiqarish. Pro Flexo sifatli va ijodiy qadoqlash bo'yicha ishonchli hamkoringizdir.",
          "ru": "Профессиональное производство гибкой упаковки и пленочных материалов с инновационной печатью. Pro Flexo - ваш надежный партнер для качественной и креативной упаковки.",
          "en": "Professional production of flexible packaging and film materials with innovative printing. Pro Flexo is your reliable partner for quality and creative packaging."
    		},
    		"familiarize": {
      		"uz": "Tanishmoq",
          "ru": "Ознакомиться",
          "en": "Familiarize"
    		},
    		"seemore": {
      		"uz": "Ko'rish",
          "ru": "Посмотреть",
          "en": "Look"
    		},
    		"logo": {
      		"uz": "ProFlexo'dan innovatsion moslashuvchan qadoqlash va plyonka materiallari",
          "ru": "Инновационная гибкая упаковка и пленочные материалы от ProFlexo",
          "en": "Innovative flexible packaging and film materials from ProFlexo"
    		}
      },
  		"why_us": {
  			"about_us": {
  				"uz": "Biz haqimizda",
  				"ru": "О нас",
  				"en": "About us"
  			},
  			"speak": {
  				"uz": "Keling, biz haqimizda gapiraylik",
  				"ru": "Давайте поговорим о нас",
  				"en": "Let's talk about us"
  			},
  			"develop": {
  				"uz": "Keling, biznesingizni birgalikda rivojlantiraylik",
  				"ru": "Давайте развивать ваш бизнес вместе",
  				"en": "Let's grow your business together"
  			},
  			"greeting": {
  				"uz": "Pro Flexo dunyosiga xush kelibsiz - yuqori sifatli moslashuvchan qadoqlash va innovatsion bosma plyonkali materiallarni ishlab chiqarishda katta tajribaga ega kompaniya.",
  				"ru": "Добро пожаловать в мир Pro Flexo - компании с большим опытом в производстве высококачественной гибкой упаковки и пленочных материалов с инновационной печатью.",
  				"en": "Welcome to the world of Pro Flexo - a company with extensive experience in the production of high quality flexible packaging and film materials with innovative printing."
  			},
  			"reliable": {
  				"uz": "Ishonchli hamkorlik",
  				"ru": "Надежное партнерство",
  				"en": "Reliable partnership"
  			},
  			"why_reliable": {
  				"uz": "Biz sizning ishonchli hamkoringiz, biznesingiz uchun noyob va ijodiy qadoqlash yechimlarini taqdim etishga tayyormiz.",
  				"ru": "Мы являемся вашим надежным партнером, готовым предоставить уникальные и креативные упаковочные решения для вашего бизнеса.",
  				"en": "We are your trusted partner, ready to provide unique and creative packaging solutions for your business."
  			},
  			"exp": {
  				"uz": "Bizning professional ishlab chiqarishimiz va katta tajribamiz bizga turli sohalardagi mijozlarga xizmat ko'rsatish va eng yuqori standartlarga javob beradigan sifatli mahsulotlarni taqdim etish imkonini beradi.",
  				"ru": "Наше профессиональное производство и широкий опыт позволяют нам обслуживать клиентов в различных отраслях и предоставлять качественные продукты, соответствующие самым высоким стандартам.",
  				"en": "Our professional manufacturing and extensive experience enable us to serve customers in various industries and provide quality products that meet the highest standards."
  			},
  			"geo": {
  				"uz": "Geografik taqsimot",
  				"ru": "Географическое распределение",
  				"en": "Geographical distribution"
  			},
  			"proud": {
  				"uz": "Biz nafaqat O‘zbekistonda, balki undan tashqarida ham mijozlarga xizmat ko‘rsatish imkonini beruvchi o‘z innovatsiyalarimiz, shuningdek, geografik joylashuvimiz bilan faxrlanamiz.",
  				"ru": "Мы гордимся нашими инновациями, а также географическим охватом, который позволяет нам обслуживать клиентов не только в Узбекистане, но и за его пределами.",
  				"en": "We are proud of our innovation, as well as our geographic reach, which allows us to serve clients not only in Uzbekistan, but also beyond."
  			},
  			"solutions": {
  				"uz": "Sizning biznesingiz hajmi va joylashuvidan qat'i nazar, biz har doim sizga o'ziga xosligingizni ta'kidlaydigan va muvaffaqiyatga erishishingizga yordam beradigan echimlarni taklif qilishga tayyormiz.",
  				"ru": "Независимо от масштаба и местоположения вашего бизнеса, мы всегда готовы предложить вам решения, которые подчеркнут вашу уникальность и помогут достичь успеха.",
  				"en": "Regardless of the size and location of your business, we are always ready to offer you solutions that will highlight your uniqueness and help you achieve success."
  			},
  			"technologies": {
  				"uz": "Innovatsion texnologiyalar",
  				"ru": "Инновационные технологии",
  				"en": "Innovative technologies"
  			},
  			"aimed_technologies": {
  				"uz": "Biz qadoqlash sanoatining oldingi saflarida qolish uchun doimiy innovatsiyalar va rivojlanishga sodiqmiz.",
  				"ru": "Мы нацелены на постоянные инновации и разработки, чтобы быть на передовых позициях в индустрии упаковки.",
  				"en": "We are committed to continuous innovation and development to remain at the forefront of the packaging industry."
  			},
  			"equipped": {
  				"uz": "Bizning ishlab chiqarishimiz zamonaviy uskunalar bilan jihozlangan bo'lib, bu bizga har bir buyurtmada eng yuqori sifat va aniqlik standartlariga erishish imkonini beradi.",
  				"ru": "Наше производство оснащено современным оборудованием, которое позволяет нам достигать высочайших стандартов качества и точности в каждом заказе.",
  				"en": "Our production is equipped with modern equipment, which allows us to achieve the highest standards of quality and accuracy in every order."
  			}
  		},

  		"services_list": {
  			"peculiarities": {
  				"uz": "Xususiyatlari",
  				"ru": "Особенности",
  				"en": "Peculiarities"
  			},
  			"choose_us": {
  				"uz": "Nega hamma bizni tanlaydi?",
  				"ru": "Почему все выбирают нас?",
  				"en": "Why does everyone choose us?"
  			},
  			"innovative_printing": {
  				"uz": "Innovatsion bosma",
  				"ru": "Инновационная Печать",
  				"en": "innovative Printing"
  			},
  			"we_equipped": {
  				"uz": "Biz ajoyib grafik va tasvirlar bilan qadoqlash yaratish uchun eng zamonaviy bosib chiqarish texnologiyalari bilan jihozlanganmiz.",
  				"ru": "Мы оснащены современными технологиями печати, позволяющими создавать упаковку с выдающейся графикой и изображениями.",
  				"en": "We are equipped with state-of-the-art printing technologies to create packaging with outstanding graphics and images."
  			},
  			"flexible_customization": {
  				"uz": "Moslashuvchan moslashtirish",
  				"ru": "Гибкая Кастомизация",
  				"en": "Flexible Customization"
  			},
  			"packaging_customizable": {
  				"uz": "Bizning qadoqlashimiz har bir mijozning o'ziga xos ehtiyojlarini qondirish uchun moslashtirilgan bo'lib, bizning yechimlarimiz turli sohalar uchun idealdir.",
  				"ru": "Наша упаковка настраивается под уникальные потребности каждого клиента, что делает наши решения идеальными для различных отраслей.",
  				"en": "Our packaging is customized to meet each customer's unique needs, making our solutions ideal for a variety of industries."
  			},
  			"control_qualities": {
  				"uz": "Sifat nazorati",
  				"ru": "Контроль Качества",
  				"en": "Quality control"
  			},
  			"control": {
  				"uz": "Biz ishlab chiqarishning har bir bosqichini qat'iy nazorat qilamiz, eng yuqori sifat standartlari va mahsulot ishonchliligini kafolatlaymiz.",
  				"ru": "Мы строго контролируем каждый этап производства, гарантируя высшие стандарты качества и надежность продукции.",
  				"en": "We strictly control every stage of production, guaranteeing the highest quality standards and product reliability."
  			},
  			"geo_coverage": {
  				"uz": "Geografik qamrov",
  				"ru": "Географический Охват",
  				"en": "Geographical Coverage"
  			},
  			"whole_world": {
  				"uz": "Biz nafaqat O'zbekistonda, balki boshqa mamlakatlardagi mijozlarga xizmat ko'rsatamiz va butun dunyo bo'ylab sifatli qadoqlash yechimlarini taklif qilamiz.",
  				"ru": "Мы обслуживаем клиентов не только в Узбекистане, но и в других странах, предлагая качественные упаковочные решения по всему миру.",
  				"en": "We serve clients not only in Uzbekistan, but also in other countries, offering quality packaging solutions around the world."
  			},
  			"individual_approach": {
  				"uz": "Individual yondashuv",
  				"ru": "Индивидуальный Подход",
  				"en": "Individual Approach"
  			},
  			"consultations": {
  				"uz": "Biz har bir buyurtma noyob ekanligini tushunamiz va sizning ehtiyojlaringizga eng mos keladigan maslahat va echimlarni taqdim etishga intilamiz.",
  				"ru": "Мы понимаем, что каждый заказ уникален, и готовы предоставить консультации и решения, наилучшим образом соответствующие вашим потребностям.",
  				"en": "We understand that every order is unique and are committed to providing advice and solutions that best suit your needs."
  			},
  			"efficiency_reliability": {
  				"uz": "Samaradorlik va ishonchlilik",
  				"ru": "Оперативность и Надежность",
  				"en": "Efficiency and Reliability"
  			},
  			"efficiency_reliability_des": {
  				"uz": "Biz buyurtmalarning tezkor bajarilishini va ishonchli ta'minotni kafolatlaymiz, bu bizga sizning uzoq muddatli hamkoringiz bo'lish imkonini beradi.",
  				"ru": "Мы гарантируем оперативное выполнение заказов и надежность поставок, что позволяет нам быть вашим долгосрочным партнером.",
  				"en": "We guarantee prompt execution of orders and reliable supplies, which allows us to be your long-term partner."
  			}
  		},
  		"departments": {
  			"order": {
  				"uz": "Buyurtma qilmoq",
  				"ru": "Заказать",
  				"en": "Order"
  			},
  			"products": {
  				"uz": "Mahsulotlar",
  				"ru": "Продукты",
  				"en": "Products"
  			},
  			"show_products": {
  				"uz": "Keling, mahsulotlarimizni ko'rsataylik",
  				"ru": "Покажем нашу продукцию",
  				"en": "Let's show our products"
  			},
  			"package1": {
  				"uz": "Qandolat mahsulotlari uchun qadoqlash",
  				"ru": "Упаковки для кондитерских изделий",
  				"en": "Packaging for confectionery products"
  			},
  			"package2": {
  				"uz": "Choy, qahva va kakao uchun qadoqlash",
  				"ru": "Упаковки для чая, кофе и какао",
  				"en": "Packaging for tea, coffee and cocoa"
  			},
  			"package3": {
  				"uz": "Ziravorlar va ziravorlar uchun qadoqlash.",
  				"ru": "Упаковка для специй и приправ.",
  				"en": "Packaging for spices and seasonings."
  			},
  			"package4": {
  				"uz": "Yorma, makaron, tuz, shakar va boshqa oziq-ovqat mahsulotlarini qadoqlash",
  				"ru": "Упаковки для круп, макаронных изделий, соли, сахара и другие бакалейные изделие",
  				"en": "Packaging for cereals, pasta, salt, sugar and other groceries"
  			},
  			"package5": {
  				"uz": "Chipslar, donlar va tez tayyorlanadigan ovqatlar uchun qadoqlash.",
  				"ru": "Упаковки для чипсов, хлопья и продуктов быстрого приготовления.",
  				"en": "Packaging for chips, cereals and instant foods."
  			},
  			"package6": {
  				"uz": "Hayvonlar uchun ozuqa uchun qadoqlash.",
  				"ru": "Упаковки для кормов животных.",
  				"en": "Packaging for animal feed."
  			},
  			"package7": {
  				"uz": "Soslar va mayonez uchun qadoqlash.",
  				"ru": "Упаковки для соусов и майонеза.",
  				"en": "Packaging for sauces and mayonnaise."
  			},
  			"package8": {
  				"uz": "Yuvish vositalari uchun qadoqlash.",
  				"ru": "Упаковки для моющих средств.",
  				"en": "Packaging for detergents."
  			},
  			"package9": {
  				"uz": "Muzqaymoq qadoqlash.",
  				"ru": "Упаковки для мороженого.",
  				"en": "Ice cream packaging."
  			},
  			"package10": {
  				"uz": "Ichimliklar uchun teglar.",
  				"ru": "Этикетки для напитков.",
  				"en": "Labels for drinks."
  			},
  			"package11": {
  				"uz": "Non va pishiriqlar uchun qadoqlash.",
  				"ru": "Упаковки для хлебов и выпечки.",
  				"en": "Packaging for breads and pastries."
  			},
  			"package12": {
  				"uz": "Kesilgan va halqa tutqichli sumkalar.",
  				"ru": "Пакеты с вырубной и петлевой ручкой.",
  				"en": "Bags with cut-out and loop handles."
  			},
  			"package13": {
  				"uz": "Gigiena vositalari uchun qadoqlash.",
  				"ru": "Упаковки для гигиенических изделий.",
  				"en": "Packaging for hygiene products."
  			},
  			"package14": {
  				"uz": "Muzlatilgan mahsulotlar, broylerlar uchun paketlar.",
  				"ru": "Пакеты для замороженных продуктов, бройлеров.",
  				"en": "Packages for frozen products, broilers."
  			},
  			"package15": {
  				"uz": "Kuryer paketlari.",
  				"ru": "Курьерские упаковки-пакеты.",
  				"en": "Courier packages."
  			},
  			"package1_des": {
  				"uz": "Qandolat dunyosidagi mahsulotlar har doim chidab bo'lmas bo'lishi kerak va bizning qadoqlashimiz sizni ajralib turishingizga yordam beradi. Pro Flexo shirin delikateslaringizning ta'mi va sifatini ta'kidlaydigan keng ko'lamli ijodiy va funktsional qadoqlash yechimlarini taklif etadi.",
  				"ru": "Продукция в мире кондитерских изделий всегда должна быть неотразимой, и наши упаковки помогут вам выделиться. Pro Flexo предлагает широкий выбор креативных и функциональных упаковочных решений, которые подчеркнут вкус и качество ваших сладких деликатесов.",
  				"en": "Products in the world of confectionery always need to be irresistible, and our packaging will help you stand out. Pro Flexo offers a wide range of creative and functional packaging solutions that will highlight the taste and quality of your sweet delicacies."
  			},
  			"package1_des2": {
  				"uz": "Qandolat mahsulotlari tafsilotlarga alohida e'tibor talab qilishini tushunamiz va bizning qadoqlashimiz buni hisobga olgan holda ishlab chiqilgan. Kek, pechenye, shokolad yoki boshqa shirinliklarni taklif qilasizmi, bizda siz uchun mukammal yechim bor.",
  				"ru": "Мы понимаем, что кондитерские изделия требуют особого внимания к деталям, и наши упаковки разработаны с учетом этого. Независимо от того, предлагаете ли вы торты, печенье, шоколад или другие сладости, у нас есть идеальное решение для вас.",
  				"en": "We understand that confectionery products require special attention to detail and our packaging is designed with this in mind. Whether you offer cakes, cookies, chocolates or other sweets, we have the perfect solution for you."
  			},
  			"package1_des_what": {
  				"uz": "Bizning qadoqlashimiz quyidagilarni ta'minlaydi:",
  				"ru": "Наши упаковки обеспечивают:",
  				"en": "Our packaging provides:"
  			},
  			"package1_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Konfetli qadoqlash – Konfetlar uchun xotira effektiga ega burama qadoq tanlanadi. Biz 3 xil variantda burama qadoqlashni taklif qilamiz - shaffof, oq va metalllashtirilgan (misollar, burama qadoqlangan konfetlarning fotosuratlari). </p>\n" +
					"                     </li>\n" +
					"                     <li>\n" +
					"                       <p>Shokolad barlari, shokolad barlari va boshqa turdagi shokoladlar uchun qadoqlash - Sovuq registrga yopishtirilgan elim bilan sovuq muhrlangan qadoqlash (shokolad barlari, shokolad barlari va boshqalarga misollar).</p>\n" +
					"                     </li>\n" +
					"                     <li>\n" +
					"                       <p>Qandolat mahsulotlari uchun qadoqlashning boshqa turlari (masalan: 4 ta ratsion, 5 ta ratsion, vafli, pechenye va boshqalar uchun) </p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>Упаковка для конфет – Твист упаковку с эффектом памяти выбирают для конфет. Мы предлагаем твист упаковку в 3-х разных вариантах – прозрачную, белую и металлизированную (примеры, фото конфет с твист упаковкой). </p>\n" +
					"                    </li>\n" +
					"                    <li>\n" +
					"                      <p>Упаковка для шоколадных плиток, шоколадных батончиков и другие виды шоколадных конфет – Cold seal упаковка с нанесением клея в холодный регистр (примеры шоколадных батончиков, плиточных шоколадов и тд).</p>\n" +
					"                    </li>\n" +
					"                    <li>\n" +
					"                      <p>Прочие виды упаковок для кондитерских изделий (примеры 4мя пайками, 5ти паечный, для вафель, печенье и тд) </p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>Candy packaging – Twist packaging with memory effect is chosen for candies. We offer twist packaging in 3 different versions - transparent, white and metallized (examples, photos of candies with twist packaging). </p>\n" +
					"                     </li>\n" +
					"                     <li>\n" +
					"                       <p>Packaging for chocolate bars, chocolate bars and other types of chocolates - Cold seal packaging with glue applied to a cold register (examples of chocolate bars, chocolate bars, etc.).</p>\n" +
					"                     </li>\n" +
					"                     <li>\n" +
					"                       <p>Other types of packaging for confectionery products (examples: 4 rations, 5 rations, for waffles, cookies, etc.) </p>\n" +
					"                     </li>"
  			},

  			"package2_des_what1": {
  				"uz": "<li>\n" +
					"                       <p><b>Kichik paketlar yoki tayoqchalar ko'rinishidagi paketlar. Ushbu turdagi qadoqlash bir martalik mahsulotlar uchun idealdir. U deyarli har qanday quruq tarkibni qadoqlash uchun ishlatiladi - shakardan tortib dongacha (bunday choy qadoqlariga misollar).</p>\n" +
					"                     </li>\n" +
					"                     <li>\n" +
					"                       <p>Doypaketlar - bu pastki qismi barqaror bo'lgan sumkalar. Qahva yoki choyni qadoqlash uchun o'simlik aralashmalari, ziplock bilan jihozlangan doypacklar tobora ko'proq foydalanilmoqda. Ushbu qisqich qulay, qayta foydalanish mumkin bo'lgan ochilish va yopishni ta'minlaydi. Ko'pincha bunday qadoqlarni ishlab chiqarish uchun ko'p qatlamli material ishlatiladi (ziplokli doypaket misollari).</p>\n" +
					"                     </li>\n" +
					"                     <li>\n" +
					"                       <p>Yostiqli sumka deyarli barcha toifadagi oziq-ovqat mahsulotlari uchun keng tarqalgan qadoqlash turidir. Qahva va choy mahsulotning rangi va tarkibini baholash imkonini beruvchi shaffof qoplarga, shuningdek, metalllangan qoplarga yoki to‘liq yopilgan qoplarga qadoqlanadi. Choy va qahva qadoqlashda yostiq xalta ham ko'pincha qutiga solingan ichki paket sifatida ishlatiladi (misollar).</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p><b>Пакеты в виде небольших саше или стиков. Такой тип упаковки идеально подойдет для однопорционных продуктов. Применяется для упаковки практически любого сухого содержимого – от сахара до крупы (примеры таких упаковок чая).</p>\n" +
					"                    </li>\n" +
					"                    <li>\n" +
					"                      <p>Дой-паки – пакеты с устойчивым дном. Для упаковки кофе или чая, травяных смесей все чаще используют дойпаки, оснащенные зиплоком. Эта застежка обеспечивает удобное многоразовое открытие-закрытие. Чаще всего для производства таких упаковок используется многослойный материал (примеры дой-пака с зип-локом).</p>\n" +
					"                    </li>\n" +
					"                    <li>\n" +
					"                      <p>Пакет-подушка – распространенный тип упаковки практически для всех категорий пищевых продуктов. Кофе и чай фасуют в прозрачные пакеты, позволяющие оценить цвет и состав продукта, а также в металлизированные пакеты или пакеты с полной запечаткой. В фасовке чая и кофе пакет-подушка также часто используется в роли внутренней упаковки, которую вкладывают в коробку (примеры).</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p><b>Packages in the form of small sachets or sticks. This type of packaging is ideal for single-serving products. It is used for packaging almost any dry content - from sugar to cereals (examples of such tea packaging).</p>\n" +
					"                     </li>\n" +
					"                     <li>\n" +
					"                       <p>Doypacks are bags with a stable bottom. For packaging coffee or tea, herbal mixtures, doypacks equipped with a ziplock are increasingly used. This clasp provides convenient, reusable opening and closing. Most often, multilayer material is used to produce such packaging (examples of a doypack with a ziplock).</p>\n" +
					"                     </li>\n" +
					"                     <li>\n" +
					"                       <p>Pillow bag is a common type of packaging for almost all categories of food products. Coffee and tea are packaged in transparent bags that allow you to evaluate the color and composition of the product, as well as in metallized bags or fully sealed bags. In the packaging of tea and coffee, a pillow bag is also often used as an inner package that is placed in a box (examples).</p>\n" +
					"                     </li>"
  			},


  			"package3_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Har xil o'lchamdagi paketlar yoki tayoqchalar ko'rinishidagi paketlar. Ushbu turdagi qadoqlash ziravorlar va ziravorlar uchun ideal bo'lib, ularning xushbo'yligi va ta'mini saqlab qoladi. Ular, shuningdek, tashqi ta'sirlardan himoyalangan va foydalanish uchun qulay (4 ta ratsionli bunday paketlarga misollar).</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>Пакеты в виде саше или стиков разного размера. Такой тип упаковки идеально подойдет для специй и приправ, сохраняя свой аромат и вкус. А также они защищены от внешних воздействий и удобны для использования (примеры таких упаковок с 4мя пайками).</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>Packages in the form of sachets or sticks of different sizes. This type of packaging is ideal for spices and seasonings, preserving their aroma and taste. They are also protected from external influences and convenient for use (examples of such packages with 4 rations).</p>\n" +
					"                     </li>"
  			},


  			"package4_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Ommaviy mahsulotlarni qadoqlash uchun, qoida tariqasida, ko'p qatlamli plyonkalardan tayyorlangan oqimli qadoqlash qo'llaniladi. Ishlab chiqarish ko'p qatlamli plyonkalarni talab qiladigan doypack qadoqlash ham keng tarqalmoqda.\n" +
					"Ko'pgina oziq-ovqat mahsulotlarining uzoq umr ko'rish muddati bor, bu qadoqlash xususiyatlariga yuqori talablarni qo'yadi. Ommaviy mahsulotlar uchun qadoqlash mahsulotning butun yaroqlilik muddati davomida xavfsizligini ta'minlashga, uni mexanik shikastlanishdan, yorug'likdan, namlikdan, hidlardan himoya qilishga yordam berishi kerak (oziq-ovqat mahsulotlarini qadoqlash misollari)\n" +
					"</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>Для фасовки сыпучих продуктов применяют, как правило, упаковку флоу-пак, изготовленную из многослойных пленок. Также получает распространение упаковка дой-пак, для производства которой требуются многослойные пленки.\n" +
					"Большая часть бакалейной продукции имеет длительные сроки хранения, что выдвигает высокие требования к свойствам упаковки. Упаковка для сыпучих продуктов должна содействовать обеспечению сохранности товара в течение всего срока годности, защитить его от механических повреждений, света, влаги, запахов (примеры упаковок бакалейной продукции)\n" +
					"</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>For packaging bulk products, as a rule, flow-pack packaging made from multilayer films is used. Doypack packaging, the production of which requires multilayer films, is also becoming widespread.\n" +
					"Most grocery products have long shelf life, which places high demands on the properties of packaging. Packaging for bulk products should help ensure the safety of the product throughout its shelf life, protect it from mechanical damage, light, moisture, odors (examples of grocery packaging)\n" +
					"</p>\n" +
					"                     </li>"
  			},

  			"package5_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Snacklarning xarakterli xususiyati past namlik, yuqori yog'lilik va begona hidlarga nisbatan sezgirlikning oshishi hisoblanadi. Shu munosabat bilan, urug'lar, chiplar va shunga o'xshash mahsulotlar uchun qadoqlash ma'lum to'siq xususiyatlariga ega bo'lishi kerak:</p>\n" +
					"                     </li>\n" +
					"                     <ol>\n" +
					"                         <li>\n" +
					"                             <p>mahsulotni yorug'likdan himoya qilish;\n" +
					"                         </li>\n" +
					"                         <li>\n" +
					"                             <p>kislorod va suv bug'lari uchun to'siqni kuchaytiruvchi xususiyatlarga ega;</p>\n" +
					"                         </li>\n" +
					"                         <li>\n" +
					"                             <p>xushbo'y qarshilikka ega;</p>\n" +
					"                         </li>\n" +
					"                         <li>\n" +
					"                             <p>yog'larni ushlab turish, ularning tashqariga chiqishini oldini olish (bunday qadoqlash misollari)</p>\n" +
					"                         </li>\n" +
					"                     </ol>",
  				"ru": "<li>\n" +
					"                      <p>Характерная особенность снеков – низкое содержание влаги, высокая жирность, повышенная восприимчивость к посторонним запахам. В связи с этим, упаковка для семечек, чипсов и подобных продуктов должна обладать определенными барьерными свойствами:</p>\n" +
					"                    </li>\n" +
					"                    <ol>\n" +
					"                        <li>\n" +
					"                            <p>защищать продукт от света;\n" +
					"                        </li>\n" +
					"                        <li>\n" +
					"                            <p>иметь повышенные барьерные свойства по кислороду и парам воды;</p>\n" +
					"                        </li>\n" +
					"                        <li>\n" +
					"                            <p>обладать ароматостойкостью;</p>\n" +
					"                        </li>\n" +
					"                        <li>\n" +
					"                            <p>удерживать жиры, не давая им мигрировать наружу (примеры таких упаковок)</p>\n" +
					"                        </li>\n" +
					"                    </ol>",
  				"en": "<li>\n" +
					"                       <p>A characteristic feature of snacks is low moisture content, high fat content, and increased susceptibility to foreign odors. In this regard, packaging for seeds, chips and similar products must have certain barrier properties:</p>\n" +
					"                     </li>\n" +
					"                     <ol>\n" +
					"                         <li>\n" +
					"                             <p>protect the product from light;\n" +
					"                         </li>\n" +
					"                         <li>\n" +
					"                             <p>have increased barrier properties for oxygen and water vapor;</p>\n" +
					"                         </li>\n" +
					"                         <li>\n" +
					"                             <p>have aroma resistance;</p>\n" +
					"                         </li>\n" +
					"                         <li>\n" +
					"                             <p>retain fats, preventing them from migrating out (examples of such packaging)</p>\n" +
					"                         </li>\n" +
					"                     </ol>"
  			},


  			"package6_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Yuqori sifatli qadoqlash va ho'l hayvonlar ozuqasini uzoq muddat saqlash uchun ko'pincha 100°C dan yuqori haroratlarda sterilizatsiya qilinishi mumkin bo'lgan ko'p qatlamli plyonkali materiallar va retortli qadoqlardan foydalaniladi (retort qadoqlash misollari).</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>Для качественной упаковки и длительного хранения влажных кормов животных чаще всего применяют многослойные пленочные материалы и реторт-упаковку, которая допускается к стерилизации при температурах свыше 100°С (примеры реторт-упаковки).</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>For high-quality packaging and long-term storage of wet animal feed, multilayer film materials and retort packaging are most often used, which can be sterilized at temperatures above 100°C (examples of retort packaging).</p>\n" +
					"                     </li>"
  			},


  			"package7_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Tomat pastasi asosidagi mahsulotlar atrof-muhit ta'siriga juda sezgir, ularni qadoqlash qo'shimcha to'siq materiallarini talab qiladi. Soslar va ketchuplar issiq qadoqlangan, shuning uchun qadoqlash ham yuqori issiqlik yuklariga bardosh berishi kerak. Qadoqlash materiali alyuminiy folga va polimer plyonkalar asosidagi va yuqori to‘siqli birikmalarga asoslangan ikki qavatli (“dupleks”) yoki uch qavatli (“tripleks”) bo‘lishi mumkin (bunday qadoqlash namunalari).</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>Продукты на основе томатной пасты очень чувствительны к воздействию окружающей среды, в их упаковке нужен дополнительный барьерный материал. Соусы и кетчупы фасуются в горячем виде, поэтому упаковка также должна выдерживать высокие тепловые нагрузки. Упаковочный материал может быть двухслойным («дуплексный») или трехслойным («триплексным») на основе алюминиевой фольги и полимерных пленок и на основе высокобарьерных соединений (примеры таких упаковок).</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>Tomato paste-based products are very sensitive to environmental influences; their packaging requires additional barrier material. Sauces and ketchups are packaged hot, so the packaging must also withstand high heat loads. The packaging material can be two-layer (“duplex”) or three-layer (“triplex”) based on aluminum foil and polymer films and based on high-barrier compounds (examples of such packaging).</p>\n" +
					"                     </li>"
  			},


  			"package8_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Yuvish vositalari uchun qadoqlash, birinchi navbatda, hidlar, namlik va ultrabinafsha nurlanishning kirib kelishidan himoya qilish uchun talab qilinadi. Filmning yaxshi payvandlash xususiyatlari ham muhimdir, chunki, masalan, kir yuvish kukuni juda ko'p chang zarralarini o'z ichiga oladi va payvandlashni qiyinlashtirishi mumkin. Maishiy kimyo mahsulotlarini qadoqlash uchun optimal yechim laminatlangan materiallardan tayyorlangan turli formatdagi sumkalardir (misollar).</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>К упаковке для моющих средств, прежде всего, предъявляются требования по защите от проникновения запахов, влаги и ультрафиолета. Также важны хорошие сварочные свойства пленки, поскольку, к примеру, стиральный порошок содержит много пылящих частиц и может затруднить сварку. Оптимальным решением для упаковки бытовой химии являются пакеты различных форматов, изготовленные из ламинированных материалов (примеры).</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>Packing for detergents, first of all, is required to protect against the penetration of odors, moisture and ultraviolet radiation. Good welding properties of the film are also important, since, for example, washing powder contains a lot of dust particles and can make welding difficult. The optimal solution for packaging household chemicals are bags of various formats made from laminated materials (examples).</p>\n" +
					"                     </li>"
  			},

  			"package9_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Muzqaymoq va sut mahsulotlari ehtiyotkorlik bilan saqlashni talab qiladi. Paket ularni quyosh nuri va kislorod ta'siridan himoya qilishi kerak. Muzqaymoq qadoqlari etarlicha mustahkam va namlikka chidamli bo'lishi, quyosh nuri va kislorod ta'siridan yaxshi himoya qilishni ta'minlaydigan va mahsulotga tashqi hidlarning kirib borishini oldini oladigan yuqori to'siqli xususiyatlarga ega bo'lishi kerak. Shuningdek, paketning jozibadorligi ham katta ahamiyatga ega, bu yorqin, rang-barang dizaynlar va bosma effektlar (qadoqlash misollari) bilan ta'minlanadi.</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>Мороженое и молочные продукты требуют бережного хранения. Упаковка должна защищать их от воздействия солнечного света и кислорода. Упаковка для мороженого должна быть достаточно прочной и влагостойкой, иметь высокие барьерные показатели, обеспечивая хорошую защиту от воздействия солнечных лучей и кислорода и не допуская проникновение внешних запахов в продукцию. Также большое значение имеет привлекательность пакета, которую обеспечивают яркие, красочные дизайны и эффекты печати (примеры упаковок).</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>Ice cream and dairy products require careful storage. The packaging must protect them from exposure to sunlight and oxygen. Ice cream packaging must be sufficiently strong and moisture-resistant, have high barrier properties, providing good protection from exposure to sunlight and oxygen and preventing the penetration of external odors into the product. Also of great importance is the attractiveness of the package, which is ensured by bright, colorful designs and printing effects (packaging examples).</p>\n" +
					"                     </li>"
  			},


  			"package10_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Ichimliklar yorlig'i ishqalanish va cho'zilish, namlik va issiqlikka chidamlilik va elastiklikning minimal koeffitsientlariga ega bo'lishi kerak. Shu bilan birga, muntazam muzlash va namlik ta'siriga chidamli shaffof, oq ko'pikli, marvaridli, metalllashtirilgan polipropilen plyonkadan hamyonbop narxda PET butilkalarga yorliqlar yasash mumkin (misollar).</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>Этикетка для напитков должна иметь минимальные коэффициенты трения и растяжения, влаго и термостойкость, эластичность. При этом можно по доступной цене сделать этикетки на ПЭТ бутылки из прозрачной, белой вспененной, перламутровой, металлизированной полипропиленовой пленки, выдерживающей регулярное замораживание и воздействие влаги (примеры).</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>The label for drinks must have minimal coefficients of friction and stretching, moisture and heat resistance, and elasticity. At the same time, it is possible to make labels on PET bottles at an affordable price from transparent, white foamed, pearlescent, metallized polypropylene film that can withstand regular freezing and exposure to moisture (examples).</p>\n" +
					"                     </li>"
  			},


  			"package11_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Shu maqsadda non mahsulotlari, gazaklar va oziq-ovqat mahsulotlari uchun qadoqlash maxsus ishlab chiqilgan.</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>Для этой цели специально разработана упаковка для хлебных изделий, снеков, бакалейной продукции.</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>For this purpose, packaging for bread products, snacks, and grocery products has been specially developed.</p>\n" +
					"                     </li>"
  			},


  			"package12_des_what1": {
  				"uz": "<li>\n" +
					"                       <p><b>- Tutqi kesilgan plastik qoplar turli sohalarda qo'llaniladi: sovg'a o'rash va turli narsalarni tashish uchun. Bu kompaniyaning korporativ identifikatorining ajoyib tashuvchisi. Ularda oziq-ovqat, dori-darmon, kiyim-kechak, poyabzal, o'yinchoqlar, mo'ynali kiyimlarni olib yurish qulay. Kesilgan tutqichli pe sumkalarimizning deyarli har biri quyidagilar bilan tavsiflanadi:\n" +
					". ergonomika;\n" +
					". kuch;\n" +
					". turli shakllar va o'lchamlar;\n" +
					". ranglarning keng tanlovi;\n" +
					". dizayn variantlarining katta tanlovi;\n" +
					". hamyonbop narx.\n" +
					"- Ilmoqli tutqichli sumka - bu pastadir shaklida yumshoq polimer tutqichga ega bo'lgan plastik to'rva. Halqa tutqichining rangi paketning o'zi rangidan farq qilishi va turli xil bo'lishi mumkin, bu paketning dizaynini ishlab chiqishda qo'shimcha imkoniyatlar beradi (bunday paketlarga misollar).\n" +
					"</p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p><b>- Полиэтиленовые пакеты с вырубной ручкой используются в разных сферах: в качестве подарочной упаковки и для переноски различных вещей. Это отличный носитель фирменного стиля компании. В них удобно переносить продукты питания, медикаменты, одежду, обувь, игрушки, меховые изделия. Практически каждый наш ПЭ пакет с вырубной ручкой характеризуется:\n" +
					". эргономичностью;\n" +
					". прочностью;\n" +
					". разнообразием форм и размеров;\n" +
					". широким выбором цветов;\n" +
					". большим выбором возможностей дизайнерского оформления;\n" +
					". доступной стоимостью.\n" +
					"- Пакет с петлевой ручкой — это полиэтиленовый пакет, имеющий мягкую полимерную ручку в форме петли. Цвет петлевой ручки может быть различным и отличаться от цвета самого пакета, что дает дополнительные возможности в разработке дизайна пакета (примеры таких пакетов).\n" +
					"</p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p><b>- Plastic bags with a cut-out handle are used in different areas: as gift packaging and for carrying various things. This is an excellent carrier of the company's corporate identity. It is convenient to carry food, medicine, clothes, shoes, toys, and fur products in them. Almost every one of our PE bags with a die-cut handle is characterized by:\n" +
					". ergonomics;\n" +
					". strength;\n" +
					". variety of shapes and sizes;\n" +
					". wide selection of colors;\n" +
					". a large selection of design options;\n" +
					". affordable price.\n" +
					"- A bag with a loop handle is a plastic bag that has a soft polymer handle in the shape of a loop. The color of the loop handle can be different and different from the color of the package itself, which provides additional opportunities in developing the design of the package (examples of such packages).\n" +
					"</p>\n" +
					"                     </li>"
  			},

  			"package13_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Ushbu guruh salfetkalar uchun qadoqlash (ho'l, quruq, bo'lak), ayollar gigiena vositalari, tagliklar, hojatxona qog'ozi va boshqalarni o'z ichiga oladi (Misollar). </p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>В данную группу относятся упаковки для салфеток (влажные, сухие, штучные), средства женской гигиены, подгузники, туалетная бумага и тд (Примеры). </p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>This group includes packaging for napkins (wet, dry, piece), feminine hygiene products, diapers, toilet paper, etc. (Examples). </p>\n" +
					"                     </li>"
  			},


  			"package14_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Muzlatilgan mahsulotlar ro'yxatiga quyidagilar kiradi: go'sht mahsulotlari, yarim tayyor tovuq va parranda go'shti mahsulotlari, dengiz mahsulotlari, sabzavotlar va aralash sabzavotlar, kartoshka kartoshkalari, qo'ziqorinlar, rezavorlar, mevalar, pizza, chuchvara, xamir, krep va boshqalar. Laminatsiyalangan plyonkalar muzlatilgan yarim tayyor mahsulotlarni qadoqlash uchun ishlatiladi. Chuqur muzlatilgan mahsulotlar uchun moslashuvchan qadoqlash uchun asosiy talablarga quyidagilar kiradi:</p>\n" +
					"                     </li>\n" +
					"                     <ul>\n" +
					"                         <li>Sovuqqa chidamliligining yuqori darajasi</li>\n" +
					"                         <li>Noldan past haroratlarda yaxlitlikni saqlash va mo'rtlikning yo'qligi</li>\n" +
					"                         <li>Tashqi omillarning turli ta'siridan ishonchli himoya</li>\n" +
					"                         <li>Tikuvlarning yaxlitligini ta'minlash</li>\n" +
					"                     </ul>\n" +
					"                     <p>Biz shaffof oynaga ega yechimlardan foydalanamiz, bu esa xaridorga tarkibni koʻrish imkonini beradi va shunga mos ravishda mahsulotga ishonchni oshiradi.</p>\n" +
					"                     <p>Muzlatilgan oziq-ovqat mahsulotining butun yaroqlilik muddati davomida saqlanishi uchun qadoqlash talab qilinadi. Shu bilan birga, ushbu guruhdagi chuchvara, muzlatilgan sabzavotlar va boshqa mahsulotlar uchun qadoqlash ma'lum bir to'siq xususiyatlariga va yaxshi issiqlik muhrlanishiga ega bo'lishi kerak. Muzlatilgan oziq-ovqatlar o'tkir qirralarga ega bo'lishi yoki yog' yoki maydalangan bo'lishi mumkin, bu esa pishirishni qiyinlashtiradi. Shuning uchun, film yuqori tezlikda muhrlanish uchun mos bo'lishi talab qilinadi. Teshilishga qarshilik ham muhim ahamiyatga ega.</p>",
  				"ru": "  <li>\n" +
					"                      <p>В список замороженной продукции можно отнести: изделия из мяса, полуфабрикаты из курицы и мяса птицы, морепродукты, овощи и смеси из овощей, картофель фри, грибы, ягоды, фрукты, пицца, пельмени, тесто, блинчики и других. Для упаковки замороженных полуфабрикатов применяются ламинированные пленки. К основным требованиям гибкой упаковки для продуктов глубокой заморозки относятся:</p>\n" +
					"                    </li>\n" +
					"                    <ul>\n" +
					"                        <li>Высокий уровень морозостойкости</li>\n" +
					"                        <li>Сохранение целостности и отсутствие хрупкости при минусовых температурах</li>\n" +
					"                        <li>Надежная защита от различных воздействий внешних факторов</li>\n" +
					"                        <li>Обеспечение сохранения целостности швов</li>\n" +
					"                    </ul>\n" +
					"                    <p>Используются решения с прозрачным окном, которое дает возможность покупателю видеть содержимое, соответственно, повышать доверие к товару.</p>\n" +
					"                    <p>От упаковки для замороженных продуктов требуется сохранение изделия на протяжении всего срока годности. Наряду с этим, упаковка для пельменей, замороженных овощей и других продуктов из этой группы должна обладать определенным набором барьерных свойств и хорошей термосвариваемостью. Замороженные продукты могут иметь острые края, либо содержать жир или сыпаться, что затрудняет процессы сваривания. В связи с этим, требуется, чтобы пленка подходила для высокоскоростной сварки. Также важна устойчивость к проколу.</p>\n" +
					"                  ",
  				"en": "<li>\n" +
					"                       <p>The list of frozen products includes: meat products, semi-finished chicken and poultry products, seafood, vegetables and mixed vegetables, French fries, mushrooms, berries, fruits, pizza, dumplings, dough, pancakes and others. Laminated films are used for packaging frozen semi-finished products. The main requirements for flexible packaging for deep-frozen products include:</p>\n" +
					"                     </li>\n" +
					"                     <ul>\n" +
					"                         <li>High level of frost resistance</li>\n" +
					"                         <li>Preservation of integrity and absence of fragility at sub-zero temperatures</li>\n" +
					"                         <li>Reliable protection against various influences of external factors</li>\n" +
					"                         <li>Ensuring the integrity of the seams</li>\n" +
					"                     </ul>\n" +
					"                     <p>We use solutions with a transparent window, which allows the buyer to see the contents and, accordingly, increase confidence in the product.</p>\n" +
					"                     <p>Frozen food packaging is required to preserve the product throughout its entire shelf life. Along with this, packaging for dumplings, frozen vegetables and other products from this group must have a certain set of barrier properties and good heat sealability. Frozen foods may have sharp edges, or contain fat or crumble, making cooking difficult. Therefore, the film is required to be suitable for high speed sealing. Puncture resistance is also important.</p>"
  			},
  			"package14_des_what2": {
  				"uz": "<b>Muzlatish va muzdan tushirish qulayligi: </b>Bizning paketlarimiz muzlatish va keyinroq oziq-ovqat mahsulotlarini ishlatish uchun qulay variantlarni taqdim etadi.",
  				"ru": "<b>Удобство Замораживания и Размораживания: </b>Наши упаковки предоставляют удобные варианты для замораживания и последующего использования продуктов.",
  				"en": "<b>Convenience of Freezing and Defrosting: </b>Our packages provide convenient options for freezing and later using food."
  			},
  			"package14_des_what3": {
  				"uz": "<b>Jozobli dizayn: </b>Biz iste'molchilar e'tiborini tortadigan va mahsulotingizni ajralib turadigan qadoqlash yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем упаковки, которые привлекают внимание потребителей и делают ваш продукт выдающимся.",
  				"en": "<b>Attractive Design: </b>We create packaging that attracts consumers' attention and makes your product stand out."
  			},
  			"package14_des_what4": {
  				"uz": "<b>Atrof-muhitga moslik: </b>Biz atrof-muhit standartlariga javob berish uchun qayta ishlanishi mumkin bo'lgan qadoqlash bilan ta'minlaymiz.",
  				"ru": "<b>Экологическая Совместимость: </b>Мы предоставляем упаковки, которые можно перерабатывать, чтобы удовлетворить экологические стандарты.",
  				"en": "<b>Environmental Compatibility: </b>We provide packaging that can be recycled to meet environmental standards."
  			},
  			"package14_end": {
  				"uz": "Pro Flexo muzlatilgan oziq-ovqat va broyler ishlab chiqaruvchilarga nafaqat mahsulot sifati va xavfsizligini ta'kidlaydigan, balki mijozlar ehtiyojlarini qondiradigan qadoqlash yaratishda yordam berishga tayyor. Mahsulotlaringizni qulay qilish va iste'molchilar talablarini qondirish uchun bizga qo'shiling.",
  				"ru": "Pro Flexo готова помочь производителям замороженных продуктов и бройлеров создать упаковки, которые не только подчеркивают качество и безопасность продукции, но и удовлетворяют потребности клиентов. Присоединитесь к нам, чтобы сделать вашу продукцию доступной и удовлетворить ожидания потребителей.",
  				"en": "Pro Flexo is ready to help frozen food and broiler producers create packaging that not only highlights product quality and safety, but also meets customer needs. Join us to make your products accessible and meet consumer expectations."
  			},
  			"package15_des": {
  				"uz": "Kuryer paketlari yetkazib berish va elektron tijoratning zamonaviy dunyosining ajralmas elementi hisoblanadi. Pro Flexo mahsulotingizni jo'natish xavfsizligi va qulayligini ta'minlaydigan sifatli qadoqlash bilan ta'minlaydi.",
  				"ru": "Курьерские упаковки-пакеты - это незаменимый элемент современного мира доставки и электронной коммерции. Pro Flexo предоставляет качественные упаковки, которые обеспечивают безопасность и удобство доставки ваших товаров.",
  				"en": "Courier packages are an indispensable element of the modern world of delivery and e-commerce. Pro Flexo provides quality packaging that ensures the safety and convenience of shipping your products."
  			},
  			"package15_des_what": {
  				"uz": "Bizning kuryer paketlarimiz:",
  				"ru": "Наши курьерские упаковки-пакеты:",
  				"en": "Our courier packages:"
  			},
  			"package15_des_what1": {
  				"uz": "<li>\n" +
					"                       <p>Kuryer paketlari yopishqoq qatlam, teshilish va chuqurchalar bilan jihozlanishi mumkin. Ular mahsulot yoki hujjatlarni ishonchli himoya qilish va kiruvchi ochilishni oldini olish imkonini beradi. </p>\n" +
					"                     </li>",
  				"ru": "<li>\n" +
					"                      <p>Курьерские пакеты могут быть оснащены липким слоем, перфорацией, насечками. Позволяют надежно защитить продукт или документы и предотвратить нежелательное вскрытие. </p>\n" +
					"                    </li>",
  				"en": "<li>\n" +
					"                       <p>Courier packages can be equipped with a sticky layer, perforation, and notches. They allow you to reliably protect your product or documents and prevent unwanted opening. </p>\n" +
					"                     </li>"
  			},
  			"package15_des_what2": {
  				"uz": "<b>Oson ichki tashkil etish: </b>Bizning qadoqlashimiz sizga tovarlarni optimal yetkazib berish uchun osongina tartibga solish va joylashtirish imkonini beradi.",
  				"ru": "<b>Удобство Внутренней Организации: </b>Наши упаковки позволяют легко организовать и разместить товары для оптимальной доставки.",
  				"en": "<b>Easy Internal Organization: </b>Our packaging allows you to easily organize and place your items for optimal delivery."
  			},
  			"package15_des_what3": {
  				"uz": "<b>Jozobli dizayn: </b>Biz sizning brendingizni yaxshilaydigan va paketlaringizni taniqli qiladigan qadoqlarni yaratamiz.",
  				"ru": "<b>Привлекательный Дизайн: </b>Мы создаем упаковки, которые украшают ваш бренд и делают ваши посылки узнаваемыми.",
  				"en": "<b>Attractive Design: </b>We create packaging that enhances your brand and makes your packages recognizable."
  			},
  			"package15_des_what4": {
  				"uz": "<b>Atrof-muhitga moslik. </b>Biz atrof-muhit haqida qayg'uramiz va qayta ishlanishi mumkin bo'lgan qadoqlarni taqdim etamiz.",
  				"ru": "<b>Экологическая Совместимость: </b>Мы заботимся о окружающей среде и предоставляем упаковки, которые можно перерабатывать.",
  				"en": "<b>Environmental Compatibility: </b>We care about the environment and provide packaging that can be recycled."
  			},
  			"package15_end": {
  				"uz": "Pro Flexo buyumlaringiz xavfsiz va sifatli yetkazib berilishiga yordam berishga tayyor. Yetkazib berishingizni yanada professional qilish va mijozlaringizning talablarini qondirish uchun bizga qo'shiling.",
  				"ru": "Pro Flexo готова помочь вам обеспечить безопасную и стильную доставку ваших товаров. Присоединитесь к нам, чтобы сделать вашу доставку более профессиональной и удовлетворить ожидания ваших клиентов.",
  				"en": "Pro Flexo is ready to help you ensure your items are delivered safely and in style. Join us to make your delivery more professional and meet your customers' expectations."
  			}
  		},
  		"map": {
  			"cooperate": {
  				"uz": "Biz kim bilan hamkorlik qilamiz?",
  				"ru": "С кем сотрудничаем",
  				"en": "Who do we cooperate with?"
  			},
  			"throughout_country": {
  				"uz": "Biz butun O'zbekiston bo'ylab ishlaymiz",
  				"ru": "Мы работаем по всему Узбекистану",
  				"en": "We work throughout Uzbekistan"
  			},
  			"flexographic_printing": {
  				"uz": "Biz O'zbekistonning barcha burchaklaridagi mijozlarga professional fleksografik bosma xizmatlarimizni taklif qilishdan mamnunmiz.",
  				"ru": "Мы рады предложить наши профессиональные услуги по флексографической печати клиентам во всех уголках Узбекистана.",
  				"en": "We are pleased to offer our professional flexographic printing services to clients in all corners of Uzbekistan."
  			},
  			"coverage_geo": {
  				"uz": "<i>Bizning kompaniyamiz o'zining keng geografik qamrovi bilan faxrlanadi, bu bizga ushbu go'zal mamlakatning istalgan nuqtasida mijozlarga xizmat ko'rsatish imkonini beradi. Qaerda bo'lishingizdan qat'i nazar - poytaxt Toshkentda, Farg'ona vodiysidagi tog'lar etagida, Orol dengizi sohillarida yoki Navoiy, Surxondaryo yoki Andijonning chekka hududlarida - biz har doim sizga yuqori sifatli mahsulotlarni taqdim etishga tayyormiz. -sifatli fleksografik bosib chiqarish xizmatlari.</i>",
  				"ru": "<i>Наша компания гордится широким географическим охватом, который позволяет нам обслуживать клиентов в любой точке этой прекрасной страны. Независимо от того, где вы находитесь - в столице Ташкенте, у подножия гор в Ферганской долине, на берегу Аральского моря или в удаленных районах Навои, Сурхандарьи, или Андижана - мы всегда готовы предоставить вам качественные услуги флексографической печати.</i>",
  				"en": "<i>Our company is proud of its wide geographical coverage, which allows us to serve clients anywhere in this beautiful country. Regardless of where you are - in the capital Tashkent, at the foot of the mountains in the Fergana Valley, on the shores of the Aral Sea or in remote areas of Navoi, Surkhandarya, or Andijan - we are always ready to provide you with high-quality flexographic printing services.</i>"
  			},
  			"adapt": {
  				"uz": "Biz O‘zbekistonning har bir hududi o‘ziga xosligini tushunamiz va sizning qadoqlash va chop etish ehtiyojlaringiz har xil bo‘lishi mumkin. Bizning tajribamiz va professionalligimiz bizga turli so'rovlarga moslashishga va har bir mijoz uchun individual echimlarni taqdim etishga imkon beradi.",
  				"ru": "Мы понимаем, что каждый регион Узбекистана уникален, и ваши потребности в упаковке и печати могут различаться. Наш опыт и профессионализм позволяют нам адаптироваться под разные запросы и предоставлять индивидуальные решения для каждого клиента.",
  				"en": "We understand that each region of Uzbekistan is unique and your packaging and printing needs may vary. Our experience and professionalism allow us to adapt to different requests and provide individual solutions for each client."
  			},
  			"cooperate_us": {
  				"uz": "Hamkorlik qilish",
  				"ru": "Сотрудничать",
  				"en": "Cooperate"
  			}
  		},
  		"call_to_action": {
  			"call_to_action_a": {
  				"uz": "Biz bilan hozir gaplashmoqchimisiz?",
  				"ru": "Не желаете ли поговорить с нами прямо сейчас?",
  				"en": "Would you like to talk to us right now?"
  			},
  			"call_to_action_b": {
  				"uz": "<i>Biz har doim savollaringizga javob berishga, ehtiyojlaringizni muhokama qilishga va xizmatlarimiz haqida qoʻshimcha maʼlumot berishga tayyormiz.</i>",
  				"ru": "<i>Мы всегда готовы ответить на ваши вопросы, обсудить ваши потребности и предоставить дополнительную информацию о наших услугах.</i>",
  				"en": "<i>We are always ready to answer your questions, discuss your needs and provide additional information about our services.</i>"
  			},
  			"call_to_action_c": {
  				"uz": "Bizning mutaxassislarimiz sizning ehtiyojlaringizni muhokama qilishga va biznesingiz uchun eng yaxshi echimlarni tanlashga yordam berishga tayyor. Biz bilan bog'laning - biz yordam berishga tayyormiz!",
  				"ru": "Наши эксперты готовы обсудить ваши потребности и помочь вам с выбором наилучших решений для вашего бизнеса. Не стесняйтесь связаться с нами - мы здесь, чтобы помочь!",
  				"en": "Our experts are ready to discuss your needs and help you choose the best solutions for your business. Feel free to contact us - we're here to help!"
  			},
  			"call_to_action_d": {
  				"uz": "Tafsilotlaringizni qoldiring",
  				"ru": "Оставьте свои данные",
  				"en": "Leave your details"
  			}
  		},
  		"partners": {
  			"title": {
  				"ru": "Партнеры",
  				"en": "Partners",
  				"uz": "Hamkorlar"
  			},
  			"description": {
  				"ru": '<b>Нам <i class="text-primary">доверяют</i></b>',
  				"en": '<b>We are <i class="text-primary">trusted</i></b>',
  				"uz": '<b>Biz <i class="text-primary">ishonchlimiz</i></b>'
  			}
  		},
  		'features': {
  			"title": {
  				"ru": "Вы нам всегда нужны <br>Что интересует:",
  				"en": "We always need you <br>What interests you:",
  				"uz": "Siz bizga doim keraksiz <br>Bizni nima qiziqtiradi:"
  			},
  			"p1": {
  				"ru": "Пленки PET, MPET, BOPP, CPP, MCPP",
  				"en": "Stretches PET, MPET, BOPP, CPP, MCPP",
  				"uz": "PET, MPET, BOPP, CPP, MCPP paketlari"
  			},
  			"p3": {
  				"ru": "Полиэтиленовые гранулы и добавки",
  				"en": "Polyethylene granules and additives",
  				"uz": "Polietilen granulalar va qo'shimchalar"
  			},
  			"p2": {
  				"ru": "Флексографические краски",
  				"en": "Flexographic inks",
  				"uz": "Fleksografik siyohlar"
  			},
  			"p4": {
  				"ru": "Растворители",
  				"en": "Solvents",
  				"uz": "Solventlar"
  			},
  			"p5": {
  				"ru": "Монтажные скотчи",
  				"en": "Mounting tapes",
  				"uz": "O'rnatish lentalari"
  			},
  			"p6": {
  				"ru": "Ракельные ножи",
  				"en": "Squeegee knives",
  				"uz": "Tozalash pichoqlari"
  			},
  			"hello": {
  				"ru": "Привет!Мы всегда рады общению.",
  				"en": "Hello! We are always happy to communicate.",
  				"uz": "Salom! Biz doimo muloqot qilishdan xursandmiz."
  			},
  			"desc": {
  				"ru": "Позвоните нам или оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время. Наша команда готова предоставить вам качественный сервис и ответить на все ваши вопросы. Ждем вашего звонка или сообщения!",
  				"uz": "Bizga qo'ng'iroq qiling yoki aloqa ma'lumotlaringizni qoldiring va biz imkon qadar tezroq siz bilan bog'lanamiz. Bizning jamoamiz sizga sifatli xizmat ko'rsatishga va barcha savollaringizga javob berishga tayyor. Qo'ng'iroq yoki xabaringizni kutamiz!",
  				"en": "Call us or leave your contact details and we will contact you as soon as possible. Our team is ready to provide you with quality service and answer all your questions. We are waiting for your call or message!"
  			},
  			"leave": {
  				"ru": "Оставь данные",
  				"en": "Leave your details",
  				"uz": "Tafsilotlaringizni qoldiring"
  			}

  		},
  		"testimonials": {
  			"title": {
  				"ru": "Отзывы",
  				"en": "Reviews",
  				"uz": "Sharhlar"
  			},
  			"description": {
  				"ru": '<b>Что <i class="text-primary">говорят о нас?</i></b>',
  				"en": '<b>What do they<i class="text-primary">say about us?</i></b>',
  				"uz": '<b>Biz haqimizda<i class="text-primary">nima aytishadi?</i></b>'
  			}
  		},
  		"contact": {
  			"title": {
  				"ru": "Контакты",
  				"en": "contacts",
  				"uz": "Kontaktlar"
  			},
  			"p1": {
  				"ru": 'Наши <i class="text-primary">контакты</i></b>',
  				"en": 'Our <i class="text-primary">contacts</i></b>',
  				"uz": '<i class="text-primary">kontaktlarimiz</i></b>'
  			},
  			"p2": {
  				"ru": "Наш адрес",
  				"en": "Our address",
  				"uz": "Bizning manzil"
  			},
  			"p3": {
  				"ru": "г.Ташкент,Юнусабадский р-н. ул.Каракамишская, 2в",
  				"en": "Tashkent, Yunusabad district. Karakamishskaya st., 2v",
  				"uz": "Toshkent shahri, Yunusobod tumani. Karakamishskaya ko'chasi, 2v"
  			},
  			"p4": {
  				"ru": "Электронная почта",
  				"en":  "Email",
  				"uz": "Elektron pochta",
  			},
  			"p5": {
  				"ru": "Номер телефона",
  				"en": "Phone number",
  				"uz": "Telefon raqami"
  			},
  			"p6": {
  				"ru": "Дополнительные номера",
  				"en": "Additional numbers",
  				"uz": "Qo'shimcha raqamlar"
  			},
  			"p7": {
  				"ru": "Отправить сообщение",
  				"en": "send a message",
  				"uz": "xabar yubormoq"
  			}
  		},
  		"footer": {
  			"title": {
  				"ru": '<b>Вы тоже можете оказаться в этой <i class="text-primary">команде</i>:)</b>',
  				"en": '<b>You too can be in this <i class="text-primary">team</i>:)</b>',
  				"uz": '<b>Siz ham ushbu <i class="text-primary">jamoada</i> bo\'lishingiz mumkin:)</b>'
  			},
  			"description": {
  				"ru": "Хотите расти вместе с нами? Теперь докажите нам, что вам это нужно! Станьте неотъемлемой частью команды",
  				"en": "Do you want to grow with us? Now prove to us that you need it! Become an integral part of the team",
  				"uz": "Biz bilan o'sishni hohlaysizmi? Endi bizga bu sizga kerakligini isbotlang! Jamoaning ajralmas qismiga aylaning"
  			},
  			"p1": {
  				"ru": "Позвони прямо сейчас и узнай есть ли свободные места",
  				"en": "Call now and find out if there are free places",
  				"uz": "Hozir qo'ng'iroq qiling va bepul joylar bor yoki yo'qligini bilib oling"

  			},
  			"p2": {
  				"ru": 'или пройди по ссылке <a href="https://hh.uz/employer/9489905?hhtmFrom=vacancy_search_list">перейти</a>',
  				"en": 'or follow the link <a href="https://hh.uz/employer/9489905?hhtmFrom=vacancy_search_list">go</a>',
  				"uz": 'yoki <a href="https://hh.uz/employer/9489905?hhtmFrom=vacancy_search_list">borish</a> havolasiga oting'
  			},

  		},
      "career": {
        "title": {
          "ru": "Карьера",
          "en": "Career",
          "uz": "Karyera"
        },
        "description": {
          "ru": '<b>Присоединяйтесь  <i class="text-primary">к нам</i></b>',
          "en": '<b>Join <i class="text-primary">us</i></b>',
          "uz": '<b><i class="text-primary">Bizga</i></b> qo\'shiling'
        }
      }
 };

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || 'ru';
		this.language = lang;

		(function (i18n) {
			i18n.contents = demoJson;
			i18n.contents.prop = function (key) {
				var result = this;
				var keyArr = key.split('.');
				for (var index = 0; index < keyArr.length; index++) {
					var prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};

	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
		}
		this.localize();
		return this.language;
	};

	this.I18n.prototype.localize = function () {
		var contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		var dfs = function (node, keys, results) {
			var isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					var myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						//results.push(myKey.reduce((prev, current) => prev + '.' + current));	//not supported in older mobile broweser
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		var keys = dfs(contents, [], []);
		for (var index = 0; index < keys.length; index++) {
			var key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)[this.language]);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)[this.language]);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)[this.language]);
			} else {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)['en']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['en']);
				$('[data-i18n-value="'+key+'"]').attr('value', contents.prop(key)['en']);
			}
		}
	};

}).apply(window);

$( document ).ready( function () {

	var i18n = new I18n();
	i18n.localize();
	$('.lang-picker #english').addClass('selected');
	
	$('.lang-picker #russian').on('click', function () {
		i18n.lang('ru');
		selectLang($(this));
	})
	$('.lang-picker #english').on('click', function () {
		i18n.lang('en');
		selectLang($(this));
	})
	$('.lang-picker #uzbek').on('click', function () {
		i18n.lang('uz');
		selectLang($(this));
	})
	$('.lang-picker #iranian').on('click', function () {
		i18n.lang('ir');
		selectLang($(this));
	})
	$('.lang-picker #chinese').on('click', function () {
		i18n.lang('ch');
		selectLang($(this));
	})
	$('.lang-picker #arab').on('click', function () {
		i18n.lang('ar');
		selectLang($(this));
	})

	function selectLang (picker) {
		$('.lang-picker a').removeClass('selected');
		picker.addClass('selected');
	}
});
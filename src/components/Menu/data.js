import tridango from './menuImages/tri-dango-sticks.png';
import ricecakes from './menuImages/rice-cakes.png';
import avocadocake from './menuImages/avocado-cake.png';
import lycheepann from './menuImages/lychee-pannacotta.png';
import eggcoffee from './menuImages/viet-egg-coffee.png';
import calamansiade from './menuImages/matcha-calamansi-lemonade.png';
import taroicedtea from './menuImages/taro-iced-tea.png';
import dalgonacoffee from './menuImages/dalgona-coffee.png';
import milkytwist from './menuImages/baileys-boba.png';
import byejou from './menuImages/strawcream-boba.png';
import coconutboba from './menuImages/rum-coconut.png';
import sojupearls from './menuImages/coconut-pearls.png';

const data = {
    cafeMenu:[
        {
            id: 1,
            name: "Tri Dango Stick",
            img: tridango,
            price: 4,
            desc: "Sweetened rice flours mixed and moulded into bite-size treats. Flavors include matcha, red bean, and sweet rice.",
            origin: "Tri color dango is a traditional spring dessert in Japan."
        },
        {
            id: 2,
            name: "Rice Cake",
            img: ricecakes,
            price: 3,
            desc: "Steamed mini cakes made with rice flour and colored with natural ingredients. Comes with your choice of cheese or coconut topping.",
            origin: "This dessert is a traditional food in many Asian countries."
        },
        {
            id: 3,
            name: "Avocado Cake Slice",
            img: avocadocake,
            price: 5,
            desc: "Gluten-free and vegan avocado cake made with ripe avocados, vanilla, and lime juice.",
            origin: "Inspired by Vietnam's popular avocado smoothie."
        },
        {
            id: 4,
            name: "Lychee Panna Cotta",
            img: lycheepann,
            price: 7,
            desc: "Contains panna cotta with fresh lychee and dragonfruit. A sweet cold soup perfect for warm days.",
            origin: "In Vietnamese this is called khuc bach and contains a wide range of flavors and toppings."
        },
        {
            id: 5,
            name: "Egg Coffee",
            img: eggcoffee,
            price: 5,
            desc: "Egg yolk and sweetened condensed milk made into a fluff and poured on top of coffee and finished with cocoa powder.",
            origin: "Traditional coffee called 'ca phe trung' in Vietnam."
        },
        {
            id: 6,
            name: "Match Calamansi-ade",
            img: calamansiade,
            price: 4,
            desc: "Freshly squeezed calamansi juice and matcha mixed together and contains many health benefits such as immunity boost and collagen production.",
            origin: "Calamansi juice is known as the Filipino lemonade."
        },
        {
            id: 7,
            name: "Taro Iced Tea",
            img: taroicedtea,
            price: 5,
            desc: "Fresh taro blended together with milk and tea to produce a refreshing taste.",
            origin: "Taro is a root vegetable that originates from Asia that helps with your digestive system."
        },
        {
            id: 8,
            name: "Dalgona Coffee",
            img: dalgonacoffee,
            price: 4,
            desc: "Sweet coffee whipped until silky and smooth.",
            origin: "The name of this coffee comes from a very popular Korean sugar candy called 'dalgona' which translates into 'it's sweet.'"
        },
        {
            id: 9,
            name: "Milky Twist",
            img: milkytwist,
            price: 10,
            desc: "Brown sugar milk tea made with cream liqueur and vodka. Comes with tapioca bubbles.",
            origin: "Brown sugar milk tea is Asia's most popular milk tea."
        },
        {
            id: 10,
            name: "Bye Jou",
            img: byejou,
            price: 15,
            desc: "Bubble tea made with baijiu liquor and strawberries & cream liqueur for a sweeter taste.",
            origin: "Baiju is one of China's most popular and strongest liquors."
        },
        {
            id: 11,
            name: "Coconut Boba",
            img: coconutboba,
            price: 12,
            desc: "Mixed with sake, rum, and coconut water and topped with tapioca and fresh lychee jelly.",
            origin: "Sake is a Japanese rice wine made from fermenting rice and has a refreshing taste."
        },
        {
            id: 12,
            name: "Soju Pearls",
            img: sojupearls,
            price: 12,
            desc: "Coconut milk mixed with your choice of soju flavor and topped with tapioca pearls.",
            origin: "Soju is one of South Korea's most popular alcoholic beverage made from rice."
        }
    ]
};

export default data;
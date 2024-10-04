import rating_starts from './rating_starts.png'
import add_icon_white from './add_icon_white.png'
import remove_icon_red from './remove_icon_red.png'
import add_icon_green from './add_icon_green.png'
import bike1 from './bike1.jpeg'
import bike2 from './bike2.jpeg'
import bike3 from './bike3.jpeg'
import bike4 from './bike4.jpeg'
import G1 from './G1.jpeg'
import G2 from './G2.jpeg'
import G3 from './G3.jpeg'
import G4 from './G4.jpeg'
import G5 from './G5.jpeg'
import G6 from './G6.jpeg'
import G7 from './G7.jpeg'
import G8 from './G8.jpeg'
import G9 from './G9.jpeg'
import G10 from './G10.jpeg'
import G11 from './G11.jpeg'
import G12 from './G12.jpeg'
import gym1 from './gym1.jpeg'
import gym2 from './gym2.jpeg'
import gym3 from './gym3.jpeg'
import gym4 from './gym4.jpeg'
import yoga1  from './yoga1.jpeg'
import yoga2 from './yoga2.jpeg'
import yoga3 from './yoga3.jpeg'
import yoga4 from './yoga4.jpeg'
import Fitness from './Fitness.png'
import Bike from './Bike.png'
import Sports from './Sports.png'
import facebook_icon from './facebook_icon.png'
import linkedin_icon from './linkedin_icon.png'
import twitter_icon from './twitter_icon.png'
import logo from './logo.png'



export const assets ={
    rating_starts,
    add_icon_white,
    remove_icon_red,
    add_icon_green,
    facebook_icon,
    linkedin_icon,
    twitter_icon,
    logo
}
export const menu_list = [
    {
        menu_name: "Fitness",
        menu_image: Fitness // Replace with actual image import or path
    },
    {
        menu_name: "Bikes",
        menu_image: Bike // Replace with actual image import or path
    },
    {
        menu_name: "Sports",
        menu_image: Sports // Replace with actual image import or path
    }
];

export const food_list = [
    // Fitness (8 items: Gym1 to Gym4, Yoga1 to Yoga4)
    {
        _id: "1",
        name: "Gym Equipment 1",
        image: gym1, // Replace with actual image import or path
        price: 100,
        description: "High-quality gym equipment for strength training.",
        category: "Fitness"
    },
    {
        _id: "2",
        name: "Gym Equipment 2",
        image: gym2, // Replace with actual image import or path
        price: 120,
        description: "Durable and versatile gym equipment for fitness enthusiasts.",
        category: "Fitness"
    },
    {
        _id: "3",
        name: "Gym Equipment 3",
        image: gym3, // Replace with actual image import or path
        price: 130,
        description: "Top-notch weightlifting and cardio equipment.",
        category: "Fitness"
    },
    {
        _id: "4",
        name: "Gym Equipment 4",
        image: gym4, // Replace with actual image import or path
        price: 150,
        description: "Comprehensive gym set for home workouts.",
        category: "Fitness"
    },
    {
        _id: "5",
        name: "Yoga Mat 1",
        image: yoga1, // Replace with actual image import or path
        price: 60,
        description: "Premium yoga mat with extra grip for stability.",
        category: "Fitness"
    },
    {
        _id: "6",
        name: "Yoga Mat 2",
        image: yoga2, // Replace with actual image import or path
        price: 70,
        description: "Eco-friendly yoga mat for comfort and balance.",
        category: "Fitness"
    },
    {
        _id: "7",
        name: "Yoga Mat 3",
        image: yoga3, // Replace with actual image import or path
        price: 80,
        description: "High-density yoga mat for durability and cushioning.",
        category: "Fitness"
    },
    {
        _id: "8",
        name: "Yoga Mat 4",
        image: yoga4, // Replace with actual image import or path
        price: 90,
        description: "Portable yoga mat ideal for travel and on-the-go workouts.",
        category: "Fitness"
    },

    // Sports (12 items: G1 to G12)
    {
        _id: "9",
        name: "Football Gear 1",
        image: G1, // Replace with actual image import or path
        price: 200,
        description: "Complete football gear set for professional players.",
        category: "Sports"
    },
    {
        _id: "10",
        name: "Football Gear 2",
        image: G2, // Replace with actual image import or path
        price: 220,
        description: "Durable football equipment for all-weather play.",
        category: "Sports"
    },
    {
        _id: "11",
        name: "Tennis Racket 1",
        image: G3, // Replace with actual image import or path
        price: 150,
        description: "Lightweight tennis racket for powerful strokes.",
        category: "Sports"
    },
    {
        _id: "12",
        name: "Tennis Racket 2",
        image: G4, // Replace with actual image import or path
        price: 160,
        description: "Balanced tennis racket for optimal performance.",
        category: "Sports"
    },
    {
        _id: "13",
        name: "Cricket Kit 1",
        image: G5, // Replace with actual image import or path
        price: 300,
        description: "Complete cricket kit for competitive play.",
        category: "Sports"
    },
    {
        _id: "14",
        name: "Cricket Kit 2",
        image: G6, // Replace with actual image import or path
        price: 320,
        description: "High-quality cricket gear for durability and comfort.",
        category: "Sports"
    },
    {
        _id: "15",
        name: "Basketball Gear 1",
        image: G7, // Replace with actual image import or path
        price: 180,
        description: "Professional basketball gear for indoor and outdoor play.",
        category: "Sports"
    },
    {
        _id: "16",
        name: "Basketball Gear 2",
        image: G8, // Replace with actual image import or path
        price: 200,
        description: "Durable basketball equipment for all levels of play.",
        category: "Sports"
    },
    {
        _id: "17",
        name: "Badminton Set 1",
        image: G9, // Replace with actual image import or path
        price: 140,
        description: "Complete badminton set with rackets and shuttlecocks.",
        category: "Sports"
    },
    {
        _id: "18",
        name: "Badminton Set 2",
        image: G10, // Replace with actual image import or path
        price: 160,
        description: "Premium badminton gear for competitive matches.",
        category: "Sports"
    },
    {
        _id: "19",
        name: "Golf Set 1",
        image: G11, // Replace with actual image import or path
        price: 400,
        description: "Complete golf set with clubs, bag, and accessories.",
        category: "Sports"
    },
    {
        _id: "20",
        name: "Golf Set 2",
        image: G12, // Replace with actual image import or path
        price: 450,
        description: "Advanced golf equipment for professional players.",
        category: "Sports"
    },

    // Bikes (4 items: Bike1 to Bike4)
    {
        _id: "21",
        name: "Mountain Bike 1",
        image: bike1, // Replace with actual image import or path
        price: 500,
        description: "High-performance mountain bike for rough terrains.",
        category: "Bikes"
    },
    {
        _id: "22",
        name: "Mountain Bike 2",
        image: bike2, // Replace with actual image import or path
        price: 520,
        description: "Durable mountain bike with advanced suspension system.",
        category: "Bikes"
    },
    {
        _id: "23",
        name: "Road Bike 1",
        image: bike3, // Replace with actual image import or path
        price: 400,
        description: "Lightweight road bike for high-speed cycling.",
        category: "Bikes"
    },
    {
        _id: "24",
        name: "Road Bike 2",
        image: bike4, // Replace with actual image import or path
        price: 420,
        description: "Aerodynamic road bike for competitive racing.",
        category: "Bikes"
    }
];



export const url = 'http://localhost:4000'
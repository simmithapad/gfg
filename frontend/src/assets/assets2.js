import rating_starts from './rating_starts.png'
import add_icon_white from './add_icon_white.png'
import remove_icon_red from './remove_icon_red.png'
import add_icon_green from './add_icon_green.png'

import rafting from './rafting.png'
import kayaking from './kayaking.png'
import paragliding from './paragliding.png'
import rappeling from './rappeling.png'

import r1 from './r1.jpeg';
import r2 from './r2.jpeg';
import r3 from './r3.jpeg';
import r4 from './r4.jpeg';

import k1 from './k1.jpeg';
import k2 from './k2.jpeg';
import k3 from './k3.jpeg';
import k4 from './k4.jpeg';

import p1 from './p1.jpeg';
import p2 from './p2.jpeg';
import p3 from './p3.jpeg';
import p4 from './p4.jpeg';

import re1 from './re1.jpeg';
import re2 from './re2.jpeg';
import re3 from './re3.jpeg';
import re4 from './re4.jpeg';

export const assets ={
    rating_starts,
    add_icon_white,
    remove_icon_red,
    add_icon_green
}

export const menu_list = [
    {
        menu_name: "Rafting",
        menu_image: rafting
    },
    {
        menu_name: "Kayaking",
        menu_image: kayaking 
    },
    {
        menu_name: "Paragliding",
        menu_image: paragliding
    },
    {
        menu_name: "Rappeling",
        menu_image: rappeling
    }
];
export const food_list = [
    // Rafting items
    {
      _id: "1",
      name: "Rafting 1",
      image: r1,
      price: 1000,
      description: "Enjoy an adrenaline-filled rafting experience.",
      category: "Rafting"
    },
    {
      _id: "2",
      name: "Rafting 2",
      image: r2,
      price: 1200,
      description: "Whitewater rafting with professional guides.",
      category: "Rafting"
    },
    {
      _id: "3",
      name: "Rafting 3",
      image: r3,
      price: 1500,
      description: "Rafting adventure through scenic rivers.",
      category: "Rafting"
    },
    {
      _id: "4",
      name: "Rafting 4",
      image: r4,
      price: 1800,
      description: "Advanced-level rafting with challenging rapids.",
      category: "Rafting"
    },
  
    // Kayaking items
    {
      _id: "5",
      name: "Kayaking 1",
      image: k1,
      price: 800,
      description: "Kayaking through calm and picturesque waters.",
      category: "Kayaking"
    },
    {
      _id: "6",
      name: "Kayaking 2",
      image: k2,
      price: 1000,
      description: "Solo kayaking adventure with a safety guide.",
      category: "Kayaking"
    },
    {
      _id: "7",
      name: "Kayaking 3",
      image: k3,
      price: 1200,
      description: "Group kayaking tour through beautiful landscapes.",
      category: "Kayaking"
    },
    {
      _id: "8",
      name: "Kayaking 4",
      image: k4,
      price: 1400,
      description: "Advanced kayaking with whitewater challenges.",
      category: "Kayaking"
    },
  
    // Paragliding items
    {
      _id: "9",
      name: "Paragliding 1",
      image: p1,
      price: 3000,
      description: "Beginner's paragliding experience with instructor.",
      category: "Paragliding"
    },
    {
      _id: "10",
      name: "Paragliding 2",
      image: p2,
      price: 3500,
      description: "Tandem paragliding with breathtaking views.",
      category: "Paragliding"
    },
    {
      _id: "11",
      name: "Paragliding 3",
      image: p3,
      price: 4000,
      description: "Solo paragliding for experienced flyers.",
      category: "Paragliding"
    },
    {
      _id: "12",
      name: "Paragliding 4",
      image: p4,
      price: 4500,
      description: "Advanced paragliding with high altitude flights.",
      category: "Paragliding"
    },
  
    // Rappeling items
    {
      _id: "13",
      name: "Rappeling 1",
      image: re1,
      price: 1500,
      description: "Rappelling down cliffs with professional guides.",
      category: "Rappeling"
    },
    {
      _id: "14",
      name: "Rappeling 2",
      image: re2,
      price: 1700,
      description: "Beginner-level rappelling with all gear included.",
      category: "Rappeling"
    },
    {
      _id: "15",
      name: "Rappeling 3",
      image: re3,
      price: 2000,
      description: "Intermediate rappelling adventure with safety brief.",
      category: "Rappeling"
    },
    {
      _id: "16",
      name: "Rappeling 4",
      image: re4,
      price: 2500,
      description: "Advanced rappelling on steep and high cliffs.",
      category: "Rappeling"
    }
  ];  

export const url = 'http://localhost:4000'
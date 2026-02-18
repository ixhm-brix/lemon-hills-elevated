import deluxeImg from "@/assets/room-deluxe.jpg";
import execImg from "@/assets/room-executive.jpg";
import presImg from "@/assets/room-presidential.jpg";

export type RoomData = {
    id: string;
    name: string;
    category: "Standard" | "Deluxe" | "VIP";
    detail: string;
    price: number;
    maxGuests: number;
    size: string;
    img: string;
    features: string[];
};

export const allRooms: RoomData[] = [
    {
        id: "twin-room",
        name: "Twin Room",
        category: "Standard",
        detail: "Two Single Beds · 28 m²",
        price: 180,
        maxGuests: 2,
        size: "28 m²",
        img: deluxeImg,
        features: ["Two single beds", "City view", "Free WiFi", "Air conditioning", "Flat-screen TV", "En-suite bathroom"],
    },
    {
        id: "single-room",
        name: "Single Room",
        category: "Standard",
        detail: "Single Bed · Compact · 18 m²",
        price: 120,
        maxGuests: 1,
        size: "18 m²",
        img: execImg,
        features: ["Single bed", "Garden view", "Free WiFi", "Air conditioning", "Work desk", "En-suite shower"],
    },
    {
        id: "deluxe-double",
        name: "Deluxe Double Room",
        category: "Deluxe",
        detail: "Queen Bed · Rain Shower · 42 m²",
        price: 320,
        maxGuests: 2,
        size: "42 m²",
        img: deluxeImg,
        features: ["Queen bed", "Rain shower", "Hilltop view", "Free WiFi", "Mini bar", "Lounge chair", "Room service"],
    },
    {
        id: "double-deluxe",
        name: "Double Deluxe Room",
        category: "Deluxe",
        detail: "King Bed · Lounge Area · 55 m²",
        price: 450,
        maxGuests: 3,
        size: "55 m²",
        img: execImg,
        features: ["King bed", "Lounge area", "Panoramic view", "Free WiFi", "Mini bar", "Bathrobe & slippers", "Room service", "Coffee machine"],
    },
    {
        id: "vip-suite",
        name: "VIP Suite",
        category: "VIP",
        detail: "Emperor Bed · Jacuzzi · Private Terrace · 120 m²",
        price: 1200,
        maxGuests: 4,
        size: "120 m²",
        img: presImg,
        features: ["Emperor bed", "Private jacuzzi", "Private terrace", "Panoramic view", "Living room", "Dining area", "Butler service", "Premium mini bar", "Bathrobe & slippers", "24/7 room service"],
    },
];

export const getRoomById = (id: string) => allRooms.find((r) => r.id === id);

import { Laptop, Smartphone, Watch, Headphones, Camera, Gamepad, Tv, Speaker } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { CategoryTrigger } from "./navigation/CategoryTrigger"
import { CategoryFeatured } from "./navigation/CategoryFeatured"

const categories = [
  {
    name: "Laptops",
    icon: Laptop,
    featured: [
      {
        title: "MacBook Pro",
        href: "#",
        description: "Experience the power of Apple's latest M2 chip",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        title: "Gaming Laptops",
        href: "#",
        description: "Ultimate performance for gaming enthusiasts",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ],
    subcategories: ["Gaming", "Business", "Student", "Ultrabook", "2-in-1", "Budget", "Premium", "Workstation"]
  },
  {
    name: "Phones",
    icon: Smartphone,
    featured: [
      {
        title: "iPhone 15 Pro",
        href: "#",
        description: "The most powerful iPhone ever",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        title: "Samsung Galaxy",
        href: "#",
        description: "Experience the next generation of Android",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ],
    subcategories: ["Flagship", "Mid-range", "Budget", "Gaming", "Camera-focused", "Business", "Foldable", "5G"]
  },
  {
    name: "Watches",
    icon: Watch,
    subcategories: [
      {
        name: "By Type",
        items: ["Smartwatch", "Fitness Tracker", "Luxury", "Sport", "Casual", "Fashion", "Hybrid", "Kids", "Medical", "Professional"]
      },
      {
        name: "By Brand",
        items: ["Apple", "Samsung", "Garmin", "Fitbit", "Fossil", "Amazfit", "Huawei", "Withings", "Tag Heuer", "Casio"]
      },
      {
        name: "By Features",
        items: ["Heart Rate", "GPS", "Sleep Tracking", "ECG", "Blood Oxygen", "Water Resistant", "Cellular", "Long Battery", "Music Storage", "Voice Assistant"]
      }
    ]
  },
  {
    name: "Audio",
    icon: Headphones,
    subcategories: [
      {
        name: "By Type",
        items: ["Over-ear", "In-ear", "On-ear", "True Wireless", "Gaming", "Sports", "Professional", "Noise Cancelling", "Wireless", "Wired"]
      },
      {
        name: "By Brand",
        items: ["Sony", "Bose", "Apple", "Sennheiser", "JBL", "Audio-Technica", "Beats", "Samsung", "Jabra", "Shure"]
      },
      {
        name: "By Features",
        items: ["ANC", "Water Resistant", "Long Battery", "Fast Charging", "Multi-device", "Voice Assistant", "Touch Controls", "Hi-Res Audio", "Microphone", "Custom EQ"]
      }
    ]
  },
  {
    name: "Cameras",
    icon: Camera,
    subcategories: [
      {
        name: "By Type",
        items: ["DSLR", "Mirrorless", "Point & Shoot", "Action", "Video", "Security", "Drone", "Film", "360", "Instant"]
      },
      {
        name: "By Brand",
        items: ["Canon", "Sony", "Nikon", "Fujifilm", "Panasonic", "Olympus", "Leica", "GoPro", "DJI", "Pentax"]
      },
      {
        name: "By Features",
        items: ["4K Video", "Image Stabilization", "Wi-Fi", "Touchscreen", "Weather Sealed", "High ISO", "Fast AF", "Raw Support", "GPS", "Bluetooth"]
      }
    ]
  },
  {
    name: "Gaming",
    icon: Gamepad,
    subcategories: [
      {
        name: "By Platform",
        items: ["PlayStation", "Xbox", "Nintendo", "PC", "Mobile", "VR", "Cloud Gaming", "Retro", "Arcade", "Handheld"]
      },
      {
        name: "By Accessory",
        items: ["Controllers", "Headsets", "Keyboards", "Mice", "Monitors", "Chairs", "Capture Cards", "Storage", "Cooling", "RGB Lighting"]
      },
      {
        name: "By Genre",
        items: ["Action", "RPG", "FPS", "Sports", "Strategy", "Racing", "Adventure", "Simulation", "Fighting", "MMO"]
      }
    ]
  },
  {
    name: "TV",
    icon: Tv,
    subcategories: [
      {
        name: "By Technology",
        items: ["OLED", "QLED", "LED", "Mini-LED", "LCD", "8K", "4K", "HDR", "Smart TV", "Gaming TV"]
      },
      {
        name: "By Brand",
        items: ["Samsung", "LG", "Sony", "TCL", "Hisense", "Vizio", "Philips", "Panasonic", "Sharp", "Toshiba"]
      },
      {
        name: "By Size",
        items: ["32-inch", "43-inch", "50-inch", "55-inch", "65-inch", "75-inch", "85-inch", "Compact", "Medium", "Large"]
      }
    ]
  },
  {
    name: "Speakers",
    icon: Speaker,
    subcategories: [
      {
        name: "By Type",
        items: ["Bluetooth", "Smart", "Soundbar", "Bookshelf", "Floor Standing", "Portable", "Home Theater", "Computer", "Outdoor", "Multi-room"]
      },
      {
        name: "By Brand",
        items: ["Sonos", "Bose", "JBL", "Klipsch", "KEF", "Bang & Olufsen", "Yamaha", "Polk", "Marshall", "Harman Kardon"]
      },
      {
        name: "By Features",
        items: ["Voice Assistant", "Wi-Fi", "Waterproof", "Multi-room", "Battery Powered", "AirPlay", "Chromecast", "Dolby Atmos", "Subwoofer", "Remote Control"]
      }
    ]
  }
]

export function SecondaryHeader() {
  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-[1400px]">
        <div className="overflow-x-auto scrollbar-hide">
          <NavigationMenu>
            <NavigationMenuList className="flex h-14 items-center gap-6 px-4 md:px-6 min-w-max">
              {categories.map((category) => (
                <NavigationMenuItem key={category.name}>
                  <CategoryTrigger icon={category.icon} name={category.name} />
                  <CategoryFeatured 
                    featured={category.featured} 
                    subcategories={category.subcategories} 
                  />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}
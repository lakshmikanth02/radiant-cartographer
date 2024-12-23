import { Laptop, Smartphone, Watch, Headphones, Camera, Gamepad, Tv, Speaker } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
];

export function SecondaryHeader() {
  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <NavigationMenu>
          <NavigationMenuList className="flex h-14 items-center gap-6 px-4 md:px-6">
            {categories.map((category) => (
              <NavigationMenuItem key={category.name}>
                <NavigationMenuTrigger className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary group">
                  <category.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  {category.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] lg:w-[800px] p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Featured</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {category.featured.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="group block space-y-2"
                          >
                            <div className="aspect-video overflow-hidden rounded-lg">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Categories</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {category.subcategories.map((subcat) => (
                          <a
                            key={subcat}
                            href={`#${category.name.toLowerCase()}-${subcat.toLowerCase()}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 px-2 rounded-md hover:bg-accent"
                          >
                            {subcat}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

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
    subcategories: [
      {
        name: "By Brand",
        items: ["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "Microsoft", "MSI", "Razer", "Samsung"]
      },
      {
        name: "By Type",
        items: ["Gaming", "Business", "Student", "Ultrabook", "2-in-1", "Budget", "Premium", "Workstation", "Chromebook", "Netbook"]
      },
      {
        name: "By Size",
        items: ["11-inch", "13-inch", "14-inch", "15-inch", "16-inch", "17-inch", "Compact", "Large Screen", "Portable", "Desktop Replacement"]
      }
    ]
  },
  {
    name: "Phones",
    icon: Smartphone,
    subcategories: [
      {
        name: "By Brand",
        items: ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "Oppo", "Vivo", "Huawei", "Motorola", "Sony"]
      },
      {
        name: "By Type",
        items: ["Flagship", "Mid-range", "Budget", "Gaming", "Camera-focused", "Business", "Rugged", "Foldable", "5G", "Compact"]
      },
      {
        name: "By Features",
        items: ["5G Ready", "Wireless Charging", "Fast Charging", "High Refresh Rate", "Water Resistant", "Dual SIM", "Large Battery", "NFC", "Face ID", "In-display Fingerprint"]
      }
    ]
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
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <NavigationMenu className="container mx-auto">
        <NavigationMenuList className="flex h-14 items-center gap-6 overflow-x-auto">
          {categories.map((category) => (
            <NavigationMenuItem key={category.name}>
              <NavigationMenuTrigger className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                <category.icon className="h-4 w-4" />
                {category.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-[100] bg-popover">
                <div className="grid grid-cols-3 gap-6 p-6 w-[800px]">
                  {category.subcategories.map((subcategory) => (
                    <div key={subcategory.name} className="space-y-2">
                      <h3 className="font-medium text-sm">{subcategory.name}</h3>
                      <ul className="space-y-1">
                        {subcategory.items.map((item) => (
                          <li key={item}>
                            <a
                              href={`#${category.name.toLowerCase()}-${item.toLowerCase()}`}
                              className="block text-sm text-muted-foreground hover:text-primary"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

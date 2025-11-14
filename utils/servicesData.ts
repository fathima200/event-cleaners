

export interface ServiceDetail {
  imageUrl: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  cardImage: string;
  icon: string;
  cardTitle: string;
  cardDescription: string;
  detailsBadge: string;
  detailsTitle: string;
  detailsSubtitle: string;
  serviceDetails: ServiceDetail[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "event-cleaning",
    title: "Event Cleaning",
    subtitle: "Flawless Events That Leave Guests Amazed",
    description: "Reliable, thorough cleaning for festivals, concerts, and parades, ensuring your Toronto event spaces are spotless and ready to impress from start to finish.",
    heroImage: "/event-1.jpg",
    cardImage: "/event-1.jpg",
    icon: "/event.png",
    cardTitle: "Flawless Events That Leave Guests Amazed",
    cardDescription: "From Caribana to Pride Parade, our team delivers pre-event, during-event, and post-event cleaning to create unforgettable experiences in Toronto.",
    detailsBadge: "Every Moment Spotless",
    detailsTitle: "What's included in this service",
    detailsSubtitle: "Comprehensive cleaning and organization to ensure your event venue is flawless at every stage.",
    serviceDetails: [
      {
        imageUrl: "/event-2.jpg",
        title: "Pre-Event Preparation",
        description: "Venue cleaning, trash removal, surface sanitization, setup assistance",
      },
      {
        imageUrl: "/event-5.jpg",
        title: "During-Event Support",
        description: "Restroom maintenance, waste collection, spill cleanup, crowd area tidying",
      },
      {
        imageUrl: "/event-3.jpg",
        title: "Post-Event Restoration",
        description: "Debris removal, deep cleaning, sanitization, venue reset",
      },
      {
        imageUrl: "/event-4.jpg",
        title: "High-Traffic Zones",
        description: "Entrances, walkways, vendor areas, seating zones—kept clean and safe",
      },
    ],
  },
  {
    slug: "parking-lot-cleaning",
    title: "Parking Lot Cleaning",
    subtitle: "Pristine Plazas That Make a Lasting Impression",
    description: "Expert cleaning for Toronto’s commercial plazas, ensuring parking lots are safe, clean, and welcoming with sweeping, debris removal, and stain treatment.",
    heroImage: "/parking-1.jpg",
    cardImage: "/parking-1.jpg",
    icon: "brush-icon.avif",
    cardTitle: "Pristine Plazas That Make a Lasting Impression",
    cardDescription: "Transform plazas like Yorkdale or Scarborough Town Centre with our thorough sweeping, debris removal, and stain treatment services.",
    detailsBadge: "Total Lot Transformation",
    detailsTitle: "What's included in this service",
    detailsSubtitle: "Complete cleaning solutions to keep your parking areas spotless, safe, and inviting.",
    serviceDetails: [
      {
        imageUrl: "/parking-3.jpg",
        title: "Industrial Sweeping",
        description: "Debris removal, dust control, edge cleaning, surface sweeping",
      },
      {
        imageUrl: "/pressure-oil.jpg",
        title: "Stain and Oil Removal",
        description: "Oil stain treatment, tire mark cleaning, gum removal, surface restoration",
      },
      {
        imageUrl: "/parking-4.jpg",
        title: "Litter Management",
        description: "Trash collection, bin cleaning, recycling sorting, litter removal",
      },
      {
        imageUrl: "https://c.animaapp.com/mhwem8rugib1hE/assets/prCzxWjEfthZd14GoRUuYKePmBA.png",
        title: "Curb and Line Maintenance",
        description: "Curb scrubbing, parking line cleaning, drain clearing, edge detailing",
      },
    ],
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    subtitle: "Powerful Cleaning for a Like-New Shine",
    description: "High-powered pressure washing services that restore Toronto’s event venues and plazas, removing dirt and stains from sidewalks, facades, and parking areas.",
    heroImage: "/parking-3.jpg",
    cardImage: "/parking-3.jpg",
    icon: "/desk.avif",
    cardTitle: "Powerful Cleaning for a Like-New Shine",
    cardDescription: "Restore sidewalks, facades, and parking areas to their original brilliance with our pressure washing, ideal for Toronto’s events and plazas.",
    detailsBadge: "Surface Revival",
    detailsTitle: "What's included in this service",
    detailsSubtitle: "Intensive cleaning that removes buildup and restores surfaces to their best condition.",
    serviceDetails: [
      {
        imageUrl: "/pressure-oil.jpg",
        title: "Sidewalks and Walkways",
        description: "Concrete cleaning, gum removal, stain treatment, surface brightening",
      },
      {
        imageUrl: "/window.jpg",
        title: "Building Facades",
        description: "Exterior washing, graffiti removal, mold treatment, window cleaning",
      },
      {
        imageUrl: "/pressure-1.jpg",
        title: "Parking Areas",
        description: "Surface washing, oil stain removal, tire mark cleaning, sealant preparation",
      },
      {
        imageUrl: "/guy.avif",
        title: "Specialty Surfaces",
        description: "Deck cleaning, fence washing, awning treatment, equipment cleaning",
      },
    ],
  },
  {
    slug: "snow-removal",
    title: "Snow Removal",
    subtitle: "Safe and Accessible Spaces All Winter",
    description: "24/7 snow removal and de-icing services to keep Toronto’s event grounds and plazas safe, accessible, and liability-free during harsh winters.",
    heroImage: "/snow-1.jpg",
    cardImage: "/snow-1.jpg",
    icon: "/brush2.avif",
    cardTitle: "Safe and Accessible Spaces All Winter",
    cardDescription: "Ensure event grounds and plazas like Yorkdale remain safe with our 24/7 snow removal and de-icing services during Toronto’s winters.",
    detailsBadge: "Winter-Ready Spaces",
    detailsTitle: "What's included in this service",
    detailsSubtitle: "Comprehensive winter maintenance to keep your property safe and operational, no matter the weather.",
    serviceDetails: [
      {
        imageUrl: "/snow-2.jpg",
        title: "Snow Plowing",
        description: "Parking lot clearing, roadway plowing, snow piling, hauling services",
      },
      {
        imageUrl: "/snow-3.jpg",
        title: "De-Icing and Salting",
        description: "Ice melt application, preventive salting, slip prevention, surface treatment",
      },
      {
        imageUrl: "/snow-1.jpg",
        title: "Walkway and Entrance Clearing",
        description: "Sidewalk shoveling, stair treatment, entrance clearing, pathway maintenance",
      },
      {
        imageUrl: "/snow-5.jpg",
        title: "Emergency Winter Response",
        description: "24/7 availability, storm response, priority clearing, continuous monitoring",
      },
    ],
  },
];
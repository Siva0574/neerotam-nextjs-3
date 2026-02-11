// Project data with support for both images and videos

export interface Project {
  id: number;
  title: string;
  location: string;
  type: "image" | "video";
  media: string; // URL for image or video
  thumbnail?: string; // Optional thumbnail for videos
  description: string;
  date: string;
  category: "residential" | "commercial" | "agricultural" | "industrial";
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Industrial Complex - 800ft Deep",
    location: "Western Industrial Zone",
    type: "image",
    media:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    description: "Large-scale industrial borewell for manufacturing facility",
    date: "2024-01",
    category: "industrial",
  },
  {
    id: 2,
    title: "Residential Estate - 450ft",
    location: "Northern Suburbs",
    type: "video",
    media: "/videos/arumugam.mp4",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    description: "Borewell installation for residential community",
    date: "2024-02",
    category: "residential",
  },
  {
    id: 3,
    title: "Farm Irrigation - 600ft",
    location: "Green Belt Farms",
    type: "image",
    media:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    description: "Agricultural borewell for crop irrigation",
    date: "2023-12",
    category: "agricultural",
  },
  {
    id: 4,
    title: "Commercial Plaza - 550ft",
    location: "Downtown Core",
    type: "image",
    media:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    description: "Water supply for commercial shopping center",
    date: "2023-11",
    category: "commercial",
  },
  {
    id: 5,
    title: "Apartment Complex - 500ft",
    location: "Eastern Heights",
    type: "video",
    media: "/videos/arumugam.mp4",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    description: "Multi-story residential building water solution",
    date: "2023-10",
    category: "residential",
  },
  {
    id: 6,
    title: "Hotel & Resort - 700ft",
    location: "Coastal District",
    type: "image",
    media:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    description: "Tourism facility water infrastructure",
    date: "2023-09",
    category: "commercial",
  },
  {
    id: 7,
    title: "Dairy Farm - 650ft",
    location: "Rural Agricultural Zone",
    type: "image",
    media:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    description: "Livestock farm water supply system",
    date: "2023-08",
    category: "agricultural",
  },
  {
    id: 8,
    title: "Manufacturing Unit - 750ft",
    location: "Industrial Park South",
    type: "video",
    media: "/videos/arumugam.mp4",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    description: "Industrial production facility borewell",
    date: "2023-07",
    category: "industrial",
  },
  {
    id: 9,
    title: "School Campus - 480ft",
    location: "Educational District",
    type: "image",
    media:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2G1fhqfFcvrhhuMMQEF1gfFXo5zCbWdZadI2Xyz622cC-b1a5tJg06rt6OLnXEUhcw-8K90HrXTM5-FjydZnuMvSiamzjOhpHhaAXHvm2312c7RHR4Eog8xShCCbOoIDlAw97XK708kmjI9x9U74YZbTzXW50SzAp77esTuXXZ2WOw1G1g-yk7wqSuXHXR1yyDG8owyX8sxzQt6f8Z7FUEA_bbunqKU16d-SVvDA4CgQz35cYD6nM883e6lhTCVyA3u0e7jT16DyA",
    description: "Educational institution water supply",
    date: "2023-06",
    category: "commercial",
  },
];

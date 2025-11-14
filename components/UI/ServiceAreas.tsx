

// "use client";

// import { useEffect, useRef } from "react";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Fix Leaflet default icon issue in Next.js
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
// });

// const areas = [
//   { name: "Downtown Toronto", lat: 43.6532, lng: -79.3832 },
//   { name: "North York", lat: 43.7615, lng: -79.4111 },
//   { name: "Scarborough", lat: 43.7764, lng: -79.2318 },
//   { name: "Etobicoke", lat: 43.6436, lng: -79.5656 },
//   { name: "Mississauga", lat: 43.5890, lng: -79.6441 },
//   { name: "Vaughan", lat: 43.8361, lng: -79.5083 },
//   { name: "Markham", lat: 43.8561, lng: -79.3370 },
// ];

// export default function ServiceAreas() {
//   const mapRef = useRef<HTMLDivElement>(null);
//   const mapInstance = useRef<L.Map | null>(null);

//   useEffect(() => {
//     if (!mapRef.current || mapInstance.current) return;

//     // Initialize map
//     const map = L.map(mapRef.current, { scrollWheelZoom: false }).setView([43.70, -79.42], 10);

//     // Dark tile layer (matches your dark theme)
//     L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
//       attribution: '&copy; OpenStreetMap & Carto',
//       subdomains: "abcd",
//       maxZoom: 19,
//     }).addTo(map);

//     // GTA boundary polygon (approximate)
//     const gtaBounds: L.LatLngTuple[] = [
//       [43.58, -79.12],
//       [43.85, -79.12],
//       [43.95, -79.65],
//       [43.48, -79.95],
//     ];
//     L.polygon(gtaBounds, {
//       color: "#eeda03",
//       weight: 3,
//       opacity: 0.8,
//       fillColor: "#eeda03",
//       fillOpacity: 0.1,
//     }).addTo(map);

//     // Custom pin icon
//     const pinIcon = L.divIcon({
//       html: `
//         <div class="relative">
//           <div class="w-4 h-4 bg-[#eeda03] rounded-full animate-ping absolute"></div>
//           <div class="w-4 h-4 bg-[#eeda03] rounded-full"></div>
//         </div>
//       `,
//       className: "custom-pin",
//       iconSize: [16, 16],
//       iconAnchor: [8, 8],
//     });

//     // Add pins
//     areas.forEach((area) => {
//       const marker = L.marker([area.lat, area.lng], { icon: pinIcon }).addTo(map);
//       marker.bindPopup(`
//         <div class="text-center p-2">
//           <p class="font-bold text-[#0a0e27]">${area.name}</p>
//           <p class="text-xs text-gray-600">Covered</p>
//         </div>
//       `);
//     });

//     mapInstance.current = map;

//     return () => {
//       map.remove();
//     };
//   }, []);

//   return (
//     <section className="relative bg-[#0a0e27] w-full overflow-hidden py-20 md:py-32">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-12">
//         {/* Header */}
//         <div className="mb-12 md:mb-16 text-center">
//           <div className="bg-[#eeda03] h-[3px] w-[40px] mb-4 mx-auto"></div>
//           <h2 className="text-white text-5xl md:text-7xl font-medium tracking-tight leading-tight font-geist mb-6">
//             We Cover the Whole GTA
//           </h2>
//           <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-geist max-w-3xl mx-auto">
//             Downtown festivals. Scarborough plazas. Mississauga events. If it's in the Greater Toronto Area, <span className="text-[#eeda03] font-bold">we'll get there</span>.
//           </p>
//         </div>

//         {/* Interactive Map */}
//         <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
//           <div ref={mapRef} className="h-[500px] w-full" />
          
//           {/* Overlay Legend */}
//           <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white p-3 rounded-xl text-sm font-geist flex items-center gap-2">
//             <div className="w-3 h-3 bg-[#eeda03] rounded-full animate-pulse"></div>
//             <span>Covered Areas</span>
//           </div>

//         </div>

//         {/* Optional: List below map for SEO */}
//         <div className="mt-8 text-center">
//           <p className="text-gray-500 text-sm font-geist">
//             Serving: {areas.map(a => a.name).join(" • ")}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";

import dynamic from "next/dynamic";

// Dynamically import the map component with SSR disabled
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-slate-800 rounded-3xl flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400 font-geist">Loading map...</p>
      </div>
    </div>
  ),
});

const areas = [
  "Downtown Toronto",
  "North York",
  "Scarborough",
  "Etobicoke",
  "Mississauga",
  "Vaughan",
  "Markham",
];

export default function ServiceAreas() {
  return (
    <section className="relative bg-[#0a0e27] w-full overflow-hidden py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="bg-[#eeda03] h-[3px] w-[40px] mb-4 mx-auto"></div>
          <h2 className="text-white text-5xl md:text-7xl font-medium tracking-tight leading-tight font-geist mb-6">
            We Cover the Whole GTA
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-geist max-w-3xl mx-auto">
            Downtown festivals. Scarborough plazas. Mississauga events. If it in the Greater Toronto Area, <span className="text-[#eeda03] font-bold">we will get there</span>.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <MapComponent />
        </div>

        {/* List below map for SEO */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm font-geist">
            Serving: {areas.join(" • ")}
          </p>
        </div>
      </div>
    </section>
  );
}
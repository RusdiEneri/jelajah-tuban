import type { Destination } from "@/types/destination";
// The brief supplied names only. Unprovided facts remain null pending the approved dataset.
const create = (id: string, name: string, slug: string, category: string, coverImage: string): Destination => ({ id, name, slug, category, description: null, latitude: null, longitude: null, openingHours: null, ticketPrice: null, coverImage, gallery: [] });
export const destinations: Destination[] = [
  create("pantai-boom", "Pantai Boom", "pantai-boom", "Pantai", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"),
  create("pantai-kelapa", "Pantai Kelapa", "pantai-kelapa", "Pantai", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"),
  create("pantai-pasir-putih-remen", "Pantai Pasir Putih Remen", "pantai-pasir-putih-remen", "Pantai", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"),
  create("pantai-sowan", "Pantai Sowan", "pantai-sowan", "Pantai", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"),
  create("goa-akbar", "Goa Akbar", "goa-akbar", "Alam", "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"),
  create("goa-putri-asih", "Goa Putri Asih", "goa-putri-asih", "Alam", "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"),
  create("goa-suci", "Goa Suci", "goa-suci", "Alam", "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"),
  create("air-terjun-nglirip", "Air Terjun Nglirip", "air-terjun-nglirip", "Alam", "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85"),
  create("air-terjun-krawak", "Air Terjun Krawak", "air-terjun-krawak", "Alam", "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85"),
  create("makam-sunan-bonang", "Makam Sunan Bonang", "makam-sunan-bonang", "Religi", "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85"),
  create("masjid-agung-tuban", "Masjid Agung Tuban", "masjid-agung-tuban", "Religi", "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=85"),
  create("klenteng-kwan-sing-bio", "Klenteng Kwan Sing Bio", "klenteng-kwan-sing-bio", "Sejarah", "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1200&q=85"),
  create("pemandian-bektiharjo", "Pemandian Bektiharjo", "pemandian-bektiharjo", "Alam", "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85"),
  create("sendang-asmoro", "Sendang Asmoro", "sendang-asmoro", "Alam", "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85"),
  create("wisata-kebun-sagu-pelang", "Wisata Kebun Sagu Pelang", "wisata-kebun-sagu-pelang", "Kuliner", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85"),
];

// Delivery pricing data for all 58 wilayas of Algeria
export interface DeliveryPricing {
  wilaya: string;
  wilayaCode: string;
  price: number;
  deliveryTime: string;
  zone: 'A' | 'B' | 'C' | 'D';
}

export const deliveryPricingData: DeliveryPricing[] = [
  // Zone A - Algiers and surrounding areas (0-500 DA)
  { wilaya: 'Alger', wilayaCode: '16', price: 0, deliveryTime: '1-2 days', zone: 'A' },
  { wilaya: 'Blida', wilayaCode: '09', price: 200, deliveryTime: '1-2 days', zone: 'A' },
  { wilaya: 'Tipaza', wilayaCode: '42', price: 300, deliveryTime: '1-2 days', zone: 'A' },
  { wilaya: 'Boumerdès', wilayaCode: '35', price: 300, deliveryTime: '1-2 days', zone: 'A' },
  { wilaya: 'Aïn Defla', wilayaCode: '44', price: 400, deliveryTime: '2-3 days', zone: 'A' },
  { wilaya: 'Chlef', wilayaCode: '02', price: 400, deliveryTime: '2-3 days', zone: 'A' },
  { wilaya: 'Médéa', wilayaCode: '26', price: 400, deliveryTime: '2-3 days', zone: 'A' },
  { wilaya: 'Relizane', wilayaCode: '48', price: 500, deliveryTime: '2-3 days', zone: 'A' },

  // Zone B - Central and Eastern regions (500-800 DA)
  { wilaya: 'Constantine', wilayaCode: '25', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: 'Oran', wilayaCode: '31', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: 'Annaba', wilayaCode: '23', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Sétif', wilayaCode: '19', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: 'Batna', wilayaCode: '05', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Djelfa', wilayaCode: '17', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Sidi Bel Abbès', wilayaCode: '22', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: 'Biskra', wilayaCode: '07', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Tébessa', wilayaCode: '12', price: 800, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'El Oued', wilayaCode: '39', price: 800, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Khenchela', wilayaCode: '40', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Souk Ahras', wilayaCode: '41', price: 800, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Tiaret', wilayaCode: '14', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: 'Tlemcen', wilayaCode: '13', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: 'Mascara', wilayaCode: '29', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: 'Mostaganem', wilayaCode: '27', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: "M'Sila", wilayaCode: '28', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Guelma', wilayaCode: '24', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Jijel', wilayaCode: '18', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Skikda', wilayaCode: '21', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Béjaïa', wilayaCode: '06', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Bordj Bou Arreridj', wilayaCode: '34', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Bouira', wilayaCode: '10', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: 'Tizi Ouzou', wilayaCode: '15', price: 600, deliveryTime: '2-3 days', zone: 'B' },
  { wilaya: 'Laghouat', wilayaCode: '03', price: 700, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Ouargla', wilayaCode: '30', price: 800, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'El Bayadh', wilayaCode: '32', price: 800, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Illizi', wilayaCode: '33', price: 1000, deliveryTime: '4-5 days', zone: 'B' },
  { wilaya: 'Bordj Badji Mokhtar', wilayaCode: '52', price: 1000, deliveryTime: '4-5 days', zone: 'B' },
  { wilaya: 'Ouled Djellal', wilayaCode: '51', price: 800, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Béni Abbès', wilayaCode: '53', price: 1000, deliveryTime: '4-5 days', zone: 'B' },
  { wilaya: 'In Salah', wilayaCode: '54', price: 1000, deliveryTime: '4-5 days', zone: 'B' },
  { wilaya: 'In Guezzam', wilayaCode: '55', price: 1000, deliveryTime: '4-5 days', zone: 'B' },
  { wilaya: 'Touggourt', wilayaCode: '56', price: 800, deliveryTime: '3-4 days', zone: 'B' },
  { wilaya: 'Djanet', wilayaCode: '57', price: 1000, deliveryTime: '4-5 days', zone: 'B' },
  { wilaya: "El M'Ghair", wilayaCode: '58', price: 800, deliveryTime: '3-4 days', zone: 'B' },

  // Zone C - Southern regions (800-1200 DA)
  { wilaya: 'Adrar', wilayaCode: '01', price: 1000, deliveryTime: '4-5 days', zone: 'C' },
  { wilaya: 'Tamanrasset', wilayaCode: '11', price: 1200, deliveryTime: '5-6 days', zone: 'C' },
  { wilaya: 'Ghardaïa', wilayaCode: '47', price: 1000, deliveryTime: '4-5 days', zone: 'C' },
  { wilaya: 'Timimoun', wilayaCode: '49', price: 1000, deliveryTime: '4-5 days', zone: 'C' },
  { wilaya: 'Ain Salah', wilayaCode: '50', price: 1000, deliveryTime: '4-5 days', zone: 'C' },

  // Zone D - Remote areas (1200+ DA)
  { wilaya: 'Tindouf', wilayaCode: '37', price: 1200, deliveryTime: '5-6 days', zone: 'D' },
  { wilaya: 'Béchar', wilayaCode: '08', price: 1200, deliveryTime: '5-6 days', zone: 'D' },
  { wilaya: 'Naâma', wilayaCode: '45', price: 1200, deliveryTime: '5-6 days', zone: 'D' },
  { wilaya: 'Aïn Témouchent', wilayaCode: '46', price: 800, deliveryTime: '3-4 days', zone: 'D' },
  { wilaya: 'Mila', wilayaCode: '43', price: 700, deliveryTime: '3-4 days', zone: 'D' },
  { wilaya: 'Tissemsilt', wilayaCode: '38', price: 600, deliveryTime: '2-3 days', zone: 'D' },
  { wilaya: 'El Tarf', wilayaCode: '36', price: 700, deliveryTime: '3-4 days', zone: 'D' },
  { wilaya: 'Oum El Bouaghi', wilayaCode: '04', price: 700, deliveryTime: '3-4 days', zone: 'D' },
  { wilaya: 'Saïda', wilayaCode: '20', price: 600, deliveryTime: '2-3 days', zone: 'D' }
];

// Helper function to get pricing by wilaya name
export const getPricingByWilaya = (wilayaName: string): DeliveryPricing | undefined => {
  return deliveryPricingData.find(item => 
    item.wilaya.toLowerCase() === wilayaName.toLowerCase()
  );
};

// Helper function to get pricing by wilaya code
export const getPricingByCode = (wilayaCode: string): DeliveryPricing | undefined => {
  return deliveryPricingData.find(item => item.wilayaCode === wilayaCode);
};

// Get pricing by zone
export const getPricingByZone = (zone: 'A' | 'B' | 'C' | 'D'): DeliveryPricing[] => {
  return deliveryPricingData.filter(item => item.zone === zone);
};

// Get all wilayas sorted by code
export const getAllWilayasSorted = (): DeliveryPricing[] => {
  return [...deliveryPricingData].sort((a, b) => 
    parseInt(a.wilayaCode) - parseInt(b.wilayaCode)
  );
};


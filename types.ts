export interface BookingRequest {
  startDate: string;
  endDate: string;
  guests: number;
  name: string;
  email: string;
  message?: string;
}

export interface AvailabilityResponse {
  isAvailable: boolean;
  price?: number;
  blockedDates: string[]; // ISO date strings
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface Amenity {
  icon: string;
  title: string;
  description: string;
}

export interface PricingSeason {
  name: string;
  period: string;
  pricePerNight: number;
  minStay: number;
}
import { AvailabilityResponse } from '../types';

// Mock Environment Variables (Simulated)
const MOCK_ENV = {
  CHANNEL_MANAGER_API_URL: "https://api.mock-channelmanager.com/v1",
  CHANNEL_MANAGER_API_KEY: "mock_key_12345",
  OTA_BOOKING_ID: "123456"
};

/**
 * Simulates fetching availability from an external Channel Manager (e.g., Smoobu, Beds24).
 * In production, this would use fetch() to hit the real endpoint.
 */
export const getAvailability = async (month: number, year: number): Promise<AvailabilityResponse> => {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 800));

  // Generate deterministic "mock" blocked dates for demonstration
  // Blocks out weekends and a random week in the requested month
  const blockedDates: string[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    
    // Simulate weekend bookings (Friday, Saturday)
    if (dayOfWeek === 5 || dayOfWeek === 6) {
      blockedDates.push(date.toISOString().split('T')[0]);
    }

    // Simulate a longer booking from 12th to 18th
    if (day >= 12 && day <= 18) {
       blockedDates.push(date.toISOString().split('T')[0]);
    }
  }

  return {
    isAvailable: true,
    blockedDates
  };
};

/**
 * Simulates sending a booking request to the Channel Manager
 */
export const createBooking = async (data: any): Promise<boolean> => {
    console.log("Sending booking to Channel Manager:", MOCK_ENV.CHANNEL_MANAGER_API_URL, data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Simulate success
    return true;
}
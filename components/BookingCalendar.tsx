import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAvailability } from '../services/channelManager';

export const BookingCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [blockedDates, setBlockedDates] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDates = async () => {
      setLoading(true);
      const data = await getAvailability(currentDate.getMonth(), currentDate.getFullYear());
      setBlockedDates(data.blockedDates);
      setLoading(false);
    };
    fetchDates();
  }, [currentDate]);

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // 0 is Sunday
  
  // Adjust for Monday start
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const isBlocked = (day: number) => {
    const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toISOString().split('T')[0];
    return blockedDates.includes(dateStr);
  };

  return (
    <div className="bg-white p-6 md:p-8 shadow-sm border border-stone-100 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button onClick={handlePrevMonth} className="p-2 hover:bg-stone-100 rounded-full"><ChevronLeft size={20}/></button>
        <h3 className="font-serif text-lg">
          {currentDate.toLocaleString('de-DE', { month: 'long', year: 'numeric' })}
        </h3>
        <button onClick={handleNextMonth} className="p-2 hover:bg-stone-100 rounded-full"><ChevronRight size={20}/></button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
        {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(d => (
          <div key={d} className="text-stone-400 text-xs uppercase font-medium">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const blocked = isBlocked(day);
          return (
            <div 
              key={day}
              className={`
                aspect-square flex items-center justify-center text-sm
                ${loading ? 'opacity-50' : ''}
                ${blocked 
                  ? 'bg-stone-100 text-stone-300 line-through cursor-not-allowed' 
                  : 'bg-white hover:bg-sand-100 text-stone-700 cursor-pointer'}
              `}
            >
              {day}
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 flex gap-4 text-xs justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-white border border-stone-200"></div> Frei
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-stone-100 border border-stone-200"></div> Belegt
        </div>
      </div>
    </div>
  );
};
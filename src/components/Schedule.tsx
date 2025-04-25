import React, { useState } from 'react';
import { Clock } from 'lucide-react';

interface ScheduleItem {
  startTime: string;
  endTime: string;
  activity: string;
  batch?: string;
}

const Schedule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const scheduleItems: ScheduleItem[] = [
    {
      startTime: '09:00 AM',
      endTime: '09:30 AM',
      activity: 'Inauguration'
    },
    {
      startTime: '09:30 AM',
      endTime: '10:00 AM',
      activity: 'Lecture & Surgical Video Presentation by Dr. Dwaraknath',
      batch: 'Session 1'
    },
    {
      startTime: '10:00 AM',
      endTime: '10:30 AM',
      activity: 'Lecture & Surgical Video Presentation by Dr. Satish Sathyanarayana',
      batch: 'Session 2'
    },
    {
      startTime: '10:30 AM',
      endTime: '11:00 AM',
      activity: 'Lecture & Surgical Video Presentation by Dr. Iype Cherian',
      batch: 'Session 3'
    },
    {
      startTime: '11:00 AM',
      endTime: '11:15 AM',
      activity: 'Coffee / Tea Break'
    },
    {
      startTime: '11:15 AM',
      endTime: '1:00 PM',
      activity: 'Hands On'
    },
    {
      startTime: '01:00 PM',
      endTime: '01:45 PM',
      activity: 'Lunch Break'
    },
    {
      startTime: '01:45 PM',
      endTime: '05:00 PM',
      activity: 'Hands On'
    },
    {
      startTime: '05:00 PM',
      endTime: '05:15 PM',
      activity: 'Vote of Thanks'
    }
  ];
  
  const filteredSchedule = activeTab === 'all' 
    ? scheduleItems 
    : scheduleItems.filter(item => item.batch === activeTab);
  
  return (
    <section id="schedule" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Workshop <span className="text-blue-600">Schedule</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The workshop is designed to provide intensive hands-on training divided into multiple sessions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button 
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'all' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('all')}
              >
                All Sessions
              </button>
              <button 
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'Session 1' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('Session 1')}
              >
                Session 1
              </button>
              <button 
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'Session 2' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('Session 2')}
              >
                Session 2
              </button>
              <button 
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'Session 3' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab('Session 3')}
              >
                Session 3
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredSchedule.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-blue-50 p-4 md:p-6 md:w-64 flex items-center justify-center md:justify-start">
                    <Clock className="text-blue-600 w-5 h-5 mr-2" />
                    <div>
                      <span className="font-medium text-gray-700">{item.startTime}</span>
                      <span className="mx-2 text-gray-400">-</span>
                      <span className="font-medium text-gray-700">{item.endTime}</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 flex-1 flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{item.activity}</h3>
                      {item.batch && (
                        <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                          {item.batch}
                        </span>
                      )}
                    </div>
                    {item.activity.includes('Break') ? (
                      <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    ) : item.activity.includes('Lunch') ? (
                      <span className="w-3 h-3 rounded-full bg-green-400"></span>
                    ) : (
                      <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
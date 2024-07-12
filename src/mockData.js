const mockData = {
  patients: [
    {
      name: 'Mwangi Njoroge',
      loginId: 'patient1',
      password: 'mwangi123',
      upcomingAppointments: 2,
      lastCheckup: '2024-06-15',
      bloodPressure: '120/80 mmHg',
      weight: '70 kg',
      recentActivities: [
        { date: '2024-06-20', activity: 'Appointment with Dr. Kamau' },
        { date: '2024-06-18', activity: 'Test results: Blood Work' }
      ],
      upcomingAppointmentsDetails: [
        { date: '2024-06-25', time: '10:00 AM', doctor: 'Dr. Otieno' },
        { date: '2024-07-02', time: '02:00 PM', doctor: 'Dr. Wanjiku' }
      ],
      medicationSchedule: [
        { medication: 'Aspirin', dosage: '100 mg', time: '8:00 AM' }
      ],
      notifications: [
        { message: 'Your test results are available.' },
        { message: 'Upcoming appointment in 2 days.' }
      ],
      healthGoals: [
        { goal: 'Steps today', current: 5000, target: 10000 },
        { goal: 'Weight goal', current: 70, target: 68 }
      ],
      emergencyContact: '999',
      nearestHospital: 'Kenyatta National Hospital',
      personalizedMessage: "Great job on keeping up with your daily steps, Mwangi! You're just 5000 steps away from your goal. Keep it up!"
    },
    {
      name: 'Achieng Onyango',
      loginId: 'patient2',
      password: 'achieng123',
      upcomingAppointments: 1,
      lastCheckup: '2024-07-01',
      bloodPressure: '110/70 mmHg',
      weight: '65 kg',
      recentActivities: [
        { date: '2024-07-05', activity: 'Appointment with Dr. Kariuki' }
      ],
      upcomingAppointmentsDetails: [
        { date: '2024-07-15', time: '11:00 AM', doctor: 'Dr. Njoroge' }
      ],
      medicationSchedule: [
        { medication: 'Ibuprofen', dosage: '200 mg', time: '6:00 PM' }
      ],
      notifications: [
        { message: 'Upcoming appointment in 10 days.' }
      ],
      healthGoals: [
        { goal: 'Steps today', current: 3000, target: 8000 },
        { goal: 'Weight goal', current: 65, target: 63 }
      ],
      emergencyContact: '999',
      nearestHospital: 'Aga Khan University Hospital',
      personalizedMessage: "Achieng, remember to stay hydrated and take your medications on time. You're doing a fantastic job managing your health!"
    },
    {
      name: 'Wanjiku Karanja',
      loginId: 'patient3',
      password: 'wanjiku123',
      upcomingAppointments: 3,
      lastCheckup: '2024-06-20',
      bloodPressure: '115/75 mmHg',
      weight: '68 kg',
      recentActivities: [
        { date: '2024-06-25', activity: 'Appointment with Dr. Kilonzo' },
        { date: '2024-06-22', activity: 'Test results: MRI Scan' }
      ],
      upcomingAppointmentsDetails: [
        { date: '2024-07-05', time: '09:00 AM', doctor: 'Dr. Mutua' },
        { date: '2024-07-10', time: '03:00 PM', doctor: 'Dr. Mwikali' },
        { date: '2024-07-15', time: '01:00 PM', doctor: 'Dr. Ochieng' }
      ],
      medicationSchedule: [
        { medication: 'Paracetamol', dosage: '500 mg', time: '7:00 AM' }
      ],
      notifications: [
        { message: 'Your MRI results are available.' },
        { message: 'Upcoming appointment in 3 days.' }
      ],
      healthGoals: [
        { goal: 'Steps today', current: 4000, target: 9000 },
        { goal: 'Weight goal', current: 68, target: 65 }
      ],
      emergencyContact: '999',
      nearestHospital: 'Nairobi Hospital',
      personalizedMessage: "Keep pushing towards your goals, Wanjiku! You're making excellent progress."
    },
    {
      name: 'Kamau Karanja',
      loginId: 'patient4',
      password: 'kamau123',
      upcomingAppointments: 1,
      lastCheckup: '2024-05-10',
      bloodPressure: '130/85 mmHg',
      weight: '75 kg',
      recentActivities: [
        { date: '2024-05-12', activity: 'Appointment with Dr. Ngugi' }
      ],
      upcomingAppointmentsDetails: [
        { date: '2024-05-20', time: '02:00 PM', doctor: 'Dr. Mugo' }
      ],
      medicationSchedule: [
        { medication: 'Metformin', dosage: '500 mg', time: '8:00 AM' }
      ],
      notifications: [
        { message: 'Upcoming appointment in 5 days.' }
      ],
      healthGoals: [
        { goal: 'Steps today', current: 2000, target: 7000 },
        { goal: 'Weight goal', current: 75, target: 70 }
      ],
      emergencyContact: '999',
      nearestHospital: 'Mater Hospital',
      personalizedMessage: "Kamau, don't forget to take your medication and stay active. Every step counts!"
    },
    {
      name: 'Wanyama Mulwa',
      loginId: 'patient5',
      password: 'wanyama123',
      upcomingAppointments: 2,
      lastCheckup: '2024-04-15',
      bloodPressure: '125/80 mmHg',
      weight: '72 kg',
      recentActivities: [
        { date: '2024-04-18', activity: 'Test results: Blood Test' },
        { date: '2024-04-20', activity: 'Appointment with Dr. Kimani' }
      ],
      upcomingAppointmentsDetails: [
        { date: '2024-04-25', time: '10:00 AM', doctor: 'Dr. Muthoni' },
        { date: '2024-05-02', time: '01:00 PM', doctor: 'Dr. Wamalwa' }
      ],
      medicationSchedule: [
        { medication: 'Lisinopril', dosage: '20 mg', time: '9:00 AM' }
      ],
      notifications: [
        { message: 'Your blood test results are available.' },
        { message: 'Upcoming appointment in 3 days.' }
      ],
      healthGoals: [
        { goal: 'Steps today', current: 6000, target: 12000 },
        { goal: 'Weight goal', current: 72, target: 68 }
      ],
      emergencyContact: '999',
      nearestHospital: 'Karen Hospital',
      personalizedMessage: "Wanyama, keep up the great work with your steps and medication schedule. You're doing fantastic!"
    }
  ],
  healthTips: [
    { tip: 'Stay hydrated during summer!', link: '#' },
    { tip: 'New advances in diabetes treatment', link: '#' }
  ]
};

export default mockData;

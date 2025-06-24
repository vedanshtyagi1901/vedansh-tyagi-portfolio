import React from 'react';
import { FaMedal, FaTrophy, FaCertificate } from 'react-icons/fa';

const achievements = [
    {
        title: 'Secured AIR 14,000 in JEE Advanced 2024',
        description: 'Earned admission into an IIT on my first attempt through India’s toughest engineering entrance exam.',
        year: '2024',
        icon: <FaTrophy className="text-yellow-500 text-2xl" />,
    },
    {
        title: '99.62 Percentile in JEE Mains 2024',
        description: 'Ranked among the top 0.4% out of 1.4 million candidates in the national-level engineering entrance exam.',
        year: '2024',
        icon: <FaTrophy className="text-yellow-500 text-2xl" />,
    },
    {
        title: 'Scored 92% in Class 12 (CBSE)',
        description: 'Excelled in Class 12 board examinations with focus on Physics, Chemistry, and Mathematics.',
        year: '2024',
        icon: <FaCertificate className="text-yellow-500 text-2xl" />,
    },
    {
        title: 'Scored 96% in Class 10 (ICSE)',
        description: 'Achieved academic excellence in Class 10 board examinations with a strong foundation in core subjects.',
        year: '2022',
        icon: <FaCertificate className="text-yellow-500 text-2xl" />,
    },
];

function AchievementGrid() {
    return (
        <div className="bg-white py-12 sm:px-6 lg:px-8">
            <div className="h-20"></div>

            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
                <p className="mt-2 text-gray-600">Milestones that have shaped my journey.</p>
            </div>

            <div className="mt-10 space-y-4 max-w-3xl mx-auto">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className="flex items-start justify-between border rounded-lg px-4 py-4 bg-white shadow-sm"
                    >
                        <div className="flex gap-4 items-start">
                            <div>{achievement.icon}</div>
                            <div>
                                <h3 className="text-md font-semibold text-gray-900">{achievement.title}</h3>
                                <p className="text-sm text-gray-600">{achievement.description}</p>
                            </div>
                        </div>
                        <div className="text-sm font-medium text-gray-500 pl-4 whitespace-nowrap">{achievement.year}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AchievementGrid;

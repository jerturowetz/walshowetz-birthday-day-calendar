#!/usr/bin/env node

/**
 * Walshowetz Birthday Time Visualizer - Data Generator
 * Generates JSON data for birthday visualization from 2019 through 2099
 */

const people = [
  { name: 'Jeremy', birthDate: '1981-09-22', color: '#3B82F6' }, // Blue
  { name: 'Kate', birthDate: '1984-10-20', color: '#EF4444' },   // Red
  { name: 'Waldo', birthDate: '2019-06-23', color: '#10B981' },  // Green
  { name: 'Gus', birthDate: '2021-04-27', color: '#F59E0B' }     // Yellow
];

const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getWeekdayName(date) {
  return weekdayNames[date.getDay()];
}

function generateBirthdayData() {
  const allData = [];
  const startYear = 2019; // Start from 2019
  const endYear = 2099;

  people.forEach(person => {
    // Parse the birth date properly to avoid timezone issues
    const [birthYear, birthMonth, birthDay] = person.birthDate.split('-').map(Number);
    const month = birthMonth - 1; // Convert to 0-indexed month
    const day = birthDay;

    // Only include birthdays from 2019 onwards
    for (let year = Math.max(birthYear, startYear); year <= endYear; year++) {
      // Create birthday date for this year using UTC to avoid timezone issues
      const birthdayThisYear = new Date(year, month, day);
      // Ensure we're working with the correct date
      birthdayThisYear.setHours(12, 0, 0, 0);
      
      const dataPoint = {
        person: person.name,
        year: year,
        date: `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`, // YYYY-MM-DD format
        weekday: getWeekdayName(birthdayThisYear),
        weekdayShort: getWeekdayName(birthdayThisYear).substring(0, 3),
        isLeapYear: isLeapYear(year),
        color: person.color
      };
      
      allData.push(dataPoint);
    }
  });

  return allData;
}

// Generate the data
const birthdayData = generateBirthdayData();

// Generate leap years list for easy reference
const leapYears = [];
for (let year = 2019; year <= 2099; year++) {
  if (isLeapYear(year)) {
    leapYears.push(year);
  }
}

// Create the final data structure
const outputData = {
  birthdays: birthdayData,
  leapYears: leapYears,
  people: people.map(p => ({ name: p.name, color: p.color, birthDate: p.birthDate })),
  meta: {
    generatedAt: new Date().toISOString(),
    totalRecords: birthdayData.length,
    yearRange: [2019, 2099]
  }
};

// Output as JSON
console.log(JSON.stringify(outputData, null, 2));
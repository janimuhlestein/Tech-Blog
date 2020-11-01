//const { TestScheduler } = require("jest");
const { TestWatcher } = require('jest');
const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', ()=>{
    const date = new Date('2020-03-20 16:12:03');
    expect (format_date(date)).toBe('3/20/2020');
});

test('format_plural() returns appropriate plurals', ()=>{
   
    expect(format_plural('tiger', 2)).toBe('tigers');
    expect(format_plural('tiger', 1)).toBe('tiger');
});
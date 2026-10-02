// Booking terms from Alankarana's Booking Terms sheet.
export const bookingTerms = {
  heading: 'Booking & payment',
  leadTimes: {
    heading: 'How much notice we need',
    items: [
      { label: 'Small events', notice: '3 hours to 1 day', examples: 'Birthdays, house parties, baby showers, naming ceremonies, small or home engagements, anniversaries, festival setups, get-togethers, farewells' },
      { label: 'Rituals & ceremonies', notice: 'Minimum 3 days', examples: 'Haldi, mehendi, Annaprasana, Seemantham, Vratham, Pelli Koduku, housewarming / Griha Pravesh, puja functions' },
      { label: 'Large events', notice: 'Minimum 1 week', examples: 'Weddings, receptions, sangeet, banquet engagements, elaborate pre-wedding shoots, corporate events and conferences' },
    ],
    note: 'For small events the notice depends on how complex the decor is. For urgent requests we will do our best, depending on prop and material availability and the decor you want.',
  },
  payment: {
    heading: 'Payment',
    items: ['50% of the total amount at booking confirmation', 'The remaining 50% on completion of the event or decor setup'],
  },
}

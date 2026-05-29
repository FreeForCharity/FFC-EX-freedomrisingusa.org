export type FishFryDate = {
  label: string
  time: string
}

export type FishFryEvent = {
  title: string
  description: string
  location: string
  pickupTime: string
  dates: FishFryDate[]
  orderUrl: string
  orderLabel: string
  legionNote: string
}

export const fishFry: FishFryEvent = {
  title: 'Lent Friday Fish Fry',
  description:
    "Join us for our annual Lent Friday Fish Fry fundraising event! Enjoy delicious fish and chips while supporting Freedom Rising USA's mission.",
  location: 'American Legion Post 245, 1950 Pine Hall Rd Suite 90, State College, PA 16801',
  pickupTime: 'Fridays during Lent, 4:30 PM \u2013 5:30 PM',
  dates: [
    { label: 'Fri, Feb 20', time: '4:30 \u2013 5:30 PM' },
    { label: 'Fri, Feb 27', time: '4:30 \u2013 5:30 PM' },
    { label: 'Fri, Mar 6', time: '4:30 \u2013 5:30 PM' },
    { label: 'Fri, Mar 13', time: '4:30 \u2013 5:30 PM' },
    { label: 'Fri, Mar 20', time: '4:30 \u2013 5:30 PM' },
    { label: 'Fri, Mar 27', time: '4:30 \u2013 5:30 PM' },
    { label: 'Fri, Apr 3', time: '4:30 \u2013 5:30 PM' },
  ],
  orderUrl: 'https://www.zeffy.com/en-US/ticketing/lent-friday-fish-fry',
  orderLabel: 'Order Fish & Chips',
  legionNote:
    'American Legion Post 245 is open to members at regular hours throughout the week. The dates and times listed above are specifically for the Freedom Rising USA fundraiser pickup window. Pre-orders through Zeffy are picked up between 4:30 and 5:30 on the day ordered. Nonrefundable if not picked up.',
}

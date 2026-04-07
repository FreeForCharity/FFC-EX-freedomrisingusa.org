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
  title: 'Real Good BBQ',
  description:
    "Get your tickets for our Real Good BBQ fundraiser! Enjoy great food while supporting Freedom Rising USA's mission.",
  location: 'American Legion Post 245, 1950 Pine Hall Rd, State College, PA 16801',
  pickupTime: '',
  dates: [],
  orderUrl: 'https://www.zeffy.com/en-US/ticketing/reeeal-good-bbq',
  orderLabel: '🍖 BBQ Ticket Sales',
  legionNote: '',
}

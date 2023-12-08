interface Date{
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
}

export function formatDate(dateString:Date) {
  return new Date(`${dateString}`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

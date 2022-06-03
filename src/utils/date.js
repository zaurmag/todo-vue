// Date format
export function dateF (date, args = {}) {
  const baseOptions = {
    locale: 'ru-RU',
    format: 'date',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    ...args
  }

  const dateOptions = Object.keys(baseOptions).reduce((acc, key) => {
    if (key === 'year' || key === 'month' || key === 'day') {
      acc[key] = baseOptions[key]
    }

    return acc
  }, {})

  if (baseOptions.format === 'datetime') {
    dateOptions.hour = '2-digit'
    dateOptions.minute = 'numeric'
    dateOptions.second = 'numeric'
  }

  return new Intl.DateTimeFormat(args.locale, dateOptions)
    .format(new Date(date))
}

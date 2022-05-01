export const formatPhoneNumber = (phoneStr: string) =>
  phoneStr
    .split('')
    .map((v, i) => {
      if (i === 0 && phoneStr.length > 0) return '(' + v
      if (i === 2 && phoneStr.length > 3) return v + ') '
      if (i === 5 && phoneStr.length > 6) return v + '-'
      if (i === 7 && phoneStr.length > 8) return v + '-'
      return v
    })
    .join('')

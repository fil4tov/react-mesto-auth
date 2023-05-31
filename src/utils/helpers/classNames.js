export const classNames = (baseClasses, mods = {}) => {
  return [
    ...baseClasses.filter(Boolean),
    ...Object.keys(mods).filter(key => mods[key])
  ].join(' ')
}

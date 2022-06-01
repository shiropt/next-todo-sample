export const useUtils = () => {
  const createDate = (day: Date): string => {
    const date = new Date(day)
    return `${date.getMonth() + 1}/${date.getDate()}`
  }
  return { createDate }
}

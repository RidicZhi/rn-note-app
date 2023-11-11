export const formatDate = (id) => {
  const date = new Date(id)
  return date.toISOString().slice(0, 16).replace('T', ' ')
}

export const formatDate = (dateString: string | number) =>
  new Date(dateString).toLocaleDateString("de-DE");

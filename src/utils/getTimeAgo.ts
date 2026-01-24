export const getTimeAgo = (createdAt: string) => {
  const now = new Date();

  const voteDate = new Date(createdAt);

  const diffInMs = now.getTime() - voteDate.getTime();

  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "gerade eben";
  if (minutes < 60) return `vor ${minutes}min`;
  if (hours < 24) return `vor ${hours}h`;
  return `vor ${days} Tagen`;
};

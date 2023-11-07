import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getRelativeTime(postedAt) {
  const currentTime = Date.now();
  const timeDifference = currentTime - postedAt;
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(minutesAgo / 60);

  if (minutesAgo < 1) {
    return "just now";
  } else if (minutesAgo === 1) {
    return "1 minute ago";
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minutes ago`;
  } else if (hoursAgo === 1) {
    return "1 hour ago";
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  } else {
    const postedDate = new Date(postedAt);
    const day = postedDate.getDate();
    const month = postedDate.toLocaleString("default", { month: "short" });
    const year = postedDate.getFullYear();

    return `${day} ${month} ${year}`;
  }
}

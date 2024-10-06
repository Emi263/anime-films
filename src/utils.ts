export function convertDurationToHoursAndMinutes(duration: string) {

  const durationAsNumber = parseInt(duration);
  const hours = Math.floor(durationAsNumber / 60);
  const minutes = durationAsNumber % 60;

  return {
    hours,
    minutes
  }
}

export function getRating(rating: string) {

  const ratingAsNumber = parseInt(rating);

  return (ratingAsNumber * 5) / 100

}


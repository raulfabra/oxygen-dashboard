export function rateStarsAssessment(rate: number): string {
  let stars = "";
  let count = 1;
  while (count <= rate) {
    stars += "⭐";
    count++;
  }
  return stars;
}

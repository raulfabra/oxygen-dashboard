export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const hardCodeUser = {
  id: 100,
  email: "employer33@gmail.com",
  password: "1234",
};

export function rateStarsAssessment(rate: number): string {
  let stars = "";
  let count = 1;
  while (count <= rate) {
    stars += "⭐";
    count++;
  }
  return stars;
}

export const delay = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockUser = {
  id: 100,
  email: "employer33@gmail.com",
  password: "1234",
};

export const getFormatDate = (date: Date) => {
  const fecha = new Date(date);

  const day = String(fecha.getDate()).padStart(2, "0");
  const month = String(fecha.getMonth() + 1).padStart(2, "0");
  const year = fecha.getFullYear();

  const dateFormat = `${day}/${month}/${year}`;
  return dateFormat;
};

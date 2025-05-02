export const fetchHomeData = async () => {
  const response = await fetch('https://api.one-api.ir/digikala/v1/home/', {
    method: "GET",
    headers: {
      accept: "application/json",
      "one-api-token": "523926:679bd12de5e20", // توکن رو با توکن خودت جایگزین کن
    },
  });
  if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
  return response.json();
};







const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const translatorApi = async (code, text) => {
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${key}&format=text&target=${code}&q=${encodeURIComponent(
      text
    )}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await response.json();
};
export default translatorApi;

const allTxtColors = {
  "app-blue": "#1E90FF",
  "app-red": "#8B0000",
  "app-gray": "#A9A9A9",
  "app-yellow": "#FFF8DC",
  "app-violet": "#9932CC",
  "app-cyan": "#008B8B",
  "app-white": "#F8F8FF",
  "app-lavendar" : "#FFF0F5"
}
export default Index =>  {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", backgroundColor: allTxtColors["app-blue"] }}>
      <h1>Angelique Remix-App</h1>
    </div>
  );
}


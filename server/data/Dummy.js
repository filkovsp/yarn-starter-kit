export default () => {
  return {
    date: new Date().toLocaleDateString("fr-CA"),
    time: new Date().toLocaleTimeString("fr-FR"),
    status: "Ok"
  };
};
import ReactGA from "react-ga4";

// Confirme que este ID é o mesmo mostrado no Google Analytics
const MEASUREMENT_ID = "G-TJ24XCF9SK"; 

export const initGA = () => {
  if (!MEASUREMENT_ID) {
    console.warn("Google Analytics ID não está definido!");
    return;
  }
  
  try {
    console.log("Inicializando Google Analytics com ID:", MEASUREMENT_ID);
    ReactGA.initialize(MEASUREMENT_ID);
  } catch (error) {
    console.error("Erro ao inicializar o Google Analytics:", error);
  }
};

export const logPageView = () => {
  try {
    ReactGA.send("pageview");
    console.log("Evento de visualização de página enviado.");
  } catch (error) {
    console.error("Erro ao enviar evento de visualização de página:", error);
  }
};

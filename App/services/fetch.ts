const http = "http://192.168.0.5:3000/";

interface PropsPeticion {
    url:string,
    contenido :string,
    token:string,
    metodo:string
}

export const fetchData = async ({url, contenido , token,metodo}:PropsPeticion) => {
  try {
    const response = await fetch(http + url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
     Authorization: `Bearer ${token}`
    },
      body: JSON.stringify(contenido),
    });

    if (response.ok) {
      const json = await response.json();
      return { data: json.data, message: json.message };
    }
    const errorResponse = await response.json();
  
    return { data: null, message: "Error en la solicitud", errorResponse };
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return { data: null, message: "Error en la solicitud" };
  }
};
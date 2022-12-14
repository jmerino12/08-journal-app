export const fileUpload = async (file) => {
  //if (!file) throw new Error("El archivo no vino");
  if (!file) return null;
  const cloadUrl = "https://api.cloudinary.com/v1_1/cursos9901/image/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloadUrl, {
      method: "POST",
      body: formData,
    });
    if (!resp.ok) throw new Error("no se pudo subir imagen");
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    //console.log(error);
    return null
    //throw new Error(error);
  }
};

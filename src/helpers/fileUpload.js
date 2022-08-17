export const fileUpload = async (file) => {
  if (!file) throw new Error("El archivo no vino");
  const cloadUrl = "https://api.cloudinary.com/v1_1/cursos9901/image/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloadUrl, {
      method: "POST",
      body: formData,
    });
    console.log(resp);
    if (!resp.ok) throw new Error("no se pudo subir imagen");
    const cloudResp = await resp.json();
    console.log({ cloudResp });
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// @ts-nocheck
export const glbToBase64 = (glbFile: Blob): Promise<string> => {
  console.log("glbToBase64 called");
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(glbFile);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

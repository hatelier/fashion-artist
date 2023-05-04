// @ts-nocheck
export const glbToBase64 = (glbFile: Blob): Promise<string> => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result);
        };
        reader.readAsDataURL(blob);
    });
};

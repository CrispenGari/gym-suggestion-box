export const dataURLtoFile = (dataurl: string, filename: string) => {
  const arr = dataurl.split(",");
  const mime = (arr[0] as any).match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export const formatTimeStamp = (timestamp: any) => {
  const dateTime = new Date(timestamp?.seconds * 1000);
  const today = new Date().getDate();

  const year = dateTime.getFullYear();
  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  return today === date
    ? "today"
    : `${date.toString().length === 2 ? date : "0" + date.toString()}/${
        month.toString().length === 2 ? month : "0" + month.toString()
      }/${year}`;
};

export const getBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

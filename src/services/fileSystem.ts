import { Directory, Paths } from "expo-file-system";

export function getFileNameFromUrl(url: string) {
  return new URL(url).pathname.split("/").pop()!;
}

export  function getClassFolder(className: string) {
  const folder =  new Directory(Paths.document, `atikul/${className}`);
// Safety: folder না থাকলে create করবে
    if (!folder.exists) {
       folder.create({ idempotent: true, intermediates: true });
    }
  return folder;
}
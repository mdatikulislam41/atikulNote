import { Directory, Paths } from "expo-file-system";

export function getFileNameFromUrl(url: string) {
  return new URL(url).pathname.split("/").pop()!;
}

export function getClassFolder(className: string) {
  return new Directory(Paths.document, `atikul/${className}`);
}
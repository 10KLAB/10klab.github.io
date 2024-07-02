import "server-only";

import type { Locale } from "@/lib/locale";

const dictionaries: { [key in Locale]: () => Promise<any> } = {
  "en-US": () => import("./en.json").then((module) => module.default),
  "es-CO": () => import("./es.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<any> => {
  if (!dictionaries[locale]) {
    throw new Error(`Locale ${locale} not supported`);
  }
  return dictionaries[locale]();
};

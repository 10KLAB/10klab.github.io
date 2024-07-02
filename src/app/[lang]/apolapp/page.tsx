import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import type { Locale } from "@/lib/locale";
import { getDictionary } from "./dictionaries";

export async function generateStaticParams(): Promise<{ lang: Locale }[]> {
  return [{ lang: "en-US" }, { lang: "es-CO" }];
}

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return <div className="bg-white px-6 py-32 lg:px-8"></div>;
}

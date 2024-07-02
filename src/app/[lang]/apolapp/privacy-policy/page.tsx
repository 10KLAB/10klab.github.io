import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getDictionary } from "../dictionaries";

export async function generateStaticParams(): Promise<{ lang: Locale }[]> {
  return [{ lang: "en-US" }, { lang: "es-CO" }];
}

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { privacyPolicy } = await getDictionary(lang);
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/en-US/apolapp/privacy-policy"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            en-US <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/es-CO/apolapp/privacy-policy"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            es-CO <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="mt-6 text-base font-semibold leading-7 text-indigo-600">
          {privacyPolicy.title}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {privacyPolicy["1"]}
        </h1>
        <p className="mt-6">{privacyPolicy["1.1"]}</p>
        <ul role="list" className="mt-6 space-y-4 text-gray-600">
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>{privacyPolicy["1.1.1"]}</span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>{privacyPolicy["1.1.2"]}</span>
          </li>
        </ul>
        <p className="mt-6">
          <strong className="font-semibold text-gray-900">
            {privacyPolicy.questionsOrConcerns}
          </strong>{" "}
          {privacyPolicy["1.2"]}
        </p>
        <div className="mt-10">
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["2"]}
          </h2>
          <p className="mt-6">{privacyPolicy["2.1"]}</p>
          <p className="mt-6">{privacyPolicy["2.2"]}</p>
          <ul role="list" className="mt-6 space-y-4 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>{privacyPolicy["2.3"]}</span>
            </li>
          </ul>
          <p className="mt-6">
            <strong className="font-semibold text-gray-900">
              {privacyPolicy["2.4"]}
            </strong>{" "}
            {privacyPolicy["2.5"]}
          </p>
          <p className="mt-6">
            <strong className="font-semibold text-gray-900">
              {privacyPolicy["2.6"]}
            </strong>{" "}
            {privacyPolicy["2.7"]}
          </p>
          <ul role="list" className="mt-6 space-y-4 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>{privacyPolicy["2.8"]}</span>
            </li>
          </ul>
          <p className="mt-6">{privacyPolicy["2.9"]}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["3"]}
          </h2>
          <p className="mt-6">{privacyPolicy["3.1"]}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["4"]}
          </h2>
          <p className="mt-6">{privacyPolicy["4.1"]}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["5"]}
          </h2>
          <p className="mt-6">{privacyPolicy["5.1"]}</p>
          <p className="mt-6">{privacyPolicy["5.2"]}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["6"]}
          </h2>
          <p className="mt-6">{privacyPolicy["6.1"]}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["7"]}
          </h2>
          <p className="mt-6">{privacyPolicy["7.1"]}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["8"]}
          </h2>
          <p className="mt-6">{privacyPolicy["8.1"]}</p>
          <p className="mt-6">{privacyPolicy["8.2"]}</p>
          <p className="mt-6">{privacyPolicy["8.3"]}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["9"]}
          </h2>
          <p className="mt-6">{privacyPolicy["9.1"]}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["10"]}
          </h2>
          <p className="mt-6">{privacyPolicy["10.1"]}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {privacyPolicy["11"]}
          </h2>
          <p className="mt-6">{privacyPolicy["11.1"]}</p>
        </div>
      </div>
    </div>
  );
}

import { getRequestConfig } from "next-intl/server";

const locales = ["es", "en"] as const;

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = await locale;

  const safeLocale =
    currentLocale &&
    locales.includes(currentLocale as "es" | "en")
      ? currentLocale
      : "es";

  return {
    locale: safeLocale,
    messages: (
      await import(`@/messages/${safeLocale}.json`)
    ).default
  };
});
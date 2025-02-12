
import { useTranslation } from "react-i18next";

export default function NewsLetter() {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <div className="flex flex-col gap-1">
        <p className="text-gray-800 font-bold text-2xl">
          {t("subscribeTitle")}
        </p>
        <p className="text-gray-400 font-semibold">
          {t("subscribeDescription")}
        </p>
      </div>

      <form action="" className="w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3">
        <input
          type="email"
          className="w-full outline-none"
          required
          placeholder={t("emailPlaceholder")}
        />
        <button type="submit" className="bg-black text-white text-xs px-8 py-4">
          {t("subscribeButton")}
        </button>
      </form>
    </div>
  )
}

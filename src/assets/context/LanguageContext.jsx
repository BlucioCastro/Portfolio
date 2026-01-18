import { createContext, useContext, useState } from "react";
import en from "../locales/en";
import pt from "../locales/pt";

const LanguageContext = createContext();

const languages = { en, pt };

export function LanguageProvider({ children }) {
	const [lang, setLang] = useState("pt");

	return (
		<LanguageContext.Provider
			value={{
				lang,
				setLang,
				t: languages[lang],
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}
export function useLanguage() {
	return useContext(LanguageContext);
}

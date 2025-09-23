import { useState } from "react";

const SwitchLanguage = () => {
  const languages = [
    { code: "af", name: "Afrikaans" },
    { code: "am", name: "Amharic" },
    { code: "ar", name: "Arabic" },
    { code: "az", name: "Azerbaijani" },
    { code: "be", name: "Belarusian" },
    { code: "bg", name: "Bulgarian" },
    { code: "bn", name: "Bengali" },
    { code: "bs", name: "Bosnian" },
    { code: "ca", name: "Catalan" },
    { code: "cs", name: "Czech" },
    { code: "cy", name: "Welsh" },
    { code: "da", name: "Danish" },
    { code: "de", name: "German" },
    { code: "el", name: "Greek" },
    { code: "en", name: "English" },
    { code: "eo", name: "Esperanto" },
    { code: "es", name: "Spanish" },
    { code: "et", name: "Estonian" },
    { code: "eu", name: "Basque" },
    { code: "fa", name: "Persian" },
    { code: "fi", name: "Finnish" },
    { code: "fil", name: "Filipino" },
    { code: "fr", name: "French" },
    { code: "ga", name: "Irish" },
    { code: "gl", name: "Galician" },
    { code: "gu", name: "Gujarati" },
    { code: "he", name: "Hebrew" },
    { code: "hi", name: "Hindi" },
    { code: "hr", name: "Croatian" },
    { code: "hu", name: "Hungarian" },
    { code: "hy", name: "Armenian" },
    { code: "id", name: "Indonesian" },
    { code: "is", name: "Icelandic" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "jv", name: "Javanese" },
    { code: "ka", name: "Georgian" },
    { code: "kk", name: "Kazakh" },
    { code: "km", name: "Khmer" },
    { code: "kn", name: "Kannada" },
    { code: "ko", name: "Korean" },
    { code: "ky", name: "Kyrgyz" },
    { code: "lo", name: "Lao" },
    { code: "lt", name: "Lithuanian" },
    { code: "lv", name: "Latvian" },
    { code: "mk", name: "Macedonian" },
    { code: "ml", name: "Malayalam" },
    { code: "mn", name: "Mongolian" },
    { code: "mr", name: "Marathi" },
    { code: "ms", name: "Malay" },
    { code: "mt", name: "Maltese" },
    { code: "my", name: "Burmese" },
    { code: "ne", name: "Nepali" },
    { code: "nl", name: "Dutch" },
    { code: "no", name: "Norwegian" },
    { code: "pa", name: "Punjabi" },
    { code: "pl", name: "Polish" },
    { code: "ps", name: "Pashto" },
    { code: "pt", name: "Portuguese" },
    { code: "ro", name: "Romanian" },
    { code: "ru", name: "Russian" },
    { code: "si", name: "Sinhala" },
    { code: "sk", name: "Slovak" },
    { code: "sl", name: "Slovenian" },
    { code: "so", name: "Somali" },
    { code: "sq", name: "Albanian" },
    { code: "sr", name: "Serbian" },
    { code: "sv", name: "Swedish" },
    { code: "sw", name: "Swahili" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "th", name: "Thai" },
    { code: "tr", name: "Turkish" },
    { code: "uk", name: "Ukrainian" },
    { code: "ur", name: "Urdu" },
    { code: "uz", name: "Uzbek" },
    { code: "vi", name: "Vietnamese" },
    { code: "xh", name: "Xhosa" },
    { code: "yo", name: "Yoruba" },
    { code: "zh", name: "Chinese" },
    { code: "zu", name: "Zulu" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageSelect = (code) => {
    setSelectedLanguage(code);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ul className="space-y-3">
        {languages.map((language) => (
          <li
            key={language.code}
            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
              selectedLanguage === language.code
                ? "border-orange-400 bg-orange-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => handleLanguageSelect(language.code)}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm sm:text-base">{language.name}</span>
              <input
                type="radio"
                name="language"
                checked={selectedLanguage === language.code}
                onChange={() => handleLanguageSelect(language.code)}
                className={`w-4 h-4 text-orange-400 focus:ring-orange-400 ${
                  selectedLanguage === language.code ? "bg-orange-400" : ""
                }`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwitchLanguage;
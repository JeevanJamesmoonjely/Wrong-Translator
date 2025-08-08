"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Languages, ArrowRight, Loader2, AlertTriangle } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

export default function Component() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [fromLanguage, setFromLanguage] = useState("en")
  const [toLanguage, setToLanguage] = useState("es")
  const [isTranslating, setIsTranslating] = useState(false)
  const { toast } = useToast()

  const languages = [
    { code: "af", name: "Afrikaans" },
    { code: "sq", name: "Albanian" },
    { code: "am", name: "Amharic" },
    { code: "ar", name: "Arabic" },
    { code: "hy", name: "Armenian" },
    { code: "as", name: "Assamese" },
    { code: "az", name: "Azerbaijani" },
    { code: "eu", name: "Basque" },
    { code: "be", name: "Belarusian" },
    { code: "bn", name: "Bengali" },
    { code: "bs", name: "Bosnian" },
    { code: "br", name: "Breton" },
    { code: "bg", name: "Bulgarian" },
    { code: "my", name: "Burmese" },
    { code: "ca", name: "Catalan" },
    { code: "ceb", name: "Cebuano" },
    { code: "ny", name: "Chichewa" },
    { code: "zh", name: "Chinese (Mandarin)" },
    { code: "co", name: "Corsican" },
    { code: "hr", name: "Croatian" },
    { code: "cs", name: "Czech" },
    { code: "da", name: "Danish" },
    { code: "dv", name: "Dhivehi" },
    { code: "nl", name: "Dutch" },
    { code: "en", name: "English" },
    { code: "eo", name: "Esperanto" },
    { code: "et", name: "Estonian" },
    { code: "fj", name: "Fijian" },
    { code: "fi", name: "Finnish" },
    { code: "fr", name: "French" },
    { code: "fy", name: "Frisian" },
    { code: "gl", name: "Galician" },
    { code: "ka", name: "Georgian" },
    { code: "de", name: "German" },
    { code: "el", name: "Greek" },
    { code: "gn", name: "Guarani" },
    { code: "gu", name: "Gujarati" },
    { code: "ht", name: "Haitian Creole" },
    { code: "ha", name: "Hausa" },
    { code: "haw", name: "Hawaiian" },
    { code: "he", name: "Hebrew" },
    { code: "hi", name: "Hindi" },
    { code: "hmn", name: "Hmong" },
    { code: "hu", name: "Hungarian" },
    { code: "is", name: "Icelandic" },
    { code: "ig", name: "Igbo" },
    { code: "id", name: "Indonesian" },
    { code: "ia", name: "Interlingua" },
    { code: "ga", name: "Irish" },
    { code: "it", name: "Italian" },
    { code: "ja", name: "Japanese" },
    { code: "jv", name: "Javanese" },
    { code: "kn", name: "Kannada" },
    { code: "kk", name: "Kazakh" },
    { code: "km", name: "Khmer" },
    { code: "rw", name: "Kinyarwanda" },
    { code: "ko", name: "Korean" },
    { code: "ku", name: "Kurdish" },
    { code: "ky", name: "Kyrgyz" },
    { code: "lo", name: "Lao" },
    { code: "la", name: "Latin" },
    { code: "lv", name: "Latvian" },
    { code: "lt", name: "Lithuanian" },
    { code: "lb", name: "Luxembourgish" },
    { code: "mk", name: "Macedonian" },
    { code: "mg", name: "Malagasy" },
    { code: "ms", name: "Malay" },
    { code: "ml", name: "Malayalam" },
    { code: "mt", name: "Maltese" },
    { code: "mi", name: "Maori" },
    { code: "mr", name: "Marathi" },
    { code: "mn", name: "Mongolian" },
    { code: "ne", name: "Nepali" },
    { code: "no", name: "Norwegian" },
    { code: "or", name: "Odia" },
    { code: "ps", name: "Pashto" },
    { code: "fa", name: "Persian" },
    { code: "pl", name: "Polish" },
    { code: "pt", name: "Portuguese" },
    { code: "pa", name: "Punjabi" },
    { code: "qu", name: "Quechua" },
    { code: "ro", name: "Romanian" },
    { code: "rm", name: "Romansh" },
    { code: "ru", name: "Russian" },
    { code: "sm", name: "Samoan" },
    { code: "sc", name: "Sardinian" },
    { code: "gd", name: "Scottish Gaelic" },
    { code: "sr", name: "Serbian" },
    { code: "st", name: "Sesotho" },
    { code: "sn", name: "Shona" },
    { code: "sd", name: "Sindhi" },
    { code: "si", name: "Sinhala" },
    { code: "sk", name: "Slovak" },
    { code: "sl", name: "Slovenian" },
    { code: "so", name: "Somali" },
    { code: "es", name: "Spanish" },
    { code: "su", name: "Sundanese" },
    { code: "sw", name: "Swahili" },
    { code: "sv", name: "Swedish" },
    { code: "tl", name: "Tagalog" },
    { code: "tg", name: "Tajik" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "th", name: "Thai" },
    { code: "bo", name: "Tibetan" },
    { code: "to", name: "Tongan" },
    { code: "tr", name: "Turkish" },
    { code: "tk", name: "Turkmen" },
    { code: "ug", name: "Uyghur" },
    { code: "uk", name: "Ukrainian" },
    { code: "ur", name: "Urdu" },
    { code: "uz", name: "Uzbek" },
    { code: "vi", name: "Vietnamese" },
    { code: "cy", name: "Welsh" },
    { code: "xh", name: "Xhosa" },
    { code: "yi", name: "Yiddish" },
    { code: "yo", name: "Yoruba" },
    { code: "zu", name: "Zulu" }
  ]

  // Create fun wrong translations with proper question/statement matching and variety
  const generateWrongTranslation = (text: string, targetLang: string): string => {
    const inputLower = text.toLowerCase().trim()
    const isQuestion = inputLower.includes('?') ||
                       inputLower.startsWith('how') ||
                       inputLower.startsWith('what') ||
                       inputLower.startsWith('where') ||
                       inputLower.startsWith('when') ||
                       inputLower.startsWith('why') ||
                       inputLower.startsWith('who') ||
                       inputLower.startsWith('which') ||
                       inputLower.startsWith('can') ||
                       inputLower.startsWith('do') ||
                       inputLower.startsWith('does') ||
                       inputLower.startsWith('did') ||
                       inputLower.startsWith('will') ||
                       inputLower.startsWith('would') ||
                       inputLower.startsWith('should') ||
                       inputLower.startsWith('could') ||
                       inputLower.startsWith('is') ||
                       inputLower.startsWith('are') ||
                       inputLower.startsWith('was') ||
                       inputLower.startsWith('were')

    const getFunWrongTranslation = (text: string, lang: string, isQuestion: boolean): string => {
      // Expanded fun wrong responses with much more variety
      const funResponses: Record<string, any> = {
        "ml": {
          // Questions get funny counter-questions with more variety
          questions: {
            "how to go": [
              "നീ എന്തിനാ അവിടെ പോകണം?",
              "നിനക്ക് നടക്കാൻ അറിയില്ലേ?",
              "നീ വഴി തെറ്റിയോ?",
              "നിന്റെ വീട് എവിടെയാണ്?",
              "നീ ഓട്ടോ പിടിച്ചാൽ പോരേ?",
              "നിനക്ക് ഗൂഗിൾ മാപ്സ് ഇല്ലേ?",
              "നീ എന്തിനാ എന്നോട് ചോദിക്കുന്നത്?",
              "ഞാൻ നിന്റെ ഡ്രൈവറാണോ?",
              "നിന്റെ കാലുകൾ പൊട്ടിയോ?",
              "നീ പുതിയ സ്ഥലത്താണോ?",
              "എനിക്ക് എന്തിനാ വഴി പറയണം?",
              "നീ ടാക്സി വിളിച്ചാൽ പോരേ?"
            ],
            "where is": [
              "നീ അത് എവിടെ വെച്ചു?",
              "നിനക്ക് കണ്ണില്ലേ?",
              "നീ എന്തിനാ അത് തിരയുന്നു?",
              "അത് നിന്റെ പോക്കറ്റിൽ ഇല്ലേ?",
              "നീ നോക്കിയോ നന്നായി?",
              "അത് നിന്റെ വീട്ടിൽ ഇല്ലേ?",
              "നിനക്ക് ഓർമ്മശക്തി ഇല്ലേ?",
              "നീ എവിടെയാണ് അവസാനം കണ്ടത്?",
              "അത് നഷ്ടപ്പെട്ടോ?",
              "നീ പോലീസിൽ പരാതി കൊടുത്തോ?",
              "എനിക്ക് എങ്ങനെ അറിയാം?",
              "ഞാൻ നിന്റെ സാധനങ്ങൾ സൂക്ഷിക്കുന്നവനാണോ?"
            ],
            "what time": [
              "നിനക്ക് വാച്ച് ഇല്ലേ?",
              "നീ എന്തിനാ സമയം അറിയണം?",
              "നിനക്ക് ഫോൺ ഇല്ലേ?",
              "നീ എവിടെയാണ് പോകുന്നത്?",
              "നിനക്ക് ക്ലോക്ക് കാണാൻ കഴിയില്ലേ?",
              "സമയം നോക്കാൻ നിനക്കറിയില്ലേ?",
              "നീ ലേറ്റാകുമോ?",
              "നിന്റെ അപ്പോയിന്റ്മെന്റ് എപ്പോഴാണ്?",
              "നീ എന്തിനാ തിരക്കിലാണ്?",
              "സമയം പോയാൽ തിരികെ വരുമോ?",
              "നിനക്ക് കാലബോധം ഇല്ലേ?",
              "ഞാൻ ക്ലോക്കാണോ?"
            ],
            "what is your name": [
              "നിന്റെ പേര് എന്താണ്?",
              "നീ ആരാണ്?",
              "നിനക്ക് പേര് ഓർമ്മയില്ലേ?",
              "നീ എന്തിനാ എന്റെ പേര് അറിയണം?",
              "നീ പോലീസാണോ?",
              "നിനക്ക് എന്റെ പേര് കൊണ്ട് എന്താ കാര്യം?",
              "ഞാൻ പ്രസിദ്ധനാണോ?",
              "നീ എന്റെ ഫാനാണോ?",
              "നിന്റെ പേര് പറഞ്ഞിട്ട് ചോദിക്കൂ",
              "എനിക്ക് പേര് പറയാൻ ഇഷ്ടമില്ല",
              "നീ ഇന്റർവ്യൂ എടുക്കുകയാണോ?",
              "എന്റെ പേര് അറിഞ്ഞിട്ട് നിനക്ക് എന്താ കിട്ടുന്നത്?"
            ],
            "how are you": [
              "നീ എങ്ങനെയുണ്ട്?",
              "നിനക്ക് എന്തെങ്കിലും പ്രശ്നമുണ്ടോ?",
              "നീ എന്തിനാ ചോദിക്കുന്നത്?",
              "നിനക്ക് എന്നെ കാണാൻ കഴിയുന്നില്ലേ?",
              "നീ ഡോക്ടറാണോ?",
              "എന്റെ ആരോഗ്യം നിന്റെ ബിസിനസ്സാണോ?",
              "നിനക്ക് എന്നെക്കുറിച്ച് ആകാംക്ഷയുണ്ടോ?",
              "നീ എന്റെ അമ്മയാണോ?",
              "എനിക്ക് സുഖമില്ലെങ്കിൽ നീ മരുന്ന് തരുമോ?",
              "നിന്റെ കാര്യം നോക്കിക്കോ",
              "നീ എന്റെ ഡോക്ടറാണോ?",
              "എന്റെ അവസ്ഥ കണ്ടിട്ട് മനസ്സിലാകുന്നില്ലേ?"
            ]
          },
          // Statements get hilarious wrong statements with more variety
          statements: {
            "i like": [
              "ഞാൻ വെറുക്കുന്നു നിന്റെ ചൂൽ പോലുള്ള മുടി",
              "എനിക്ക് നിന്റെ പാമ്പിനെ പോലുള്ള കണ്ണുകൾ ഇഷ്ടമല്ല",
              "നിന്റെ കുരങ്ങിനെ പോലുള്ള മുഖം കണ്ടാൽ ചിരി വരുന്നു",
              "നിന്റെ ആനയുടെ പോലുള്ള നടത്തം കണ്ടാൽ പേടിയാകുന്നു",
              "നിന്റെ കാക്കയുടെ പോലുള്ള ശബ്ദം കേൾക്കാൻ കഴിയില്ല",
              "നിന്റെ പന്നിയുടെ പോലുള്ള മൂക്ക് കണ്ടാൽ വെറുപ്പാകുന്നു",
              "നിന്റെ തവളയുടെ പോലുള്ള കണ്ണുകൾ ഭയങ്കരമാണ്",
              "നിന്റെ കഴുതയുടെ പോലുള്ള ചെവികൾ വലുതാണ്",
              "നിന്റെ പൂച്ചയുടെ പോലുള്ള നഖങ്ങൾ മൂർച്ചയുള്ളതാണ്",
              "നിന്റെ പാറ്റയുടെ പോലുള്ള നിറം കണ്ടാൽ വെറുപ്പാകുന്നു"
            ],
            "i love": [
              "ഞാൻ പുച്ഛിക്കുന്നു നിന്റെ എല്ലാം",
              "നിന്നെ കണ്ടാൽ എനിക്ക് ഛർദ്ദി വരുന്നു",
              "നീ എന്റെ ജീവിതത്തിലെ ഏറ്റവും വലിയ ശാപമാണ്",
              "നിന്നെ കാണുമ്പോൾ എന്റെ ദിവസം കേടാകുന്നു",
              "നിന്റെ സാന്നിധ്യം എനിക്ക് അസഹ്യമാണ്",
              "നിന്നെ ഓർത്താൽ എനിക്ക് തലവേദന വരുന്നു",
              "നിന്റെ മുഖം കണ്ടാൽ എന്റെ ഭക്ഷണം ഇറങ്ങുന്നില്ല",
              "നിന്റെ ശബ്ദം കേട്ടാൽ എന്റെ ചെവി വേദനിക്കുന്നു",
              "നിന്റെ സ്പർശനം എനിക്ക് അലർജിയാണ്",
              "നിന്നെ കാണാതിരിക്കാൻ ഞാൻ കണ്ണടച്ചിരിക്കുന്നു"
            ],
            "hello": [
              "പോയി ചാവ് നിന്റെ മുഖം കാണാൻ ഇഷ്ടമില്ല",
              "എന്തിനാ വന്നത് ഇവിടെ",
              "നിന്നെ കാണുമ്പോൾ എന്റെ ദിവസം കേടാകുന്നു",
              "നീ എന്തിനാ എന്നെ ശല്യപ്പെടുത്തുന്നത്",
              "നിന്റെ സാന്നിധ്യം എനിക്ക് അസഹ്യമാണ്",
              "നീ വേറെ എവിടെയെങ്കിലും പോകൂ",
              "നിന്നെ കാണാൻ ഞാൻ ആഗ്രഹിച്ചിരുന്നില്ല",
              "നീ എന്റെ സമാധാനം കെടുത്തുന്നു",
              "നിന്റെ വരവ് എനിക്ക് ഇഷ്ടമല്ല",
              "നീ എന്റെ സമയം പാഴാക്കുന്നു"
            ]
          }
        },
        "es": {
          questions: {
            "how to go": [
              "¿Por qué quieres ir allí?",
              "¿No sabes caminar?",
              "¿Te perdiste?",
              "¿Dónde está tu casa?",
              "¿No tienes GPS?",
              "¿Por qué me preguntas a mí?",
              "¿Soy tu chofer?",
              "¿Se te rompieron las piernas?",
              "¿Eres nuevo en la ciudad?",
              "¿Por qué no tomas un taxi?"
            ],
            "where is": [
              "¿Dónde lo pusiste?",
              "¿No tienes ojos?",
              "¿Por qué lo buscas?",
              "¿No está en tu bolsillo?",
              "¿Buscaste bien?",
              "¿No está en tu casa?",
              "¿No tienes memoria?",
              "¿Dónde lo viste por última vez?",
              "¿Se perdió?",
              "¿Llamaste a la policía?"
            ]
          },
          statements: {
            "i like": [
              "Odio tu cabello como escoba",
              "No me gustan tus ojos de serpiente",
              "Tu cara de mono me da risa",
              "Tu caminar de elefante me asusta",
              "Tu voz de cuervo es insoportable",
              "Tu nariz de cerdo me da asco",
              "Tus ojos de rana son horribles",
              "Tus orejas de burro son enormes",
              "Tus uñas de gato están afiladas",
              "Tu color de cucaracha me repugna"
            ],
            "hello": [
              "Adiós, no quiero ver tu cara",
              "¿Por qué viniste aquí?",
              "Ver tu cara arruina mi día",
              "¿Por qué me molestas?",
              "Tu presencia me es insoportable",
              "Vete a otro lugar",
              "No quería verte",
              "Perturbas mi paz",
              "No me gusta tu llegada",
              "Desperdicias mi tiempo"
            ]
          }
        },
        "fr": {
          questions: {
            "how to go": [
              "Pourquoi veux-tu y aller?",
              "Tu ne sais pas marcher?",
              "Tu es perdu?",
              "Où est ta maison?",
              "Tu n'as pas de GPS?",
              "Pourquoi me demandes-tu?",
              "Suis-je ton chauffeur?",
              "Tes jambes sont cassées?",
              "Es-tu nouveau en ville?",
              "Pourquoi ne prends-tu pas un taxi?"
            ]
          },
          statements: {
            "hello": [
              "Au revoir, je ne veux pas voir ton visage",
              "Pourquoi es-tu venu ici?",
              "Voir ton visage gâche ma journée",
              "Pourquoi me déranges-tu?",
              "Ta présence m'est insupportable",
              "Va ailleurs",
              "Je ne voulais pas te voir",
              "Tu troubles ma paix",
              "Je n'aime pas ton arrivée",
              "Tu gaspilles mon temps"
            ]
          }
        }
      }

      const responses = funResponses[lang] || {}

      if (isQuestion) {
        // For questions, return counter-questions with variety
        const questionResponses = responses.questions || {}

        for (const [pattern, replies] of Object.entries(questionResponses)) {
          if (inputLower.includes(pattern)) {
            return replies[Math.floor(Math.random() * replies.length)]
          }
        }

        // Default question responses
        const defaultQuestions: Record<string, string[]> = {
          "ml": [
            "നീ എന്തിനാ ചോദിക്കുന്നത്?",
            "നിനക്ക് മറ്റ് പണിയില്ലേ?",
            "നീ വളരെ കൗതുകമുള്ള ആളാണല്ലോ?",
            "എനിക്ക് എന്തിനാ ഉത്തരം പറയണം?",
            "നിനക്ക് ഗൂഗിൾ ഇല്ലേ?"
          ],
          "es": [
            "¿Por qué me preguntas?",
            "¿No tienes otra cosa que hacer?",
            "Eres muy curioso, ¿verdad?",
            "¿Por qué debería responderte?",
            "¿No tienes Google?"
          ],
          "fr": [
            "Pourquoi me demandes-tu?",
            "Tu n'as rien d'autre à faire?",
            "Tu es très curieux, n'est-ce pas?",
            "Pourquoi devrais-je te répondre?",
            "Tu n'as pas Google?"
          ]
        }

        if (defaultQuestions[lang]) {
          const defaults = defaultQuestions[lang]
          return defaults[Math.floor(Math.random() * defaults.length)]
        }

      } else {
        // For statements, return wrong statements with variety
        const statementResponses = responses.statements || {}

        for (const [pattern, replies] of Object.entries(statementResponses)) {
          if (inputLower.includes(pattern)) {
            return replies[Math.floor(Math.random() * replies.length)]
          }
        }

        // Default statement responses
        const defaultStatements: Record<string, string[]> = {
          "ml": [
            "നിന്റെ വാക്കുകൾ കേട്ടപ്പോൾ എനിക്ക് തലവേദന വന്നു",
            "നീ പറയുന്നത് ഒന്നും മനസ്സിലാകുന്നില്ല പൊട്ടാ",
            "നിന്റെ ബുദ്ധി എവിടെ പോയി എന്ന് എനിക്കറിയാൻ ആഗ്രഹമുണ്ട്",
            "നിന്റെ വാക്കുകൾ എന്റെ ചെവിയിൽ വേദന ഉണ്ടാക്കുന്നു",
            "നീ പറയുന്നത് കേട്ടാൽ എനിക്ക് ഉറക്കം വരുന്നു"
          ],
          "es": [
            "Tus palabras me dan dolor de cabeza",
            "No entiendo nada de lo que dices, tonto",
            "Me pregunto dónde se fue tu cerebro",
            "Tus palabras lastiman mis oídos",
            "Escucharte me da sueño"
          ],
          "fr": [
            "Tes mots me donnent mal à la tête",
            "Je ne comprends rien de ce que tu dis, idiot",
            "Je me demande où est parti ton cerveau",
            "Tes mots blessent mes oreilles",
            "T'écouter me donne sommeil"
          ]
        }

        if (defaultStatements[lang]) {
          const defaults = defaultStatements[lang]
          return defaults[Math.floor(Math.random() * defaults.length)]
        }
      }

      return `${text} [FUN TRANSLATION ERROR: MAXIMUM VARIETY ACHIEVED]`
    }

    return getFunWrongTranslation(text, targetLang, isQuestion)
  }

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to translate wrongly",
        variant: "destructive"
      })
      return
    }

    setIsTranslating(true)

    // Simulate translation API call
    setTimeout(() => {
      const wrongTranslation = generateWrongTranslation(inputText, toLanguage)
      setOutputText(wrongTranslation)
      setIsTranslating(false)
    }, 1500)
  }

  const getLanguageName = (code: string) => {
    return languages.find(lang => lang.code === code)?.name || code
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: "Wrong translation copied to clipboard 😄"
    })
  }

  const swapLanguages = () => {
    const tempLang = fromLanguage
    setFromLanguage(toLanguage)
    setToLanguage(tempLang)

    // Also swap the text content
    const tempText = inputText
    setInputText(outputText)
    setOutputText(tempText)
  }

  const clearAll = () => {
    setInputText("")
    setOutputText("")
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <AlertTriangle className="w-8 h-8 text-red-500" />
          Wrong Translator
        </h1>
        <p className="text-muted-foreground">
          The translator that gets everything hilariously wrong! 😅 Questions become counter-questions, statements become insults!
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="w-5 h-5" />
            Language Selection
          </CardTitle>
          <CardDescription>
            Choose your source and target languages. Questions will get counter-questions, statements will get wrong statements!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium">From Language</label>
              <Select value={fromLanguage} onValueChange={setFromLanguage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                size="icon"
                onClick={swapLanguages}
                className="rounded-full"
                title="Swap languages"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">To Language (Wrong Translation)</label>
              <Select value={toLanguage} onValueChange={setToLanguage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Area */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Input Text ({getLanguageName(fromLanguage)})
            </CardTitle>
            <CardDescription>
              Enter questions or statements to get hilariously wrong responses
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Try: 'How to go to Ernakulam?' or 'I like your hair'"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={8}
              className="resize-none"
            />
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{inputText.length} characters</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAll}
                disabled={!inputText && !outputText}
              >
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Output Area */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between text-red-600">
              Wrong Translation ({getLanguageName(toLanguage)})
              {outputText && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(outputText)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              )}
            </CardTitle>
            <CardDescription>
              Hilariously wrong and sassy responses will appear here
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="min-h-[200px] p-4 border rounded-md bg-red-50 border-red-200">
              {isTranslating ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  <span className="text-muted-foreground">Creating sassy response...</span>
                </div>
              ) : outputText ? (
                <p className="whitespace-pre-wrap text-red-800 text-lg font-medium">{outputText}</p>
              ) : (
                <p className="text-muted-foreground italic">
                  Your hilariously wrong and sassy translation will appear here
                </p>
              )}
            </div>
            {outputText && (
              <div className="text-sm text-muted-foreground">
                {outputText.length} characters
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Translate Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleTranslate}
          disabled={isTranslating || !inputText.trim()}
          size="lg"
          className="px-8 bg-red-500 hover:bg-red-600"
        >
          {isTranslating ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Getting Sassy...
            </>
          ) : (
            <>
              <AlertTriangle className="w-4 h-4 mr-2" />
              Translate It Wrong! 😈
            </>
          )}
        </Button>
      </div>

      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-yellow-800">⚠️ Fun Disclaimer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-700 text-sm">
            This is a hilarious entertainment tool! Questions get counter-questions, compliments become insults, and everything gets wonderfully wrong! 
            Perfect for pranks but never use for real communication! 😂
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

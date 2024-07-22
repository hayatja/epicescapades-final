from deep_translator import GoogleTranslator

while True:
    s = input("(:q to exit): ")
    if s == ":q":
        break

    print(s.lower())

    translated = GoogleTranslator(source="en", target="fr").translate(s)
    print(translated)

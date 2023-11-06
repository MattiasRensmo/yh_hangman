Krav på funktionalitet

- Du ska bygga det klassiska spelet hänga gubbe.
- Det ska vara gjort med HTML/CSS/Javascript
- Användaren ska kunna mata in med tangentbordet bokstäver
- Användaren ska kunna se vilka bokstäver den gissar rätt på och var i ordet de hamnar
- Vid varje fel ska en del av gubben visas
- Ifall användaren gissar på rätt ord så ska en ”Du vann”-skärm visas med en fråga om man vill spela igen,
- Ifall användaren inte hinner gissa rätt ska en ”Du förlorade”-skärm visas med det rätta ordet och en fråga om man vill spela igen.
- Du ska enbart kunna gissa på en bokstav i taget.
- Ordet får inte vara hårdkodat i Javascript-filen när den ska jämföras. Förslagsvis kan ordet slumpas från en array med ord.

Betygskriterier

Godkänt

    Alla krav på funktionalitet är uppfyllda och följs.
    Att SVG:en som bifogas i HTML:en används
    Spelet fungerar med inga fel i konsolen i developer tools.
    Vettiga namn på variabler och funktioner på engelska.

### Stilguide

https://www.figma.com/file/sOfimNogFYh4UpOaoWA9QG/Hangman?type=design&node-id=0%3A1&mode=design&t=EQ0P34IdWq5PQ3Kp-1

Vi använder BEM

Vi hämtar element från dom med queryselector(i) o lägger som global const

#### Tre delar i HTML

main flex column

- Gubben (Mattias)
  Raden (Philip)
  Bokstäverna (Ege)

### Setup av program (Mattias)

En array (ordlista) med typ 100 olika ord.

Väljer ett ord slumpmässitgt
Rita ut lika många streck som bokstäver i ordet

### En startsida

Knapp "Start the game"
ev. med fräck bakåtanimation

### Att gissa på en bokstav (Mattias)

Man kan klicka på varje bokstav för att gissa ELLER så kan man skriva på tangentbordet
Om vi har en textruta - ge error om man skriver mer än en bokstav - eller om ngt annat än en bokstav
Om vi har event listner, kräv att det går lite tid mellan trycken...

### När man gissar på en bokstav (Ege)

Kolla om man gissat på bokstaven innan - isåfall gör inget (Detta råkade jag redan göra //Mattias)
Kolla om bokstaven finns i ordet - isåfall skriv in den på raderna - Annars kör "Fel bokstav"
Om alla bokstaäver är hittade - du har vunnit ruta (retry)

### Om fel bokstav (Philip)

Gör bokstaven röd
Rita ännu en kroppsdel på gubben
Om alla kroppsdelar ritade - du har förlorat ruta (retry)

### Visa ruta

Med vinna/Förloa meddelande + retry

### Eventuellt

- Väljare för svårighetsgrad
- Välja språk-funktion
- Dark-mode / light mode

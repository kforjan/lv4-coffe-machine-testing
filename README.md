# Vježba 4: Pouzdanost i testiranje programske podrške

Koristeni library-i za testiranje su Chai, Mocha i NYC (umjesto Istambula)

Klasa CoffeMachine sastoji se od 3 atributa - coffeAmount, waterAmount i powerStatus. Takoder sadrzi 4 metode - turnMachineOn(), turnMachineOff(), refill() i makeCoffe()

Unit testovima ispitane su sve metode i provjeren je tip za svaki atribut.

Prvi testovi su provjera tipa za svaki od atributa. coffeAmount i water Amoun su brojevi, a powerStatus je bool vrijednost.
Nakon toga slijede testovi koji ispituju ponasanje funkcije turnMachineOn() u slucaju da je uredaj iskljucen i u slucaju da je uredaj ukljucen. Ako je uredaj iskljucen potrebno je false vrijednost powerStatus-a promjeniti na true. Ako je uredaj vec ukljucen onda je potrebno ispisati poruku upozorenja.
Iduci test je test funkcije turnMacineOff() koja se ponasa isto kao funkcija turnMachineOn() samo sto vrsi zamjenu powerStatusa s true na false i ispisuje poruku ako je uredaj vec ugasen.
Test funkcije refill() provjerava je li funkciji predan valjani argument. Funkcija vraca code 200 u slucaju da je predana numericka vrijednost, a ako je predan krivi tip podatka funkcija rezultira errorom.
makeCofee() funkcija je testirana na nacin da se provjeravaju slucajevi kada je u uredaju dovoljno sastojaka za izradu kave i kada je kolicina nedovoljna. U slucaju da nema dovoljno sastojaka ispisuje se poruka, a ako ima coffeAmount i waterAmount se smanjuje za vrijednost koja je potrebna za izradu kave.

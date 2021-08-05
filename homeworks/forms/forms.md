# Forms

**Jest to drugie z 3 zadań domowych, które pojawią się w trakcie kursu. Możesz z niego uzyskać 30 pkt.**

W tym katalogu znajdziesz:
- plik `index.html` z podlinkowanym skryptem `forms.js`

Twoja aplikacja będzie sprawdzana poprzez uruchomienie pliku `index.html` z użyciem dodatku LiveServer w VSCode.

**Każdy krok powinien zostać zakończony commitem z opisem zrealizowanego zadania. Jeżeli zrealizujesz wszystkie kroki na raz, to punkty nie zostaną naliczone.**

Zadanie zrealizuj w tym repozytorium na gałęzi `homework/forms-[twój login na githubie]`, np. `homework/forms-cytrowski`.

**UWAGA** Przed przystąpieniem do zadania przełącz się na gałąź `main`, wykonaj `git pull`, żeby upewnić się, że posiadasz wszystkie zmiany z gałęzi `main`. **NIE KONTYNUUJ PRACY NA GAŁĘZI Z POPRZEDNIEGO ZADANIA**

Po zakończeniu upewnij się, że Twoje zmiany są widoczne na githubie i stwórz pull request do gałęzi `main`.

**Za zrealizowanie zadania przed najbliższą tygodniową przerwą w kursie przewidziane jest 10 punktów dodatkowych, dzięki którym będzie można pominąć końcowe kroki ostatniego zadania domowego. Nie zmienia to faktu, że z zadań domowych można uzyskać maksymalnie 30% wszystkich punktów potrzebnych do zaliczenia kursu.**

## Krok 1

Przygotuj w pliku `index.html` formularz rejestracyjny, w którym będzie można podać adres e-mail oraz hasło.
Spraw, żeby w momencie wysłania formularza adres e-mail oraz hasło pojawiły się na konsoli przeglądarki.
Strona nie powinna ulec przeładowaniu.
Przycisk w formularzu powinien mieć etykitę: "zarejestruj"

Punkty do zdobycia: 2

## Krok 2

Niech po wysłaniu formularza zniknie on z ekranu, a w jego miejscu pojawi się tekst informujący o tym, że użytkownik został automatycznie zalogowany.
Niech na ekranie wyświetli się adres e-mail użyty w trakcie rejestracji.

Punkty do zdobycia: 2

## Krok 3

Spraw, żeby po zalogowaniu użytkownika i przeładowaniu strony formularz się nie pojawiał i żeby na ekranie dalej widoczny był e-mail zalogowanego użytkownika.
Jeżeli otworzymy naszą stronę w nowej karcie przeglądarki, to użytkownik powinien być w niej **WYLOGOWANY**.

Punkty do zdobycia: 2

## Krok 4

Przygotuj przycisk z etykietą "wyloguj" i spraw, żeby bo jego kliknięciu na ekran wrócił formularz rejestracji.

Punkty do zdobycia: 2

## Krok 5

Spraw, żeby po zalogowaniu, oprócz informacji określonych w poprzednich krokach, na ekranie pojawił się formularz z polem `<textarea>`, w którym użytkownik będzie mógł sporządzić notatkę.
Niech po zapisie formularza notatka pojawi się pod nim na ekranie.
Niech formularz zezwala na utworzenie wielu notatek.
Niech notatki wyświetlają się w kolejności od najnowszych do najstarszych

Punkty do zdobycia: 2

## Krok 6

Niech notatki będą zapamiętane per konto użytkownika w pamięci przeglądarki.
Po wylogowaniu i ponownym zalogowaniu się na dane konto powinien móc zobaczyć uprzednio utworzone przez siebie notatki.

Punkty do zdobycia: 2

## Krok 7

W formularzu rejestracji dodaj drugi przycisk: "zaloguj".
Niech kliknięcie w pierwszy przycisk ("zarejestruj"), gdy użytkownik wprowadzi adres e-mail, który już został zarejestrowany, spowoduje wyświetlenie komunikatu o tym, że takie konto już istnieje.
Niech przycisk "zaloguj" pozwala na zalogowanie się na to konto, pod warunkiem, że podamy hasło podane przy rejestracji.

Punkty do zdobycia: 4

## Krok 8

Załóż projekt na Firebase, włącz obsługę rejestracji za pomocą adresu e-mail i hasła i spraw, żeby logowanie i rejestracja odbywały się za pośrednictwem serwera.

Punkty do zdobycia: 4

## Krok 9

Spraw, żeby notatki zapisywały się w bazie Firestore w kolekcjach skojarzonych z kontem użytkownika.
Po zalogowaniu się ponownie na swoje konto użytkownik powinien zobaczyć swoje notatki

Punkty do zdobycia: 4

## Krok 10

Dodaj wyszukiwarkę notatek.
Niech składa się ona z pola tekstowego i przycisku "szukaj".
Niech lista notatek, w momencie wysłania formularza, zawęża się do tych, w których treści występuje wprowadzony w formularzu ciąg znaków.

Punkty do zdobycia: 6
# Slider

**Jest to pierwsze z 3 zadań domowych, które pojawią się w trakcie kursu. Możesz z niego uzyskać 10*2 = 20pkt + 4pkt dodatkowe.**

W tym katalogu znajdziesz:
-  plik `photos.json` z danymi potrzebnymi do wyświetlenia zdjęć na stronie
- plik `index.html` z podlinkowanym plikiem `slider.js` oraz elementem posiadającym `id="slider"`

Twoja aplikacja będzie sprawdzana poprzez uruchomienie pliku `index.html` z użyciem dodatku LiveServer w VSCode.

**Każdy krok powinien zostać zakończony commitem z opisem zrealizowanego zadania. Jeżeli zrealizujesz wszystkie kroki na raz, to punkty nie zostaną naliczone.**

Zadanie zrealizuj w tym repozytorium na gałęzi `homework/slider-[twój login na githubie]`, np. `homework/slider-cytrowski`.

Po zakończeniu upewnij się, że Twoje zmiany są widoczne na githubie i stwórz pull request do gałęzi `main`.

**Za zrealizowanie zadania do najbliższego poniedziałku przewidziane są 4 punkty dodatkowe, dzięki którym będzie można pominąć końcowe kroki kolejnych zadań domowych. Nie zmienia to faktu, że z zadań domowych można uzyskać maksymalnie 30% wszystkich punktów potrzebnych do zaliczenia kursu.**

## Krok 1

Używając funkcji `fetch` pobierz informacje o zdjęciach, a następnie wyświetl je wszystkie na stronie, używając znaczników `img`.

Punkty do zdobycia: 2

## Krok 2

Niech zdjęcia wyświetlają się jedno pod drugim i niech pod każdym z nich pojawią się paragraf `<p>` zawierający informację o autorze oraz opis zdjęcia.

Punkty do zdobycia: 2

## Krok 3

Ukryj wszystkie zdjęcia, a następnie spraw, żeby na stronie wyświetlało się tylko jedno z nich (z podpisem z kroku 2), wyśrodkowane w pionie i poziomie.

Punkty do zdobycia: 2

## Krok 4

Na prawo od zdjęcia wyświetl przycisk z etykietą "następne".
Spraw, żeby po kliknięcie w ten przycisk pierwsze zdjęcie znikało ze strony i zamiast niego pojawiło się drugie (nie zapomnij o podpisie).

Punkty do zdobycia: 2

## Krok 5

Spraw, żeby korzystając z przycisku "następne" można było przejść po wszystkich zdjęciach aż do ostatniego.
Niech w momencie pojawienia się ostatniego zdjęcia przycisk zostanie zdezaktywowany (użyj atrybutu `disabled`).

Punkty do zdobycia: 2

## Krok 6

Spraw, żeby na lewo od zdjęcia pojawił się przycisk "poprzednie".
Jeżeli aktualnie wyświetlane jest pierwsze zdjęcie, to przycisk ten powinien posiadać atrybut `disabled`.

Punkty do zdobycia: 2

## Krok 7

Niech przycisk "poprzednie" pozwala na wyświetlenie poprzedniego zdjęcia, jeżeli aktualnie wyświetlane jest inne zdjęcie.
Niech w momencie powrotu do pierwszego zdjęcia przycisk otrzyma ponownie atrybut `disabled`.

Punkty do zdobycia: 2

## Krok 8

Pod zdjęciem wyświetl przyciski z numerami wszystkich zdjęć.
Niech po kliknięciu w wybrany przycisk pojawi się zdjęcie z nim skojarzone.
Jeżeli klikniemy pierwsze i ostatnie zdjęcie, to przyciski "poprzednie" i "następne" powinny otrzymywać atrybuty `disabled` zgodnie z tym, co zaimplementowaliśmy w poprzednich krokach.

Punkty do zdobycia: 2

## Krok 9

Spraw, żeby w momencie załadowania strony startował interwał, który co 3 sekundy wyświetli kolejne zdjęcie z kolekcji.

Wszystkie dotychczasowe elementy powinny dalej działać zgodnie z opisami z poprzednich kroków (przyciski "poprzednie", "następne" oraz przyciski z numerami zdjęć).

Punkty do zdobycia: 2

## Krok 10

Niech interwał zostanie zatrzymany w momencie, gdy użytkownik wejdzie w interakcję z którymkolwiek z przycisków lub gdy kliknie w zdjęcie.

Punkty do zdobycia: 2
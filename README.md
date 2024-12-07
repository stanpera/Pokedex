I. URUCHOMIENIE APLIKACJI:
WYMAGANIA: node.js w wersji 16+, npm w wersji 8+, przeglądarka wspierająca HTML5

1. Pobierz projekt: "git clone https://github.com/stanpera/Pokedex.git"
2. Przejdź do katalogu: "cd pokedex-project-stan-pera"
3. Zainstaluj menadżer pakietów: "npm install"
4. Uruchom warstwę frontendową: "npm run dev"
5. Uruchom json-server: "npm run db" (http://localhost:3000/)

II. FUNKCJONALNOŚCI APLIKACJI:
Aplikacja Pokedex bazuje na zwenętrznym API "https://pokeapi.co/". Jest symulacją gry karcianej i oferuje szereg funkcjonalności dla użytkownika.

1. REJESTRACJA UŻYTKOWNIKA - osoba korzystająca z aplikacji ma możliwość zarejestrowania się poprzez wypełnienie formularza rejestracyjnego. Dane użytkownika oraz hasło zostaje zapisane w pliku db.json co umożliwia późniejsze zalogowanie się użytkownika.
2. LOGOWANIE UŻYTKOWNIKA - Korzystanie z aplikacji jako zalogowany użytkownik pozwala na używanie wszystkich funkcjonalności (niezarejestrowany użytkownik może przeglądać wyłącznie karty pokemonów pobrane z zewnętrznego API).
3. NAWIGACJA - została stworzona przy wykorzystaniu react-router-dom co umożliwia przekierowywanie użytkownika na odpowiednie warstw bez konieczności przeładowywania całej strony. Logo aplikacji przekierowuje użytkownika na stronę główną. W zalężności, czy użytkownik jest zalogowany lub też nie, widok przycisków będzie się od siebie różnił. Dodatkowo nad przyciskami znajduje się switcher zmiany motywu z jasnego na ciemny, oraz po zalogowaniu nazwa użytkownika. Informacje takie jak nazwa użytkownika aktualny motyw strony, czy informacja o zalogwaniu użytkownika są przechowywane w localStorage, dzięki czemu nawet po przeładowaniu strony dane nie zostają utracone.
4. STRONA GŁÓWNA - na stronie głównej znajdują się karty pokemonów (15 na każdej stronie). Zalogowany użytkownik będzie widział pokemony z ich aktualnymi statystykami i odbytymi walkami (wygrane i przegrane), które mogą się zmieniać po odbytych walkach w arenie lub edycji pokemona. Pierwsze 10 stron pokemonów jest powiązane z zewnętrznym API oraz porównaniem ich odpowiedników w pliku db.json (o ile zaszły modyfikacje). Od 11 strony wszystkie dostępne pokemony to pokemony stworzone przez użytkownika.
   Na stronie głównej znajduje się również wyszukiwarka umożliwająca wyszukiwanie pokemonów w czasie rzeczywistym po stronie frontendu. Po naciśnięciu lewym przyciskem myszy na kartę pokemona, użytkownik zostaje przekierowany do karty szczegółów pokemona, gdzie poprzez naciśnięcie odpowiedniej ikony pokemon może zostać dodany do ulubionych lub do areny gdzie będzie toczył walki. Ponowne naciśnięcie ikony odpowiadającej "ulubiony-serce", "arena-czaszka", usuwa pokemona z danej lokalizacji i zmienia kolor ikony.
5. ULUBIONE - na tej stronie znajdują się wszystkie pokemony, które w karcie szczegółów pokemona zostały oznaczone jako "ulubione. Tak jak na stronie głównej, pokemony zawierają aktualne statystyki oraz możliwość wejścia w szczegóły pokemona poprzez naciśnięcie lewego przycisku myszy na kartę pokemona, a także dodawanie/odejmowanie go z areny i ulubionych.
6. ARENA - umożliwia prowadzenie walk między pokemonami. W arenie mogą znajdować się wyłącznie dwa pokemony. Jeżeli w arenie znajdują się dwa pokemony, przed dodaniem nowego pokemona do areny, uzytkownik musi usunąć przynajmniej jednego pokemona. Może tego dokonać poprzez wspomnianą wcześniej kartę szczegółów pokemona lub bezpośrednio w arenie. O zwycięstwie pokemona decyduje wyższa wartość: "doświadczenie x waga". Walka rozpoczyna się po naciśnięciu przycisku "WALCZ", na samym dole pojawia się komunikat o zwycięzcy oraz ilościu uzyskanych punktów doświadczenia. Po naciśnięciu przycisku opuść arenę, pokemony zostają usunięte z areny, ich statystyki zaktualizowane, a użytkownik zostaje przekierowany na stronę główną aplikacji.
7. RANKING - Ranking zawiera listę pokemonów które stoczyły już przynajmniej jedną walkę. Dodatkowo użytkownik ma możliwość filtrowania rankingu pokemonów na podstawie zwycięstw, porażek, nazwy, wzrostu, wagi, umiejętności, czy ilości doświadczenia. Sortowanie może odbywać się rosnąco lub malejąco.
8. EDYCJA - w zakładce edycja, użytkownik może edytować wszystkie dostępne pokemony. Po naciśnięciu na przycisk edytuj odpowiedniego pokemona, użytkownik zostaje przekierowany do formularza edycji pokemona. Po uzupełnieniu pól i zatwierdzeniu zmian użytkownik zostaje przekierowany do strony głównej. Od tej pory pokemon będzie posiadał nowe statystyki dostępne na wszystkich stronach. Na samej górze strony znajduje się przycisk "STWÓRZ POKEMONA", który przekierowuje użytkownika do formularza tworzenia pokemona. Analogicznie do edycji, po wypełnieniu pól użytkownik zostaje przekierowany na stronę główną, a nowe pokemony są dostępne na stronie głównej oraz w sekcji edycji pokemonów. Podczas tworzenia pokemona użytkownik ma możliwość przeglądania wszystkich obrazów pokemonów, które nie zostały wcześniej pobrane z API. Jeżeli użytkownik stworzył już wcześniej pokemona przy wykorzystaniu danego obrazu, będzie on wyszarzony i niedostępny (odpowiedni komunikat pojawi się przy próbie przesłania formularza).
9. WYLOGOWANIE UŻYTKOWNIKA - użytkownik w każdej chwili może wylogować się z aplikacji. Spowoduje to usunięcie z localStorage przeglądarki imienia użytkownika oraz informacji o zalogowaniu. Wszystkie dotychczasowe zmiany w aplikacji stają się niewidoczne, a większość funkcji oprócz przeglądania pokemonów z API niedostępna, aż do momentu ponownego zalogowania się użytkownika.
10. POWIADOMIENIA - Wszystkie zmiany lub akcje podejmowane przez użytkownika takie jak: edycja pokemonów, tworzenie pokemonów, stoczone walki, logowanie się, wylogowywanie się, rejestracja, czy próby nieautoryzowanych wejść na poszczególne sekcje, powodują wyświetlanie komunikatów notistac dla użytkownika. Dzięki temu użytkownik na bieżąco jest informowany o zmianach, sukcesach, czy problemach w poszczególnych działaniach.
11. RESPONSYWNOŚĆ - aplikacja jest responsywna zarówno na duzych urządzeniach jak laptopy i monitory komputerów jak i na tabletach, czy smartwonach. W przypadku mniejszych rozdzielczości, najbardziej charakterystyczną zmianą w stosunku do widoku desktopowego, jest zmiana układu sekcji navigacji, która nie zajmuje tak wiele miejsca dzięki zastosowaniu rozwijanego menu z navBarem.

III. KONWENCJE W APLIKACJI:

1. Konwencja nazewnictwa: Kompnenty i nazwy folderów - PascalCase, nazwy funkcji i zmiennych camelCase, wszystkie kolory i gradienty zapisane w pliku tailwind/config.js - kebab-case. Fonty, animacje, keyframes zapisane w pliku tailwind/config.js. Używanie lintera ESLint. Stosowane cudzysłowy " " lub ``.
2. Stylowanie z wykorzystaniem TAILWIND i clsx;
3. Icony pobierane z fontAwsome tworzą osobne komponenty prezentacyjne.
4. Podział komponentów:

- main.jsx (zespala aplikację App.jsx ze zmianą motywu, powiadomieniami, i maksymalną rozdzielczością aplikacji, dostarcza styli globalnych z index.css i łączy aplikację z drzewem DOM);
- App.jsx (łączy wszystkie strony i podstrony oraz nawigację aplikacji poprzez react-router-dom). Zapewnia context logowania, dzięki czemu istnieje możliwość dowolnego zarządzania stanem logowania i zachodzących zmian w zależności od stanu logowania;
- components/subpages: implementacje szablonów dla poszczególnych podstron takich jak: HomePage.jsx, Arena.jsx, Edit.jsx, Favourites.jsx, Navigation.jsx, Ranking.jsx
- components/shared: komponenty które mogą zostać wykorzystane wielokrotnie, bądź mogą współdzielić pewne fragmenty z innymi komponentami. Dzielą się na
- components/shared/other: Proste pojedyncze komponenty mające zastosowanie w wielu miejscach w aplikacji.
- component/shared/AppWrapper - komponenty wrapujące aplikację nadające motyw i maksymalną rozdzielczość dla aplikacji
- component/shared/Login - folder z Komponentami dotyczącymi formularza logowania;
- component/shared/NavigationElements - folder z komponentami wykorzystanymi do budowy nawigacji aplikacji;
- components/shared/PokemonArena - folder zawiera komponenty obsługujące podstronę Arena;
- components/shared/PokemonDetails - folder komponentów wykorzystanych do budowy karty szczegółów pokemona;
- components/shared/Edit - folder z komponentami tworzącymi stronę edycji pokemonów i tworzenia pokemonów wraz z formularzami;
- components/shared/PokemonFavouriteList - folder dla komponentów podstrony ULUBIONE;
- components/shared/PokemonList - komponenty odpowiedzialne za wyświetlanie listy pokemonów na stronie głównej, a także w zakładce ULUBIONE.
- components/shared/PokemonRanking - folder odpowiedzialny za komponenty wykorzystane do stworzenia zakładki RANKING
- components/shared/Registration - komponenty odpowiedzialne za wyświetlenie formularza rejestracyjnego dla nowego użytkownika
- context/LoginContext.jsx - context wykorzystujący customHook useLogin.js do zarządzania stanem zalogowania użytkownika oraz przekazywaniem stanu do różnych komponentów aplikacji;
- context/ThemeContext.jsx - context do zmiany motywu aplikacji jasny/ciemny pobiera aktualny stan z localStorage przeglądarki;
- hooks/useArena.jsx - umożliwia dodawanie i usuwanie pokemonów z areny, a także usuwa pokemony z areny po odbytej walce;
- hooks/useFavourite - umożliwia dodawanie i usuwanie pokemonów z podstrony ULUBIONE;
- hooks/useFetchPokemonList.jsx - umożliwia pobieranie pokemonów, które zostały porównane z zewnętrznym API https://pokeapi.co/ oraz pokemonami z db.json w tablicy updatedPokemons. W efekcie czego pokemony które zostają pobierane mają aktualne statystyki zarówno po odbytych walkach, jak i edycji. hook ten umożliwia również pobieranie nowostworzonych pokemonów. Ogólnie rzecz biorąc jest to hook który w dużej mierze odpowiedzialny jest za wszelkie pobieranie danych dotyczących pokemonów.
- hooks/useLogin - odpowiada z logowanie się do aplikacji. Dane o zalogowaniu zostają przekazane do localStorage i LoginContext;
- hooks/usePageNumber - hook powstał ze względu na ograniczenia w zapytaniach JSON_SERVER. Służy do oszacowania ogólnej liczby stron dla paginacji. Wydawało mi się to poterzebne, ponieważ należało połączyć pokemony już istniejące z pokemonami nowo stworzonymi, co wymagało połączenia danych z dwóch adresów https://pokeapi.co/ oraz localhost:3000;
- hooks/usePokemonUpdate - odpowiedzialny za dodawanie nowych pokemonów, edytowanie danych istniejących pokemonów oraz aktualizację statystyk po walkach.
- hooks/useRegistration - odpowiada za obsługę rejestracji nowego użytkownika do db.json;
- icons/ - przeznaczony dla plików jpeg, png. Aktualnie zawiera tylko logo aplikacji;

5. Do wykonywania zapytań użyto fetch.
6. Do wyświetlania powiadomień użyto notistack typu snackbar/ W przypadkach gdzie dany komponent nie może się zrenderować użyto powiadomień przy wykorzystniu komponentu Notification.jsx, który wyświetla się zamiast pożadanej treści.
7. Użyte biblioteki i narzędzia:  
   "@emotion/react": "^11.13.5",
   "@emotion/styled": "^11.13.5",
   "@fortawesome/fontawesome-free": "^6.7.1",
   "@fortawesome/free-solid-svg-icons": "^6.7.0",
   "@fortawesome/react-fontawesome": "^0.2.2",
   "@hookform/resolvers": "^3.9.1",
   "@mui/material": "^6.1.7",
   "notistack": "^3.0.1",
   "react": "^18.3.1",
   "react-confetti": "^6.1.0",
   "react-dom": "^18.3.1",
   "react-hook-form": "^7.53.2",
   "react-router-dom": "^6.28.0",
   "zod": "^3.23.8"

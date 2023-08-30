Aplikacja została napisana podążając za tutorialem https://chriscourses.com/courses/pacman/videos/create-a-pacman-game

Dodałem informację o wygranej i przegranej oraz odświerzenie strony po 5 sekundach, 50 punktów dodawane do wyniku przy kolizji z przeciwnikiem w trakcie trwania power-up.

 # Pacman clone

Aplikacja napisana w języku JavaScript z wykorzystaniem Canvas API.

Poruszanie bohaterem za pomocą klawiszy W A S D.

Wykrycie kolizji gracza z przeciwnikiem powoduje zatrzymanie gry i informację o przegranej.

Kolizja gracza z pigułkami rozłożonymi na mapie powoduje dodanie 10 punktów do ogólnego wyniku. Zebranie wszystkich pigułek powoduje zatrzymanie gry i informację o wygranej.

Kolizja gracza z pigułką power-up na 5 sekund włącza tryb "przestraszonych przeciwników", kolizja z przeciwnikiem w tym trybie podowuje usunięcie przeciwnika z planszy oraz dodanie 50 punktów do ogólnego wyniku.

Ścieżki po której poruszają się przeciwnicy wybierane są losowo na podstawie wykrywanych kolizji, nie wykrycie kolizji w danym kierunku powoduje przekazanie informacji o otwartych kierunkach i wylosowanie jednej z możliwości.

W przypadku wygranej bądż przegranej po 5 sekundach następuje odświerzenie strony.

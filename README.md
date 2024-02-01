
# Die Musikverwaltung
## Ein Projekt für das Modul Webtechnologien
## Erstellt von Robert Mederer, Patrick Schöneborn und Anke Langrehr

## Technologien
In diesem Projekt kommen die nachfolgenden Technologien zum Einsatz:

Datenbank: 
- MySQL

Backend: 
- SpringBoot
- RESTful-API
- Java
- Maven
- JPA/Hibernate
- JWT-Authentication

Frontend:
- Angular
- TypeScript
- Bootstrap 
- Angular-Video-Player

## Installation

Um das Projekt erfolgreich starten zu können, sind verschiedene Schritte notwendig. 
Diese werden nachfolgend erläutert. 

### Installation von Java
Das Projekt benötigt eine funktionsfähige Java-Version.
- über die Konsole mit dem Befehl:
    **winget install -e --id Oracle.JDK.21**
- Oder über die Java Seite: https://www.java.com/de/download/help/download_options_de.html
- Die Installation kann über den Befehlt:  **java --version**  überprüft werden.
### Installation von Maven 
Für das Build-Management ist eine lauffähige Maven-Version vorausgesetzt. 
- Eine vollständige Anleitung kann unter: **https://maven.apache.org/install.html**
- Der Download findet über folgende Seite statt: https://maven.apache.org/download.cgi
- Wir empfehlen die **apache-maven-3.9.6-src.zip** Datei.
- Maven entpacken
- EIne Konsole im Verzeichnis öffnen und folgenden Befehl ausführen **tar xzvf apache-maven-3.9.6-bin.tar.gz**
- Maven in den Systemumgebungsvariablen hinterlegen
- Die Installation kann mit **mvn --version** in der Kommandozeile überprüft werden.

Hinweis: Es kann ein Systemneustart erforderlich sein

### Installation von Node.js

Für die Verwaltung des Frontends wird Node.js verwendet. Dies ermöglicht das Ausführen verschiedener Befehle für das Framework Angular.
- Node.js wird über den Link: https://nodejs.org/en/download heruntergeladen. 
- Der Installer muss ausgeführt werden. 
- Die Installation kann mit dem Befehl **node -v** überprüft werden.

### Installation von Angular-CLI
- Nach der Installation von Node.js kann Angular installiert werden. 
- Hierfür wird in einer Konsole der Befehl: **npm install -g @angular/cli** ausgeführt.
- Die Installation kann mit dem Befehl: **ng version** überprüft werden.

### Installation von XAMPP
- Die eingesetzte Datenbank wurde zur Entwicklung mit dem Tool *XAMPP* verwaltet. 
- Ein Download kann über den Link https://www.apachefriends.org/de/download.html durchgeführt werden. 
- Grundsätzlich kann auch jede andere MySQL-Datenbank verwendet werden.


### Installation und Anlegen der Datenbank
Für das Anlegen der Datenbank kann das Skript aus dem Verzeichnis **webBackend\src\main\resources** ausgeführt werden.
Das Skript enthält Beispieldaten und legt eine entsprechende Datenbank an.

### Installation des Backends
- In dem Verzeichnis *Pfad/zum/Projekt/webBackend* muss eine Konsole geöffnet werden. 
- Danach werden in der Konsole folgende Befehle ausgeführt: 
- **mvn -clean**
- **mvn -install**
- **mvn spring-boot:run**
Durch den letzten Befehl wird das Backend gestartet und eine Verbindung zur Datenbank aufgebaut.
### Installation des Frontends
- In dem Verzeichnis *Pfad/zum/Projekt/FrontendAngular* muss eine Konsole geöffnet werden.
- Danach werden in der Konsole folgende Befehle ausgeführt: 
- **npm -install**
- **ng -serve**
Durch den letzten Befehl wird das Projekt gestartet.

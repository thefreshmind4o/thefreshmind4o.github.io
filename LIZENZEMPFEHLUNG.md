# Lizenz- und Policy-Empfehlung für das Forschungsökosystem

## Ziel
Dieses Dokument legt eine vorläufige, aber konsistente Lizenzstrategie für die geplanten Repositories fest.

## Grundsatz
Ohne Lizenz bleiben standardmäßig alle Rechte vorbehalten. Für offene Nachnutzung sollte daher pro Repository eine ausdrückliche Lizenzdatei im Root liegen.

## Empfohlene Zuordnung

### 1. psycho-semantischer-guardrail
Empfehlung: Apache-2.0

Begründung:
- geeignet für Software-Repositories
- klare Weitergaberegeln
- zusätzliche Patentklausel gegenüber MIT
- offen und kompatibel für spätere Einbindung in größere Systeme

### 2. x-matrix-kern
Empfehlung: Apache-2.0

Begründung:
- formaler Rechenkern mit möglicher Wiederverwendung in APIs, Dashboards und Bibliotheken
- permissiv, aber strukturierter als MIT

### 3. modellbibliothek-identitaet
Empfehlung: CC-BY-4.0 für inhaltliche Modell- und Textartefakte; Apache-2.0 nur dann, wenn ausführbarer Code zentral wird

Begründung:
- Theorietexte, Begriffsbibliotheken und konzeptionelle Kataloge sind eher Inhalts- als Softwareartefakte
- Creative-Commons-Lizenzen sind für Inhalte geeignet, aber nicht die Standardwahl für Software

### 4. forschungsdaten-und-schemata
Empfehlung: CC-BY-4.0 oder CC0-1.0, abhängig vom gewünschten Grad der Offenheit

Begründung:
- Daten, Schemata und Referenzobjekte sind eher Daten-/Dokumentationsartefakte als klassische Software
- CC-BY-4.0 sichert Namensnennung, CC0 maximiert Nachnutzbarkeit

### 5. thefreshmind4o.github.io
Empfehlung: Gemischtes Modell
- Codebestandteile: Apache-2.0
- Texte und erklärende Inhalte: CC-BY-4.0

Begründung:
- Portal-Repositories enthalten oft sowohl Code als auch Inhalte
- eine `LICENSE` für Code plus ein Hinweis im README für Inhaltslizenz ist praktikabel

## Praktische Entscheidungsvorlage

| Repository | Primärtyp | Lizenzvorschlag | Alternativ |
|---|---|---|---|
| psycho-semantischer-guardrail | Software | Apache-2.0 | MIT |
| x-matrix-kern | Software | Apache-2.0 | MIT |
| modellbibliothek-identitaet | Inhalt/Modell | CC-BY-4.0 | Apache-2.0 bei Codefokus |
| forschungsdaten-und-schemata | Daten/Schemata | CC-BY-4.0 | CC0-1.0 |
| thefreshmind4o.github.io | Portal/Mischform | Apache-2.0 + CC-BY-4.0 Hinweis | MIT + CC-BY-4.0 |

## Policy-Hinweise
- Jede Lizenz muss als `LICENSE` oder `LICENSE.md` im Repository-Root liegen.
- README sollte die gewählte Lizenz zusätzlich knapp nennen.
- `CITATION.cff` und `.zenodo.json` müssen dieselbe Lizenzbezeichnung konsistent führen.
- Bei Drittbibliotheken muss die Lizenzkompatibilität vor erstem Release geprüft werden.

## Offene Entscheidung
Vor endgültiger Anlage sollte entschieden werden, ob `forschungsdaten-und-schemata` eher maximal offen (CC0) oder attributionserhaltend (CC-BY-4.0) veröffentlicht werden soll.

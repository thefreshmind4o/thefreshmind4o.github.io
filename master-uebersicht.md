# Master-Übersicht – GitHub-Ökosystem

Diese Übersicht beschreibt eine modulare Zielarchitektur für ein wissenschaftlich-technisches GitHub-Ökosystem mit Fokus auf Theorieentwicklung, diagnostische Logik, Dashboards, Schemata und Publikation.

## Repository-Matrix

| Repository | Rolle | Hauptzweck | Kernformate | Automationen |
|---|---|---|---|---|
| `psycho-semantischer-guardrail` | Kernlogik | Guardrail-Logik, Modalverb-Diagnostik, Demo, Release | Python, Markdown, JSON | Python-Tests, Release-Prüfung, Zenodo-Metadaten-Check |
| `x-matrix-kern` | Meta-Modell | Achsen, Zustände, Symbolgrammatik, Mappingregeln | JSON, YAML, Python, Markdown | Schema-Validierung, Konsistenzprüfung |
| `modellbibliothek-identitaet` | Theorie | Identität, Co-Abhängigkeit, Entscheidungsmodelle, Begriffsregister | Markdown, JSON, CSV | Dokumentations-Prüfung, Link-Check |
| `ebsi-governance-dashboard` | Anwendung | FastAPI-Backend, Frontend, EBSI-Logik, Beispiel-Fälle | Python, HTML, JS, CSS, JSON | API-Smoke-Test, Schema-Validierung |
| `forschungsdaten-und-schemata` | Datenvertrag | Referenzdaten, Ereignisschemata, validierte Datensätze | JSON, CSV, Markdown | JSON-Schema-Validierung, Datenkonsistenz |
| `thefreshmind4o.github.io` | Publikation | Projektportal, Doku, DOI-/Projektseiten | HTML, Markdown, CSS, JS | GitHub Pages, Seiten-Deployment |

## Standard-Schablone pro Repository

```text
repo/
├─ README.md
├─ LICENSE
├─ CITATION.cff
├─ .zenodo.json
├─ docs/
├─ schema/
├─ beispiele/
├─ daten/
├─ tests/
├─ .github/
│  └─ workflows/
└─ src/
```

## Detailstruktur je Repository

### 1. psycho-semantischer-guardrail

```text
psycho-semantischer-guardrail/
├─ README.md
├─ LICENSE
├─ CITATION.cff
├─ .zenodo.json
├─ app.py
├─ guardrail_core.py
├─ requirements.txt
├─ tests/
│  ├─ test_guardrail_core.py
│  └─ test_modalverben.py
├─ docs/
│  ├─ axiomatik.md
│  ├─ modalverb-diagnostik.md
│  └─ beispielszenarien.md
├─ schema/
│  └─ guardrail-diagnose.schema.json
└─ .github/
   └─ workflows/
      ├─ python-tests.yml
      └─ release-pruefung.yml
```

### 2. x-matrix-kern

```text
x-matrix-kern/
├─ README.md
├─ LICENSE
├─ CITATION.cff
├─ docs/
│  ├─ achsen.md
│  ├─ symbolgrammatik.md
│  ├─ zustandslogik.md
│  └─ mappingregeln.md
├─ schema/
│  ├─ achsen.schema.json
│  ├─ marker.schema.json
│  ├─ zustand.schema.json
│  └─ visual-mapping.schema.json
├─ daten/
│  ├─ achsen.json
│  ├─ marker.json
│  └─ zustandsklassen.json
├─ src/
│  └─ x_matrix_core.py
└─ .github/
   └─ workflows/
      └─ schema-validierung.yml
```

### 3. modellbibliothek-identitaet

```text
modellbibliothek-identitaet/
├─ README.md
├─ LICENSE
├─ CITATION.cff
├─ docs/
│  ├─ identitaet.md
│  ├─ co-abhaengigkeit.md
│  ├─ wollen-sollen-modell.md
│  ├─ entscheidungslogik.md
│  └─ begriffsregister.md
├─ tabellen/
│  ├─ dimensionen.csv
│  ├─ begriffe.csv
│  └─ relationen.csv
├─ schema/
│  └─ begriffsobjekt.schema.json
└─ .github/
   └─ workflows/
      └─ dokumentations-pruefung.yml
```

### 4. ebsi-governance-dashboard

```text
ebsi-governance-dashboard/
├─ README.md
├─ LICENSE
├─ docs/
│  ├─ systemlogik.md
│  ├─ api.md
│  └─ dashboard-logik.md
├─ backend/
│  ├─ main.py
│  ├─ modelle.py
│  └─ services/
├─ frontend/
│  ├─ index.html
│  ├─ assets/
│  ├─ js/
│  └─ css/
├─ daten/
│  └─ beispiel-faelle.json
├─ schema/
│  └─ ebsi-fall.schema.json
└─ .github/
   └─ workflows/
      ├─ api-smoke-test.yml
      └─ schema-validierung.yml
```

### 5. forschungsdaten-und-schemata

```text
forschungsdaten-und-schemata/
├─ README.md
├─ LICENSE
├─ docs/
│  ├─ datenvertrag.md
│  ├─ validierungsregeln.md
│  └─ versionspolitik.md
├─ schema/
│  ├─ ereignis.schema.json
│  ├─ modellstatus.schema.json
│  └─ dashboard-input.schema.json
├─ daten/
│  ├─ referenz/
│  ├─ validiert/
│  └─ archiv/
└─ .github/
   └─ workflows/
      └─ daten-validierung.yml
```

### 6. thefreshmind4o.github.io

```text
thefreshmind4o.github.io/
├─ index.html
├─ projekte/
│  ├─ guardrail.html
│  ├─ x-matrix.html
│  └─ ebsi.html
├─ paper/
│  └─ index.html
├─ doi/
│  └─ index.html
├─ assets/
│  ├─ css/
│  ├─ js/
│  └─ img/
└─ daten/
   └─ projekte.json
```

## Empfohlene Workflow-Dateien

- `python-tests.yml`
- `schema-validierung.yml`
- `release-pruefung.yml`
- `daten-validierung.yml`
- `api-smoke-test.yml`
- `seiten-bauen.yml`

## Priorisierte Einführungsreihenfolge

1. `psycho-semantischer-guardrail`
2. `x-matrix-kern`
3. `ebsi-governance-dashboard`
4. `modellbibliothek-identitaet`
5. `forschungsdaten-und-schemata`
6. `thefreshmind4o.github.io`

## Leitprinzipien

- Ein Repository = ein klarer Systemkern
- Theorie, Rechenlogik und Darstellung getrennt halten
- Wahrheiten in Schema oder Code fixieren
- Jede veröffentlichte Version release- und DOI-fähig machen
- Deutsche Benennung für Marker, Legenden, Befehle und Modelle konsistent beibehalten

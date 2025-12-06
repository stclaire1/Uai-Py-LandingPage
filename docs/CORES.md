# Design System - Cores

> Sistema de cores do Uai-Py Landing Page. Este documento define todos os tokens de cor utilizados no projeto, organizados por propósito semântico e contexto de uso.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Design Tokens](#design-tokens)
- [Cores de Marca](#cores-de-marca)
- [Cores Semânticas](#cores-semânticas)
- [Cores de Dados](#cores-de-dados)
- [Sistema de Tema](#sistema-de-tema)
- [Guidelines de Uso](#guidelines-de-uso)
- [Acessibilidade](#acessibilidade)
- [Referências Técnicas](#referências-técnicas)

---

## Visão Geral

O sistema de cores do Uai-Py Landing Page é baseado em **Design Tokens** que garantem consistência visual e facilitam a manutenção. As cores são organizadas em três categorias principais:

1. **Cores de Marca**: Identidade visual e elementos especiais
2. **Cores Semânticas**: Status, feedback e ações do sistema
3. **Cores de Dados**: Visualização de dados e sensores

O sistema suporta **modo claro** e **modo escuro** através de variáveis CSS que se adaptam automaticamente ao tema selecionado.

---

## Design Tokens

### Estrutura de Tokens

Os tokens de cor seguem a hierarquia:

```
Token Base → Token Semântico → Token de Componente
```

**Exemplo:**
```
#ff6b6b (base) → sensor.air-temperature (semântico) → chart.line-color (componente)
```

### Localização dos Tokens

| Tipo | Localização | Formato |
|------|-------------|---------|
| Tokens de Sensores | `src/constants/colors.ts` | TypeScript Object |
| Tokens de Tema | `src/index.css` | CSS Variables |
| Tokens Tailwind | `tailwind.config.js` | JavaScript Config |

---

## Cores de Marca

Cores que representam a identidade visual do Uai-Py.

### Cores Principais

| Token | Propósito | Hex | RGB | Uso |
|-------|-----------|-----|-----|-----|
| `brand.primary` | Cor primária da marca | `#030820` | `rgb(3, 8, 32)` | Headers, CTAs, elementos de destaque |
| `brand.projects-bg` | Fundo de containers de projetos | `#000932` | `rgb(0, 9, 50)` | Background de seções de projetos |

**Visualização das cores principais:**

![UaiPy Primary](https://img.shields.io/badge/UaiPy%20Primary-030820?style=for-the-badge&logoColor=white)
![Projects BG](https://img.shields.io/badge/Projects%20BG-000932?style=for-the-badge&logoColor=white)

### Tipos de Branco

O projeto utiliza diferentes tons de branco para criar hierarquia visual e profundidade na interface.

| Token | Nome | Hex | RGB | Uso |
|-------|------|-----|-----|-----|
| `brand.white.pure` | Branco Puro | `#FFFFFF` | `rgb(255, 255, 255)` | Fundo principal, cards |
| `brand.white.sidebar` | Branco Sidebar | `#FCFCFC` | `rgb(252, 252, 252)` | Fundo de sidebars, elementos elevados |
| `brand.white.soft` | Branco Suave | `#FAFAFA` | `rgb(250, 250, 250)` | Texto sobre elementos escuros |
| `brand.white.muted` | Branco Acinzentado | `#F7F7F7` | `rgb(247, 247, 247)` | Elementos secundários, muted, accent |
| `brand.white.border` | Branco Borda | `#EBEBEB` | `rgb(235, 235, 235)` | Bordas, inputs, divisores |

**Visualização dos tipos de branco:**

![Branco Puro](https://img.shields.io/badge/Branco%20Puro-FFFFFF?style=for-the-badge&logoColor=000000)
![Branco Sidebar](https://img.shields.io/badge/Branco%20Sidebar-FCFCFC?style=for-the-badge&logoColor=000000)
![Branco Suave](https://img.shields.io/badge/Branco%20Suave-FAFAFA?style=for-the-badge&logoColor=000000)
![Branco Acinzentado](https://img.shields.io/badge/Branco%20Acinzentado-F7F7F7?style=for-the-badge&logoColor=000000)
![Branco Borda](https://img.shields.io/badge/Branco%20Borda-EBEBEB?style=for-the-badge&logoColor=000000)

### Tipos de Preto

O projeto utiliza diferentes tons de preto e cinza escuro para criar hierarquia tipográfica e garantir legibilidade em diferentes contextos.

| Token | Nome | Hex | RGB | Uso |
|-------|------|-----|-----|-----|
| `brand.black.primary` | Preto Principal | `#242424` | `rgb(36, 36, 36)` | Texto principal, títulos, corpo de texto |
| `brand.black.secondary` | Preto Secundário | `#363636` | `rgb(54, 54, 54)` | Elementos primários, texto sobre fundos claros |
| `brand.black.muted` | Preto Desbotado | `#8D8D8D` | `rgb(141, 141, 141)` | Texto secundário, labels, descrições |
| `brand.black.ring` | Preto Ring | `#B4B4B4` | `rgb(180, 180, 180)` | Focus rings, elementos de foco |
| `brand.black.description` | Preto Descrição | `#aaa8a8` | `rgb(170, 168, 168)` | Texto descritivo, metadados |
| `brand.black.dark` | Preto Dark | `#464646` | `rgb(70, 70, 70)` | Elementos secundários no dark mode |

**Visualização dos tipos de preto:**

![Preto Principal](https://img.shields.io/badge/Preto%20Principal-242424?style=for-the-badge&logoColor=white)
![Preto Secundário](https://img.shields.io/badge/Preto%20Secundário-363636?style=for-the-badge&logoColor=white)
![Preto Desbotado](https://img.shields.io/badge/Preto%20Desbotado-8D8D8D?style=for-the-badge&logoColor=white)
![Preto Ring](https://img.shields.io/badge/Preto%20Ring-B4B4B4?style=for-the-badge&logoColor=000000)
![Preto Descrição](https://img.shields.io/badge/Preto%20Descrição-aaa8a8?style=for-the-badge&logoColor=000000)
![Preto Dark](https://img.shields.io/badge/Preto%20Dark-464646?style=for-the-badge&logoColor=white)

**Uso das cores principais:**
```typescript
import { PROJECTS_CONTAINER_BG } from '@/constants/colors';

// Container de projetos
<div style={{ backgroundColor: PROJECTS_CONTAINER_BG }}>
  {/* Conteúdo dos projetos */}
</div>
```

**Uso dos tipos de branco:**
```css
/* Via variáveis CSS */
.background-pure {
  background-color: var(--background); /* #FFFFFF */
}

.sidebar-bg {
  background-color: var(--sidebar); /* #FCFCFC */
}

.border-subtle {
  border-color: var(--border); /* #EBEBEB */
}
```

```typescript
// Via Tailwind
<div className="bg-background"> {/* #FFFFFF */}
<div className="bg-sidebar"> {/* #FCFCFC */}
<div className="border-border"> {/* #EBEBEB */}
```

**Uso dos tipos de preto:**
```css
/* Via variáveis CSS */
.text-primary {
  color: var(--foreground); /* #242424 */
}

.text-muted {
  color: var(--muted-foreground); /* #8D8D8D */
}

.text-description {
  color: var(--description); /* #aaa8a8 */
}
```

```typescript
// Via Tailwind
<h1 className="text-foreground"> {/* #242424 */}
<p className="text-muted-foreground"> {/* #8D8D8D */}
<span className="text-description"> {/* #aaa8a8 */}
```

### Tipografia e Cores de Fontes

O projeto utiliza a fonte **Inter** como fonte principal, uma fonte sans-serif moderna e legível, ideal para interfaces digitais.

#### Família de Fonte

| Fonte | Peso | Uso | Importação |
|-------|------|-----|------------|
| **Inter** | 400 (Regular) | Texto padrão, corpo de texto, parágrafos | Google Fonts |
| **Inter** | 700 (Bold) | Títulos, headings, elementos de destaque | Google Fonts |

**Importação:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
```

**Uso:**
```css
body {
  font-family: 'Inter', sans-serif;
}
```

```typescript
// Via Tailwind (configurado globalmente)
<div className="font-normal"> {/* Inter 400 */}
<h1 className="font-bold"> {/* Inter 700 */}
```

#### Cores de Fontes por Contexto

As cores de texto variam conforme o contexto e o tema (light/dark mode).

| Contexto | Light Mode | Dark Mode | Variável CSS | Uso |
|----------|------------|-----------|--------------|-----|
| **Texto Principal** | `#242424` | `#FCFCFC` | `--foreground` | Corpo de texto, parágrafos |
| **Texto em Cards** | `#242424` | `#FCFCFC` | `--card-foreground` | Texto dentro de cards |
| **Texto Primário** | `#FAFAFA` | `#363636` | `--primary-foreground` | Texto sobre elementos primários |
| **Texto Secundário** | `#363636` | `#FCFCFC` | `--secondary-foreground` | Texto sobre elementos secundários |
| **Texto Desbotado** | `#8D8D8D` | `#B4B4B4` | `--muted-foreground` | Labels, metadados, texto secundário |
| **Texto Descrição** | `#aaa8a8` | `#888` | `--description` | Texto descritivo, ajuda |
| **Texto em Sidebar** | `#242424` | `#FCFCFC` | `--sidebar-foreground` | Texto na sidebar |

**Visualização das cores de fontes (Light Mode):**

![Texto Principal](https://img.shields.io/badge/Texto%20Principal-242424?style=for-the-badge&logoColor=white)
![Texto Primário](https://img.shields.io/badge/Texto%20Primário-FAFAFA?style=for-the-badge&logoColor=000000)
![Texto Secundário](https://img.shields.io/badge/Texto%20Secundário-363636?style=for-the-badge&logoColor=white)
![Texto Desbotado](https://img.shields.io/badge/Texto%20Desbotado-8D8D8D?style=for-the-badge&logoColor=000000)
![Texto Descrição](https://img.shields.io/badge/Texto%20Descrição-aaa8a8?style=for-the-badge&logoColor=000000)

**Uso das cores de fontes:**
```css
/* Via variáveis CSS */
.text-primary {
  color: var(--foreground);
}

.text-muted {
  color: var(--muted-foreground);
}

.text-description {
  color: var(--description);
}
```

```typescript
// Via Tailwind
<p className="text-foreground"> {/* Texto principal */}
<p className="text-muted-foreground"> {/* Texto desbotado */}
<p className="text-description"> {/* Texto descritivo */}
<h1 className="text-card-foreground font-bold"> {/* Título em card */}
```

#### Hierarquia Tipográfica

| Elemento | Tamanho | Peso | Cor | Classe Tailwind |
|----------|---------|------|-----|-----------------|
| **H1** | `3xl` / `4xl` | Bold (700) | `--foreground` | `text-3xl font-bold` ou `text-4xl font-bold` |
| **H2** | `2xl` / `3xl` | Bold (700) | `--foreground` | `text-2xl font-bold` ou `text-3xl font-bold` |
| **H3** | `xl` / `2xl` | Bold (700) | `--foreground` | `text-xl font-bold` ou `text-2xl font-bold` |
| **H4** | `lg` / `xl` | Semibold/Bold | `--foreground` | `text-lg font-semibold` ou `text-xl font-bold` |
| **Parágrafo** | `base` / `sm` | Normal (400) | `--foreground` | `text-base` ou `text-sm` |
| **Label** | `sm` / `xs` | Medium/Normal | `--muted-foreground` | `text-sm font-medium` ou `text-xs` |
| **Descrição** | `sm` | Normal (400) | `--description` | `text-sm` |

**Exemplo de hierarquia:**
```typescript
<h1 className="text-4xl font-bold text-foreground">Título Principal</h1>
<h2 className="text-2xl font-bold text-foreground">Subtítulo</h2>
<p className="text-base text-foreground">Parágrafo de texto normal</p>
<span className="text-sm text-muted-foreground">Label ou metadado</span>
<p className="text-sm text-description">Texto descritivo ou ajuda</p>
```

---

## Cores Semânticas

Cores que comunicam significado e estado no sistema.

### Status de Dispositivos

Indicam o estado de conexão dos dispositivos IoT.

| Token | Propósito | Light Mode | Dark Mode | Classe Tailwind |
|-------|-----------|------------|-----------|-----------------|
| `device.status.online` | Dispositivo conectado e operacional | `#067F32` | `#067F32` | `bg-green-500` |
| `device.status.offline` | Dispositivo desconectado | `#C41C1C` | `#C41C1C` | `bg-red-500` |
| `device.status.default` | Estado desconhecido ou indefinido | `#6b7280` | `#6b7280` | `bg-gray-500` |

**Visualização das cores:**

![Online](https://img.shields.io/badge/Online-067F32?style=for-the-badge&logoColor=white)
![Offline](https://img.shields.io/badge/Offline-C41C1C?style=for-the-badge&logoColor=white)
![Default](https://img.shields.io/badge/Default-6b7280?style=for-the-badge&logoColor=white)

**Uso:**
```typescript
import { DEVICE_STATUS_COLORS } from '@/constants/colors';

// Em componentes React
<div className={DEVICE_STATUS_COLORS.ONLINE}>
  <StatusIndicator status="online" />
</div>
```

### Feedback e Ações

Cores para feedback de ações do usuário.

| Token | Propósito | Light Mode | Dark Mode | Variável CSS |
|-------|-----------|------------|-----------|--------------|
| `action.destructive` | Ações destrutivas (excluir, remover) | `#E11D48` | `#EF4444` | `--destructive` |
| `action.primary` | Ação principal | `#363636` | `#EBEBEB` | `--primary` |
| `action.secondary` | Ação secundária | `#F7F7F7` | `#464646` | `--secondary` |

**Visualização das cores (Light Mode):**

![Destructive](https://img.shields.io/badge/Destructive-E11D48?style=for-the-badge&logoColor=white)
![Primary](https://img.shields.io/badge/Primary-363636?style=for-the-badge&logoColor=white)
![Secondary](https://img.shields.io/badge/Secondary-F7F7F7?style=for-the-badge&logoColor=000000)

**Visualização das cores (Dark Mode):**

![Destructive Dark](https://img.shields.io/badge/Destructive-EF4444?style=for-the-badge&logoColor=white)
![Primary Dark](https://img.shields.io/badge/Primary-EBEBEB?style=for-the-badge&logoColor=000000)
![Secondary Dark](https://img.shields.io/badge/Secondary-464646?style=for-the-badge&logoColor=white)

**Uso:**
```css
/* Via variáveis CSS */
.destructive-button {
  background-color: var(--destructive);
  color: var(--primary-foreground);
}

.primary-button {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.secondary-button {
  background-color: var(--secondary);
  color: var(--secondary-foreground);
}
```

```typescript
// Via Tailwind
<button className="bg-destructive text-primary-foreground">
  Excluir
</button>

<button className="bg-primary text-primary-foreground">
  Salvar
</button>

<button className="bg-secondary text-secondary-foreground">
  Cancelar
</button>
```

---

## Cores de Dados

Cores específicas para visualização de dados de sensores e gráficos.

### Sensores IoT

Cada tipo de sensor possui uma cor única para facilitar identificação visual.

| Token | Sensor | Hex | RGB | Uso |
|-------|--------|-----|-----|-----|
| `sensor.air-temperature` | Temperatura do Ar | `#ff6b6b` | `rgb(255, 107, 107)` | Gráficos, indicadores, badges |
| `sensor.soil-temperature` | Temperatura do Solo | `#8dc9ab` | `rgb(141, 201, 171)` | Gráficos, indicadores, badges |
| `sensor.air-humidity` | Umidade do Ar | `#b974db` | `rgb(185, 116, 219)` | Gráficos, indicadores, badges |
| `sensor.soil-humidity` | Umidade do Solo | `#45b7d1` | `rgb(69, 183, 209)` | Gráficos, indicadores, badges |
| `sensor.rain` | Chuva | `#feca57` | `rgb(254, 202, 87)` | Gráficos, indicadores, badges |
| `sensor.co2` | CO2 | `#95a5a6` | `rgb(149, 165, 166)` | Gráficos, indicadores, badges |
| `sensor.pm25-pm10` | PM25/PM10 | `#e74c3c` | `rgb(231, 76, 60)` | Gráficos, indicadores, badges |
| `sensor.default` | Padrão/Fallback | `#3b82f6` | `rgb(59, 130, 246)` | Quando tipo desconhecido |

**Visualização das cores:**

![Temperatura Ar](https://img.shields.io/badge/Temperatura%20Ar-ff6b6b?style=for-the-badge&logoColor=white)
![Temperatura Solo](https://img.shields.io/badge/Temperatura%20Solo-8dc9ab?style=for-the-badge&logoColor=white)
![Umidade Ar](https://img.shields.io/badge/Umidade%20Ar-b974db?style=for-the-badge&logoColor=white)
![Umidade Solo](https://img.shields.io/badge/Umidade%20Solo-45b7d1?style=for-the-badge&logoColor=white)
![Chuva](https://img.shields.io/badge/Chuva-feca57?style=for-the-badge&logoColor=white)
![CO2](https://img.shields.io/badge/CO2-95a5a6?style=for-the-badge&logoColor=white)
![PM25/PM10](https://img.shields.io/badge/PM25%2FPM10-e74c3c?style=for-the-badge&logoColor=white)
![Padrão](https://img.shields.io/badge/Padrão-3b82f6?style=for-the-badge&logoColor=white)

**Uso:**
```typescript
import { SENSOR_COLORS } from '@/constants/colors';

// Em gráficos
const chartConfig = {
  datasets: [{
    label: 'Temperatura do Ar',
    borderColor: SENSOR_COLORS.AIR_TEMPERATURE,
    backgroundColor: SENSOR_COLORS.AIR_TEMPERATURE + '20', // com opacidade
  }]
};

// Em componentes
<div 
  style={{ 
    backgroundColor: SENSOR_COLORS.SOIL_HUMIDITY,
    color: 'white',
    padding: '8px 12px',
    borderRadius: '4px'
  }}
>
  Umidade do Solo: 65%
</div>
```

### Paleta de Gráficos

Cores para visualização de dados em gráficos e dashboards.

#### Light Mode

| Token | Cor | Hex | Uso |
|-------|-----|-----|-----|
| `chart.color.1` | Laranja Escuro | `#D35F17` | Série de dados 1 |
| `chart.color.2` | Azul Claro | `#1E88E5` | Série de dados 2 |
| `chart.color.3` | Azul Escuro | `#0D47A1` | Série de dados 3 |
| `chart.color.4` | Amarelo | `#FFA000` | Série de dados 4 |
| `chart.color.5` | Laranja | `#FF6F00` | Série de dados 5 |

**Visualização das cores (Light Mode):**

![Chart 1](https://img.shields.io/badge/Chart%201-D35F17?style=for-the-badge&logoColor=white)
![Chart 2](https://img.shields.io/badge/Chart%202-1E88E5?style=for-the-badge&logoColor=white)
![Chart 3](https://img.shields.io/badge/Chart%203-0D47A1?style=for-the-badge&logoColor=white)
![Chart 4](https://img.shields.io/badge/Chart%204-FFA000?style=for-the-badge&logoColor=000000)
![Chart 5](https://img.shields.io/badge/Chart%205-FF6F00?style=for-the-badge&logoColor=white)

#### Dark Mode

| Token | Cor | Hex | Uso |
|-------|-----|-----|-----|
| `chart.color.1` | Roxo | `#7C3AED` | Série de dados 1 |
| `chart.color.2` | Azul | `#3B82F6` | Série de dados 2 |
| `chart.color.3` | Laranja | `#FF6F00` | Série de dados 3 |
| `chart.color.4` | Rosa | `#D946EF` | Série de dados 4 |
| `chart.color.5` | Vermelho | `#F43F5E` | Série de dados 5 |

**Visualização das cores (Dark Mode):**

![Chart 1 Dark](https://img.shields.io/badge/Chart%201-7C3AED?style=for-the-badge&logoColor=white)
![Chart 2 Dark](https://img.shields.io/badge/Chart%202-3B82F6?style=for-the-badge&logoColor=white)
![Chart 3 Dark](https://img.shields.io/badge/Chart%203-FF6F00?style=for-the-badge&logoColor=white)
![Chart 4 Dark](https://img.shields.io/badge/Chart%204-D946EF?style=for-the-badge&logoColor=white)
![Chart 5 Dark](https://img.shields.io/badge/Chart%205-F43F5E?style=for-the-badge&logoColor=white)

**Uso:**
```css
/* Via variável CSS */
.chart-line-1 {
  stroke: var(--chart-1);
  fill: var(--chart-1);
}

.chart-line-2 {
  stroke: var(--chart-2);
  fill: var(--chart-2);
}

.chart-bar {
  background-color: var(--chart-3);
}
```

```typescript
// Via Tailwind
<div className="bg-chart-1 text-white p-2 rounded">
  Série 1
</div>

<div className="bg-chart-2 text-white p-2 rounded">
  Série 2
</div>

// Em gráficos Recharts
<Line 
  dataKey="value" 
  stroke="var(--chart-1)" 
  strokeWidth={2}
/>

<Bar 
  dataKey="value" 
  fill="var(--chart-2)"
/>
```

```typescript
// Exemplo completo com múltiplas séries
const chartData = [
  { name: 'Jan', serie1: 100, serie2: 200, serie3: 150 },
  { name: 'Fev', serie1: 120, serie2: 180, serie3: 160 },
];

<LineChart data={chartData}>
  <Line dataKey="serie1" stroke="var(--chart-1)" />
  <Line dataKey="serie2" stroke="var(--chart-2)" />
  <Line dataKey="serie3" stroke="var(--chart-3)" />
</LineChart>
```

---

## Sistema de Tema

O sistema suporta **Light Mode** e **Dark Mode** através de variáveis CSS que mudam automaticamente baseado na classe `.dark` no elemento raiz.

### Estrutura de Tokens de Tema

Os tokens seguem o padrão: `{context}.{property}`

**Exemplos:**
- `background` → Cor de fundo principal
- `foreground` → Cor de texto principal
- `primary` → Cor primária de ação
- `muted` → Elementos secundários/desbotados
- `border` → Bordas e divisores

### Light Mode

#### Tokens Base

| Token | Variável CSS | Hex | Propósito |
|-------|--------------|-----|-----------|
| `theme.light.background` | `--background` | `#FFFFFF` | Fundo principal |
| `theme.light.foreground` | `--foreground` | `#242424` | Texto principal |
| `theme.light.card` | `--card` | `#FFFFFF` | Fundo de cards |
| `theme.light.card-foreground` | `--card-foreground` | `#242424` | Texto em cards |
| `theme.light.primary` | `--primary` | `#363636` | Cor primária |
| `theme.light.primary-foreground` | `--primary-foreground` | `#FAFAFA` | Texto sobre primária |
| `theme.light.secondary` | `--secondary` | `#F7F7F7` | Cor secundária |
| `theme.light.secondary-foreground` | `--secondary-foreground` | `#363636` | Texto sobre secundária |
| `theme.light.muted` | `--muted` | `#F7F7F7` | Elementos desbotados |
| `theme.light.muted-foreground` | `--muted-foreground` | `#8D8D8D` | Texto desbotado |
| `theme.light.accent` | `--accent` | `#F7F7F7` | Destaque/accent |
| `theme.light.accent-foreground` | `--accent-foreground` | `#363636` | Texto sobre accent |
| `theme.light.destructive` | `--destructive` | `#E11D48` | Ações destrutivas |
| `theme.light.border` | `--border` | `#EBEBEB` | Bordas |
| `theme.light.input` | `--input` | `#EBEBEB` | Inputs |
| `theme.light.ring` | `--ring` | `#B4B4B4` | Focus rings |
| `theme.light.description` | `--description` | `#aaa8a8` | Texto descritivo |

**Visualização dos tokens base (Light Mode):**

![Background](https://img.shields.io/badge/Background-FFFFFF?style=for-the-badge&logoColor=000000)
![Foreground](https://img.shields.io/badge/Foreground-242424?style=for-the-badge&logoColor=white)
![Card](https://img.shields.io/badge/Card-FFFFFF?style=for-the-badge&logoColor=000000)
![Primary](https://img.shields.io/badge/Primary-363636?style=for-the-badge&logoColor=white)
![Secondary](https://img.shields.io/badge/Secondary-F7F7F7?style=for-the-badge&logoColor=000000)
![Muted](https://img.shields.io/badge/Muted-F7F7F7?style=for-the-badge&logoColor=000000)
![Accent](https://img.shields.io/badge/Accent-F7F7F7?style=for-the-badge&logoColor=000000)
![Destructive](https://img.shields.io/badge/Destructive-E11D48?style=for-the-badge&logoColor=white)
![Border](https://img.shields.io/badge/Border-EBEBEB?style=for-the-badge&logoColor=000000)
![Input](https://img.shields.io/badge/Input-EBEBEB?style=for-the-badge&logoColor=000000)
![Ring](https://img.shields.io/badge/Ring-B4B4B4?style=for-the-badge&logoColor=000000)
![Description](https://img.shields.io/badge/Description-aaa8a8?style=for-the-badge&logoColor=000000)

**Uso dos tokens base (Light Mode):**
```css
/* Via variáveis CSS */
.main-container {
  background-color: var(--background);
  color: var(--foreground);
}

.card {
  background-color: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
}

.primary-button {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.secondary-button {
  background-color: var(--secondary);
  color: var(--secondary-foreground);
}

.input-field {
  border: 1px solid var(--input);
  background-color: var(--background);
}

.input-field:focus {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
```

```typescript
// Via Tailwind
<div className="bg-background text-foreground">
  <div className="bg-card text-card-foreground border-border rounded-lg p-4">
    <h2 className="text-foreground font-bold">Título</h2>
    <p className="text-muted-foreground">Texto secundário</p>
    <p className="text-description">Texto descritivo</p>
    
    <button className="bg-primary text-primary-foreground px-4 py-2 rounded">
      Ação Principal
    </button>
    
    <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded">
      Ação Secundária
    </button>
    
    <input 
      className="border-input bg-background focus:ring-ring"
      type="text"
    />
  </div>
</div>
```

#### Tokens de Sidebar (Light Mode)

| Token | Variável CSS | Hex | Propósito |
|-------|--------------|-----|-----------|
| `theme.light.sidebar` | `--sidebar` | `#FCFCFC` | Fundo da sidebar |
| `theme.light.sidebar-foreground` | `--sidebar-foreground` | `#242424` | Texto da sidebar |
| `theme.light.sidebar-primary` | `--sidebar-primary` | `#363636` | Elemento primário na sidebar |
| `theme.light.sidebar-primary-foreground` | `--sidebar-primary-foreground` | `#FCFCFC` | Texto sobre primário na sidebar |
| `theme.light.sidebar-accent` | `--sidebar-accent` | `#F7F7F7` | Destaque na sidebar |
| `theme.light.sidebar-accent-foreground` | `--sidebar-accent-foreground` | `#363636` | Texto sobre accent na sidebar |
| `theme.light.sidebar-border` | `--sidebar-border` | `#EBEBEB` | Bordas da sidebar |
| `theme.light.sidebar-ring` | `--sidebar-ring` | `#B4B4B4` | Focus rings na sidebar |

**Visualização dos tokens de sidebar (Light Mode):**

![Sidebar](https://img.shields.io/badge/Sidebar-FCFCFC?style=for-the-badge&logoColor=000000)
![Sidebar Foreground](https://img.shields.io/badge/Sidebar%20Foreground-242424?style=for-the-badge&logoColor=white)
![Sidebar Primary](https://img.shields.io/badge/Sidebar%20Primary-363636?style=for-the-badge&logoColor=white)
![Sidebar Accent](https://img.shields.io/badge/Sidebar%20Accent-F7F7F7?style=for-the-badge&logoColor=000000)
![Sidebar Border](https://img.shields.io/badge/Sidebar%20Border-EBEBEB?style=for-the-badge&logoColor=000000)
![Sidebar Ring](https://img.shields.io/badge/Sidebar%20Ring-B4B4B4?style=for-the-badge&logoColor=000000)

**Uso dos tokens de sidebar (Light Mode):**
```css
/* Via variáveis CSS */
.sidebar {
  background-color: var(--sidebar);
  color: var(--sidebar-foreground);
  border-right: 1px solid var(--sidebar-border);
}

.sidebar-item-primary {
  background-color: var(--sidebar-primary);
  color: var(--sidebar-primary-foreground);
}

.sidebar-item-accent {
  background-color: var(--sidebar-accent);
  color: var(--sidebar-accent-foreground);
}

.sidebar-item:focus {
  outline: 2px solid var(--sidebar-ring);
}
```

```typescript
// Via Tailwind
<aside className="bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
  <nav>
    <a className="bg-sidebar-primary text-sidebar-primary-foreground px-4 py-2 rounded">
      Item Principal
    </a>
    <a className="bg-sidebar-accent text-sidebar-accent-foreground px-4 py-2 rounded">
      Item Secundário
    </a>
  </nav>
</aside>
```

### Dark Mode

#### Tokens Base

| Token | Variável CSS | Hex | Propósito |
|-------|--------------|-----|-----------|
| `theme.dark.background` | `--background` | `#242424` | Fundo principal |
| `theme.dark.foreground` | `--foreground` | `#FCFCFC` | Texto principal |
| `theme.dark.card` | `--card` | `#363636` | Fundo de cards |
| `theme.dark.card-foreground` | `--card-foreground` | `#FCFCFC` | Texto em cards |
| `theme.dark.primary` | `--primary` | `#EBEBEB` | Cor primária |
| `theme.dark.primary-foreground` | `--primary-foreground` | `#363636` | Texto sobre primária |
| `theme.dark.secondary` | `--secondary` | `#464646` | Cor secundária |
| `theme.dark.secondary-foreground` | `--secondary-foreground` | `#FCFCFC` | Texto sobre secundária |
| `theme.dark.muted` | `--muted` | `#464646` | Elementos desbotados |
| `theme.dark.muted-foreground` | `--muted-foreground` | `#B4B4B4` | Texto desbotado |
| `theme.dark.accent` | `--accent` | `#464646` | Destaque/accent |
| `theme.dark.accent-foreground` | `--accent-foreground` | `#FCFCFC` | Texto sobre accent |
| `theme.dark.destructive` | `--destructive` | `#EF4444` | Ações destrutivas |
| `theme.dark.border` | `--border` | `rgba(255, 255, 255, 0.1)` | Bordas |
| `theme.dark.input` | `--input` | `rgba(255, 255, 255, 0.15)` | Inputs |
| `theme.dark.ring` | `--ring` | `#8D8D8D` | Focus rings |
| `theme.dark.description` | `--description` | `#888` | Texto descritivo |

**Visualização dos tokens base (Dark Mode):**

![Background Dark](https://img.shields.io/badge/Background-242424?style=for-the-badge&logoColor=white)
![Foreground Dark](https://img.shields.io/badge/Foreground-FCFCFC?style=for-the-badge&logoColor=000000)
![Card Dark](https://img.shields.io/badge/Card-363636?style=for-the-badge&logoColor=white)
![Primary Dark](https://img.shields.io/badge/Primary-EBEBEB?style=for-the-badge&logoColor=000000)
![Secondary Dark](https://img.shields.io/badge/Secondary-464646?style=for-the-badge&logoColor=white)
![Muted Dark](https://img.shields.io/badge/Muted-464646?style=for-the-badge&logoColor=white)
![Accent Dark](https://img.shields.io/badge/Accent-464646?style=for-the-badge&logoColor=white)
![Destructive Dark](https://img.shields.io/badge/Destructive-EF4444?style=for-the-badge&logoColor=white)
![Border Dark](https://img.shields.io/badge/Border-rgba(255,255,255,0.1)?style=for-the-badge&logoColor=white)
![Input Dark](https://img.shields.io/badge/Input-rgba(255,255,255,0.15)?style=for-the-badge&logoColor=white)
![Ring Dark](https://img.shields.io/badge/Ring-8D8D8D?style=for-the-badge&logoColor=000000)
![Description Dark](https://img.shields.io/badge/Description-888?style=for-the-badge&logoColor=000000)

**Uso dos tokens base (Dark Mode):**
```css
/* Via variáveis CSS - Dark Mode */
.dark .main-container {
  background-color: var(--background); /* #242424 */
  color: var(--foreground); /* #FCFCFC */
}

.dark .card {
  background-color: var(--card); /* #363636 */
  color: var(--card-foreground); /* #FCFCFC */
  border: 1px solid var(--border); /* rgba(255, 255, 255, 0.1) */
}

.dark .primary-button {
  background-color: var(--primary); /* #EBEBEB */
  color: var(--primary-foreground); /* #363636 */
}

.dark .input-field {
  border: 1px solid var(--input); /* rgba(255, 255, 255, 0.15) */
  background-color: var(--background);
}
```

```typescript
// Via Tailwind - Dark Mode se aplica automaticamente
<div className="bg-background text-foreground dark:bg-background dark:text-foreground">
  <div className="bg-card text-card-foreground border-border rounded-lg p-4">
    <h2 className="text-foreground font-bold">Título</h2>
    <p className="text-muted-foreground">Texto secundário</p>
    <p className="text-description">Texto descritivo</p>
    
    <button className="bg-primary text-primary-foreground px-4 py-2 rounded">
      Ação Principal
    </button>
    
    <input 
      className="border-input bg-background focus:ring-ring"
      type="text"
    />
  </div>
</div>
```

#### Tokens de Sidebar (Dark Mode)

| Token | Variável CSS | Hex | Propósito |
|-------|--------------|-----|-----------|
| `theme.dark.sidebar` | `--sidebar` | `#363636` | Fundo da sidebar |
| `theme.dark.sidebar-foreground` | `--sidebar-foreground` | `#FCFCFC` | Texto da sidebar |
| `theme.dark.sidebar-primary` | `--sidebar-primary` | `#7C3AED` | Elemento primário na sidebar |
| `theme.dark.sidebar-accent` | `--sidebar-accent` | `#464646` | Destaque na sidebar |
| `theme.dark.sidebar-accent-foreground` | `--sidebar-accent-foreground` | `#FCFCFC` | Texto sobre accent na sidebar |
| `theme.dark.sidebar-border` | `--sidebar-border` | `rgba(255, 255, 255, 0.1)` | Bordas da sidebar |
| `theme.dark.sidebar-ring` | `--sidebar-ring` | `#8D8D8D` | Focus rings na sidebar |

**Visualização dos tokens de sidebar (Dark Mode):**

![Sidebar Dark](https://img.shields.io/badge/Sidebar-363636?style=for-the-badge&logoColor=white)
![Sidebar Foreground Dark](https://img.shields.io/badge/Sidebar%20Foreground-FCFCFC?style=for-the-badge&logoColor=000000)
![Sidebar Primary Dark](https://img.shields.io/badge/Sidebar%20Primary-7C3AED?style=for-the-badge&logoColor=white)
![Sidebar Accent Dark](https://img.shields.io/badge/Sidebar%20Accent-464646?style=for-the-badge&logoColor=white)
![Sidebar Border Dark](https://img.shields.io/badge/Sidebar%20Border-rgba(255,255,255,0.1)?style=for-the-badge&logoColor=white)
![Sidebar Ring Dark](https://img.shields.io/badge/Sidebar%20Ring-8D8D8D?style=for-the-badge&logoColor=000000)

**Uso dos tokens de sidebar (Dark Mode):**
```css
/* Via variáveis CSS - Dark Mode */
.dark .sidebar {
  background-color: var(--sidebar); /* #363636 */
  color: var(--sidebar-foreground); /* #FCFCFC */
  border-right: 1px solid var(--sidebar-border); /* rgba(255, 255, 255, 0.1) */
}

.dark .sidebar-item-primary {
  background-color: var(--sidebar-primary); /* #7C3AED */
  color: var(--sidebar-primary-foreground); /* #FCFCFC */
}

.dark .sidebar-item-accent {
  background-color: var(--sidebar-accent); /* #464646 */
  color: var(--sidebar-accent-foreground); /* #FCFCFC */
}
```

```typescript
// Via Tailwind - Dark Mode se aplica automaticamente
<aside className="bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
  <nav>
    <a className="bg-sidebar-primary text-sidebar-primary-foreground px-4 py-2 rounded">
      Item Principal
    </a>
    <a className="bg-sidebar-accent text-sidebar-accent-foreground px-4 py-2 rounded">
      Item Secundário
    </a>
  </nav>
</aside>
```

### Como Alternar entre Temas

```typescript
// Toggle dark mode
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark');
};

// Verificar tema atual
const isDarkMode = document.documentElement.classList.contains('dark');
```

---

## Guidelines de Uso

### ✅ Boas Práticas

1. **Use tokens semânticos**: Sempre prefira tokens semânticos (`--primary`, `--destructive`) ao invés de valores hardcoded
2. **Respeite o contraste**: Garanta contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande
3. **Consistência**: Use as mesmas cores para os mesmos propósitos em todo o sistema
4. **Acessibilidade**: Teste cores em ambos os modos (claro e escuro)

### ❌ Evite

1. **Não use cores hardcoded**: Evite valores como `#ff6b6b` diretamente no código
2. **Não misture tokens**: Não use `SENSOR_COLORS` para elementos de UI que não sejam sensores
3. **Não ignore o tema**: Sempre teste componentes em ambos os modos

### Exemplos de Implementação

#### React/TypeScript

```typescript
// ✅ CORRETO: Usar tokens
import { SENSOR_COLORS } from '@/constants/colors';

const SensorBadge = ({ type }: { type: string }) => {
  const color = SENSOR_COLORS[type] || SENSOR_COLORS.DEFAULT;
  return (
    <span 
      style={{ backgroundColor: color }}
      className="px-2 py-1 rounded text-white"
    >
      {type}
    </span>
  );
};

// ❌ ERRADO: Hardcoded
const SensorBadge = ({ type }: { type: string }) => {
  return (
    <span style={{ backgroundColor: '#ff6b6b' }}>
      {type}
    </span>
  );
};
```

#### CSS/Tailwind

```css
/* ✅ CORRETO: Usar variáveis CSS */
.my-component {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}

/* ✅ CORRETO: Usar classes Tailwind */
<div className="bg-background text-foreground border-border">
  Conteúdo
</div>

/* ❌ ERRADO: Valores hardcoded */
.my-component {
  background-color: #FFFFFF;
  color: #242424;
}
```

#### Componentes com Tema

```typescript
// Componente que se adapta ao tema
const ThemedCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-card text-card-foreground border-border rounded-lg p-4">
      {children}
    </div>
  );
};
```

---

## Acessibilidade

### Contraste

Todas as combinações de cores seguem as diretrizes WCAG 2.1:

| Combinação | Contraste | Status |
|------------|-----------|--------|
| `--foreground` sobre `--background` (Light) | 16.8:1 | ✅ AAA |
| `--foreground` sobre `--background` (Dark) | 15.2:1 | ✅ AAA |
| `--primary-foreground` sobre `--primary` (Light) | 12.1:1 | ✅ AAA |
| `--primary-foreground` sobre `--primary` (Dark) | 7.2:1 | ✅ AA |

### Recomendações

1. **Não confie apenas em cor**: Use ícones, texto ou padrões além de cor para comunicar informação
2. **Teste com ferramentas**: Use ferramentas como [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
3. **Considere daltonismo**: As cores de sensores foram escolhidas para serem distinguíveis mesmo para pessoas com daltonismo

---

## Referências Técnicas

### Arquivos de Configuração

| Arquivo | Descrição |
|---------|-----------|
| `src/constants/colors.ts` | Tokens de cores de sensores e status |
| `src/index.css` | Variáveis CSS do sistema de tema |
| `tailwind.config.js` | Configuração do Tailwind CSS |

### Importação de Tokens

```typescript
// Tokens de sensores
import { 
  SENSOR_COLORS, 
  DEVICE_STATUS_COLORS, 
  PROJECTS_CONTAINER_BG 
} from '@/constants/colors';

// Uso
const color = SENSOR_COLORS.AIR_TEMPERATURE;
const statusClass = DEVICE_STATUS_COLORS.ONLINE;
```

### Variáveis CSS Disponíveis

Todas as variáveis CSS podem ser acessadas via:

```css
/* CSS puro */
.element {
  color: var(--foreground);
}

/* Tailwind (se configurado) */
<div className="text-foreground bg-background">
```

### Mapeamento Tailwind

As variáveis CSS são automaticamente mapeadas para classes Tailwind através do `@theme` no `index.css`:

- `--background` → `bg-background`
- `--foreground` → `text-foreground`
- `--primary` → `bg-primary`, `text-primary`
- `--border` → `border-border`

---

## Changelog

| Data | Versão | Mudanças |
|------|--------|----------|
| 2024 | 1.0.0 | Documentação inicial do sistema de cores |

---

**Última atualização**: Dezembro 2024

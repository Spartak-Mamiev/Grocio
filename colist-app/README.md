# CoList – Shared Grocery App

A real-time shared grocery list application built with React. It allows couples and roommates to collaboratively manage household shopping with instant updates and secure list sharing.

## The Problem

Managing shared grocery lists in households is often fragmented across notes apps, messaging apps, or paper lists. CoList provides a real-time, structured, and collaborative solution.

## Stack

- **React 19** with Vite
- **React Router** for client-side routing
- **CSS Modules** for scoped component styling
- **react-icons** for iconography
- **Supabase** (planned backend)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── global.css              # Design tokens (colors, typography, radius)
├── App.css                 # Global reset & base styles
├── App.jsx                 # Router & route definitions
├── main.jsx                # Entry point
├── components/
│   ├── login/              # Login page
│   ├── signUpPage/         # Sign up page
│   ├── mainPage/           # Dashboard with list overview
│   ├── listPage/           # Individual list view with items
│   ├── members/            # Member management page
│   ├── settings/           # User settings page
│   └── ui/                 # Reusable UI components
│       ├── avatar/         # User avatar circle
│       ├── button/         # Button with variants & sizes
│       ├── header/         # App header with nav icons
│       ├── input/          # Form input with optional label
│       ├── item/           # Grocery list item with checkbox
│       ├── list/           # List card (links to list page)
│       ├── member/         # Member row with remove action
│       └── modal/          # Dialog overlay with form
```

## Routes

| Path        | Page       | Description                                 |
| ----------- | ---------- | ------------------------------------------- |
| `/`         | MainPage   | Dashboard showing all lists                 |
| `/login`    | LoginPage  | Email + password login                      |
| `/signup`   | SignUpPage | Registration form                           |
| `/list`     | ListPage   | Grocery list with active & completed items  |
| `/members`  | Members    | Member list with invite modal               |
| `/settings` | Settings   | Profile, appearance, notifications, account |

## Design System

### Colors

Defined in `global.css` as CSS custom properties with light/dark mode support via `prefers-color-scheme`.

| Token                    | Light                | Dark                 |
| ------------------------ | -------------------- | -------------------- |
| `--color-primary`        | `rgb(76, 175, 80)`   | `rgb(76, 175, 80)`   |
| `--color-background`     | `rgb(247, 248, 247)` | `#121212`            |
| `--color-surface`        | `rgb(255, 255, 255)` | `rgb(30, 30, 30)`    |
| `--color-border`         | `rgb(230, 232, 230)` | `rgb(60, 60, 60)`    |
| `--color-text-primary`   | `rgb(29, 29, 31)`    | `rgb(255, 255, 255)` |
| `--color-text-secondary` | `rgb(110, 110, 115)` | `rgb(179, 179, 179)` |
| `--color-error`          | `rgb(229, 72, 77)`   | `rgb(229, 72, 77)`   |

### Typography

| Token                     | Value |
| ------------------------- | ----- |
| `--font-size-large-title` | 34px  |
| `--font-size-title`       | 24px  |
| `--font-size-section`     | 18px  |
| `--font-size-body`        | 16px  |
| `--font-size-caption`     | 12px  |
| `--font-weight-bold`      | 700   |
| `--font-weight-semibold`  | 600   |
| `--font-weight-regular`   | 400   |

### Border Radius

| Token             | Value |
| ----------------- | ----- |
| `--radius-small`  | 12px  |
| `--radius-medium` | 14px  |
| `--radius-large`  | 16px  |
| `--radius-modal`  | 24px  |

## UI Components

### Button

```jsx
import Button from '../ui/button/Button';

<Button
  variant="primary"
  size="large"
  fullWidth
  onClick={handleClick}
>
  Submit
</Button>;
```

| Prop        | Type     | Default     | Options                                                              |
| ----------- | -------- | ----------- | -------------------------------------------------------------------- |
| `variant`   | string   | `"primary"` | `primary`, `secondary`, `ghost`, `transparent`, `logout`, `modalBtn` |
| `size`      | string   | `"medium"`  | `small`, `medium`, `large`                                           |
| `fullWidth` | boolean  | `false`     | —                                                                    |
| `disabled`  | boolean  | `false`     | —                                                                    |
| `type`      | string   | `"button"`  | `button`, `submit`                                                   |
| `onClick`   | function | —           | —                                                                    |

### Input

```jsx
import Input from '../ui/input/Input';

<Input
  type="email"
  label="Email"
  labelFor="email"
  id="email"
  required
/>;
```

| Prop            | Type   | Default  | Description                                                       |
| --------------- | ------ | -------- | ----------------------------------------------------------------- |
| `type`          | string | `"text"` | Any HTML input type                                               |
| `label`         | string | —        | Label text (only renders when provided)                           |
| `labelFor`      | string | —        | Matches the input's `id`                                          |
| `...otherProps` | —      | —        | Forwarded to `<input>` (`placeholder`, `required`, `value`, etc.) |

### Header

```jsx
import Header from '../ui/header/Header';

<Header
  showBack
  showSettings={false}
>
  Settings
</Header>;
```

| Prop           | Type    | Default | Description                           |
| -------------- | ------- | ------- | ------------------------------------- |
| `showMenu`     | boolean | `true`  | Show hamburger menu link              |
| `showSettings` | boolean | `true`  | Show settings gear link               |
| `showBack`     | boolean | `false` | Show back arrow (uses `navigate(-1)`) |

### Modal

```jsx
import Modal from '../ui/modal/Modal';

{
  isOpen && (
    <Modal
      listName="Edit Item"
      cta="Update the item name"
      variant="enabled"
      type="text"
      value="Milk"
      mainBtnName="Save"
      onClose={() => setIsOpen(false)}
    />
  );
}
```

| Prop          | Type     | Description                                                 |
| ------------- | -------- | ----------------------------------------------------------- |
| `listName`    | string   | Modal title                                                 |
| `cta`         | string   | Description text below title                                |
| `variant`     | string   | `"enabled"` (visible) or `"disabled"` (hidden) for CTA text |
| `type`        | string   | Input type                                                  |
| `value`       | string   | Default input value                                         |
| `mainBtnName` | node     | Primary button label (string or JSX)                        |
| `onClose`     | function | Called on overlay click, close button, or cancel            |

### Avatar

```jsx
<Avatar variant="large">Y</Avatar>
```

| Prop      | Type   | Default     | Description                  |
| --------- | ------ | ----------- | ---------------------------- |
| `variant` | string | `"primary"` | CSS class for sizing/styling |

### Item

```jsx
<Item
  name="Milk"
  addedBy="Added by you"
  onClick={handleEdit}
/>
```

Renders as `<li>` — must be placed inside a `<ul>`.

### List

```jsx
<List
  name="Dinner"
  creator="You"
/>
```

Renders as a `<Link to="/list">` card.

### Member

```jsx
<Member
  name="You"
  email="you@email.com"
/>
```

## Conventions

- **CSS Modules** for all component styles (`.module.css`)
- **Design tokens** via CSS custom properties in `global.css`
- Import styles as `styles` (plural) from CSS modules
- Reusable components live in `src/components/ui/`
- Page components live in `src/components/{pageName}/`
- Use `variant` props to switch visual styles
- Icon-only buttons must include `aria-label`

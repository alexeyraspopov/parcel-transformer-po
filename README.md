# `parcel-transformer-po`

Parcel v2 transformer that allows importing `.po` files as compiled JSON.

## Usage

Install the transformer

```
npm install parcel-transformer-po
```

Add the transformer to Parcel config

```json
{
  "transformers": {
    "*.po": ["parcel-transformer-po"]
  }
}
```

Import `.po` files from JavaScript code

```javascript
import uk from './locales/uk.po';
import { addLocale } from 'ttag';

addLocale('uk', uk);
```

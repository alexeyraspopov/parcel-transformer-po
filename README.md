# `parcel-transformer-po`

Parcel v2 transformer that allows importing `.po` files as compiled JSON.

```javascript
import uk from './locales/uk.po';
import { addLocale } from 'ttag';

addLocale('uk', uk);
```

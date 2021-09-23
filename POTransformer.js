let { Transformer } = require('@parcel/plugin');
let gtp = require('gettext-parser');

module.exports = new Transformer({
  async transform({ asset }) {
    let code = await asset.getCode();
    let po = gtp.po.parse(code, 'utf-8');
    asset.type = 'js';
    asset.setCode(`module.exports = ${JSON.stringify(po, null, 2)};`);
    return [asset];
  },
});

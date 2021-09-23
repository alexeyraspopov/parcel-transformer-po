let { Transformer } = require('@parcel/plugin');
let gtp = require('gettext-parser');

module.exports = new Transformer({
  async transform({ asset }) {
    let code = await asset.getCode();
    let po = gtp.po.parse(code);
    asset.type = 'js';
    asset.setCode(`module.exports = JSON.parse(${JSON.stringify(po)});`);
    return [asset];
  },
});

'use strict';

const { find } = require('lodash');

const alternateNames = [
  { name: 'a coruña', alternate: ['la coruña'] },
  { name: 'alacant/alicante', alternate: ['alacant', 'alicante'] },
  { name: 'áraba/álava', alternate: ['araba', 'álava'] },
  { name: 'bizkaia/vizcaya', alternate: ['bizkaia', 'vizcaya'] },
  { name: 'castelló/castellón', alternate: ['castelló', 'castellón'] },
  { name: 'gipuzkoa/guipúzcoa', alternate: ['gipuzkoa', 'guipúzcoa'] },
  { name: 'valència/valencia', alternate: ['valència', 'valencia'] },
  { name: 'cataluña', alternate: ['barcelona', 'gerona', 'lérida', 'tarragona', 'badalona'] }
];

module.exports = (city) => {
  const alternateName = find(alternateNames, names => names.alternate.includes(city));
  return alternateName ? alternateName.name : null;
}
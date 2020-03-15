'use strict';

module.exports = ({ city, diagnosed, active, cured, deceased, text }) => {
  const that = {};

  that.city = () => city;
  that.diagnosed = () => diagnosed;
  that.active = () => active;
  that.cured = () => cured;
  that.deceased = () => deceased;
  that.text = () => text;

  return that;
};
